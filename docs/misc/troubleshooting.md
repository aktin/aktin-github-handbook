# Fehlerbehebung

## DWH-Manager zeigt Fehler 404

### Fehlerbild

Beim Aufruf des DWH-Managers unter `http://<SERVER-IP>/aktin/admin` erscheint im Browser eine leere Seite oder eine Standard-Fehlermeldung des Servers: `404 - Not Found`. Setzen Sie für `<SERVER-IP>` die IP-Adresse oder den Hostnamen Ihres DWH-Servers ein.

### Ursache

Der WildFly-Applikationsserver läuft zwar, aber die AKTIN-Anwendung (dwh-j2ee-{{ $theme.versions.dwh }}.ear) wurde nicht erfolgreich gestartet (deployed). Dies liegt oft an fehlenden Datenbankverbindungen oder einer fehlerhaften Konfiguration beim Start.

### Lösung

1. Prüfen Sie, ob WildFly läuft:

   ```bash
   systemctl status wildfly
   ```

2. Prüfen Sie die Log-Datei auf Fehler beim Deployment:

   ```bash
   grep "ERROR" /var/log/wildfly/server.log | tail -n 20
   ```

3. Falls die Datenbank nicht erreichbar war, starten Sie WildFly neu:

   ```bash
   systemctl restart wildfly
   ```

### Kontrolle

Warten Sie ca. 60 Sekunden nach dem Neustart und laden Sie die Seite im Browser neu. Das Login-Fenster sollte nun erscheinen.

## DWH: Anfragen führen zu Absturz

### Fehlerbild

Bei einer Anfrage an das DWH stürzt WildFly ab bzw. die Anfrage kann nicht verarbeitet werden.

### Ursache

Fehlerhafte Einträge in den Tabellen `broker_requests`, `broker_query_rules` und `request_action_log` der AKTIN-Datenbank.

### Lösung

Führen Sie die folgenden Befehle als root aus.

::: danger
Schritt 2 löscht alle Einträge der betroffenen Tabellen. Führen Sie Schritt 1 vollständig aus, bevor Sie fortfahren.
:::

1. WildFly stoppen und Datenbank sichern:

   ```bash
   systemctl stop wildfly
   su - postgres
   pg_dump -d aktin | gzip > /var/tmp/aktin_db.sql.gz
   ```

2. Betroffene Tabellen leeren:

   ```bash
   psql -d aktin -c 'TRUNCATE aktin.broker_requests'
   psql -d aktin -c 'TRUNCATE aktin.broker_query_rules'
   psql -d aktin -c 'TRUNCATE aktin.request_action_log'
   ```

3. WildFly starten:

   ```bash
   logout
   systemctl start wildfly
   ```

### Kontrolle

Warten Sie kurz, bis WildFly vollständig gestartet ist, und führen Sie anschließend die Anfrage erneut aus.

## DWH-Aktualisierung 1.6: Abhängigkeit von PostgreSQL

### Fehlerbild

Bei der Aktualisierung auf DWH 1.6 unter Ubuntu 22 schlägt die Installation aufgrund einer inkompatiblen `postgresql-common`-Version fehl:

```text
packages have unmet dependencies:
postgresql-14: Depends: postgresql-common (<= 229)
but 214ubuntu0.1 is to be installed
```

### Ursache

Das DWH-Paket benötigt eine bestimmte PostgreSQL-Version, die über die Standard-Paketquellen von Ubuntu nicht verfügbar ist.

### Lösung

Führen Sie die folgenden Befehle als root aus.

1. PostgreSQL-Repository hinzufügen:

   ```bash
   curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
   sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
   apt update
   ```

2. PostgreSQL 14 installieren:

   ```bash
   apt install postgresql-14
   ```

3. DWH-Aktualisierung manuell durchführen:

   ```bash
   apt install --only-upgrade aktin-notaufnahme-i2b2
   apt install --only-upgrade aktin-notaufnahme-updateagent
   apt install --only-upgrade aktin-notaufnahme-dwh
   ```

4. Verbindung zum Update-Agent prüfen:

   ```bash
   nc -w 2 127.0.0.1 1002
   ```

5. Falls erforderlich, WildFly neu starten:

   ```bash
   systemctl restart wildfly
   ```

### Kontrolle

Prüfen Sie anschließend, ob das DWH wieder erreichbar ist und die gewünschte Version installiert wurde.

## DWH-Aktualisierung 1.6: Verbindungs-Timeout zum AKTIN-Broker

### Fehlerbild

In seltenen Fällen kann es bei der Aktualisierung auf DWH 1.6 zu Verbindungsproblemen mit dem AKTIN-Broker (`ConnectionTimeout`) kommen. Per Browser oder `curl` aus dem WildFly-Server kann der AKTIN-Broker allerdings abgerufen werden (`https://aktin-broker.klinikum.rwth-aachen.de/broker/status`). Der Fehler ist im WildFly-Server-Log nachvollziehbar.

### Ursache

Da der AKTIN-Broker mit Browser und `curl` erreichbar ist, können Probleme mit der Firewall ausgeschlossen werden. Aufgrund der Seltenheit des Fehlers wäre ein lokales Konfigurationsproblem denkbar. Änderungen in den Repositories [debian-i2b2-pkg](https://github.com/aktin/debian-i2b2-pkg) und [debian-dwh-pkg](https://github.com/aktin/debian-dwh-pkg) sowie Aktualisierungen von Abhängigkeiten könnten für den Fehler verantwortlich sein. Eine eindeutige Ursache konnte nicht identifiziert werden.

### Lösung

TODO

### Kontrolle

TODO

## DWH verliert regelmäßig Kontakt zum AKTIN-Broker

### Fehlerbild

Der AKTIN-Broker verzeichnet keine Importe einer Klinik mehr, obwohl die Klinik weiterhin Fälle importiert. Ein Neustart des WildFly-Servers der Klinik behebt das Problem nur vorübergehend.

### Ursache

Die Firewall blockiert die Verbindung des WildFly-Servers zum AKTIN-Broker. Durch wiederholten Verbindungsaufbau und Abbruch durch die Firewall füllt sich der Connection Pool mit unbrauchbaren Verbindungen, bis dieser voll ist.

Ob dieser Fehler vorliegt, kann über die Logs nachvollzogen werden. Führen Sie die folgenden Schritte als root aus.

1. JBoss CLI öffnen:

   ```bash
   ./opt/wildfly/bin/jboss-cli.sh
   ```

2. Datasource-Statistiken aktivieren (alternativ auch manuell in der `standalone.xml` möglich):

   ```text
   /subsystem=datasources/data-source=AktinDS:write-attribute(name=statistics-enabled, value=true)
   :reload
   ```

3. Status des Connection Pools prüfen:

   ```text
   /subsystem=datasources/data-source=AktinDS/statistics=pool:read-resource(include-runtime=true)
   ```

Die Ausgabe enthält unter anderem folgende Angaben:

| Wert | Bedeutung |
|---|---|
| `ActiveCount` | Verbindungen in Benutzung |
| `AvailableCount` | freie Verbindungen |
| `TimedOut` | Anzahl der Verbindungsanfragen mit Timeout |

### Lösung

Die Klinik muss die Einstellungen der Firewall anpassen, sodass die Verbindung zum AKTIN-Broker nicht blockiert wird. Anschließend muss der Connection Pool geleert werden.

### Kontrolle

TODO

## Automatisierte DWH-Mails: falsche IP-Adresse

### Fehlerbild

Bei der Aktualisierung von DWH 1.5 auf DWH 1.6 wird ein neues Netzwerk-Interface angelegt, das meist `docker0` heißt. Dieses Interface mit eigener IP-Adresse wird künftig als Host-IP erkannt und in den automatisierten Mails versendet, ist jedoch kein gültiger Pfad.

### Ursache

Die lokalen DWH-Instanzen senden den Betreibenden automatisierte E-Mails, beispielsweise wenn eine neue Anfrage aussteht. Die E-Mail enthält einen Link, der direkt zur betroffenen Anfrage im DWH-Manager führt. Dieser Link benötigt die IP-Adresse der DWH-Instanz, die aus dem Host ermittelt wird. Dabei wird das zuletzt angelegte Netzwerk-Interface und dessen IP-Adresse als Host-IP verwendet.

### Lösung

Löschen Sie das Netzwerk-Interface als root:

```bash
systemctl stop docker
ip link delete docker0
```

### Kontrolle

TODO

## Firewall-Probleme: Proxy

### Fehlerbild

Das DWH kann keine Verbindung zum AKTIN-Broker herstellen, obwohl die Firewall vermeintlich korrekt konfiguriert ist.

### Ursache

Möglicherweise fehlt die Proxy-Konfiguration in den JVM-Startoptionen von WildFly.

### Lösung

1. Verbindung zum AKTIN-Broker vom DWH aus über die Testseite prüfen: `http://<SERVER-IP>/aktin/admin/plain/test.html`. Setzen Sie für `<SERVER-IP>` die IP-Adresse oder den Hostnamen Ihres DWH-Servers ein.

2. Erreichbarkeit des AKTIN-Brokers von einem Rechner im Kliniknetz prüfen: `https://broker.aktin.org/broker/status` oder `https://aktin-broker.klinikum.rwth-aachen.de/status`.

3. Ist der AKTIN-Broker vom Rechner im Kliniknetz erreichbar, vom DWH jedoch nicht, überprüfen Sie die Proxy-Konfiguration in den JVM-Startoptionen des WildFly-Startskripts und ergänzen Sie diese bei Bedarf.

### Kontrolle

Rufen Sie die Testseite des DWH erneut auf. Die Verbindung zum AKTIN-Broker sollte nun hergestellt werden können.

## DWH-Installation: Ubuntu 24.04 LTS

### Fehlerbild

Bei der Installation des DWH unter Ubuntu 24.04 LTS schlägt die Paketinstallation aufgrund fehlender Abhängigkeiten fehl.

### Ursache

Die Pakete `postgresql-12` und `python3-unicodecsv` sind unter Ubuntu 24.04 nicht verfügbar.

### Lösung

#### Variante 1: Manuelle Installation des DWH-Pakets

1. DWH-Paket (Debian-Paket) manuell herunterladen.
2. Die fehlerhafte Abhängigkeit `python3-unicodecsv` aus den Paketanforderungen entfernen.
3. Das angepasste Debian-Paket manuell installieren.

#### Variante 2: Installation über die Paketverwaltung

Führen Sie die folgenden Befehle als root aus.

1. PostgreSQL 16 installieren:

   ```bash
   apt install postgresql-16
   ```

2. i2b2-Paket installieren:

   ```bash
   apt install aktin-notaufnahme-i2b2
   ```

3. DWH-Paket installieren:

   ```bash
   apt install aktin-notaufnahme-dwh --ignore-missing
   ```

### Kontrolle

Prüfen Sie, ob die Installation erfolgreich abgeschlossen wurde und das DWH ordnungsgemäß startet.

## i2b2-Login-Probleme

### Fehlerbild

Die Anmeldung in i2b2 ist möglich, im DWH-Manager allerdings nicht.

### Ursache

Dem Benutzerkonto fehlen die Admin-Berechtigungen.

### Lösung

Setzen Sie in der Benutzerverwaltung das Attribut `admin` des betroffenen Benutzerkontos auf `true`.

### Kontrolle

Melden Sie sich erneut im DWH-Manager an.

## Monatsbericht: Abnormal Termination Exception

### Fehlerbild

Der Generierungsprozess des Monatsberichts bricht ab. Das Log zeigt eine `Abnormal Termination Exception` im Zusammenhang mit `Rscript`.

### Ursache

Das R-Paket `tidyverse` ist nicht korrekt installiert.

### Lösung

Führen Sie die folgenden Schritte als root aus.

1. R-Konsole öffnen:

   ```bash
   R
   ```

2. Installation von `tidyverse` prüfen:

   ```r
   library("tidyverse")
   ```

3. Falls Fehler auftreten, `tidyverse` neu installieren:

   ```r
   remove.packages("tidyverse")
   install.packages("tidyverse")
   ```

4. Falls die Installation fehlschlägt, benötigte Systembibliotheken installieren. Verlassen Sie dazu die R-Konsole:

   ```r
   q()
   ```

   Führen Sie anschließend folgenden Befehl aus:

   ```bash
   apt install libfontconfig1-dev libharfbuzz-dev libfribidi-dev libfreetype6-dev libpng-dev libtiff5-dev libjpeg-dev
   ```

   Öffnen Sie danach R erneut und installieren Sie `tidyverse` wie in Schritt 3 neu.

5. WildFly neu starten:

   ```bash
   systemctl restart wildfly
   ```

6. Falls die Installation weiterhin fehlschlägt, prüfen Sie, ob die Firewall den Zugriff auf das CRAN-Repository blockiert oder ob ein anderes Repository konfiguriert werden muss.

### Kontrolle

Prüfen Sie die Installation von `tidyverse`. Erstellen Sie anschließend den Monatsbericht erneut.

## Monatsbericht: Patient ohne ID

### Fehlerbild

Der Generierungsprozess des Monatsberichts bricht ab. Das Log zeigt: `java.lang.NullPointerException: Patient w/o ID`

### Ursache

Es wurden Einträge aus der Datenbank gelöscht, während das DWH noch aktiv war. Dadurch wurde die Löschung nicht abgeschlossen. Eine Tabelle enthält noch Daten, die bereits gelöschte Daten referenzieren.

### Lösung

Löschen Sie mit dem Skript `delete_encounter_from_dwh.sh` aus dem Repository [aktin-scripts](https://github.com/aktin/aktin-scripts.git) alle Einträge aus dem Zeitraum der zuvor gelöschten Daten. Importieren Sie anschließend den gesamten gelöschten Zeitraum erneut.

### Kontrolle

TODO

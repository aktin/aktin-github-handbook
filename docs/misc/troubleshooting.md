# Fehlerbehebung

## Admin-Konsole zeigt Fehler 404

**🔴 Fehlerbild**

Beim Aufruf der Admin-Oberfläche unter `http://<server>/aktin/admin` erscheint im Browser eine leere Seite oder eine
Standard-Fehlermeldung des Servers: **404 - Not Found**

**❓ Ursache**

Der Wildfly-Applikationsserver läuft zwar, aber die AKTIN-Anwendung (dwh-j2ee-{{ $theme.versions.dwh }}.ear) wurde nicht
erfolgreich gestartet (deployed). Dies liegt oft an fehlenden Datenbankverbindungen oder einer fehlerhaften
Konfiguration beim Start.

**✅ Lösung**

1. Prüfen Sie, ob Wildfly läuft:
   ```bash
   systemctl status wildfly
   ```

2. Prüfen Sie die Log-Datei auf Fehler beim Deployment:
   ```bash
   grep "ERROR" /var/log/wildfly/server.log | tail -n 20
   ```

3. Falls die Datenbank nicht erreichbar war, starten Sie Wildfly neu:
   ```bash
   systemctl restart wildfly
   ```

**🔎 Kontrolle**

Warten Sie ca. 60 Sekunden nach dem Neustart und laden Sie die Seite im Browser neu. Das Login-Fenster sollte nun
erscheinen.

## DWH: Anfragen führen zu Absturz

**🔴 Fehlerbild**

Bei einer Anfrage an das DWH stürzt Wildfly ab bzw. die Anfrage kann nicht verarbeitet werden.

**❓ Ursache**

Fehlerhafte Einträge in den Tabellen `broker_requests`, `broker_query_rules` und `request_action_log` der
AKTIN-Datenbank.

**✅ Lösung**

1. **Wildfly stoppen und Datenbank sichern:**
   ```bash
   systemctl stop wildfly
   su - postgres
   pg_dump -d aktin | gzip > /var/tmp/aktin_db.sql.gz
   ```

2. **Betroffene Tabellen leeren:**
   ```bash
   psql -d aktin -c 'TRUNCATE aktin.broker_requests'
   psql -d aktin -c 'TRUNCATE aktin.broker_query_rules'
   psql -d aktin -c 'TRUNCATE aktin.request_action_log'
   ```

3. **Wildfly starten:**
   ```bash
   logout
   systemctl start wildfly
   ```

**🔎 Kontrolle**

Warten Sie kurz, bis Wildfly vollständig gestartet ist, und führen Sie anschließend die Anfrage erneut aus.

## DWH Update 1.6: Abhängigkeit von PostgreSQL

**🔴 Fehlerbild**

Beim Update auf DWH 1.6 unter Ubuntu 22 schlägt die Installation aufgrund einer inkompatiblen `postgresql-common`
-Version fehl:

```text
packages have unmet dependencies:
postgresql-14: Depends: postgresql-common (<= 229)
but 214ubuntu0.1 is to be installed
```

**❓ Ursache**

Das DWH-Paket benötigt eine bestimmte PostgreSQL-Version, die über die Standard-Ubuntu-Paketquellen nicht verfügbar ist.

**✅ Lösung**

1. **PostgreSQL-Repository hinzufügen:**
   ```bash
   curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
   sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
   sudo apt update
   ```

2. **PostgreSQL 14 installieren:**
   ```bash
   sudo apt install postgresql-14
   ```

3. **DWH-Update manuell durchführen:**
   ```bash
   sudo -i
   apt-get --only-upgrade install aktin-notaufnahme-i2b2
   apt-get --only-upgrade install aktin-notaufnahme-updateagent
   apt-get --only-upgrade install aktin-notaufnahme-dwh
   ```

4. **Verbindung zum Update-Agent prüfen:**
   ```bash
   nc -w 2 127.0.0.1 1002
   ```

5. **Falls erforderlich, Wildfly neu starten:**dd
   ```bash
   service wildfly restart
   ```

**🔎 Kontrolle**

Prüfen Sie anschließend, ob das DWH wieder erreichbar ist und die gewünschte Version installiert wurde.

## DWH Update 1.6: Broker Connection Timeout

**🔴 Fehlerbild**

In seltenen Fällen kann es beim Update auf DWH 1.6 zu Verbindungsproblemen mit dem Broker (`ConnectionTimeout`) kommen.
Per Browser oder Curl in Wildfly kann der Broker allerdings abgerufen werden
(`https://aktin-broker.klinikum.rwth-aachen.de/broker/status`). Der Fehler ist im Wildfly Server Log nachvollziehbar.

**❓ Ursache**

Aufgrund der Erreichbarkeit mit Browser und Curl können Firewall Probleme ausgeschlossen werden. Aufgrund der Seltenheit
des Fehlers wäre ein lokales Konfigurationsproblem denkbar. Ändernden in den Repositories
[debian-i2b2-pkg](https://github.com/aktin/debian-i2b2-pkg) und
[debian-dwh-pkg](https://github.com/aktin/debian-dwh-pkg) sowie Updates von Dependencies könnten für den Fehler
verantwortlich sein. Eine eindeutige Ursache konnte nicht identifiziert werden.

**✅ Lösung**

TODO

**🔎 Kontrolle**

TODO

## DWH verliert regelmäßig Kontakt mit Broker

**🔴 Fehlerbild**

Der Broker verzeichnet keine Imports einer Klinik mehr, obwohl die Klinik weiterhin Fälle importiert. Der Neustart des
Wildfly Servers der Klinik behebt das Problem nur vorübergehend.

**❓ Ursache**

Die Firewall blockiert die Verbindung des Wildfly Servers zum Broker. Durch wiederholten Verbindungsaufbau und
Abbruch durch die Firewall füllt sich der Connection Pool mit unbrauchbaren Verbindungen bis dieser voll ist.

Ob dieser Fehler vorliegt kann über die Logs nachvollzogen werden:

1. J-Boss CLI öffnen:
   ```bash
   sudo ./opt/wildfly/bin/jboss-cli.sh
   ```

2. Datasource Logging aktivieren (Alternativ auch manuel in der standalone.xml möglich):
   ```bash
   /subsystem=datasources/data-source=AktinDS:write-attribute(name=statistics-enabled, value=true)
   :reload
   ```

3. Connection Pool Status prüfen:
   ```bash
   /subsystem=datasources/data-source=AktinDS/statistics=pool:read-resource(include-runtime=true)
   ```

Hier finden sich folgende Angaben:

- "ActiveCount" - Connections in use

- "AvailableCount" - idle / available Connections

- "TimedOut" - wie viele Connection Requests "Timed out" sind

**✅ Lösung**

Die Klinik muss die Firewall EInstellungen anpassen, sodass die Verbindung zum Broker nicht blockiert wird.
Anschließend muss der Connection Pool geleert werden.

**🔎 Kontrolle**

TODO

## Automatisierten DWH Mails: Falsche IP

**🔴 Fehlerbild**

Beim Update von DWH1.5 auf DWH1.6 wird ein neues Netzprofil (Interface) angelegt, das meist "docker0" heißt. Dieses
Interface mit einer eigenen IP wird zukünftig als Host IP erkannt und in den automatisierten Mails versendet, was jedoch
kein gültiger Pfad ist.

**❓ Ursache**

Die lokalen DWH Instanzen senden den Betreibern automatisierte E-Mails, beispielsweise wenn eine neue Anfrage aussteht.
Hierbei leitet die E-Mail den Betreiber mit einem Link direkt zur betroffenen Anfrage in der Adminkonsole. Dieser Link
benötigt die IP-Adresse der DWH Instanz, welche sie sich aus dem Host zieht, wobei das letzte Netzprofil (Interface) und
deren IP als Host IP verwendet wird.

**✅ Lösung**

Das Netwerk-Interface löschen:

```bash
sudo systemctl stop docker
sudo ip link delete docker0
```

**🔎 Kontrolle**

TODO

## Firewall Probleme: Proxy

**🔴 Fehlerbild**

Das DWH kann keine Verbindung zum Broker herstellen, obwohl die Firewall vermeintlich korrekt konfiguriert ist.

**❓ Ursache**

Möglicherweise fehlt die Proxy-Konfiguration in den JVM-Startoptionen von Wildfly.

**✅ Lösung**

1. Broker-Verbindung vom DHW aus testen (Testseite):
   ```http
    http://<server>/aktin/admin/plain/test.html
   ```

2. Broker-Erreichbarkeit vom Klinikrechner prüfen:
   ```http
   https://broker.aktin.org/broker/status
   ```
   oder
   ```http
    https://aktin-broker.klinikum.rwth-aachen.de/status
   ```

3. Ist der Broker vom Klinikrechner erreichbar, vom DWH jedoch nicht, überprüfen Sie die Proxy-Konfiguration in den
   JVM-Startoptionen des Wildfly-Startskripts und ergänzen Sie diese bei Bedarf.

**🔎 Kontrolle**

Erneutes Aufrufen der Testseite des DWH. Die Verbindung zum Broker sollte nun hergestellt werden können.

## DWH Installation: Ubuntu 24.04LTS

**🔴 Fehlerbild**

Bei der Installation des DWH unter Ubuntu 24.04 LTS schlägt die Paketinstallation aufgrund fehlender Abhängigkeiten
fehl.

**❓ Ursache**

Die Pakete `postgresql-12` und `python3-unicodecsv` sind unter Ubuntu 24.04 nicht verfügbar.

**✅ Lösung**

**Variante 1: Manuelle Installation des DWH-Pakets**

1. Debian DWH-Paket manuell herunterladen
2. Entfernen der fehlerhaften Abhängigkeit (`python3-unicodecsv`) aus den Paketanforderungen
3. Manuelle Installation des angepassten Debian Pakets

**Variante 2: Installation über die Paketverwaltung**

1. PostgreSQL 16 installieren:

   ```bash
   apt-get install postgresql-16
   ```

2. i2b2 Paket installieren:
   ```bash
   apt-get install aktin-notaufnahme-i2b2
   ```

3. DWH-Paket installieren:
   ```bash
   apt-get install aktin-notaufnahme-dwh --ignore-missing
   ```

**🔎 Kontrolle**

Prüfen Sie, ob die Installation erfolgreich abgeschlossen wurde und das DWH ordnungsgemäß startet.

## i2b2 Login Probleme

**🔴 Fehlerbild**

Login in i2b2 is möglich, in das DWH Admin Panel allerdings nicht.

**❓ Ursache**

Dem Nutzer fehlen die Admin-Berechtigungen.

**✅ Lösung**

In der Benutzerverwaltung muss das Attribut `admin` des betroffenen Users auf `true` gesetzt werden.

**🔎 Kontrolle**

Erneuter Anmeldeversuch im DWH Admin Panel.

## Monatsbericht: Abnormal Termination Exception

**🔴 Fehlerbild**

Der Generierungsprozess des Monatsberichts bricht ab. Das Log zeigt eine `Abnormal Termination Exception` im 
Zusammenhang mit RScript.

**❓ Ursache**

Das R-Paket `tidyverse` ist nicht korrekt installiert.

**✅ Lösung**

1. R-Konsole öffnen:
   ``` bash
   sudo R
   ```

2. Tidyverse-Installation prüfen:
   ```bash
   library("tidyverse")
   ```

3. Falls Fehler auftreten, `tidyverse` neu installieren:
   ```bash
   remove.packages("tidyverse")
   install.packages("tidyverse")
   ```

4. Falls die Installation fehlschlägt, benötigte Systembibliotheken installieren.
   R-Konsole mit
   ``` bash
   q()
   ``` 
   verlassen und folgende Befehle ausführen:
   ```bash
   sudo apt-get install libfontconfig1-dev libharfbuzz-dev libfribidi-dev libfreetype6-dev libpng-dev libtiff5-dev libjpeg-dev
   ```
   Anschließend R erneut öffnen und `tidyverse` neu installieren (s.o.).

5. Wildfly neu starten:
   ```bash
   sudo systemctl restart wildfly
   ```

6. Falls die Installation weiterhin fehlschlägt: prüfen, ob die Firewall den Zugriff auf das CRAN-Repository
   blockiert oder ob ein anderes Repository konfiguriert werden muss.

**🔎 Kontrolle**

`tidyverse` Installation prüfen. Anschließend Monatsbericht erneut erstellen.

## Monatsbericht: Fehler - Patient ohne ID

**🔴 Fehlerbild**

Der Generierungsprozess des Monatsberichts bricht ab. Das Log zeigt:`java.lang.NullPointerException: Patient w/o ID`

**❓ Ursache**

Es wurden Einträge aus der Datenbank gelöscht, während das DWH noch aktiv war. Dadurch wurde die Löschung nicht 
abgeschlossen. Eine Tabelle enthält noch gelöschte Daten, welche tatsächlich gelöschte Daten referenzieren.

**✅ Lösung**

Mit dem Delete-Skript `delete_encounter_from_dwh.sh` des
[Aktin Repository](https://github.com/aktin/aktin-scripts.git) alle Einträge aus dem Zeitraum der zuvor gelöschten 
Daten löschen. Anschließend den gesamten gelöschten Zeitraum nach-importieren.

**🔎 Kontrolle**

TODO
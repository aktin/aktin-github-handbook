# Konfiguration

Auf dieser Seite finden Sie alle Informationen zur zentralen Konfigurationsdatei `aktin.properties`. Diese Datei enthält alle wichtigen Einstellungen für den Betrieb des AKTIN Data Warehouse. Nach
einer Neuinstallation müssen einige dieser Einstellungen zwingend angepasst werden, damit die Anwendung korrekt funktioniert.

## Anleitung zur Bearbeitung der Konfigurationsdatei

Um die Einstellungen zu ändern, benötigen Sie einen Konsolenzugang zum Server. Je nach Installationstyp unterscheidet sich der Pfad zur Datei und der Befehl zum Neustarten des Dienstes.

::: tabs
@tab Debian

**1. Datei öffnen**: Öffnen Sie die Konfigurationsdatei mit dem folgenden Befehl:

```bash
nano /opt/wildfly/standalone/configuration/aktin.properties
```

**2. Änderungen vornehmen**: Passen Sie die gewünschten Werte an. Speichern und Schließen Sie die `aktin.properties` anschließend.

**3. Dienst neustarten**: Wenden Sie die neuen Einstellungen an, indem Sie den Server neustarten:

```bash
service wildfly restart
```

@tab Docker

**1. Datei öffnen**: Bei einer Docker-Installation liegt die Datei in einem Volume. Ersetzen Sie `<PROJEKT_NAME>` mit dem Namen Ihres Docker-Projekts:

```bash
nano /var/lib/docker/volumes/<PROJEKT_NAME>/aktin_config/_data/aktin.properties
```

**2. Änderungen vornehmen**: Passen Sie die gewünschten Werte an. Speichern und Schließen Sie die `aktin.properties` anschließend.

**3. Container neustarten**: Starten Sie den Wildfly-Container neu, um die Änderungen zu übernehmen (der Container-Name kann variieren):

```bash
docker restart <PROJEKT_NAME>-wildfly-1
```
:::

::: info
Beachten Sie, dass alle nachträglichen Änderungen an der `aktin.properties` einen Neustart des Wildfly-Servers erfordern, um aktiv zu werden.
:::

## Referenz der Einstellungen

### Lokale Standorteinstellungen

Diese Einstellungen definieren den Namen und den Standort Ihrer Data Warehouse-Instanz.

In diesem Abschnitt müssen Sie einige Angaben zu Ihrer Klinik machen. Passen Sie mindestens die Werte für `local.o` (Name des Klinikums), `local.ou` (Name der Abteilung) und `local.email` (zentrale
E-Mail-Adresse für Berichte) an. An die hier hinterlegte E-Mail-Adresse werden später Berichte und Meldungen geschickt. Mehrere Adressen werden kommagetrennt ohne Leerzeichen angegeben.

| Einstellung      | Wert                                   | Beschreibung                                |
|:-----------------|:---------------------------------------|:--------------------------------------------|
| `local.cn`       | AKTIN DWH                              | Name der DWH-Instanz                        |
| `local.o`        | Ev. Klinikum Beispielhausen            | Name des Klinikums                          |
| `local.ou`       | Notaufnahme                            | Name der Abteilung                          |
| `local.l`        | Beispielhausen                         | Ort                                         |
| `local.s`        | Niedersachen                           | Bundesland                                  |
| `local.c`        | Deutschland                            | Staat                                       |
| `local.email`    | zna-contact@klinikum-beispielhausen.de | Empfänger-E-Mail für Berichte und Meldungen |
| `local.tz`       | Europe/Berlin                          | Zeitzone                                    |
| `local.language` | de-DE                                  | Benutzersprache                             |

### i2b2- und Datenbankeinstellungen

Diese Schlüssel konfigurieren die Verbindung zum i2b2-Server und zur WildFly-Datenquelle.

::: warning
Ändern Sie diese Werte nicht, es sei denn, Sie werden explizit vom Support dazu aufgefordert. Falsche Einstellungen hier können die gesamte Anwendung unbrauchbar machen.
:::

| Einstellung           | Wert                                           | Beschreibung                      |
|:----------------------|:-----------------------------------------------|:----------------------------------|
| `i2b2.project`        | AKTIN                                          | i2b2 Projekt-Name                 |
| `i2b2.datasource.crc` | java:/QueryToolDemoDS                          | i2b2 Projekt-Datenquelle          |
| `i2b2.service.pm`     | http://localhost:9090/i2b2/services/PMService/ | i2b2 PM-Service                   |
| `i2b2.service.domain` | i2b2demo                                       | i2b2 Projekt-Domäne               |
| `db.datasource`       | java:jboss/datasources/AktinDS                 | JNDI-Name der Wildfly-Datenquelle |

### E-Mail-Konfiguration

Hier werden alle Einstellungen für den Versand von E-Mails über einen SMTP-Server festgelegt.

Damit das Data Warehouse E-Mails (z.B. Berichte) versenden kann, müssen Sie hier die Zugangsdaten zu Ihrem E-Mail-Server (SMTP) eintragen. Füllen Sie die Felder entsprechend den Vorgaben Ihrer
IT-Abteilung aus. Die Felder `mail.x.replyto`, `mail.smtp.timeout` und `mail.smtp.connectiontimeout` können Sie auf den Standardwerten belassen.

::: warning
Das Feld `email.session` muss auf dem Wert `local` belassen werden. Anderenfalls wird die hier hinterlegte Konfiguration nicht geladen.
:::

| Einstellung                   | Wert                 | Beschreibung                                      |
|:------------------------------|:---------------------|:--------------------------------------------------|
| `email.session`               | local                | Lieferant der Email-Konfiguration                 |
| `mail.x.replyto`              | it-support@aktin.org | Antwortadresse für versendete E-Mails             |
| `mail.transport.protocol`     | smtp                 | Verwendetes E-Mail-Protokoll                      |
| `mail.smtp.host`              | localhost            | Adresse des E-Mail-Servers                        |
| `mail.smtp.port`              | 3025                 | Port des E-Mail-Servers                           |
| `mail.smtp.auth`              | true                 | SMTP-Server-Authentifizierung                     |
| `mail.user`                   | aktin                | Verwendeter Benutzer                              |
| `mail.from`                   | *leer*               | Die Absender-E-Mail-Adresse des aktuellen Nutzers |
| `mail.x.password`             | aktin                | Passwort des verwendeten Benutzers                |
| `mail.smtp.starttls.enable`   | true                 | Sicherheitseinstellung für TLS                    |
| `mail.smtp.timeout`           | 10000                | Verbindungstimeout zum E-Mail-Server              |
| `mail.smtp.connectiontimeout` | 10000                | Maximale Verarbeitungszeit für E-Mail-Versand     |

### Broker-Einstellungen

Diese Werte steuern die Kommunikation mit dem zentralen AKTIN-Broker.

Hier muss nur der alphanumerische API-Schlüssel (`broker.keys`) eingetragen werden, den Sie vom [AKTIN-Support][support-email] erhalten haben. Ohne diesen Schlüssel kann sich Ihr Data Warehouse
nicht mit der zentralen Infrastruktur verbinden. Die anderen Werte sollten unverändert bleiben.

| Einstellung           | Wert                                                 | Beschreibung                           |
|:----------------------|:-----------------------------------------------------|:---------------------------------------|
| `broker.keys`         | XXXyourapikeyXXX                                     | Broker-Key zur Identifizierung         |
| `broker.uris`         | https://aktin-broker.klinikum.rwth-aachen.de/broker/ | AKTIN Broker-URI                       |
| `broker.data.path`    | /var/lib/aktin/broker                                | Ablageort für Broker-Daten             |
| `broker.archive.path` | /var/lib/aktin/broker-archive                        | Ablageort für archivierte Broker-Daten |
| `broker.intervals`    | PT15M                                                | Heartbeat-Update-Intervall (ISO 8601)  |

### Studienspezifische Einstellungen & CDA-IDs

Diese Einstellungen sind für die Verarbeitung von Patientendaten im Consent-Manager relevant.

Für die meisten Standard-Installationen (z.B. mit E.Care- oder Orbis-Schnittstelle) müssen Sie hier nichts ändern. Nur wenn Ihr Krankenhaus-Informationssystem abweichende technische IDs (`root`-IDs)
verwendet, müssen die Zeilen mit `cda.*.root.preset` angepasst werden.

| Einstellung                 | Wert                      | Beschreibung                                                          |
|:----------------------------|:--------------------------|:----------------------------------------------------------------------|
| `study.id.reference`        | Patient                   | Referenz-Typ für Patienten-ID (`Patient`, `Encounter` oder `Billing`) |
| `cda.patient.root.preset`   | 1.2.276.0.76.4.8          | Root-Nummer bei Verwendung der Patientennummer                        |
| `cda.encounter.root.preset` | 1.2.276.0.76.3.87686      | Root-Nummer bei Verwendung der Episodennummer                         |
| `cda.billing.root.preset`   | 1.2.276.0.76.3.87686.1.45 | Root-Nummer bei Verwendung der Fallnummer                             |
| `study.id.patient.label`    | Patientennr.              | Textfeld-Label für die Patientennummer                                |
| `study.id.encounter.label`  | Episodennummer            | Textfeld-Label für die Episodennummer                                 |
| `study.id.billing.label`    | Fallnummer                | Textfeld-Label für die Fallnummer                                     |
| `study.id.separator`        | /                         | Trennzeichen für Root- und Extension-Nummer                           |

#### Wo finde ich diese IDs?

Um herauszufinden, welche dieser Nummern über die AKTIN-Schnittstelle in das Data-Warehouse übertragen werden, benötigen Sie Zugriff auf ein CDA-Dokument Ihrer Klinik. Das CDA-Dokument wird als
Datenstruktur zur Übertragung der Daten aus dem Notaufnahme-System in das klinikinterne Data Warehouse verwendet

Öffnen Sie eine CDA-Datei und suchen Sie nach folgenden Abschnitten:

```xml
<!-- Patient -->
<recordTarget typeCode="RCT" contextControlCode="OP">
  <patientRole classCode="PAT">
    <!-- Patientennummer -->
    <id extension="1234567890" root="1.2.276.0.76.4.8"/>
    [...]
  </patientRole>
</recordTarget>
```

```xml
<!-- Patientenkontakt -->
<encompassingEncounter classCode="ENC" moodCode="EVN">
  <!-- Episodennummer -->
  <id root="1.2.276.0.76.3.87686" extension="987654321-01"/>
  <!-- Fallnummer / §21 Abrechnungsfallnummer -->
  <id root="1.2.276.0.76.3.87686.1.45" extension="ABCD-EFGH-IJKL-MNOP"/>
  [...]
</encompassingEncounter>
```

Jede Nummer (Patient, Fall, Episode) besteht aus zwei Teilen:

* `extension`: Das ist die eigentliche Nummer, die Sie auch im KIS sehen (z.B. `1234567890`).
* `root`: Das ist eine feste, technische Kennung, die den Typ der Nummer definiert (z.B. `1.2.276.0.76.4.8` für eine Patientennummer).

Vergleichen Sie die `root`-Werte aus Ihrer CDA-Datei mit den Werten in der Einstellungs-Tabelle. Passen Sie den entsprechenden `cda.*.root.preset`-Eintrag in Ihrer `aktin.properties` an, falls er

:::info
Sollte in Ihrer Klinik keine feste `root`-Nummer verwendet werden, darf auch keine `root`-Nummer in `aktin.properties` eingetragen werden. Lassen Sie das Feld in diesem Fall einfach leer. Dies kann
der Fall sein, wenn entweder `extension` direkt als `root` verwendet wird oder sich die `root`-Nummer klinikintern unterscheidet.
:::

### Pfad- und Servereinstellungen

Diese Schlüssel definieren verschiedene Dateipfade und Konfigurationen für serverseitige Operationen.

::: warning
Diese Pfade und technischen Werte sind für den Betrieb essenziell und werden bei der Installation automatisch konfiguriert. Ändern Sie hier nichts, um Fehlfunktionen zu vermeiden.
:::

| Einstellung                     | Wert                             | Beschreibung                                                                                       |
|:--------------------------------|:---------------------------------|:---------------------------------------------------------------------------------------------------|
| `rscript.binary`                | /usr/bin/Rscript                 | Link zum R-Script Binary                                                                           |
| `rscript.timeout`               | 1800000                          | Timeout für R-Skripte                                                                              |
| `rscript.debug`                 | false                            | R Debug-Modus                                                                                      |
| `update.data.path`              | /var/lib/aktin/update            | Ablageort für den Update-Dienst                                                                    |
| `report.data.path`              | /var/lib/aktin/reports           | Ablageort der Berichte                                                                             |
| `report.temp.path`              | /var/tmp/report-temp             | Temporäre Ablage von Berichten während der Generierung                                             |
| `report.archive.path`           | /var/lib/aktin/report-archive    | Ablageort der archivierten Berichte                                                                |
| `report.debug.keeptempfiles`    | false                            | Behält temporäre Dateien nach der Berichterstellung für Debugging-Zwecke                           |
| `import.data.path`              | /var/lib/aktin/import            | Ablageort für Importdateien                                                                        |
| `import.script.path`            | /var/lib/aktin/import-scripts    | Pfad für abgeleitete Importskripte                                                                 |
| `import.script.timeout`         | 10800000                         | Timeout für Importskripte                                                                          |
| `import.cda.debug.level`        | none                             | Import-CDA-Debug-Level                                                                             |
| `import.cda.debug.dir`          | /tmp/                            | Ablageort für CDA-Debug-Dateien                                                                    |
| `import.cda.fhir.outcome.level` | info                             | Legt das Logging-Level für den FHIR-Outcome beim CDA-Import fest (Optionen: 'all', 'info', 'none') |
| `wildfly.management.url`        | http://localhost:9990/management | URL der Wildfly-Konfiguration                                                                      |
| `wildfly.management.user`       | admin                            | Wildfly-Nutzer                                                                                     |
| `wildfly.management.password`   | admin2                           | Wildfly-Passwort                                                                                   |

## Einstellungen in der i2b2-Adminoberfläche

Benutzer ohne Admin-Rechte benötigen zwei Berechtigungen, um den Data-Warehouse-Manager zu nutzen: die Zuweisung zum AKTIN-Projekt und eine AKTIN-Rolle. Beides konfigurieren Sie in der
i2b2-Adminoberfläche unter `http://<IHR-SERVER>/webclient`. Eine genaue Anleitung finden Sie im [i2b2-Handbuch][i2b2-manual].

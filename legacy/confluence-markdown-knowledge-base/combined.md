Wissen

IMI AKTIN

Exported on 2025-08-15 15:43:19

# Table of Contents

1.1 AKTIN Support – CLI Cheat Sheet [7](#aktin-support-cli-cheat-sheet)

1.1.1 Common: [7](#common)

1.1.2 Docker: [7](#docker)

1.1.3 Debian: [7](#debian)

1.2 Broker Monitoring Example [7](#broker-monitoring-example)

1.3 Copy of Support Vertretung 02.07 - .11.07.2025
[8](#copy-of-support-vertretung-02.07---.11.07.2025)

1.3.1 Tickets in der Schwebe [9](#tickets-in-der-schwebe)

1.4 Hersteller Support [11](#hersteller-support)

1.5 Support Vertretung 13.05.-20.05.2025
[11](#support-vertretung-13.05.-20.05.2025)

1.5.1 Tickets in der Schwebe [11](#tickets-in-der-schwebe-1)

1.6 Support Vertretung 15.10.-21.10.24
[12](#support-vertretung-15.10.-21.10.24)

1.6.1 Tickets in der Schwebe [13](#tickets-in-der-schwebe-2)

1.7 Support Vertretung 19.12.-06.01.2025
[14](#support-vertretung-19.12.-06.01.2025)

1.7.1 Tickets in der Schwebe [14](#tickets-in-der-schwebe-3)

1.8 Wichtige URLs [15](#wichtige-urls)

2.1 Broker Anfrage [16](#broker-anfrage)

2.1.1 Ablauf [16](#ablauf)

2.2 CDA Import [19](#cda-import)

2.2.1 Einzelimport [19](#einzelimport)

2.2.2 Fügen Sie die erforderlichen Schritte hinzu:
[19](#fügen-sie-die-erforderlichen-schritte-hinzu)

2.2.3 Batchimport [19](#batchimport)

2.2.4 Verwandte Artikel [20](#verwandte-artikel)

2.3 Debug RScript [21](#debug-rscript)

2.4 DWH Logdateien erstellen [21](#dwh-logdateien-erstellen)

2.4.1 Schritt-für-Schritt-Anleitung [21](#schritt-für-schritt-anleitung)

2.4.2 Verwandte Artikel [22](#verwandte-artikel-1)

2.5 Schritt-für-Schritt-Anleitung [22](#schritt-für-schritt-anleitung-1)

2.6 HTTPS-Zugriff aktivieren [22](#https-zugriff-aktivieren)

2.6.1 Hintergrund [22](#hintergrund)

2.6.2 Lösung [23](#lösung)

2.6.3 Anmerkungen [23](#anmerkungen)

2.6.4 Anleitung [23](#anleitung)

2.7 I2B2 Berechtigungen von Usern [23](#i2b2-berechtigungen-von-usern)

2.8 Installation Broker Monitoring [25](#installation-broker-monitoring)

2.8.1 Schritt-für-Schritt-Anleitung
[25](#schritt-für-schritt-anleitung-2)

2.8.2 Verwandte Artikel [34](#verwandte-artikel-3)

2.9 Löschen von Fällen [35](#löschen-von-fällen)

2.9.1 Schritt-für-Schritt-Anleitung
[35](#schritt-für-schritt-anleitung-3)

2.9.2 Verwandte Artikel [36](#verwandte-artikel-4)

2.10 Manuelle Datenabfrage [36](#manuelle-datenabfrage)

2.10.1 Schritt-für-Schritt-Anleitung
[36](#schritt-für-schritt-anleitung-4)

2.10.2 Verwandte Artikel [37](#verwandte-artikel-5)

2.11 Manuelles AKTIN Update [37](#manuelles-aktin-update)

2.11.1 Schritt-für-Schritt-Anleitung
[37](#schritt-für-schritt-anleitung-5)

2.11.2 Verwandte Artikel [38](#verwandte-artikel-6)

2.12 Ubuntu Distributions Upgrade [38](#ubuntu-distributions-upgrade)

2.12.1 Ablauf [39](#ablauf-1)

2.12.2 Post-Distributionsupgrade Problembehebung
[39](#post-distributionsupgrade-problembehebung)

2.13 Ubuntu Speicher Erweiterung [40](#ubuntu-speicher-erweiterung)

2.13.1 Ablauf [40](#ablauf-2)

2.14 Zugriff per PGAdmin auf ein lokales AKTIN DWH
[40](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

2.14.1 Voraussetzungen [40](#voraussetzungen)

2.14.2 Schritt-für-Schritt-Anleitung
[41](#schritt-für-schritt-anleitung-6)

2.14.3 Verwandte Artikel [44](#verwandte-artikel-7)

3.1 Adminkonsole Fehler 404 [45](#adminkonsole-fehler-404)

3.1.1 Hintergrund [45](#hintergrund-1)

3.1.2 Fehlersuche [46](#fehlersuche)

3.1.3 Verwandte Artikel [47](#verwandte-artikel-8)

3.2 Anfragen an das DWH führen zu Absturz
[47](#anfragen-an-das-dwh-führen-zu-absturz)

3.2.1 Problem [47](#problem)

3.2.2 Lösung [47](#lösung-1)

3.3 DWH 1.6 Update depends on postgresql \<=229
[48](#dwh-1.6-update-depends-on-postgresql-229)

3.3.1 Problem [48](#problem-1)

3.3.2 Lösung [48](#lösung-2)

3.4 DWH Update 1.6 verbindet sich nicht mehr mit dem Broker
[49](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

3.4.1 Problem [49](#problem-2)

3.4.2 Idee [49](#idee)

3.4.3 Fehleranalyse [50](#fehleranalyse)

3.4.4 Lösung [53](#lösung-3)

3.5 DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly neustart
[53](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

3.5.1 Hintergrund [53](#hintergrund-2)

3.5.2 Vermutung [53](#vermutung)

3.5.3 Verwandte Artikel [54](#verwandte-artikel-9)

3.6 Falsche IP auf automatisierten Mails des DWHs
[55](#falsche-ip-auf-automatisierten-mails-des-dwhs)

3.6.1 Hintergrund [55](#hintergrund-3)

3.6.2 Problem [55](#problem-3)

3.6.3 Lösung [55](#lösung-4)

3.6.4 Verwandte Artikel [55](#verwandte-artikel-10)

3.7 Firewall Probleme: Proxy [55](#firewall-probleme-proxy)

3.7.1 Problem [55](#problem-4)

3.7.2 Lösung [56](#lösung-5)

3.7.3 Verwandte Artikel [56](#verwandte-artikel-11)

3.8 Installation des DWH auf Ubuntu 24.04LTS
[56](#installation-des-dwh-auf-ubuntu-24.04lts)

3.8.1 Problem [56](#problem-5)

3.8.2 Lösung [56](#lösung-6)

3.8.3 Weitere Lösung [57](#weitere-lösung)

3.8.4 Verwandte Artikel [57](#verwandte-artikel-12)

3.9 Login Probleme [57](#login-probleme)

3.9.1 AKTIN Rolle richtig setzen: [57](#aktin-rolle-richtig-setzen)

3.9.2 AKTIN Rollen [58](#aktin-rollen)

3.10 Monatsbericht/Report: Abnormal Termination Exception
[58](#monatsberichtreport-abnormal-termination-exception)

3.10.1 Problem [58](#problem-6)

3.10.2 Grund [59](#grund)

3.10.3 Lösung [59](#lösung-7)

3.10.4 Verwandte Artikel [59](#verwandte-artikel-13)

3.11 Monatsbericht nicht erstellt: Patient ohne ID
[60](#monatsbericht-nicht-erstellt-patient-ohne-id)

3.11.1 Problem [60](#problem-7)

3.11.2 Grund [60](#grund-1)

3.11.3 Lösung [60](#lösung-8)

3.11.4 Verwandte Artikel [60](#verwandte-artikel-14)

3.12 User I2B2 Datenbank Informationen auslesen
[60](#user-i2b2-datenbank-informationen-auslesen)

3.12.1 User-Datenbankinformationen auslesen
[60](#user-datenbankinformationen-auslesen)

3.12.2 Weitere Informationen zur Fehleranalyse
[61](#weitere-informationen-zur-fehleranalyse)

3.13 Wildfly hat keine Verbindung zu Postgresql
[61](#wildfly-hat-keine-verbindung-zu-postgresql)

3.13.1 Hintergrund [61](#hintergrund-4)

3.13.2 Fehlersuche [61](#fehlersuche-1)

3.13.3 Verwandte Artikel [62](#verwandte-artikel-15)

3.14 Wildfly Startet nicht mehr [62](#wildfly-startet-nicht-mehr)

3.14.1 Hintergrund [62](#hintergrund-5)

3.14.2 Fehlersuche [62](#fehlersuche-2)

3.14.3 Bekannte Probleme [63](#bekannte-probleme)

3.14.4 Verwandte Artikel [64](#verwandte-artikel-16)

4.1 Bestehende Verfahren für Testdaten Generierung
[65](#bestehende-verfahren-für-testdaten-generierung)

4.1.1 Inhalt [65](#inhalt)

4.1.2 Ziel [65](#ziel)

4.1.3 Problem [65](#problem-8)

4.1.4 Bestehende Verfahren [65](#bestehende-verfahren)

4.1.5 Aktin Test-daten-generator [67](#aktin-test-daten-generator)

4.1.6 Dateien (Versionierung) [67](#dateien-versionierung)

4.1.7 AKTIN Testdaten Generator [68](#aktin-testdaten-generator)

4.2 Einführung in CDA [68](#einführung-in-cda)

4.2.1 Inhalt [68](#inhalt-2)

4.2.2 Allgemeines Verständnis [69](#allgemeines-verständnis)

4.2.3 HL7-Standart [70](#hl7-standart)

4.2.4 Was ist der HL7-Standard, und wie wird er im CDA-Dokument
verwendet?
[70](#was-ist-der-hl7-standard-und-wie-wird-er-im-cda-dokument-verwendet)

4.2.5 XML-Struktur [70](#xml-struktur)

4.2.6 XML-Transformation und Styling
[72](#xml-transformation-und-styling)

4.2.7 Header [73](#header)

4.2.8 Dokumentinhalt [74](#dokumentinhalt)

4.2.9 Dateien (Versionierung) [78](#dateien-versionierung-2)

4.3 Einführung in XML und JSON [78](#einführung-in-xml-und-json)

4.3.1 Inhalt [78](#inhalt-3)

4.3.2 XML [79](#xml)

4.3.3 Dateien (Versionierung) [84](#dateien-versionierung-3)

*Datenbank* für das Hinterlegen von Wissen im AKTIN Notaufnahmeregister.

- [AKTIN Support](#aktin-support)

  - [AKTIN Support – CLI Cheat Sheet](#aktin-support-cli-cheat-sheet)

  - [Broker Monitoring Example](#broker-monitoring-example)

  - [Copy of Support Vertretung 02.07 -
    .11.07.2025](#copy-of-support-vertretung-02.07---.11.07.2025)

  - [Hersteller Support](#hersteller-support)

  - [Support Vertretung
    13.05.-20.05.2025](#support-vertretung-13.05.-20.05.2025)

  - [Support Vertretung
    15.10.-21.10.24](#support-vertretung-15.10.-21.10.24)

  - [Support Vertretung
    19.12.-06.01.2025](#support-vertretung-19.12.-06.01.2025)

  - [Wichtige URLs](#wichtige-urls)

- [Anleitungsartikel](#anleitungsartikel)

  - [Broker Anfrage](#broker-anfrage)

  - [CDA Import](#cda-import)

  - [Debug RScript](#debug-rscript)

  - [DWH Logdateien erstellen](#dwh-logdateien-erstellen)

  - [Einloggen als root](#schritt-für-schritt-anleitung-1)

  - [HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

  - [I2B2 Berechtigungen von Usern](#i2b2-berechtigungen-von-usern)

  - [Installation Broker Monitoring](#installation-broker-monitoring)

  - [Löschen von Fällen](#löschen-von-fällen)

  - [Manuelle Datenabfrage](#manuelle-datenabfrage)

  - [Manuelles AKTIN Update](#manuelles-aktin-update)

  - [Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

  - [Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

  - [Zugriff per PGAdmin auf ein lokales AKTIN
    DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- [Fehlerbehebungsartikel](#fehlerbehebungsartikel)

  - [Adminkonsole Fehler 404](#adminkonsole-fehler-404)

  - [Anfragen an das DWH führen zu
    Absturz](#anfragen-an-das-dwh-führen-zu-absturz)

  - [DWH 1.6 Update depends on postgresql
    \<=229](#dwh-1.6-update-depends-on-postgresql-229)

  - [DWH Update 1.6 verbindet sich nicht mehr mit dem
    Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

  - [DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
    neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

  - [Falsche IP auf automatisierten Mails des
    DWHs](#falsche-ip-auf-automatisierten-mails-des-dwhs)

  - [Firewall Probleme: Proxy](#firewall-probleme-proxy)

  - [Installation des DWH auf Ubuntu
    24.04LTS](#installation-des-dwh-auf-ubuntu-24.04lts)

  - [Login Probleme](#login-probleme)

    - [AKTIN Rollen](#aktin-rollen)

  - [Monatsbericht/Report: Abnormal Termination
    Exception](#monatsberichtreport-abnormal-termination-exception)

  - [Monatsbericht nicht erstellt: Patient ohne
    ID](#monatsbericht-nicht-erstellt-patient-ohne-id)

  - [User I2B2 Datenbank Informationen
    auslesen](#user-i2b2-datenbank-informationen-auslesen)

  - [Wildfly hat keine Verbindung zu
    Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

  - [Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- [Grundlagen](#grundlagen)

  - [Bestehende Verfahren für Testdaten
    Generierung](#bestehende-verfahren-für-testdaten-generierung)

    - [AKTIN Testdaten Generator](#aktin-testdaten-generator)

  - [Einführung in CDA](#einführung-in-cda)

  - [Einführung in XML und JSON](#einführung-in-xml-und-json)

# AKTIN Support

## AKTIN Support – CLI Cheat Sheet

### Common:

#### Root access:

- Wechsel zum root user (es wird kein sudo mehr benötigt für alle root
  erfordernden Befehle):

| sudo -i |
|---------|

- 

### Docker:

#### Container:

- List all containers:

| docker container ls |
|---------------------|

### Debian:

#### Logs:

- Den Server Log ansehen (alter Server logs finden sich mit einer Nummer
  am Ende des log namens):

| less /opt/wildfly/standalone/log/server.log |
|---------------------------------------------|

- Den output von server.log live verfolgen:

| tail -f /opt/wildfly/standalone/log/server.log |
|------------------------------------------------|

#### Settings:

- Die aktin.properties mit CLI ändern:

| nano /etc/aktin/aktin.properties |
|----------------------------------|

## Broker Monitoring Example

| Node                                                                                                          | Interface        | Last Check          | Status                                                  | Errorrate Today | Errorrate Past 7 Days |
|---------------------------------------------------------------------------------------------------------------|------------------|---------------------|---------------------------------------------------------|-----------------|-----------------------|
| [\[1\] ](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/70520506/1+PK+Henstedt-Ulzburg)ED              | A                | 2023-05-16 10:35:0  | **<span class="smallcaps"> online </span>**             | 0.0             | 0.00                  |
| [\[2\] E](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408518/2+UK+Magdeburg)D                     | Eigenentwicklung | 2023-05-16 10:35:02 | **<span class="smallcaps"> online </span>**             | 0.92            | 0.49                  |
| [\[3\] E](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408522/3+BBT+Trier)D                        | B                | 2023-05-16 10:35:03 | **<span class="smallcaps"> extreme error rate </span>** | 100.0           | 99.89                 |
| [\[14\] E](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408550/14+UK+Jena)D                        | Eigenentwicklung | 2023-05-16 10:35:08 | **<span class="smallcaps"> low error rate </span>**     | 2.33            | 0.47                  |
| [\[15\] E](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408554/15+KH+Stuttgart)D                   | C                | 2023-05-16 10:35:09 | **<span class="smallcaps"> online </span>**             | 0.0             | 0.49                  |
| [\[16\] E](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408620/16+Chemnitz)D                       | C                | 2023-05-16 10:35:09 | **<span class="smallcaps"> low error rate </span>**     | 3.3             | 1.95                  |
| [\[36\] E](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/78940816/36+P%C3%A4diatrie+Charite+Virchow)D | D                | 2023-05-16 10:35:22 | **<span class="smallcaps"> testing </span>**            | \-              | 0.00                  |
| [\[37\]](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408697/37+UK+K%C3%B6ln) ED                   | E                | 2023-05-16 10:35:22 | **<span class="smallcaps"> online </span>**             | 0.0             | 0.24                  |
| [\[38\] ](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408702/38+UK+LMU+M%C3%BCnchen+Innenstadt)ED | B                | 2023-05-16 10:35:23 | **<span class="smallcaps"> extreme error rate </span>** | 21.95           | 20.52                 |
| [\[39\] ](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408706/39+Braunschweig)ED                   | A                | 2023-05-16 10:35:24 | **<span class="smallcaps"> online </span>**             | 0.0             | 0.00                  |
| [\[43\]](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408724/43+Saalekreis) ED                     | C                | 2023-05-16 10:35:26 | **<span class="smallcaps"> online </span>**             | 0.0             | 0.00                  |
| [\[44\]](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408728/44+Heidenheim) ED                     | C                | 2023-05-16 10:35:27 | **<span class="smallcaps"> online </span>**             | 0.0             | 0.00                  |
| [\[45\] ](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/59408732/45+P%C3%A4diatrie+Wolfsburg)ED       | C                | 2023-05-16 10:35:28 | **<span class="smallcaps"> online </span>**             | 0.0             | 0.19                  |

## Copy of Support Vertretung 02.07 - .11.07.2025

Urlaubsbedingt kann Wiliam Hoy den Support in dieser Zeit nicht
übernehmen. Nachfolgend der aktuelle Stand der offenen Tickets mit
Erläuterungen und dem letzten Stand der Bearbeitung.

### Tickets in der Schwebe

<img src="wissen-md/media/media/image1.png"
style="width:4.16667in;height:4.16667in"
alt="Kunstdruck, Leinwandbild, Schweben im Raum von Astrolabs" />

#### https://www.artprintcafe.com/de/neue-trends/6081-77243-astrolabs-schweben-im-raum.html

<table>
<colgroup>
<col style="width: 15%" />
<col style="width: 14%" />
<col style="width: 11%" />
<col style="width: 58%" />
</colgroup>
<thead>
<tr class="header">
<th>Ticket Nr.</th>
<th>Kontakt, Klinik</th>
<th>Initiales Problem</th>
<th>Aktueller Status</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Ticket#232035</td>
<td>Kropacek, Aschaffenburg</td>
<td>Findet keine Anfragen in der AKTIN UI</td>
<td><ul>
<li><p>10 Anfragen befinden sich in der Datenbank, mit Status
ACCEPT_SUBMIT</p></li>
<li><p>Laut Saskia Ehrentreich sollten mehr und neuere Anfragen
vorhanden sein</p></li>
<li><p>Die Anfragen sind unter keinem Statusfilter in der UI zu finden
(nur eine Annahme, da Herr Kropacek nach mehrfacher Nachfrage keine
Antwort dazu geliefert hat)</p></li>
</ul></td>
</tr>
<tr class="even">
<td>Ticket#231998</td>
<td>Grupp/Barati, Aalen</td>
<td>Datenlücke Ende 2024</td>
<td><ul>
<li><p>Die Datenlücke entsteht vermutlich aufgrund eines
fehlgeschlagenen P21 Imports. </p></li>
<li><p>Der Fehler beim P21 Import lautet: "no valid encounters found in
fall.csv"</p></li>
<li><p>Ich habe das Script angepasst, mit zusätzlichen Ausgaben bei der
Validierung und bei droppen von Einträgen</p>
<ul>
<li><p>Ergebnis: Spalte "aufnahmedatum" in Datei "fall.csv" falsch
kodiert, darum ~25.000 Fälle gedroppt. (nicht kritisch: "plz" nicht
richtig kodiert)</p></li>
<li><p>Aufnahmedatum muss eine 12-stellige zahl sein mit (4*Jahr,
2*Monat, 2*Tag, 2*Stunde, 2*Minute, 2*Sekunde, 2*Millisekunde)
 </p></li>
<li><p>vermutlich wurde keine Sekunden und Millisekunden
aufgezeichnet</p></li>
</ul></li>
</ul></td>
</tr>
<tr class="odd">
<td>Ticket#232025</td>
<td>Winter</td>
<td>Probleme nach AKTIN Upgrade</td>
<td><ul>
<li><p>Frau Winter wartet auf die Fertigstellung des Skripts zum Laden
von Backups in das Docker-DWH. Alternativ kann der Docker aufgesetzt
werden und die Daten komplett nachimportiert werden, jedoch werden Daten
wie angelegte User nicht mehr vorhanden sein und müssten nchgetragen
werden.</p></li>
</ul></td>
</tr>
<tr class="even">
<td>Ticket#232029</td>
<td>Schmidt</td>
<td>Probleme nach Ubuntu Upgrade</td>
<td><ul>
<li><p>Siehe den oberen Eintrag von Frau Winter</p></li>
</ul></td>
</tr>
<tr class="odd">
<td>Ticket#232000</td>
<td>Fette, Würzburg</td>
<td>Internal Server Error bei CDA Import</td>
<td><ul>
<li><p>Im Wildfly Log ist zu sehen, dass die CDAs ankommen und geladen
werden, jedoch nicht weiter verarbeitet werden können:</p>
<p>"10:05:37,691 INFO  [de.sekmi.histream.i2b2.PostgresPatientStore]
(default task-1) Loaded patient records: 21342</p>
<p>2025-06-11 10:05:37,705 ERROR [io.undertow.request] (default task-1)
UT005023: Exception handling request to /aktin/cda/fhir/Binary:
org.jboss.resteasy.spi.UnhandledException:
java.lang.NullPointerException"</p></li>
<li><p>Bei erneutem Sichten des Logs zeigt sich, dass einige Services
wegen broken packages nicht gestartet werden können. Ich vermute, da der
Server Ubuntu 22 aber DWH Version 1.5 nutzt, dass ein Upgrade des DWHs
auf Version 1.6 das Problem beheben könnte. Herr Fette hat hierzu eine
Anleitung erhalten, jedoch das Interesse geäußert, auf Docker
umzusteigen. Hierzu wartet er auf die Fertigstellung des
Migrations-Skripts für Docker DWHs (<a
href="https://github.com/aktin/aktin-scripts/blob/feature/database-migration-rework/dwh-migration/apply_backup_to_docker.sh">https://github.com/aktin/aktin-scripts/blob/feature/database-migration-rework/dwh-migration/apply_backup_to_docker.sh</a>).</p></li>
</ul></td>
</tr>
</tbody>
</table>

## Hersteller Support

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 12%" />
<col style="width: 38%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr class="header">
<th>Hersteller</th>
<th>Datum</th>
<th>Support</th>
<th>Entscheidung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>ECare</td>
<td>15 May 2020 </td>
<td><ul>
<li><p>Schnittstelle, kodierung MRSA OTH</p></li>
<li><p>wird für codierung von Corona genutzt</p></li>
</ul></td>
<td>OTH wird als Nullflavor im CDA eingetragen</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

## Support Vertretung 13.05.-20.05.2025

Urlaubsbedingt kann Wiliam Hoy den Support in dieser Zeit nicht
übernehmen. Nachfolgend der aktuelle Stand der offenen Tickets mit
Erläuterungen und dem letzten Stand der Bearbeitung.

### Tickets in der Schwebe

<img src="wissen-md/media/media/image1.png"
title="https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.gettyimages.de%2Ffotos%2Fastronaut-funny%3Fpage%3D4&amp;psig=AOvVaw32tNlLt3HPv5j_1VwAZJ-A&amp;ust=1747229744680000&amp;source=images&amp;cd=vfe&amp;opi=89978449&amp;ved=0CBQQjRxqFwoTCOjvjZnIoI0DFQAAAAAdAAAAABAb"
style="width:2.43056in;height:2.60417in"
alt="1.293 Astronaut Funny Stock Photos, High-Res Pictures, and Images - Getty Images" />

Figure 1
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.de%2Ffotos%2Fastronaut-funny%3Fpage%3D4&psig=AOvVaw32tNlLt3HPv5j_1VwAZJ-A&ust=1747229744680000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjvjZnIoI0DFQAAAAAdAAAAABAb

1.  <https://aktin.site2host.de/#ticket/zoom/1935>: Wer? Sebastian
    Berthe, Greifswald  
    Herr Berthe hat ein Problem beim Import der P21 Daten mit dem P21
    Importskript. Beim Versuch die Daten zu importieren, wird ein Fehler
    in der Adminkonsole angezeigt, dass keine Fälle im DWH mit den
    Fällen aus der Fall.csv gematcht werden konnten, obwohl die Import
    Datei alle Fälle des Krankenhauses beinhaltete. Wir haben bereits
    ein Meeting abgehalten, aber haben das Problem nicht identifizieren
    können. 

2.  <https://aktin.site2host.de/#ticket/zoom/1950>: Wer? Marcel Dang, MH
    Hannover  
    Nach einem Upgrade auf die DWH version 1.6, verbindet sich das DWH
    nicht mehr mit dem Broker. Der Server kann im Terminal über den
    Wildfly User den Broker erfolgreich erreichen und im Browser
    funktioniert es auch, nur der Wildfly selber schafft es nicht.
    Nachdem wir zusammen das DWH in Terminal geupgradet haben und eine
    Proxykonfiguration hinzugefügt haben, wurde das DWH nicht mehr
    deployed, da beim Start ein benötigter Prozess gelockt wurde und
    nicht mehr geöffnet wurde.

3.  <https://aktin.site2host.de/#ticket/zoom/1978>: Wer? Selina Haase,
    Elblandkliniken  
    Sie haben Ihre Zugangsdaten für den i2b2 Webclient vergessen. Der
    neue Webclient hat zwar "Passwort vergessen" auf der Anmeldeseite
    aber sie funktioniert nicht und der demouser wurde auch verändert.
    Es gibt die Möglichkeit in der Datenbank selber ein Nutzerprofil
    anzulegen aber meine ersten Versuche sind gescheitert und ich hatte
    keine Zeit mehr.

4.  <https://aktin.site2host.de/#ticket/zoom/1982>: Wer? Florian Braune,
    Chemnitz  
    DWH update auf Version 1.6 klappt nicht weil es Konflikte mit der
    Postgres Version gibt. Die Lösung ist Postgres 14 zuvor selber zu
    installieren und daraufhin das Update zu starten, war bei ihm jedoch
    zu einem Fehler geführt hat. Da ich die Lösung zuvor bei einer
    anderen Klinik angewendet habe, vermute ich eine fehlerhafte
    Umsetzung meiner Anleitung und empfehel das in einem Meeting
    zusammen zu machen.  
    **Task: **Einen Termin ausmachen, um sich das Problem anzusehen. Ich
    kann auch in das Meeting kommen, wenn ich ab dem 21.05. wieder da
    bin.

5.  <https://aktin.site2host.de/#ticket/zoom/1955>: Tobias Just,
    Vivantes  
    Beim DWH Update auf 1.6 wird ein Docker Interface erstellt, das
    jboss als local host URL erkennt und fälschlicherweise setzt. Da sie
    darauf bestanden haben, das Docker Interface zu behalten, um mehrere
    Docker auf dem Server laufen zu lassen, hatte ich vorgeschlagen die
    lokale IP in der Wildfly standalone.xml zu setzten, was auch erkannt
    wurde, was das Problem scheinbar nicht gelöst hat.

6.  <https://aktin.site2host.de/#ticket/zoom/1985>: Wer? Thomas Wolf, UK
    Düsseldorf  
    dasselbe P21 Import Problem wie Herr Berthe
    (<https://aktin.site2host.de/#ticket/zoom/1935>)  
      
     

## Support Vertretung 15.10.-21.10.24

Urlaubsbedingt kann Wiliam Hoy den Support in dieser Zeit nicht
übernehmen. Im Moment sind Jonas Bienzeisler und Simon Kurka für den
Support zuständig. Nachfolgend der aktuelle Stand der offenen Tickets
mit Erläuterungen und dem letzten Stand der Bearbeitung.

### Tickets in der Schwebe

<img src="wissen-md/media/media/image1.png"
style="width:4.16667in;height:4.16667in"
alt="Kunstdruck, Leinwandbild, Schweben im Raum von Astrolabs" />

#### https://www.artprintcafe.com/de/neue-trends/6081-77243-astrolabs-schweben-im-raum.html

**Ticket#231752:** Tempelhof, Matthias Rost  
    Erläuterung: Ein vorheriges Problem ihres Apache Servers wurde
gelöst, nun finden jedoch weiterhin keine Imports statt. Alexander und
ich vermuten das Problem in der Verbindung zum Broker, die Apache Config
dieser scheint jedoch korrekt und aktiv zu sein. Unser letzter Schluss
war ein Problem mit der Firewall.  
    Letzter Stand: Ich habe die Domäne des Brokers mit der Bitte um eine
Freischaltung in der Firewall an Herrn Rost gesendet und warte auf eine
Rückmeldung. NEUE INFO: am 29.Main (einen Tag nach dem letzten
aufgezeichneten Import) wurde iMedOne geupdated, Sie fragen bei einem
Zuständigen nach

**Ticket#231754:** Kliniken Ostalb, Caroline Grupp, Mario Gajek  
    Erläuterung: Automatisierte "Keine Imports" Benachrichtigung. Die
Ursache wird in E-Care vermutet.   
    Letzter Stand: Herr Gajek möchte wissen, wie er weiter verfahren
soll  
      
**Ticket#231753:** Kliniken Köln, Dominik Weber  
    Erläuterung: Wir wollten wissen, welche Broker Api Keys an welche
Standorte gebunden wurden. Es hat sich herausgestellt, dass die Kliniken
Köln einen Key für drei Standorte momentan verwenden.  
    Letzter Stand: Herr Weber setzt das Zuweisen der Keys für die
jeweiligen Standorte um und gibt uns Bescheid, wenn dies durchgeführt
wurde.   
      
**Ticket#231728:** Bielefeld, Philip Viertel  
    Erläuterung: Bielefeld möchte Kliniken anschließen und hatte
Probleme mit den CDAs  
    Letzter Stand: Wiebke hat sich mit Herrn Viertel in Kontakt gesetzt
und meint, wir melden uns erst wieder Nov/Dez falls die Kliniken nicht
angeschlossen wurden

Dazu kommen einige Tickets die fälschlicherweise an Kliniken gesendet
wurden, die auf fehlende Imports hinweisen. Diese entstanden wohl aus
Arbeiten am Broker Monitor.

## Support Vertretung 19.12.-06.01.2025

Urlaubsbedingt kann Wiliam Hoy den Support in dieser Zeit nicht
übernehmen. Nachfolgend der aktuelle Stand der offenen Tickets mit
Erläuterungen und dem letzten Stand der Bearbeitung.

### Tickets in der Schwebe

<img src="wissen-md/media/media/image1.png"
style="width:4.16667in;height:4.16667in"
alt="Kunstdruck, Leinwandbild, Schweben im Raum von Astrolabs" />

#### https://www.artprintcafe.com/de/neue-trends/6081-77243-astrolabs-schweben-im-raum.html

**Ticket#231861**: Gießen, Frau Blasini

Erläuterung: Beim Abrufen von Fällen über den i2b2 Webclient kommt al
Ergebnis immer 0 (bzw. \< 3) heraus. Die Abfragen sollten die Zahl der
Fälle mit gewünschter Diagnose zurückgeben und selbst wenn der
Überordner mit allen Diagnosen als Kriterium gewählt wurde, wurden keine
Fälle zurückgegeben.

Letzter Stand: Ich hatte ein Meeting vereinbart mit Frau Blasini, die
mir das Problem demonstriert hatte. Daraufhin habe ich mir die
Observation_fact Tabelle in der Postgres DB anzeigen lassen, in der über
200000 Einträge angezeigt werden. Daraufhin habe ich einen Auszug der
Datenbank genommen, um die eingegebenen Werte zu validieren, da die
Importschnittstelle von Frau Blasini selbst geschrieben wurde und ich
einen Fehler mit der Concept_cd Struktur vermute. Ich bin jedoch noch
nicht zur Auswertung des Auszuges gekommen, da ich die Referenzen für
die Concept Codes nicht finden konnte. Den Auszug habe ich Alexander
Kombeiz gesendet.

**Ticket#231860**: Ortenau, Herr Wieselhuber und Herr Eberle

Erläuterung: Das Data Warehouse wurde korrekt aufgesetzt, jedoch
funktioniert der Webclient nicht. Er lässt sich öffnen und man kann sich
anmelden, jedoch erschein ein Fehler wie "Error in ajax cell". 

Letzter Stand: Ich habe eine Anweisung herausgegeben, das OS des Servers
von Ubuntu 20 auf 22 upzugraden. Der nächste Schritt wäre eine komplette
neuinstallation des DWH falls das nicht helfen sollte, denn am 19.12.
soll ein Kickoff Meeting gestartet werden bei dem der Webclient
funktionieren muss.

## Wichtige URLs

Wichtige URLs für den Betrieb eines AKTIN DWH

| Adresse                                                                                                                   | Funktion                                       |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [*http://IHRSERVER*](http://IHRSERVER)/admin                                                                              | i2b2 Nutzerverwaltung                          |
| [*http://IHRSERVER*](http://IHRSERVER)/webclient                                                                          | i2b2 Query Tool                                |
| [*http://IHRSERVER*](http://IHRSERVER)/aktin/admin/                                                                       | Data-Warehouse-Manager                         |
| [*http://IHRSERVER*](http://IHRSERVER)/aktin/cda/fhire/Binary                                                             | Hier schickt man CDA's für den Datenimport hin |
| [*http://IHRSERVER*](http://IHRSERVER)/aktin/admin/plain/test.html                                                        | Seite die Funktionen testet                    |
| <https://aktin-broker.klinikum.rwth-aachen.de/admin/html/>                                                                | live Broker                                    |
| [https://aktin-test-broker.klinikum.rwth-aachen.de/admin/html/](https://aktin-broker.klinikum.rwth-aachen.de/admin/html/) | test Broker                                    |

# Anleitungsartikel

[Add how-to
article](https://confluence-imi.ukaachen.de?createDialogBlueprintId=a16b97ad-2dce-47c8-990f-52924f4c269e&createDialogSpaceKey=AKTIN)

Auf diesen Seiten befinden sich Anleitungsartikel für AKTIN

| Title                                                                                           | Creator                                                                       | Modified     |
|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------------|
| [Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)                                     | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Jun 11, 2025 |
| [Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)                                   | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | May 26, 2025 |
| [Zugriff per PGAdmin auf ein lokales AKTIN DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh) | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Apr 23, 2025 |
| [Broker Anfrage](#broker-anfrage)                                                               | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Mar 31, 2025 |
| [HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)                                           | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Nov 08, 2024 |
| [Manuelle Datenabfrage](#manuelle-datenabfrage)                                                 | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | May 16, 2024 |
| [Löschen von Fällen](#löschen-von-fällen)                                                       | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Jul 07, 2023 |
| [Einloggen als root](#schritt-für-schritt-anleitung-1)                                          | [Dominik Brammen](https://confluence-imi.ukaachen.de/display/~dbrammen)       | Jul 23, 2020 |
| [Manuelles AKTIN Update](#manuelles-aktin-update)                                               | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Jul 23, 2020 |
| [DWH Logdateien erstellen](#dwh-logdateien-erstellen)                                           | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Apr 28, 2020 |
| [Installation Broker Monitoring](#installation-broker-monitoring)                               | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Dec 20, 2019 |
| [CDA Import](#cda-import)                                                                       | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Dec 12, 2019 |

## Broker Anfrage

**Diese Anleitung beschreibt das Vorgehen zum Erstellen einer Anfrage
über den AKTIN Broker.**

### Ablauf

Für das Einstellen von Anfragen gilt folgender Ablauf: 

- Programmierung der Abfrage durch das AKTIN-IT Team

- Versand an AKTIN-IT Team inkl. Antrag auf Datenabfrage (darin
  enthalten: Kontaktdaten Anfragende/r, Beschreibung der Abfrage,
  Variablenliste, Text für die Anfrage, Eingrenzung der Kohorte)

- Bearbeitung und Test der Abfrage durch das AKTIN-IT Team am
  Test-Broker

- Versand der Abfrage an 1 Testklinik und ggf. zusätzlich Magdeburg
  (Antragsteller)

- Prüfung der Daten durch MD (felixG)

- Freigabe

- Versand der Abfrage an alle Zielkliniken

Für Serienanfragen gilt: 

- innerhalb einer Serie identisch sein
  müssen: **Titel**, **Auftraggeber**, **Zeitraum**, **Query
  XML**, **Query ID**

**Der Ablauf muss**
[**hier**](https://confluence-imi.ukaachen.de/spaces/AKTIN/pages/7406833/Datenanfragen+und+Datenabfragen)
**Dokumentiert werden.**

Schritt-für-Schritt-Anleitung

 

1.  Zum Verwenden des Testbrokers muss zunächst in der aktin.properties
    der Wert des Parameters „broker.uris“ auf
    [https://](https://broker2.aktin.org/broker/)[aktin-test-broker.klinikum.rwth-aachen.de](http://aktin-test-broker.klinikum.rwth-aachen.de)
    umgestellt werden.

2.  Anmelden auf dem Testbroker:
    <https://aktin-test-broker.klinikum.rwth-aachen.de/admin/html/login.html>

3.  Unter der Liste der bereits bestehenden Anfragen das Formular zur
    Erstellung von neuen Anfragen mit „Show form“ anzeigen lassen
    („AKTIN query request“ im Dropdown ausgewählt lassen).

4.  Optional (empfohlen): Ausgefülltes Formular von bereits
    existierender Anfrage als Template laden. Hierfür die ID der
    entsprechenden Anfrage im Textfeld „Load from existing template“
    eintragen und bestätigen.

5.  Folgende Angaben können bzw. müssen gemacht werden:

    - **Recipients**: Auswahl der Knoten, an die die Anfrage gesendet
      wird. Die Knoten werden gemäß API-Key identifiziert. Ein Test DWH
      kann den default API Key nutzen (Wert:
      broker.keys=XXXyourapikeyXXX)  
       

    - **Referenzzeitpunkt**: Zeitpunkt mit dem, in Kombination mit dem
      relativen Zeitraum (s.u.), der absolute Zeitraum bestimmt wird aus
      dem die Daten verwendet werden.

    - **Geplante Ausführung**: Datum an dem die SQL-Abfrage ausgeführt
      wird. Wird eine Anfrage erst nach diesem Datum zur Ausführung
      freigegeben, wird die Ausführung nachträglich sofort nach Freigabe
      durchgeführt.

    - **Title**: Title der Anfrage. Innerhalb einer Serie muss dieser
      bei jeder Anfrage identisch sein.

    - **Beschreibung**: Informationen zu der Abfrage. Bei Anfragen, die
      auf dem Produktiv-Broker erstellt werden, sollte hier beschrieben
      werden welche Daten abgefragt werden.

    - **Auftraggeber**: Name, Organisation (optional) und E-Mail-Adresse
      des Forschers, der die Anfrage in Auftrag gegeben hat. Innerhalb
      einer Serie müssen diese Angaben bei jeder Anfrage identisch sein.

    - **Zeitraum**: Relativer Zeitraum, der ausgehend vom
      Referenzzeitpunkt das Intervall bestimmt aus dem die Daten
      verwendet werden. Innerhalb einer Serie muss dieser bei jeder
      Anfrage identisch sein.

    - Zusätzlich bei Serienanfragen (durch Klicken auf das umklammerte
      „single execution“ in der Überschrift kann zwischen Einzel- und
      Serienanfrage gewechselt werden):

      - **Intervall** (optional): Gibt an in welchem Intervall die
        Serienanfragen gestellt werden. Dies dient lediglich zur
        Information, die tatsächlichen zeitlichen Abstände zwischen den
        Anfragen können sich hiervon unterscheiden. Es muss im
        ISO_8601-Format angegeben werden, wobei nur die Angabe von Tag
        und Monat erlaubt ist. Bsp.: P7D entspricht einem Intervall von
        7 Tagen.

      - **Query ID**: ID der Serie. Alle Anfragen mit der gleichen
        Query-ID gehören zu einer Serie. Bei Erstellung einer neuen
        Anfrage bitte einfach nur die ID inkrementieren.

    - **Query XML**: Beinhaltet die SQL-Abfrage der Anfrage. Bei
      invalidem SQL schlägt die Ausführung der Anfrage fehl. Innerhalb
      einer Serie muss diese bei jeder Anfrage identisch sein.

      - Wenn das Formular einer bestehenden Anfrage (z.Z. bis
        Anfrage 240) als Template geladen wurde, befindet sich hier die
        SQL-Abfrage der monatlichen AKTIN-Benchmark-Anfrage.

6.  Nach dem Ausfüllen das Erstellen mit dem Button „New Request“
    bestätigen. Bis die Anfrage vom Broker abgeholt wird und im
    DWH-Manager vorhanden ist, kann es einige Zeit dauern. Das
    Abhol-Intervall kann in der aktin.properties unter
    „broker.intervals“ angepasst werden (nach ISO_8601-Format),
    voreingestellt sind 15 Minuten.

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[Broker Anfrage](#broker-anfrage)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[Manuelle Datenabfrage](#manuelle-datenabfrage)

#### Nüzliche Abfrage Syntaxe

| Abfrage                                                           | Syntax                                                                                                                                                                                                                                |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Vollexport Notaufnahme Protokoll, Magdeburger Variablenausprägung | [Vollexport_template_AKTIN_3_4.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_template_AKTIN_3_4.xml?api=v2&modificationDate=1729667795592&version=1)                                                |
| Vollexport Notaufnahme Protokoll, Biometrie Variablenausprägung   | [Vollexport_mit_diagnose_ohneP21_zahlenausprägungen.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_mit_diagnose_ohneP21_zahlenauspr%C3%A4gungen.xml?api=v2&modificationDate=1634136341940&version=1) |
| Vollexport §21 Daten                                              | [Vollexport_template_P21_3_3.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_template_P21_3_3.xml?api=v2&modificationDate=1729667806461&version=1)                                                    |
| XML Hülle                                                         | [XML_template.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/XML_template.xml?api=v2&modificationDate=1634137101486&version=1)                                                                                  |

| File                                                                                                                                                                                                  | Modified                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| XML File [Vollexport_mit_diagnose_ohneP21.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_mit_diagnose_ohneP21.xml?api=v2)                                            | Oct 13, 2021 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [Vollexport_mit_diagnose_ohneP21_zahlenausprägungen.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_mit_diagnose_ohneP21_zahlenauspr%C3%A4gungen.xml?api=v2) | Oct 13, 2021 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| Text File [Vollexport_P21 Data.txt](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_P21%20Data.txt?api=v2)                                                                 | Oct 13, 2021 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [P21_Abfrage.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/P21_Abfrage.xml?api=v2)                                                                                    | Oct 13, 2021 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| Text File [Abfrage_ENQuIRE_P21_300721.txt](https://confluence-imi.ukaachen.de/download/attachments/7407083/Abfrage_ENQuIRE_P21_300721.txt?api=v2)                                                     | Oct 13, 2021 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [XML_template.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/XML_template.xml?api=v2)                                                                                  | Oct 13, 2021 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [Vollexport_template_AKTIN_3_4.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_template_AKTIN_3_4.xml?api=v2)                                                | Oct 23, 2024 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [Vollexport_template_P21_3_3.xml](https://confluence-imi.ukaachen.de/download/attachments/7407083/Vollexport_template_P21_3_3.xml?api=v2)                                                    | Oct 23, 2024 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |

## CDA Import

**Diese Anleitung erklärt wie CDAs manuell an ein AKTIN DWH verschickt
werden können.**

### Einzelimport

### Fügen Sie die erforderlichen Schritte hinzu:

1.  import.sh herunterladen

2.  Datei in Texteditor öffnen

3.  (IP-des-Servers) ersetzten mit der tatsächlichen IP

    <img src="wissen-md/media/media/image2.png"
    style="width:5.40069in;height:0.36005in" />

4.  (CDA-Datei) mit einer tatsächlichen Datei ersetzten (Beispiel
    Download bereit)

5.  In einer Shell das Script ausführen (z.B. Git-Bash) mit ./import.sh

6.  Rückmeldungen sind analog zu http Rückmeldungen wie z.B. 200 = Fall
    geupdated, 201 = Fall erstellt, 503 = Server nicht erreichbar, 400 =
    Fehlerhafte Anfrage (bei ungültigen CDA)

### Batchimport

*Fügen Sie die erforderlichen Schritte hinzu:*

1.   CDA-Testdaten-Import.zip runterladen und entpacken

2.  batch_import.sh mit einem Text-Editor öffnen

    <img src="wissen-md/media/media/image3.png"
    style="width:5.40069in;height:1.40239in" />

3.  Zeile 2: durch das verstellen der 1 bzw. 10 kann die Anzahl (und die
    gewählten IDs) der erstellten CDA’s geändert werden

4.  Zeile 4: In newtime kann das Erstellungsdatum geändert werden

5.  Zeile 9: Kommentar (#) entfernen und xxxtestserverxxx mit der
    tatsächlichen IP ersetzten

6.  Zeile 10: Falls die entstehenden CDAs nicht behalten werden sollen,
    hier Kommentar entfernen

7.  In einer Shell das Script ausführen (z.B. Git-Bash) mit
    ./batch_import.sh

8.  Rückmeldungen sind analog zu http Rückmeldungen wie z.B. 200 = Fall
    geupdated, 201 = Fall erstellt, 503 = Server nicht erreichbar, 400 =
    Fehlerhafte Anfrage (bei ungültigen CDA)

|     |
|-----|

### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

| File                                                                                                                                                                                 | Modified                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| PNG File [image2019-12-11_15-59-56.png](https://confluence-imi.ukaachen.de/download/attachments/7406981/image2019-12-11_15-59-56.png?api=v2)                                         | Dec 11, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| PNG File [image2019-12-11_16-8-13.png](https://confluence-imi.ukaachen.de/download/attachments/7406981/image2019-12-11_16-8-13.png?api=v2)                                           | Dec 11, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| ZIP Archive [CDA-Testdaten-Import.zip](https://confluence-imi.ukaachen.de/download/attachments/7406981/CDA-Testdaten-Import.zip?api=v2)                                              | Dec 12, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [basismodul-v2-beispiel-storyboard01-complete.xml](https://confluence-imi.ukaachen.de/download/attachments/7406981/basismodul-v2-beispiel-storyboard01-complete.xml?api=v2) | Dec 12, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [basismodul-v2-beispiel-storyboard01-ID-Test.xml](https://confluence-imi.ukaachen.de/download/attachments/7406981/basismodul-v2-beispiel-storyboard01-ID-Test.xml?api=v2)   | Dec 12, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| File [import.sh](https://confluence-imi.ukaachen.de/download/attachments/7406981/import.sh?api=v2)                                                                                   | Dec 12, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [basismodul-v2-beispiel-storyboard01.xml](https://confluence-imi.ukaachen.de/download/attachments/7406981/basismodul-v2-beispiel-storyboard01.xml?api=v2)                   | Dec 12, 2019 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |

## Debug RScript

Um RScript zu debuggen muss die folgende Variable in aktin.properties
auf true gesetzt werden:

<img src="wissen-md/media/media/image4.png"
style="width:5.90069in;height:2.08077in" />

Nach Neustart des DWH sollte eine Zeile angegeben sein, welche den
temporären Speicherort der Dateien
ausgibt:<img src="wissen-md/media/media/image5.png"
style="width:5.90069in;height:0.415in" />

Das Rscript kann durch folgenden Befehl ausgeführt werden und verwendet
dafür die temporären diagnosen/patienten/Encounter txt Dateien.

<img src="wissen-md/media/media/image6.png"
style="width:5.90069in;height:0.415in" />

Wichtig ist nach erfolgreichem Debuggen die Aktin.properties Variable
wieder auf false zu setzen. 

## DWH Logdateien erstellen

Diagnotik Script ausführen um lokale Logdateien zu exportieren.

### Schritt-für-Schritt-Anleitung

login as: root

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>cd /opt/aktin/diagnostic_script</p>
<p>./aktindiag.sh</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 1 Als Root ausführen

Logdateien befinden sich in Datei: aktindiag.tar.gz

### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

## Schritt-für-Schritt-Anleitung

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><mark>sudo -s</mark></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- Page:[Broker Anfrage](#broker-anfrage)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

## HTTPS-Zugriff aktivieren

**Diese Anleitung erklärt wie ein Standort das HTTPS Transportprotokoll
aktivieren kann. **

### Hintergrund

Der Apache2 auf dem Data Warehouse Server nutzt HTTP als
Transportprotokoll, sei es beim Import eines CDAs oder beim Aufrufen der
Adminkonsole. Falls man das HTTPS Protokoll für mehr Sichereit verwenden
möchte, wird dies in der unbearbeiteten Version des DWH nicht
unterstützt.

### Lösung

Durch Änderungen in der Apache2 Konfiguration und der Erstellung eines
Zertifikats ist es möglich einen Selbst Zertifizierenden HTTPS Zugang zu
ermöglichen.

### Anmerkungen

Durch das Selbstzertifizieren, bei dem der Standort ohne anerkannte
Zertifizierungsstelle ein Zertifikat ausstelt, wird der Schlüssel als
nicht vertrauenswürdig anerkannt. Das sollte jedoch keine Auswirkungen
auf die Funktionalität des Data Warehouse haben.

### Anleitung

<img src="wissen-md/media/media/image7.png"
style="width:3.46875in;height:2.60417in" /> 

|     |
|-----|

#### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

## I2B2 Berechtigungen von Usern

Zwei User werden erstellt user a und b, mit user a als Admin und user b
als kein Admin. Beachten Sie, dass keine weiteren Parameter oder
Projekte zugeordnet worden sind.

<img src="wissen-md/media/media/image8.png"
style="width:5.90069in;height:2.47388in" />

<img src="wissen-md/media/media/image9.png"
style="width:5.90069in;height:2.47388in" />

User a) sollte sich nun in dem Data Warehouse Manager (DWH) einloggen
können nicht aber im I2B2. User b) sollte sich nirgendwo einloggen
können. 

Nun fügen wir beide User zu dem AKTIN Projekt hinzu:

<img src="wissen-md/media/media/image10.png"
style="width:5.90069in;height:2.47388in" />

<img src="wissen-md/media/media/image11.png"
style="width:5.90069in;height:2.47388in" />

Nun kann a sich in das I2B2 einloggen und besitzt Admin Berechtigungen
inklusive dem Zugang zur Nutzerverwaltung. Auch ein Login für a ist
weiterhin im DWH ist möglich. 

User b) hat nun Zugriff auf das I2B2 als nicht Admin User, also keinen
Zugang zu der Userverwaltung. Allerdings sollte dieser auch keinen
Zugang zu dem DWH haben.

## Installation Broker Monitoring

Installation des Broker Monitoring für den AKTIN Broker

Alle Schritte dieser Anleitung werden als Root unter RedHat vorgenommen.
Bei anderen Distributionen können die Befehle abweichen. Hier verwendete
Benutzernamen und Passwörter, abseits von "Root" sind als Platzhalter zu
betrachten und durch eigens erzeugte zu ersetzen. Auch sollte immer auf
Versionsnummern in den Befelhen geachtet werden, diese können sich im
Laufe der Zeit ändern (Z.B.: Neue Version von OpenJDK 8).

### Schritt-für-Schritt-Anleitung

Alle Schritte dieser Anleitung werden als Root unter RedHat vorgenommen.
Bei anderen Distributionen können die Befehle abweichen. Hier verwendete
Benutzernamen und Passwörter, abseits von "Root" sind als Platzhalter zu
betrachten und durch eigens erzeugte zu ersetzen. Auch sollte immer auf
Versionsnummern in den Befelhen geachtet werden, diese können sich im
Laufe der Zeit ändern (Z.B.: Neue Version von OpenJDK 8).

1.   Installation von MySQL (Anleitung wird als root ausgeführt auf Red
    Hat 7):

    1.  Das MySQL Repository muss installiert werden, sofern nciht
        bereits geschehen.

| yum localinstall https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm |
|---------------------------------------------------------------------------------------|

Code block 2 MySQL Repository installieren

2.  Installation von MySQL:

| yum install mysql-community-server |
|------------------------------------|

Code block 3 Installation MySQL

3.  MySQL Service starten und einschalten:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>systemctl start mysqld.service ## use restart after update</p>
<p> </p>
<p>systemctl enable mysqld.service</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 4 Service Config

4.  Root Passwort erzeugen (Im Output erscheint anschließend das
    erzeugte Passwort in der Konsole):

| grep 'A temporary password is generated for root@localhost' /var/log/mysqld.log \|tail -1 |
|-------------------------------------------------------------------------------------------|

Code block 5 Zufalls-Root-Passwort erzeugen

5.  MySQL Secure Installation:

    1.  **Change root password**

    2.  **Remove anonymous users**

    3.  **Disallow root login remotely**

    4.  **Remove test database and access to it**

    5.  **Reload privilege tables**

| /usr/bin/mysql_secure_installation |
|------------------------------------|

Code block 6 Start Secure Installation

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Securing the MySQL server deployment.</p>
<p> </p>
<p>Enter password <strong>for</strong> user root:</p>
<p> </p>
<p>The existing password <strong>for</strong> the user account root has
expired. Please set a new password.</p>
<p> </p>
<p>New password:</p>
<p> </p>
<p>Re-enter new password:</p>
<p> </p>
<p>VALIDATE PASSWORD PLUGIN can be used to test passwords</p>
<p>and improve security. It checks the strength of password</p>
<p>and allows the users to set only those passwords which are</p>
<p>secure enough. Would you like to setup VALIDATE PASSWORD plugin?</p>
<p> </p>
<p>Press y|Y <strong>for</strong> Yes, any other key
<strong>for</strong> No: y</p>
<p> </p>
<p>There are three levels of password validation policy:</p>
<p> </p>
<p>LOW Length &gt;= 8</p>
<p>MEDIUM Length &gt;= 8, numeric, mixed <strong>case</strong>, and
special characters</p>
<p>STRONG Length &gt;= 8, numeric, mixed <strong>case</strong>, special
characters and dictionary file</p>
<p> </p>
<p>Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 0</p>
<p>Using existing password <strong>for</strong> root.</p>
<p> </p>
<p>Estimated strength of the password: 100</p>
<p>Change the password <strong>for</strong> root ? ((Press y|Y
<strong>for</strong> Yes, any other key <strong>for</strong> No) : y</p>
<p> </p>
<p>New password:</p>
<p> </p>
<p>Re-enter new password:</p>
<p> </p>
<p>Estimated strength of the password: 50</p>
<p>Do you wish to <strong>continue</strong> with the password
provided?(Press y|Y <strong>for</strong> Yes, any other key
<strong>for</strong> No) : y</p>
<p>By default, a MySQL installation has an anonymous user,</p>
<p>allowing anyone to log into MySQL without having to have</p>
<p>a user account created <strong>for</strong> them. This is intended
only <strong>for</strong></p>
<p>testing, and to make the installation go a bit smoother.</p>
<p>You should remove them before moving into a production</p>
<p>environment.</p>
<p> </p>
<p>Remove anonymous users? (Press y|Y <strong>for</strong> Yes, any
other key <strong>for</strong> No) : y</p>
<p>Success.</p>
<p> </p>
<p> </p>
<p>Normally, root should only be allowed to connect from</p>
<p>'localhost'. This ensures that someone cannot guess at</p>
<p>the root password from the network.</p>
<p> </p>
<p>Disallow root login remotely? (Press y|Y <strong>for</strong> Yes,
any other key <strong>for</strong> No) : y</p>
<p>Success.</p>
<p> </p>
<p>By default, MySQL comes with a database named 'test' that</p>
<p>anyone can access. This is also intended only <strong>for</strong>
testing,</p>
<p>and should be removed before moving into a production</p>
<p>environment.</p>
<p> </p>
<p> </p>
<p>Remove test database and access to it? (Press y|Y
<strong>for</strong> Yes, any other key <strong>for</strong> No) : y</p>
<p>- Dropping test database...</p>
<p>Success.</p>
<p> </p>
<p>- Removing privileges on test database...</p>
<p>Success.</p>
<p> </p>
<p>Reloading the privilege tables will ensure that all changes</p>
<p>made so far will take effect immediately.</p>
<p> </p>
<p>Reload privilege tables now? (Press y|Y <strong>for</strong> Yes, any
other key <strong>for</strong> No) : y</p>
<p>Success.</p>
<p> </p>
<p>All <strong>done</strong>!</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 7 Konfigurations-Dialog

6.  Verbindung zur Datenbank:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>mysql -u root -p</p>
<p> </p>
<p>## OR ##</p>
<p>mysql -h localhost -u root -p</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 8 Datenbankzugriff

7.  Anlegen einer Datenbank (Beispiel):

    1.  DB_NAME = webdb

    2.  USER_NAME = webdb_user

    3.  REMOTE_IP = 10.0.15.25

    4.  PASSWORD = password123

    5.  PERMISSIONS = ALL

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>## <strong>CREATE</strong> <strong>DATABASE</strong> ##</p>
<p>mysql&gt; <strong>CREATE</strong> <strong>DATABASE</strong>
webdb;</p>
<p> </p>
<p>## <strong>CREATE</strong> USER ##</p>
<p>mysql&gt; <strong>CREATE</strong> USER 'webdb_user'@'10.0.15.25'
IDENTIFIED <strong>BY</strong> 'password123';</p>
<p> </p>
<p>## <strong>GRANT</strong> PERMISSIONS ##</p>
<p>mysql&gt; <strong>GRANT</strong> ALL <strong>ON</strong> webdb.*
<strong>TO</strong> 'webdb_user'@'10.0.15.25';</p>
<p> </p>
<p>## FLUSH <strong>PRIVILEGES</strong>, Tell the server
<strong>to</strong> reload the <strong>grant</strong> tables ##</p>
<p>mysql&gt; FLUSH <strong>PRIVILEGES</strong>;</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 9 Beispiel DB-Erzeugung

8.  Firewall-Konfiguration:

| firewall-cmd --permanent --zone=public --add-port=3306/tcp |
|------------------------------------------------------------|

Code block 10 Firewall-Ausnahme hinzufügen

| systemctl restart firewalld.service |
|-------------------------------------|

Code block 11 Firewall neu starten

9.  Folgende Tabellen müssen in der angelegten Datenbank erzeugt werden:

    1.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>CREATE</strong> <strong>TABLE</strong> `aktin_nodes`
(</p>
<p>`id_aktin_nodes` <strong>int</strong>(11) NOT NULL,</p>
<p>`aktin_clientDN` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_monitor_node` tinyint(1) NOT NULL,</p>
<p>`aktin_last_start` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_last_contact` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_last_write` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_last_reject` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_imported` <strong>int</strong>(11) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_updated` <strong>int</strong>(11) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_invalid` <strong>int</strong>(11) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_failed` <strong>int</strong>(11) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_last_weekly` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_last_monthly` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_next_delay_reno` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_next_error_reno` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_next_no_import_reno` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p><strong>PRIMARY</strong> <strong>KEY</strong> (`id_aktin_nodes`)</p>
<p>) ENGINE=InnoDB <strong>DEFAULT</strong> CHARSET=utf8</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 12 Tabelle: aktin_nodes

2.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>CREATE</strong> <strong>TABLE</strong>
`aktin_email_contacts` (</p>
<p>`id_aktin_email_contacts` <strong>int</strong>(11) NOT NULL
AUTO_INCREMENT,</p>
<p>`aktin_email_name` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_email_adress` <strong>varchar</strong>(255) NOT NULL,</p>
<p>`aktin_email_node_id` <strong>int</strong>(11) NOT NULL,</p>
<p>`aktin_email_notify_on_error` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_notify_on_delay` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_weekly_report` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_monthly_report` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_notify_on_no_imports` tinyint(1)
<strong>DEFAULT</strong> NULL,</p>
<p><strong>PRIMARY</strong> <strong>KEY</strong>
(`id_aktin_email_contacts`),</p>
<p><strong>KEY</strong> `aktin_node_id_key_idx`
(`aktin_email_node_id`),</p>
<p><strong>CONSTRAINT</strong> `node_id_key` <strong>FOREIGN</strong>
<strong>KEY</strong> (`aktin_email_node_id`) <strong>REFERENCES</strong>
`aktin_nodes` (`id_aktin_nodes`) <strong>ON</strong>
<strong>DELETE</strong> <strong>RESTRICT</strong> <strong>ON</strong>
<strong>UPDATE</strong> <strong>RESTRICT</strong></p>
<p>) ENGINE=InnoDB AUTO_INCREMENT=13 <strong>DEFAULT</strong>
CHARSET=utf8</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 13 Tabelle: aktin_email_contacts

3.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>CREATE</strong> <strong>TABLE</strong>
`aktin_email_contacts` (</p>
<p>`id_aktin_email_contacts` <strong>int</strong>(11) NOT NULL
AUTO_INCREMENT,</p>
<p>`aktin_email_name` <strong>varchar</strong>(255)
<strong>DEFAULT</strong> NULL,</p>
<p>`aktin_email_adress` <strong>varchar</strong>(255) NOT NULL,</p>
<p>`aktin_email_node_id` <strong>int</strong>(11) NOT NULL,</p>
<p>`aktin_email_notify_on_error` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_notify_on_delay` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_weekly_report` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_monthly_report` tinyint(1) <strong>DEFAULT</strong>
NULL,</p>
<p>`aktin_email_notify_on_no_imports` tinyint(1)
<strong>DEFAULT</strong> NULL,</p>
<p><strong>PRIMARY</strong> <strong>KEY</strong>
(`id_aktin_email_contacts`),</p>
<p><strong>KEY</strong> `aktin_node_id_key_idx`
(`aktin_email_node_id`),</p>
<p><strong>CONSTRAINT</strong> `node_id_key` <strong>FOREIGN</strong>
<strong>KEY</strong> (`aktin_email_node_id`) <strong>REFERENCES</strong>
`aktin_nodes` (`id_aktin_nodes`) <strong>ON</strong>
<strong>DELETE</strong> <strong>RESTRICT</strong> <strong>ON</strong>
<strong>UPDATE</strong> <strong>RESTRICT</strong></p>
<p>) ENGINE=InnoDB AUTO_INCREMENT=13 <strong>DEFAULT</strong>
CHARSET=utf8</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 14 Tabelle: aktin_email_contacts

2.  Konfiguration der BrokerMonitoringApp (Konfiguration muss vor dem
    bauen mit Maven vorgenommen werden):

    1.  Viele Parameter der App können über eine Properties-Datei
        konfiguriert werden ein aktuelles Beispiel der Datei:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>#Refreshrate of the monitoring thread on the server in
milliseconds</p>
<p>broker.monitoring.refresh.rate = 1800000</p>
<p>#</p>
<p>#Settings for the access on the broker</p>
<p>#</p>
<p>#URL of broker host adress</p>
<p>broker.host=https://broker.aktin.org</p>
<p>#path on host to auth service</p>
<p>broker.auth.path=/auth/login</p>
<p>#path on host to node list</p>
<p>broker.nodes.path=/broker/node/</p>
<p>#path on host to individual stats of the nodes</p>
<p>broker.nodes.stats.id=/stats/</p>
<p>#path to information to different software versions of support
software on the server of a node</p>
<p>broker.nodes.versions.id=/versions/</p>
<p>#login name to the broker</p>
<p>broker.user.name=something</p>
<p>#password to login name to he broker</p>
<p>broker.user.password=password</p>
<p>#</p>
<p>#The following settings are for the email client and depend on the
used email server/service</p>
<p>#</p>
<p>#enables tls encryption in the email client</p>
<p>broker.mail.smtp.tls=true</p>
<p>#enables ssl encryption in the mail client</p>
<p>broker.mail.smtp.ssl=false</p>
<p>#enables the usage of a proxy connection</p>
<p>broker.mail.smtp.proxy=false</p>
<p>#The url to the email smtp host</p>
<p>broker.mail.smtp.host=smtp.uni-oldenburg.de</p>
<p>#The port of the email server/service</p>
<p>broker.mail.smtp.port=587</p>
<p>#host url of the proxy connection</p>
<p>broker.mail.proxy.host=host.de</p>
<p>#port of the used proxy connection</p>
<p>broker.mail.proxy.port=587</p>
<p>#username for the authentication in the used proxy connection</p>
<p>broker.mail.proxy.username=blank</p>
<p>#password for the authentication in the used proxy connection</p>
<p>broker.mail.proxy.password=blank</p>
<p>#username for the authentication on the email server/service</p>
<p>broker.mail.username=username</p>
<p>#password for the authentication on the email server/service</p>
<p>broker.mail.password=password</p>
<p>#sender email adress</p>
<p>broker.mail.from=it-support@aktin.org</p>
<p>#email adress for reply</p>
<p>broker.mail.reply.to.adress=it-support@aktin.org</p>
<p>#name of replicant</p>
<p>broker.mail.reply.to.name=AKTIN Support</p>
<p>#</p>
<p>#Names and Email adresses for notification within the broker
monitoring</p>
<p>#</p>
<p>broker.mail.admin.name=Test Admin</p>
<p>broker.mail.admin.adress=test.admin@uol.de</p>
<p>broker.mail.projectlead.name=Test Projectlead</p>
<p>broker.mail.projectlead.adress=test.projectlead.uol.de</p>
<p>#</p>
<p>#Tags to parse the xml responses from the broker</p>
<p>#</p>
<p>broker.response.xml.tag.node.id=ns2:id</p>
<p>broker.response.xml.tag.node.clientDN=ns2:clientDN</p>
<p>broker.response.xml.tag.node.last-contact=ns2:last-contact</p>
<p>broker.response.xml.tag.node.start=start</p>
<p>broker.response.xml.tag.node.last-write=last-write</p>
<p>broker.response.xml.tag.node.last-reject=last-reject</p>
<p>broker.response.xml.tag.node.imported=imported</p>
<p>broker.response.xml.tag.node.updated=updated</p>
<p>broker.response.xml.tag.node.invalid=invalid</p>
<p>broker.response.xml.tag.node.failed=failed</p>
<p>#</p>
<p>#Settings for the monitoring process</p>
<p>#</p>
<p>#Maximum delay of node contact in hours</p>
<p>broker.time.acceptanceInterval=24</p>
<p>#Maximum delay of imports by node in hours value should not below
"broker.time.acceptanceInterval"</p>
<p>broker.time.no.imports.acceptanceInterval=48</p>
<p>#Minimum amount on data insert events (import, update, invalid and
failed) on the node to calculate error rate</p>
<p>broker.statistics.evaluation.border=100</p>
<p>#The accepted error rate, values above will trigger notification</p>
<p>broker.statistics.evaluation.error.limit=0.01</p>
<p>#The time range for the error rate calculation</p>
<p>broker.statistics.evaluation.error.time.days=7</p>
<p>#Min number of invalid imports for the error rate calculation</p>
<p>broker.statistics.evaluation.error.min.invalid=3</p>
<p>#Defines the intervals to resend a notification</p>
<p>broker.notification.resend.in.days=7</p>
<p>broker.notification.error.resend.in.days=14</p>
<p>#</p>
<p>#The percentage to split any border interval to show a signal like a
traffic light. Red will be above border, green under the percentage and
yellow between these values</p>
<p>#</p>
<p>broker.border.split.for.signal=0.5</p>
<p>#</p>
<p>#The hours to split any border interval to show a signal like a
traffic light. Red will be above border, green under the configured
amount of hours and yellow between these values</p>
<p>#</p>
<p>broker.border.split.for.signal.last.contact.hours=2</p>
<p>#The hours to split any border interval to show a signal like a
traffic light. Red will be above border, green under the configured
amount of hours and yellow between these values</p>
<p>#</p>
<p>broker.border.split.for.signal.last.import.hours=12</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 15 Datei: application.properties

2.  Das Benutzermanagement wird über eine Spring-Bibilothek abgewickelt,
    hier für müssen nur Umgebungsparameter und Benutzer einer Datei
    definiert werden. Ein Beispiel der Datei:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>&lt;?<strong>xml</strong> version="1.0" encoding="UTF-8"?&gt;</p>
<p>&lt;<strong>beans</strong>:beans</p>
<p>xmlns="http://www.springframework.org/schema/security"</p>
<p>xmlns:beans="http://www.springframework.org/schema/beans"</p>
<p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p>
<p>xsi:schemaLocation="http://www.springframework.org/schema/beans</p>
<p>http://www.springframework.org/schema/beans/spring-beans.xsd</p>
<p>http://www.springframework.org/schema/security</p>
<p>http://www.springframework.org/schema/security/spring-security.xsd"&gt;</p>
<p> </p>
<p>&lt;<strong>http</strong> auto-config="true"
use-expressions="true"&gt;</p>
<p>&lt;<strong>intercept</strong>-url pattern="/nodelist/**"</p>
<p>access="hasAnyRole('ROLE_ADMIN','ROLE_USER')" /&gt;</p>
<p>&lt;<strong>intercept</strong>-url pattern="/"</p>
<p>access="hasAnyRole('ROLE_ADMIN','ROLE_USER')" /&gt;</p>
<p>&lt;<strong>intercept</strong>-url pattern="/explanation"</p>
<p>access="hasAnyRole('ROLE_ADMIN','ROLE_USER')" /&gt;</p>
<p>&lt;<strong>intercept</strong>-url pattern="/admin"</p>
<p>access="hasRole('ROLE_ADMIN')" /&gt;</p>
<p>&lt;<strong>form</strong>-login login-page="/login"</p>
<p>default-target-url="/nodelist"
authentication-failure-url="/error"</p>
<p>username-parameter="username" password-parameter="password" /&gt;</p>
<p>&lt;<strong>csrf</strong> /&gt;</p>
<p>&lt;<strong>logout</strong> logout-success-url="/logout" /&gt;</p>
<p>&lt;/<strong>http</strong>&gt;</p>
<p> </p>
<p>&lt;<strong>authentication</strong>-manager&gt;</p>
<p>&lt;<strong>authentication</strong>-provider&gt;</p>
<p>&lt;!-- Before the password, there must be an encryption algorithm
tag like</p>
<p>{MD5}. Supported default tags are listed below, see
DelegatingPasswordEncoder.</p>
<p>Additional informations see :
https://docs.spring.io/spring-security/site/docs/5.0.5.RELEASE/reference/htmlsingle/#pe-dpe</p>
<p>(10.3) and
https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/crypto/factory/PasswordEncoderFactories.html
--&gt;</p>
<p>&lt;<strong>user</strong>-service&gt;</p>
<p>&lt;!-- Current in SHA-256 encryption username=user
password=test123--&gt;</p>
<p>&lt;<strong>user</strong> name="user"</p>
<p>password="{SHA-256}ecd71870d1963316a97e3ac3408c9835ad8cf0f3c1bc703527c30265534f75ae"</p>
<p>authorities="ROLE_ADMIN" /&gt;</p>
<p>&lt;/<strong>user</strong>-service&gt;</p>
<p>&lt;<strong>password</strong>-encoder ref="encoder" /&gt;</p>
<p>&lt;/<strong>authentication</strong>-provider&gt;</p>
<p>&lt;/<strong>authentication</strong>-manager&gt;</p>
<p> </p>
<p>&lt;!-- Creates a DelegatingPasswordEncoder with default mappings.
Additional</p>
<p>mappings may be added and the encoding will be updated to conform
with best</p>
<p>practices. However, due to the nature of DelegatingPasswordEncoder
the updates</p>
<p>should not impact users. The mappings current are:</p>
<p>bcrypt - BCryptPasswordEncoder</p>
<p>(Also used for encoding)</p>
<p>ldap - LdapShaPasswordEncoder MD4 - Md4PasswordEncoder</p>
<p>MD5 - new MessageDigestPasswordEncoder("MD5")</p>
<p>noop - NoOpPasswordEncoder</p>
<p>pbkdf2 - Pbkdf2PasswordEncoder</p>
<p>scrypt - SCryptPasswordEncoder</p>
<p>SHA-1 - new MessageDigestPasswordEncoder("SHA-1")</p>
<p>SHA-256 - new MessageDigestPasswordEncoder("SHA-256")</p>
<p>sha256 - StandardPasswordEncoder Returns: the PasswordEncoder to use
--&gt;</p>
<p> </p>
<p>&lt;<strong>beans</strong>:bean id="encoder"</p>
<p>class="org.springframework.security.crypto.factory.PasswordEncoderFactories"</p>
<p>factory-method="createDelegatingPasswordEncoder"&gt;</p>
<p>&lt;/<strong>beans</strong>:bean&gt;</p>
<p> </p>
<p>&lt;/<strong>beans</strong>:beans&gt;</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 16 Datei: application-security.xml

3.  Die Datenbankverbindung muss in der Datei "servlet-context.xml"
    definiert werden. Der Anhang "?serverTimezone=UTC" an den
    Datenbanknamen ist nötig, falls die Zeitzone beim Datenbank server
    nicht auf UTC gesetzt ist (Was sie bei eienr standardinstallation
    anscheinend nciht ist). Ein Beispiel der Konfiguration:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>&lt;<strong>beans</strong>:bean id="dataSource"
class="org.apache.commons.dbcp.BasicDataSource"</p>
<p>destroy-method="close"&gt;</p>
<p>&lt;<strong>beans</strong>:property name="driverClassName"
value="com.mysql.cj.jdbc.Driver" /&gt;</p>
<p>&lt;<strong>beans</strong>:property name="url"</p>
<p>value="jdbc:mysql://localhost:3306/monitoringDB?serverTimezone=UTC"
/&gt;</p>
<p>&lt;<strong>beans</strong>:property name="username" value="somthing"
/&gt;</p>
<p>&lt;<strong>beans</strong>:property name="password"
value="password1234" /&gt;</p>
<p>&lt;/<strong>beans</strong>:bean&gt;</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 17 Datenbankanbindung

|     |
|-----|

### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[Broker Anfrage](#broker-anfrage)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[Manuelle Datenabfrage](#manuelle-datenabfrage)

## Löschen von Fällen

Um die Inkonsistenzen in der Datenbank ihres DWH zu berichtigen, müssten
ggf. Fälle der entsprechenden Monate einmal gelöscht und wieder neu
importiert werden. Man müssen dafür folgendes können bzw. erledigen:

1.  Ein Backup erstellen bzw. zur Hand haben (Zur Sicherheit, da
    temporär alle Fälle gelöscht werden).

2.  Manuell sich per SSH (Putty) auf den Server einloggen und die Fälle
    löschen

3.  Den Nachversand in der jeweiligen CDA Schnittstelle anstoßen (das
    macht in der Regel IT/KIS Abteilungsleiter)

Ein Backup  wird vermutlich meist schon routinemäßig von der VM
erstellt. Für 2.) Sollten man wie folgt vorgehen um die Fälle für das
Jahr 2020 zu löschen:

### Schritt-für-Schritt-Anleitung

- Login als Root

- Wildfly ausschalten

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Wildfly service stop</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Verbinden mit der Postgresshell (angezeigt durch postgres=#) mit den
  Befehlen

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>sudo -su postgres</p>
<p> </p>
<p>psql</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Connect to i2b2 Datenbank mit dem Befehl (in der Postgresshell
  postgres=#):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>postgres=# \c i2b2</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- SQL Statement ausführen (in der i2b2 Datenbank i2b2=#):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>i2b2=# DELETE FROM i2b2crcdata.observation_fact WHERE (start_date
BETWEEN '2019-01-01 00:00' AND '2020-01-01 00:00'); WITH Lookuptable AS
(DELETE from i2b2crcdata.visit_dimension where (start_date BETWEEN
'2019-01-01 00:00' AND '2020-01-01 00:00') returning encounter_num)
delete from i2b2crcdata.encounter_mapping where encounter_num in (select
encounter_num from Lookuptable);</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Aus  Postgresshell ausloggen mit strg+d oder \q

- Wildfly (als rootuser) einschalten

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>su root</p>
<p>Wildfly service start</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Nun sollte für 3.) einen Nachversand der Fälle für 2019 in der CDA
Schnittstelle nochmal anstoßen, dann sollten alle Fälle geupdated
werden.

### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[Broker Anfrage](#broker-anfrage)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[Manuelle Datenabfrage](#manuelle-datenabfrage)

## Manuelle Datenabfrage

Manuelle Datenabfrage via Shell

### Schritt-für-Schritt-Anleitung

1.  Login am AKTIN-Server per z. B. putty als root 

2.  Benutzerwechsel auf Benutzer postgresql, psql shell starten 

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>sudo -su postgres</p>
<p>psql</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 18 connect to postgres

3.  Mit der i2b2 Datenbank verbinden

| postgres=# \c i2b2 |
|--------------------|

Code block 19 connect to i2b2

4.  SQL Abfrage ausführen durch kopieren des SQL Statements und
    bestätigen mit ENTER. Der Code wird ausgeführt.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>i2b2=#CREATE TEMPORARY TABLE temp_encounters</p>
<p>i2b2=# AS</p>
<p>i2b2=#select DISTINCT</p>
<p>...</p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p>i2b2=#COPY temp_encounters TO '/var/tmp/temp_encounters.csv'
DELIMITER ';' CSV HEADER;</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 20 run sql statement

| NIcht vergessen nach der letzten Zeile nocheinmal ENTER zu drücken! |
|---------------------------------------------------------------------|

5.  Ausloggen

| i2b2=# \q |
|-----------|

Code block 21 close connection to i2b2

6.  Abfrage abholen unter  '/var/tmp/ (z.B: mit WinSCP)

| File                                                                                                                                                   | Modified                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| XML File [Vollexport_template_AKTIN_3_4.xml](https://confluence-imi.ukaachen.de/download/attachments/7406853/Vollexport_template_AKTIN_3_4.xml?api=v2) | May 16, 2024 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |
| XML File [Vollexport_template_P21_3_3.xml](https://confluence-imi.ukaachen.de/download/attachments/7406853/Vollexport_template_P21_3_3.xml?api=v2)     | May 16, 2024 by [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) |

### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- Page:[Broker Anfrage](#broker-anfrage)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

## Manuelles AKTIN Update

Update eines EAR von Hand

### Schritt-für-Schritt-Anleitung

- Als Root einloggen

<!-- -->

- Download der EAR  z.B. in root Ordner

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>wget
http://www.aktin.org/software/repo/org/aktin/dwh/dwh-j2ee/1.2rc1/dwh-j2ee-1.2rc1.ear</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Undeployment von allen alten dwh-j2ee: 

  - alte EAR löschen aus /opt/wildfly-9.0.2.Final/standalone/deployments

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>cd /opt/wildfly-9.0.2.Final/standalone/deployments</p>
<p>rm dwh-j2ee-XXXXXXX.ear</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Warten auf das erstellen der ear.undeployed Datei in: 

  - /opt/wildfly-9.0.2.Final/standalone/deployments/xxxxxxxxxxxxxxxx.ear.undeployed

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>ls /opt/wildfly-9.0.2.Final/standalone/deployments/</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Wildfly stoppen

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>service wildfly stop</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

-  Neue EAR deployen :

  - neue .ear  aus 2. (liegt z.B. im Root Ordner) in den deployments
    Ordner kopieren:

    - /opt/wildfly-9.0.2.Final/standalone/deployment

    - Alternativ  die .ear direkt in den Ordner downloaden.

    - 

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>cd /opt/wildfly-9.0.2.Final/standalone/deployment</p>
<p>wget
http://www.aktin.org/software/repo/org/aktin/dwh/dwh-j2ee/1.2rc1/dwh-j2ee-1.2rc1.ear</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Wildfly starten

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>service wildfly start</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

|     |
|-----|

### Verwandte Artikel

- Page:[Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

- Page:[Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

- Page:[Broker Anfrage](#broker-anfrage)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[Manuelle Datenabfrage](#manuelle-datenabfrage)

## Ubuntu Distributions Upgrade

**Diese Anleitung beschreibt das Vorgehen zum Upgraden einer Ubuntu
Version auf die nächste neuere LTS Version.**

### Ablauf

| Schritt | Beschreibung                     | Befehl                                                                                                                                             | Bemerkung                                                                                                                                                                                                                        |
|---------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1       | Repositories aktualisieren       | "sudo apt update"                                                                                                                                  |                                                                                                                                                                                                                                  |
| 2       | Pakete Upgraden                  | "sudo apt upgrade"                                                                                                                                 |                                                                                                                                                                                                                                  |
| 3       |                                  | "sudo apt-get dist-upgrade"                                                                                                                        |                                                                                                                                                                                                                                  |
| 4       | Distributionsupgrade durchführen | "sudo do-release-upgrade"                                                                                                                          | Hier kommt eine Meldung, ob man die aktuelle Konfiguration mit der Konfiguration des Pakete-Managers ersetzen soll (für Paket "SSH" in meinem Testfall). Hier soll die alte Konfiguration beibehalten werden also lehnen wir ab. |
| 5       | Aktin Repo zu sources hinzufügen | "echo "deb <https://www.aktin.org/software/repo/org/apt> \<ununtu_distribution_description\> main" \| sudo tee /etc/apt/sources.list.d/aktin.list" | Für Ubuntu 22 lautet der Befehl: "echo "deb <https://www.aktin.org/software/repo/org/apt> jammy main" \| sudo tee /etc/apt/sources.list.d/aktin.list    "                                                                        |
| 6       | Repositories aktualisieren       | "apt-get update"                                                                                                                                   |                                                                                                                                                                                                                                  |

### Post-Distributionsupgrade Problembehebung

Beim Upgrade kann es sein, dass Apache noch auf veraltete Module zeigt
und dadurch nicht startet. In dem Fall:

<table>
<colgroup>
<col style="width: 9%" />
<col style="width: 21%" />
<col style="width: 34%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr class="header">
<th>Schritt</th>
<th>Beschreibung</th>
<th>Befehl</th>
<th>Bemerkung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Apache2 Status prüfen</td>
<td>"systemctl status apache2"</td>
<td>Wir gehen hier davon aus, dass Apache2 nicht korrekt gestartet
werden konnte</td>
</tr>
<tr class="even">
<td>2</td>
<td>Such nach der Ursache des Abbruchs</td>
<td>-</td>
<td>Suche in den Logs des Status, ob Pakete nicht gefunden wurden, wie
"PHP7.4 not found"</td>
</tr>
<tr class="odd">
<td>3</td>
<td>Nach Paket suchen</td>
<td>"php -v"</td>
<td>Suche für das fehlende paket (hier php) ob eine andere Version durch
das Distributionsupgrade installiert wurde</td>
</tr>
<tr class="even">
<td>4</td>
<td>Falls Paket nicht auf System</td>
<td>-</td>
<td>Paket Installieren</td>
</tr>
<tr class="odd">
<td>4</td>
<td>Neue Version des Pakets verwenden</td>
<td><p>"a2dismod &lt;package&gt;&lt;old_version&gt;</p>
<p>a2enmod &lt;package&gt;&lt;new_version&gt;</p>
<p>systenctrl restart apache2"</p></td>
<td><p>z.B.: </p>
<p>a2dismod php7.4</p>
<p>a2enmod php8.1</p>
<p>systenctrl restart apache2</p></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

 

Schritt-für-Schritt-Anleitung

 

## Ubuntu Speicher Erweiterung

**Diese Anleitung beschreibt das Vorgehen zum Erweitern einer Ubuntu
Partition, bei einer weiteren existierenden leeren Partition . **

### Ablauf

Schritt-für-Schritt-Anleitung

 

sudo pvresize /dev/sda3

sudo vgdisplay

sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv

sudo resize2fs /dev/ubuntu-vg/ubuntu-lv

## Zugriff per PGAdmin auf ein lokales AKTIN DWH

Anleitung für Zugriff auf ein I2B2 DWH mit Postgresql Datenbank via
PGAdmin

### Voraussetzungen

Anmeldung auf Datenbank erfolgt mit User postgres. Standartmäßig ohne
Passwort. Das Passwort  kann mit diesen Befehlen gesetzt werden (oder
ersetzen):

In der shell eingeben:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>sudo -u postgres psql postgres</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Dann folgenden Befehl in die postgres Shell eingeben und das Passwort
setzen:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>postgres=# \password postgres</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Schritt-für-Schritt-Anleitung

1.  in /etc/postgresql/VERSIONSNUMMER/main die config Dateien ändern.
    Zugriff von Extern in postgresql.conf ändern:

| nano /etc/postgresql/12/main/postgresql.conf |
|----------------------------------------------|

2.  Zugriff von Extern in postgresql.conf ändern durch ändern der Zeile
    wie folgt (Auskommentieren und '\*' hinzufügen). Es können auch
    explizite IP Adressen konfiguriert werden.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>#------------------------------------------------------------------------------</p>
<p># CONNECTIONS AND AUTHENTICATION</p>
<p>#------------------------------------------------------------------------------</p>
<p> </p>
<p># - Connection Settings -</p>
<p>listen_addresses = '*' # what IP address(es) to listen on;</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 22 postgresql.conf

3.  Zugriff per MD5/scram-sha-256 Authentifizierung aktivieren in
    pg_hba.conf

| nano /etc/postgresql/12/main/pg_hba.conf |
|------------------------------------------|

4.  Zugriff per MD5 Authentifizierung in postgresql.conf ändern durch 
    ändern der Zeile wie folgt (IP des Zugreifenden Systems muss
    hinzugefügt werden):

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p># DO NOT DISABLE!</p>
<p># If you change this first entry you will need to make sure that
the</p>
<p># database superuser can access the database using some other
method.</p>
<p># Noninteractive access to all databases is required during
automatic</p>
<p># maintenance (custom daily cronjobs, replication, and similar
tasks).</p>
<p>#</p>
<p># Database administrative login by Unix domain socket</p>
<p>local all postgres peer</p>
<p> </p>
<p># TYPE DATABASE USER ADDRESS METHOD</p>
<p> </p>
<p># "local" is for Unix domain socket connections only</p>
<p>local all all peer</p>
<p> </p>
<p># IPv4 local connections:</p>
<p>host all all 127.0.0.1/32 md5</p>
<p> </p>
<p># IPv6 local connections:</p>
<p>host all all ::1/128 md5</p>
<p> </p>
<p># Allow replication connections from localhost, by a user with
the</p>
<p># replication privilege.</p>
<p>local replication all peer</p>
<p>host replication all 127.0.0.1/32 md5</p>
<p>host replication all ::1/128 md5</p>
<p> </p>
<p>host all all 0.0.0.0/0 md5</p>
<p>host all all ::/0 md5</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 23 pg_hba.conf

> oder in neueren Postgres Versionen: 

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p># DO NOT DISABLE!</p>
<p># If you change <strong>this</strong> first entry you will need to
make sure that the</p>
<p># database superuser can access the database using some other
method.</p>
<p># Noninteractive access to all databases is required during
automatic</p>
<p># maintenance (custom daily cronjobs, replication, and similar
tasks).</p>
<p>#</p>
<p># Database administrative login by Unix domain socket</p>
<p>local all postgres peer</p>
<p> </p>
<p># TYPE DATABASE USER ADDRESS METHOD</p>
<p> </p>
<p># "local" is <strong>for</strong> Unix domain socket connections
only</p>
<p>local all all peer</p>
<p># IPv4 local connections:</p>
<p>host all all 127.0.0.1/32 scram-sha-256</p>
<p># IPv6 local connections:</p>
<p>host all all ::1/128 scram-sha-256</p>
<p># Allow replication connections from localhost, by a user with
the</p>
<p># replication privilege.</p>
<p>local replication all peer</p>
<p>host replication all 127.0.0.1/32 scram-sha-256</p>
<p>host replication all ::1/128 scram-sha-256</p>
<p>host all all 0.0.0.0/0 scram-sha-256</p>
<p>host all all ::/0 scram-sha-256</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

5.  Postgresql und Wildfly neustarten

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>service postgresql restart</p>
<p>service wildfly restart</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

6.  Zugriff per PGAdmin(v4 oder höher) mit folgender Konfiguration:

<img src="wissen-md/media/media/image12.png"
style="width:3.93214in;height:4.16667in" />

### Verwandte Artikel

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[DWH Logdateien erstellen](#dwh-logdateien-erstellen)

# Fehlerbehebungsartikel

[Add troubleshooting
article](https://confluence-imi.ukaachen.de?createDialogBlueprintId=61cf3a09-11aa-4cc7-9708-36893724e901&createDialogSpaceKey=AKTIN)

| Title                                                                                                                                       | Creator                                                                       | Modified     |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------------|
| [Monatsbericht/Report: Abnormal Termination Exception](#monatsberichtreport-abnormal-termination-exception)                                 | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Aug 05, 2025 |
| [DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart) | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Jun 11, 2025 |
| [Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)                                                                                   | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Jun 10, 2025 |
| [Wildfly hat keine Verbindung zu Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)                                                   | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Jun 10, 2025 |
| [DWH 1.6 Update depends on postgresql \<=229](#dwh-1.6-update-depends-on-postgresql-229)                                                    | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Jun 02, 2025 |
| [Adminkonsole Fehler 404](#adminkonsole-fehler-404)                                                                                         | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | May 07, 2025 |
| [DWH Update 1.6 verbindet sich nicht mehr mit dem Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)                         | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Apr 30, 2025 |
| [Falsche IP auf automatisierten Mails des DWHs](#falsche-ip-auf-automatisierten-mails-des-dwhs)                                             | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Apr 23, 2025 |
| [Monatsbericht nicht erstellt: Patient ohne ID](#monatsbericht-nicht-erstellt-patient-ohne-id)                                              | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Oct 24, 2024 |
| [Installation des DWH auf Ubuntu 24.04LTS](#installation-des-dwh-auf-ubuntu-24.04lts)                                                       | [Wiliam Hoy](https://confluence-imi.ukaachen.de/display/~whoy)                | Oct 23, 2024 |
| [Anfragen an das DWH führen zu Absturz](#anfragen-an-das-dwh-führen-zu-absturz)                                                             | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Apr 27, 2020 |
| [Firewall Probleme: Proxy](#firewall-probleme-proxy)                                                                                        | [Jonas Bienzeisler](https://confluence-imi.ukaachen.de/display/~jbienzeisler) | Dec 18, 2019 |

## Adminkonsole Fehler 404

### Hintergrund

Beim Aufrufen der Adminkonsole kann es sein, dass keien Ressourcen
gefunden werden können. Das traf in der Vergangenheit auf, wenn die
Ubuntu Version oder DWH Version verändert wurde.

### Fehlersuche

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 12%" />
<col style="width: 32%" />
<col style="width: 13%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th>Schritt</th>
<th>Beschreibung</th>
<th>Befehl</th>
<th>Ausschnitt</th>
<th>Bemerkung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Wildfly Status checken</td>
<td><p><strong>sudo service wildfly status</strong></p>
<p>oder</p>
<p><strong>sudo systemctl status wildfly.service</strong></p></td>
<td><img src="wissen-md/media/media/image13.png"
style="width:1.12431in;height:0.36931in" /></td>
<td><ul>
<li><p>muss active(running) anzeigen</p></li>
</ul></td>
</tr>
<tr class="even">
<td>2</td>
<td>Wildfly Logs checken</td>
<td><strong>sudo nano
/opt/wildfly/standalone/log/server.log</strong></td>
<td></td>
<td><ul>
<li><p>suche nach logs die "ERROR" anzeigen</p></li>
</ul></td>
</tr>
<tr class="odd">
<td>3</td>
<td>Deployments ansehen</td>
<td><strong>sudo ls /opt/wildfly/standalone/deployments/</strong></td>
<td><img src="wissen-md/media/media/image14.png"
style="width:1.12431in" /></td>
<td><ul>
<li><p>Prüfe ob die Dateien Endungen haben wie ".failed" oder
".isDeploying". Nur wenn wie hier alle Dateien auf ".deployed" enden,
ist alles gut</p></li>
</ul></td>
</tr>
<tr class="even">
<td>4</td>
<td>Apache Status checken</td>
<td><strong>sudo systemctl status apache2</strong></td>
<td><img src="wissen-md/media/media/image15.png"
style="width:1.12431in;height:0.4708in" /></td>
<td><ul>
<li><p>muss active(running) anzeigen</p></li>
<li><p>bei Fehler wird in der Konsole ausgegeben, wie der Log ausgegeben
werden kann, dort muss man nach dem Fehler suchen, meistens ein Modul
das nicht gefunden wird. Wenn das Modul existier, aber in einer anderen
Version (prüfe mit &lt;modulname&gt; -v) dann muss man die Apache
konfiguration Ändern:</p>
<ul>
<li><p>sudo a2dismod &lt;modulname&gt;&lt;alteversion&gt;</p></li>
<li><p>sudo a2enmod &lt;modulname&gt;&lt;neueversion&gt;</p></li>
<li><p>sudo systemctl restart apache2</p></li>
</ul></li>
</ul></td>
</tr>
</tbody>
</table>

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Anfragen an das DWH führen zu Absturz

### Problem

Das Magdeburger DWH stürzt immer dann ab wenn eine Anfrage eingeht. 
Problem sind Fehlerhafte Tabellen in der AKTIN Datenbank im DWH.

### Lösung

Leeren der Tabellen request_action_log, broker_requests,

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><ol type="1">
<li><p>login as: root</p></li>
<li><p>Stop wildfly, wechsel zu User postgres,</p></li>
</ol>
<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>service wildfly stop</p>
<p>su - postgres</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<p>Code block 24 Einloggen</p>
<ol start="3" type="1">
<li><p>Dump der Datenbank erzeugen</p></li>
</ol>
<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>pg_dump -d aktin | gzip &gt; /var/tmp/aktin_db.sql.gz</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<p>Code block 25 DB Dump</p>
<blockquote>
<p>Optional: Prüfen des Dump</p>
<p>Dump überprüfen in Ordner tmp</p>
</blockquote>
<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>postgres@debiandwh:~$ logout</p>
<p>root@debiandwh:~# mv /var/tmp/aktin_db.sql.gz /root/</p>
<p>root@debiandwh:~# gunzip aktin_db.sql.gz</p>
<p>root@debiandwh:~# ls -lh</p>
<p>total 29M</p>
<p>-rw-r--r-- 1 postgres postgres 672K Apr 24 12:37
aktin_db.sql</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<p>Code block 26 Prüfen des Dump. Achtung: komplette Shell Ausgabe zum
Prüfen!</p>
<blockquote>
<p>Anschließend wieder als Postgres User einloggen</p>
</blockquote>
<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>su - postgres</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<p>Code block 27 Einloggen</p>
<ol start="4" type="1">
<li><p>Truncate Tables broker_requests,broker_query_rules,
request_action_log</p></li>
</ol>
<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>psql -d aktin -c 'TRUNCATE aktin.broker_requests'</p>
<p>psql -d aktin -c 'TRUNCATE aktin.broker_query_rules'</p>
<p>psql -d aktin -c 'TRUNCATE aktin.request_action_log'</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<p>Code block 28 Truncate</p>
<ol start="5" type="1">
<li><p>Switch User: root, Start Wildfly</p></li>
</ol>
<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p>logout</p>
<p>service wildfly start</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<p>Code block 29 Wildfly Starten</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

1.  **Verwandte Artikel**

2.  

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[DWH Logdateien erstellen](#dwh-logdateien-erstellen)

## DWH 1.6 Update depends on postgresql \<=229

### Problem

Bei installation von DWH 1.6 auf Ubuntu 22 required DWH Paket postgresql
version \<=299, aber System will 244ubuntu0.1 installieren:

"packages have unmet dependncies: postgresql-14: Depends:
postgresql-common (\<=229) but 214ubuntu0.1 is to be installed"

### Lösung

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><ol type="1">
<li><p>Postgres über offizielles Repo installieren:<br />
curl -fsSL <a
href="https://www.postgresql.org/media/keys/ACCC4CF8.asc|sudo">https://www.postgresql.org/media/keys/ACCC4CF8.asc|sudo</a>
gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg<br />
sudo sh -c 'echo "deb <a
href="http://apt.postgresql.org/pub/repos/apt">http://apt.postgresql.org/pub/repos/apt</a>
$(lsb_release -cs)-pgdg main" &gt;
/etc/apt/sources.list.d/pgdg.list'<br />
sudo apt update<br />
<br />
(zwar deprecated aber tested, falls das Repo sich nicht mir curl
einbinden lässt)<br />
wget --quiet -O - <a
href="https://www.postgresql.org/media/keys/ACCC4CF8.asc">https://www.postgresql.org/media/keys/ACCC4CF8.asc</a>
| sudo apt-key add -<br />
echo "deb <a
href="http://apt.postgresql.org/pub/repos/apt">http://apt.postgresql.org/pub/repos/apt</a>
$(lsb_release -cs)-pgdg main" | sudo tee
/etc/apt/sources.list.d/pgdg.list<br />
sudo apt update</p></li>
<li><p>sudo apt install postgresql-14</p></li>
<li><p>DWH Update manuell ausführen:<br />
sudo -i<br />
apt-get --only-upgrade install aktin-notaufnahme-i2b2<br />
apt-get --only-upgrade install aktin-notaufnahme-updateagent<br />
apt-get --only-upgrade install aktin-notaufnahme-dwh<br />
nc -w 2 127.0.0.1 1002</p></li>
<li><p>ggf. Wildfly neu starten: service wildfly restart</p></li>
</ol></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

1.  **Verwandte Artikel**

2.  

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[DWH Logdateien erstellen](#dwh-logdateien-erstellen)

## DWH Update 1.6 verbindet sich nicht mehr mit dem Broker

### Problem

Beim Update des DWHs von version 1.5 auf 1.6 ,bricht die Verbindung zum
Broker mit einem "ConnectionTimeout" Fehler ab. Browser können den
Broker erreichen und der WIldfly User kann mit einem Curl befehl
ebenfalls den Broker erreichen. Hierbei wurde die Adresse
"<https://aktin-broker.klinikum.rwth-aachen.de/broker/status>" als Test
verwendet. Das Problem tritt bislang nur an einem Standort auf, während
andere Standorte bereits erfolgreich DWH version 1.6 nutzen. 

### Idee

Da der Broker im Browser und auch vom Terminal aus erreichbar ist,
können wir vorerst davon ausgehen, dass die Firewall nicht das Problem
ist (laut Kunden war die Firewall auch aus). Der Fehler wird im Wildfly
Log Server-Log ausgegeben, was bedeutet er tritt auf, wenn eines der
Wildfly oder DWH Pakete eine Verbindung herstellen möchte. Der Fehler
beginnt folgendermaßen "[java.net](http://java.net).ConnectException:
Connection timed out (Connection timed out)", was den Ursprung auf eine
Java Applikation eingrenzt, was sowol im DWH als auch in Wildfly genutzt
wird. Der Fehler könnte dadurch ermittelt werden, indem die betroffenen
Stellen in Wildfly nud DWH geprüft werden. Weiterhin steht in der
Fehlermeldung, wo der Fehler unter anderem auftaucht :

"

org.aktin.dwh.admin.test.BrokerTest.retrieveStatus(BrokerTest.java:28)

...

at
deployment.dwh-j2ee-1.6rc1.ear.admin-gui-0.13rc1.war//org.aktin.dwh.admin.test.BrokerTest.retrieveStatus(BrokerTest.java:28)

at
deployment.dwh-j2ee-1.6rc1.ear.admin-gui-0.13rc1.war//org.aktin.dwh.admin.test.BrokerTest\$Proxy\$\_\$\$\_WeldClientProxy.retrieveStatus(Unknown
Source)

". 

Der Main Fehler tritt im Repository "dwh-admin" im "admin-gui" Projekt
auf. Betroffen ist der Backend Endpoint "test/broker/status", welcher
eine HTTP Request an den Broker (broker_url/broker/status) sendet.
Dieser Code wurde seit 2017 nicht mehr verändert und kann strukturell
nicht der Grund für die Fehlschlagende Anfrage sein. Es ist entweder
eine falsche Konfiguration oder eine Änderung in den Abhängigkeiten
dieses Codes. ... Hier weitermachen

### Fehleranalyse

Alexander Kombeiz vermutet die Ursache in einer Änderung in den
Repositories
"[**debian-i2b2-pkg**](https://github.com/aktin/debian-i2b2-pkg)" und "
[**debian-dwh-pkg**](https://github.com/aktin/debian-dwh-pkg)".
Vermutlich wurden im neuen Release Pakete aktualisiert.

#### Paket Änderungen in j2ee:

- dwh-prefs      : 0.11 -\> 0.12

  - hsqldb      : 2.5.0 -\> 2.7.1

  - dwh-db      : 0.11 -\> 0.12

  - dwh-api     : 0.9 -\> 0.10

- report-archive : 0.12 -\> 0.13

  - dwh-db        : 0.11 -\> 0.12

  - dwh-api       : 0.9 -\> 0.10

- admin-gui      : 0.11 -\> 0.13

  - dwh-prefs                    : 0.11 -\> 0.12

  - dwh-api                      : 0.9 -\> 0.10

  - [javax.ws](http://javax.ws).rs-api              : 2.0.1 -\> 2.1.1

  - generic-file-importer        : 0.17 -\> 0.19rc1

  - report-archive               : 0.12 -\> 0.13

  - jetty-server                 : 9.2.14.v20151106 -\> 9.4.55.v20240627

  - study-manager                : 0.12 -\> 0.13

  - dwh-db                       : 0.11 -\> 0.12

  - request-manager              : 0.12 -\> 0.13

  - report-manager               : 0.12 -\> 0.13

  - aktin-monthly  : 0.12 -\> 0.13

  - dwh-db         : 0.11 -\> 0.12

- request-manager: 0.12 -\> 0.13

  - dwh-db                 : 0.11 -\> 0.12

  - dwh-api                : 0.9 -\> 0.10

- report-schedule: 0.12 -\> 0.13

  - dwh-api   : 0.9 -\> 0.10

- dwh-api        : 0.9 -\> 0.10

- study-manager  : 0.12 -\> 0.13

  - dwh-db     : 0.11 -\> 0.12

  - dwh-api    : 0.9 -\> 0.10

- report-manager : 0.12 -\> 0.13

  - dwh-prefs      : 0.11 -\> 0.12

  - dwh-api        : 0.9 -\> 0.10

- cda-import     : 0.17 -\> 0.19rc1

Änderungen im "j2ee" Repository (e.g. Wildfly)

| Änderung                    | 1.5rc1 | 1.6rc1  | Bemerkung                                    |
|-----------------------------|--------|---------|----------------------------------------------|
| Aktin Repo aus Pom entfernt |        |         | <img src="wissen-md/media/media/image16.png" 
                                                  style="width:1.41944in;height:0.40915in" />   |
| Update: admin-gui           | 0.11   | 0.13rc1 |                                              |
| Update: report-manager      | 0.12   | 0.13    |                                              |
| Update: report-archive      | 0.12   | 0.13    |                                              |
| Update: report-schedule     | 0.12   | 0.13    |                                              |
| Update: request-manager     | 0.12   | 0.13    |                                              |
| Update: study-manager       | 0.12   | 0.13    |                                              |
| Update: aktin-monthly       | 0.12   | 0.13    |                                              |
|                             |        |         |                                              |
| Update: dwh-api             | 0.9    | 0.10    |                                              |
| Update: cda-import          | 0.17   | 0.19rc1 |                                              |
| Update:dwh-db               | 0.11   | 0.12    |                                              |
| Update: dwh-prefs           | 0.11   | 0.12    |                                              |
| Update: aktin               | 0.11   | 0.12    |                                              |
| developer connection        |        |         | Irrelevant                                   |

**Änderungen im debian-dwh-pkg von version 1.5 zu 1.6cr1-2**

<table>
<colgroup>
<col style="width: 7%" />
<col style="width: 40%" />
<col style="width: 40%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr class="header">
<th>Änderung</th>
<th>1.5</th>
<th>1.6cr-2</th>
<th>Mögliche Auswirkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Installieren des DWHs als j2ee</td>
<td><p><img src="wissen-md/media/media/image17.png"
style="width:1.41944in;height:0.40163in" /></p>
<p>function download_dwh_j2ee() {<br />
    DWILDFLYDEPLOYMENTS="${1}"</p>
<p>    mkdir -p "${DBUILD}${DWILDFLYDEPLOYMENTS}"<br />
    mvn dependency:get -DremoteRepositories="<a
href="https://www.aktin.org/software/repo/">https://www.aktin.org/software/repo/</a>"
-Dartifact="org.aktin.dwh:dwh-j2ee:${VDWH_J2EE}:ear"<br />
    # dirty<br />
    cp
~/".m2/repository/org/aktin/dwh/dwh-j2ee/${VDWH_J2EE}/dwh-j2ee-${VDWH_J2EE}.ear"
"${DBUILD}${DWILDFLYDEPLOYMENTS}/dwh-j2ee-${VDWH_J2EE}.ear"<br />
}</p></td>
<td><p><img src="wissen-md/media/media/image18.png"
style="width:1.41944in;height:0.70885in" /></p>
<p>#TODO fix this<br />
download_and_copy_dwh_j2ee() {<br />
  local dir_wildfly_deployments="${1}"<br />
  local ear_file="dwh-j2ee-${AKTIN_DWH_VERSION}.ear"<br />
  echo "Downloading DWH application..."</p>
<p>  mkdir -p "${DIR_BUILD}${dir_wildfly_deployments}"<br />
  if [[ -f "${DIR_DOWNLOADS}/${ear_file}" ]]; then<br />
    echo "Using cached DWH EAR"<br />
  else<br />
    mvn dependency:get -DremoteRepositories="<a
href="https://www.aktin.org/software/repo/">https://www.aktin.org/software/repo/</a>"
-Dartifact="org.aktin.dwh:dwh-j2ee:${AKTIN_DWH_VERSION}:ear"<br />
    # dirty<br />
    cp
~/".m2/repository/org/aktin/dwh/dwh-j2ee/${AKTIN_DWH_VERSION}/${ear_file}"
"${DIR_DOWNLOADS}"<br />
  fi</p>
<p>  cp "${DIR_DOWNLOADS}/${ear_file}"
"${DIR_BUILD}${dir_wildfly_deployments}"<br />
}</p></td>
<td><ul>
<li><p>Da steht ein TODO!</p></li>
</ul></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### Lösung

|     |
|-----|

1.  **Verwandte Artikel**

2.  

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

- Page:[DWH Update 1.6 verbindet sich nicht mehr mit dem
  Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

- Page:[Zugriff per PGAdmin auf ein lokales AKTIN
  DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- Page:[HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

- Page:[DWH Logdateien erstellen](#dwh-logdateien-erstellen)

## DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly neustart

### Hintergrund

Nahc einiger Zeit verzeichnet eine Klinik keine Imports mehr am Broker,
es werden jedoch Fälle Importiert. Nach einem Neustart des Wildfly
Server ist das Problem für kurze Zeit wieder behoben.

### Vermutung

Es scheint nach dem aktuellen Wissensstand so zu sein, dass die Firewall
der Klinik die Connections des Wildfly Servers schließt, Wildfly diese
jedoch nicht schließt, durch irregulärem Einwirken der Firewall.
Vermutlich erzeugt Wildfly daraufhin weitere Connection die nach Nutzung
und kurzer Inaktivität auch von der Firewall blockiert werden und füllen
so langsam den Connection Pool bis dieser voll ist mit unbrauchbaren
Connections.

Hierzu lasse ich folgende Schritte zur Überprüfung durchlaufen:

<table>
<colgroup>
<col style="width: 9%" />
<col style="width: 19%" />
<col style="width: 50%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr class="header">
<th>Schritt</th>
<th>Beschreibung</th>
<th>Befehl</th>
<th>Bemerkung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Öffne J Boss CLI</td>
<td><strong>sudo ./opt/wildfly/bin/jboss-cli.sh</strong></td>
<td></td>
</tr>
<tr class="even">
<td>2 </td>
<td>Prüfe, ob Datasource von AKTIN DWH logging aktiviert hat</td>
<td><strong>/subsystem=datasources/data-source=AktinDS:write-attribute(name=statistics-enabled,
value=true)</strong></td>
<td>suche nach Feld "statistics-enabled", standartmäßig auf
"false" </td>
</tr>
<tr class="odd">
<td>3</td>
<td>aktiviere Logging für AKTIN DWH Datasource</td>
<td><p><strong>/subsystem=datasources/data-source=AktinDS:write-attribute(name=statistics-enabled,
value=true)</strong></p>
<p><strong>:reload</strong></p></td>
<td>geht theoretisch auch, wenn man die konfig manuell in die
standalone.xml schreibt und wildfly neu startet</td>
</tr>
<tr class="even">
<td>4</td>
<td>prüfe Connection Pool status </td>
<td><strong>/subsystem=datasources/data-source=AktinDS/statistics=pool:read-resource(include-runtime=true)</strong></td>
<td><p>"ActiveCount" - Connections in use</p>
<p>"AvailableCount" - idle/oder available Connections</p>
<p>"TimedOut" - wie viele Connection Requests "Timed out" sind</p></td>
</tr>
<tr class="odd">
<td>5</td>
<td>Connection Pool vergrößern</td>
<td><p><strong>/subsystem=datasources/data-source=AktinDS:write-attribute(name=max-pool-size,
value=50)</strong></p>
<p><strong>:reload</strong></p>
<p><strong> </strong></p></td>
<td>Dient hier nur zur Info, das Problem sollte bei ungeschlossenen
Connections nicht durch Pool Vergrößerung gelöst werden</td>
</tr>
<tr class="even">
<td>6</td>
<td>Weitere Pool Konfigurationen</td>
<td><p><strong>/subsystem=datasources/data-source=AktinDS:write-attribute(name=min-pool-size,
value=5)</strong></p>
<p><strong>/subsystem=datasources/data-source=AktinDS:write-attribute(name=pool-prefill,
value=true)</strong></p>
<p><strong>:reload</strong></p></td>
<td></td>
</tr>
</tbody>
</table>

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Falsche IP auf automatisierten Mails des DWHs

### Hintergrund

Die lokalen DWH Instanzen senden den Betreibern automatisierte E-Mails,
beispielsweise wenn eine neue Anfrage aussteht. Hierbei leitet die
E-Mail den Betreiber mit einem Link direkt zur betroffenen Anfrage in
der Adminkonsole. Dieser Link benötigt die IP-Adresse der DWH Instanz,
welche sie sich aus dem Host zieht, wobei das letzte Netzprofil
(Interface) und deren IP als Host IP verwendet wird.

### Problem

Beim Update von DWH1.5 auf DWH1.6 wird ein neues Netzprofil (Interface)
angelegt, das meist "docker0" heißt. Dieses Interface mit einer eigenen
IP wird zukünftig als Host IP erkannt und in den automatisierten Mails
versendet, was jedoch kein gültiger Pfad ist.

### Lösung

Das Netwerk-Interface löschen.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>1) Docker stoppen: "sudo systemctl stop docker"</p>
<p>2) Interface löschen: "sudo ip link delete docker0"</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Firewall Probleme: Proxy

### Problem

Eine DWH ist nicht mit dem Broker verbunden, obwohl die Klinik die
Firewall vermeitlich richtig Konfiguriert hat.

### Lösung

Proxy im Wildfly Startscript eintragen

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><ul>
<li><p>Broker Test Testseite auf DWH aufrufen.</p>
<ul>
<li><p>/aktin/admin/plain/test.html</p></li>
</ul></li>
<li><p>Können die Leute vom Rechener Broker aufrufen.</p>
<ul>
<li><p><a
href="https://broker.aktin.org/broker/status">https://broker.aktin.org/broker/status</a></p></li>
<li><p><a
href="https://aktin-broker.klinikum.rwth-aachen.de/">https://aktin-broker.klinikum.rwth-aachen.de/</a>status</p></li>
</ul></li>
<li><p>Wenn 2. geht → Proxy Konfiguration Problem.</p>
<ul>
<li><p>Startscripten vom Wilfly eintragen</p>
<ul>
<li><p>Startoptionen JVM</p></li>
</ul></li>
</ul></li>
</ul>
<ol type="1">
<li><p>Broker Test Testseite auf DWH aufrufen.</p>
<ul>
<li><p>/aktin/admin/plain/test.html</p></li>
<li><p>Prüfen pb verbindung zum Broker da</p></li>
</ul></li>
<li><p>Können die Leute vom Rechner Broker aufrufen?</p>
<ul>
<li><p><a
href="https://broker.aktin.org/broker/status">https://broker.aktin.org/broker/status</a></p></li>
<li><p><a
href="https://aktin-broker.klinikum.rwth-aachen.de/">https://aktin-broker.klinikum.rwth-aachen.de/</a>status</p></li>
</ul></li>
<li><p>Wenn 2. geht → Proxy Konfiguration Problem.</p>
<ul>
<li><p>Startscripten vom Wildfly eintragen</p>
<ul>
<li><p>Startoptionen JVM</p></li>
</ul></li>
</ul></li>
</ol></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Installation des DWH auf Ubuntu 24.04LTS

### Problem

Beim Installieren nach der Aktin Anleitung wird das Python Paket
unicodecsv benötigt, welches jedoch zu dem Zeitpunkt (10.10.2024) nicht
für Ubuntu 24 gibt. Die Installation geht von hieraus nicht weiter.

### Lösung

DWH Debian Paket manuell herunterladen, die Requirement entfernen und
das DWH Paket manuell installieren. Dies ist nur eine Voröbergehende
Lösung, an einem Upgrade wird bald gearbeitet.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><img src="wissen-md/media/media/image19.jpeg"
style="width:1.10615in;height:1.5625in" /></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Weitere Lösung

1\. postgresql-12 ist nicht verfügbar auf Ubuntu24 (nur postgresql-16)  
2. Das Paket python3-unicodecsv ist nicht verfügbar auf Ubuntu24 (ist in
das python3 Paket gewandert)  
  
Um das DWH zu installieren, müssten Sie folgendes tun:  
  
  
1. BEVOR Sie das Paket aktin-notaufnahme-i2b2 installieren, das Paket
postgresql-16 installieren:

apt-get install postgresql-16

2\. Paket aktin-notaufnahme-i2b2 installieren:

apt-get install aktin-notaufnahme-i2b2  
  
  
3. Paket aktin-notaufnahme-dwh installieren über  
  
apt-get install aktin-notaufnahme-dwh --ignore-missing

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Login Probleme

### AKTIN Rolle richtig setzen:

**Problembeschreibung**: Login in das I2B2 möglich, nicht aber in das
Admin Webinterface des DWH.

[AKTIN Rollen](#aktin-rollen)

### AKTIN Rollen

Für einen Login im Data Warehouse Manger ist es notwendig, dass die
dafür notwendige Admin Berechtigung vergeben ist. In dem folgenden
Beispiel ist der user "demo" kein Admin (da false).

<img src="wissen-md/media/media/image20.png"
style="width:5.90069in;height:0.38758in" />

Ein Login ist daher nicht möglich:

<img src="wissen-md/media/media/image21.png"
style="width:4.40659in;height:2.60417in" />

Wenn aber das Adminattribut auf "true" gesetzt wurde, ist ein Login
möglich (bei gleichem Passwort):

<img src="wissen-md/media/media/image22.png"
style="width:5.90069in;height:0.46831in" />

Dann ist ein Login möglich:

<img src="wissen-md/media/media/image23.png"
style="width:5.90069in;height:1.7225in" />

## Monatsbericht/Report: Abnormal Termination Exception

### Problem

Beim Generieren eines Monatsberichts wird der Prozess mit einem Fehler
Abgebrochen und der Log zeigt eine Abnormal Termination Exception in
Zusammenhang mit "RScript" an.

### Grund

Tidyverse installation nicht korrekt.

### Lösung

Auf dem Server alle R Pakete deinstallieren und daraufhin wieder
installieren. Wildfly daraufhin neu starten.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>R-Terminal öffnen:</p>
<p><strong>"R"</strong></p>
<p>EIn Beispiel um nur das Tidyverse Paket versioniert zu
neuinstallieren, EIngabe in das Server Terminal.</p>
<p>"<strong>install.packages("tidyverse")</strong>"</p>
<p>prüfen ob Paket geladen werden kann:</p>
<p>"<strong>library("tidyverse")</strong>"</p>
<p>Falls nicht, das Paket entfernen und neu installieren:</p>
<p>"<strong>remove.packages("tidyverse")</strong>" und
"<strong>install.packages("tidyverse")</strong>"</p>
<p>Falls das auch nicht geht, sind möglicherweise r dev Pakete nicht
richtig geladen. Dafür gehe aus der R Konsole raus
("q<strong>()</strong>") und führe den Befehl aus:</p>
<p>"s<strong>udo apt-get install libfontconfig1-dev libharfbuzz-dev
libfribidi-dev libfreetype6-dev libpng-dev libtiff5-dev
libjpeg-dev</strong>"</p>
<p>gehe zurück in die R Konsole ("sudo R") und installiere Tidyverse
neu:</p>
<p>"<strong>install.packages("tidyverse")</strong>"</p>
<p>Falls nach installieren von Tidyverse noch Pakete mit non-zero exit
code geladen werden, müssen diese Pakete manuell installiert werden mit
install.packages. Diese Methode kann man auch anstatt des zweiten und
dritten Schritts durchführen, ist jedoch mühsam bei vielen Paketen und
die zwei vorherigen Schritte können die Load reduzieren.</p>
<p>Falls das auch nicht funktioniert, siehe nach, ob die Firewall das R
Repository blockt, oder prüfe und ggf. ändere das CRAN Repository</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Monatsbericht nicht erstellt: Patient ohne ID

### Problem

Beim Generieren eines Monatsberichts wird der Prozess mit einem Fehler
Abgebrochen und der Log zeigt "java.lang.NullPointerException: Patient
w/o ID".

### Grund

Es wurden Einträge aus der Datenbank gelöscht, während das DWH noch
aktiv war. Das hat dafür gesorgt, dass eine Tabelle die die gelöschten
Daten noch enthält, auf den leeren Eintrag in der DB gezeigt hat.

### Lösung

Mit dem Löschen-Skript
"[delete_encounter_from_dwh.sh](https://github.com/aktin/aktin-scripts/blob/main/dwh-scripts/delete_encounter_from_dwh.sh)"
aus dem Aktin Repository: <https://github.com/aktin/aktin-scripts.git>
die Einträge löschen, die in demselben Zeitraum der zuvor gelöschten
Daten liegen. Daraufhin den gesamten gelöschten Zeitraum
Nachimportieren. 

|     |
|-----|

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## User I2B2 Datenbank Informationen auslesen

### User-Datenbankinformationen auslesen

sudo -i  
sudo -u postgres psql -d i2b2 --pset pager=off -c "SELECT \* FROM
i2b2pm.pm_user_data;"

Zu sehen ist nun die Ausgabe der Relation, wobei die Passworthashes
gerne geschwärzt werden können.

Zum Speichern in einer Datei, die mit uns geteilt werden kann, führen
Sie bitte den folgenden Befehl aus:  
<span class="mark">sudo -u postgres psql -d i2b2 --pset pager=off -c
"SELECT \* FROM i2b2pm.pm_user_data;" \> user_data.txt</span>

### Weitere Informationen zur Fehleranalyse

Für eine genauere Analyse bitten wir Sie, uns die Benutzerberechtigungen
zur Verfügung zu stellen. Dafür benötigen Sie Kommandozeilenzugriff auf
den Linux-Server, auf dem das AKTIN-DWH läuft.  
Bitte führen Sie die folgenden Befehle **einzeln** aus:

<span class="mark">sudo -i </span>  
<span class="mark">sudo -u postgres psql -d i2b2 --pset pager=off -c
"SELECT \* FROM i2b2pm.pm_user_data;" \> user_data.txt </span>  
<span class="mark">sudo -u postgres psql -d i2b2 --pset pager=off -c
"SELECT \* FROM i2b2pm.pm_user_params;" \> user_params.txt </span>  
<span class="mark">sudo -u postgres psql -d i2b2 --pset pager=off -c
"SELECT \* FROM i2b2pm.pm_user_session;" \> user_session.txt </span>  
<span class="mark">sudo -u postgres psql -d i2b2 --pset pager=off -c
"SELECT \* FROM i2b2pm.pm_user_login;" \> user_login.txt</span>

**Hinweis:** Die Warnung  
<span class="mark">could not change directory to "/root": Permission
denied</span>  
kann ignoriert werden und ist unkritisch.

Sie können die Passwort-Hashes in
<span class="mark">user_data.txt</span> (Spalte
<span class="mark">password</span>) gerne entfernen oder die
entsprechende Spalte auf Screenshots schwärzen.  
Bitte senden Sie uns anschließend die vier generierten Dateien zu (sie
befinden sich im aktuellen Arbeitsverzeichnis).

## Wildfly hat keine Verbindung zu Postgresql

### Hintergrund

Wildfly startet nicht

### Fehlersuche

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 15%" />
<col style="width: 42%" />
<col style="width: 12%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr class="header">
<th>Schritt</th>
<th>Beschreibung</th>
<th>Befehl</th>
<th>Ausschnitt</th>
<th>Bemerkung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Postgres Status checken</td>
<td><strong>sudo systemctl status postgresql</strong></td>
<td></td>
<td><ul>
<li><p>muss active(running) anzeigen</p></li>
</ul></td>
</tr>
<tr class="even">
<td></td>
<td>ggf. starten </td>
<td><strong>sudo systemctl start postgresql</strong></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>2</td>
<td>Prüfe den Port, auf dem Postgresql läuft</td>
<td><strong>cat /etc/postgresql/*/main/postgresql.conf | grep
port</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>3</td>
<td>Prüfe, ob Wildfly auf den richtigen Port hört. Siehe hierzu Wildfly
logs an</td>
<td><strong> </strong></td>
<td></td>
<td>Standardmäßig erwartet Wildfly Port 5432</td>
</tr>
</tbody>
</table>

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

## Wildfly Startet nicht mehr

### Hintergrund

Beim Aufrufen der Adminkonsole kann es sein, dass keien Ressourcen
gefunden werden können. Das traf in der Vergangenheit auf, wenn die
Ubuntu Version oder DWH Version verändert wurde.

### Fehlersuche

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 12%" />
<col style="width: 32%" />
<col style="width: 13%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th>Schritt</th>
<th>Beschreibung</th>
<th>Befehl</th>
<th>Ausschnitt</th>
<th>Bemerkung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Wildfly Status checken</td>
<td><p><strong>sudo service wildfly status</strong></p>
<p>oder</p>
<p><strong>sudo systemctl status wildfly.service</strong></p></td>
<td><img src="wissen-md/media/media/image13.png"
style="width:1.12431in;height:0.36931in" /></td>
<td><ul>
<li><p>muss active(running) anzeigen</p></li>
</ul></td>
</tr>
<tr class="even">
<td>2</td>
<td>Wildfly Logs checken</td>
<td><strong>sudo nano
/opt/wildfly/standalone/log/server.log</strong></td>
<td></td>
<td><ul>
<li><p>suche nach logs die "ERROR" anzeigen</p></li>
</ul></td>
</tr>
<tr class="odd">
<td></td>
<td>Wenn keine Wildlfy logs verfügbar, Wldfly manuell mit Skript
starten</td>
<td><strong>sudo ./opt/wildfly/bin/standalone.sh</strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>3</td>
<td>Deployments ansehen</td>
<td><strong>sudo ls /opt/wildfly/standalone/deployments/</strong></td>
<td><img src="wissen-md/media/media/image14.png"
style="width:1.12431in" /></td>
<td><ul>
<li><p>Prüfe ob die Dateien Endungen haben wie ".failed" oder
".isDeploying". Nur wenn wie hier alle Dateien auf ".deployed" enden,
ist alles gut</p></li>
</ul></td>
</tr>
<tr class="odd">
<td>4</td>
<td>Apache Status checken</td>
<td><strong>sudo systemctl status apache2</strong></td>
<td><img src="wissen-md/media/media/image15.png"
style="width:1.12431in;height:0.4708in" /></td>
<td><ul>
<li><p>muss active(running) anzeigen</p></li>
<li><p>bei Fehler wird in der Konsole ausgegeben, wie der Log ausgegeben
werden kann, dort muss man nach dem Fehler suchen, meistens ein Modul
das nicht gefunden wird. Wenn das Modul existier, aber in einer anderen
Version (prüfe mit &lt;modulname&gt; -v) dann muss man die Apache
konfiguration Ändern:</p>
<ul>
<li><p>sudo a2dismod &lt;modulname&gt;&lt;alteversion&gt;</p></li>
<li><p>sudo a2enmod &lt;modulname&gt;&lt;neueversion&gt;</p></li>
<li><p>sudo systemctl restart apache2</p></li>
</ul></li>
</ul></td>
</tr>
</tbody>
</table>

### Bekannte Probleme

- Wildfly hat keine Rechte für die Wildfly Ordner

  - Lösung:  
     "

    sudo chown -R wildfly:wildfly /opt/wildfly

    sudo chmod +x /opt/wildfly/bin/standalone.sh  
    "

- Wildfly hat keine Verbindung zu Postgresql

  - Lösung: [Wildfly hat keine Verbindung zu
    Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

### Verwandte Artikel

- Page:[Monatsbericht/Report: Abnormal Termination
  Exception](#monatsberichtreport-abnormal-termination-exception)

- Page:[DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
  neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

- Page:[Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- Page:[Wildfly hat keine Verbindung zu
  Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

- Page:[DWH 1.6 Update depends on postgresql
  \<=229](#dwh-1.6-update-depends-on-postgresql-229)

# Grundlagen

## Bestehende Verfahren für Testdaten Generierung

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
<p>Hier finden Sie Zusammenfassungen bestehender Verfahren für die
generierung von medizinischen Testdaten.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Inhalt

- [Inhalt](#inhalt)

- [Ziel](#ziel)

- [Problem](#problem-8)

- [Bestehende Verfahren](#bestehende-verfahren)

- [Aktin Test-daten-generator](#aktin-test-daten-generator)

- [Dateien (Versionierung)](#dateien-versionierung)

### Ziel

Generierung von künstlich erzeugten (synthetischen) Datensätzen aus
bestehenden medizinischen Datensätzen. 

- maximale Ähnlichkeit zu den ursprünglichen Datensätzen (Gleiche
  Verteilung der Attribute und Gleiche Korrelation der Attribute
  zueinander)

- minimale Identifizierbarkeit auf die ursprünglichen Datensätze 

### Problem

Synthetische Daten müssen möglichst echt sein um sie für das Testen von
medizischen Produkten einzusetzen. Deshalb sollten synthetische Daten
immer aus echten Daten generiert werden. Im Optimalfall wären hierfür
echte Datensätze am Besten, jedoch sind solche nicht anonymisiert und
können dementsprechend nicht veröffentlicht oder von Dritten verwendet
werden. Deshalb gilt es bei der Erzeugung von synthetischen Daten den
optimalen Weg zwischen Anonymisierung und Ähnlichkeit zu Echten Daten zu
finden.

Durch die hohe Anzahl an Attributen und das oft seltene Auftreten von
bestimmten Krankheiten ist es in manchen Fällen fast unmöglich
synthetische Datensätze zu generieren, die nicht identifizierbar sind.

### Bestehende Verfahren

Es gibt grundsätzlich drei Arten von synthetischen Daten: 

- Dummy Daten / Mocks: random Werte, Struktur gleich 

- Regelbasiered: festgelegte Logic für synthetischen Daten basierend auf
  echten Datensätze

- KIbasierend: Ki Modell erzeugen synthetische Daten nachdem sie auf auf
  echten Datensätzen trainiert wurden

#### KI-Based

- KIs werden auf echten Datensätzen trainiert und können dann
  synthetische Datensätze erzeugen die diesen ähneln.

- Problem: Manche Ergebnisse können auf die ursprünglichen Datensätze
  zurückverfolgt werden.

##### Generative Adversarial Networks (GAN)

- Generator erstellt und Diskriminator prüft mit den echten Vorlagen

- Identification Constraints für Identifizierbarkeit

- benötigt homogene Datensätze

- Viel Aufwand für Training und Datenpflege

- Gute Ergebnisse

- an algorithm based on two neural networks, working together to
  generate fake yet realistic data points. One neural network attempts
  to generate fake data points while the other learns to differentiate
  fake and real samples. GAN models are complex to train and
  computationally intensive, but can generate highly detailed, realistic
  synthetic data points

##### Generative Language Models (LM) with namend entity annotations (NER)

- Natural language Dokuments with annotations for the trainign of
  Natural language Processing Models

- this study uses GPT-2 and LSTM for generating synthetic records

- it needs to be a structure aware LM

- focus on Utility,

- Privacy was studied with high utility cases in user study

##### Variational Auto-Encoder (VAE)

- an unsupervised algorithm that can learn the distribution of an
  original dataset and generate synthetic data via double
  transformation, known as an encoded-decoded architecture. The model
  formulates a reconstruction error, which can be minimized with
  iterative training. 

- *Learn more about VAE in the excellent post by [Baptiste
  Rocca](https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73).*

##### Diffusion Models

- algorithms that corrupt training data by adding Gaussian noise until
  the image becomes pure noise, then train a neural network to reverse
  this process, gradually denoising until a new image is produced.
  Diffusion models have high training stability and can produce high
  quality results for both image and audio

#### Rule Based Methods

- kann nur auf eine domain spezifisch angewendet werden.

- kann aber große Mengen Datasets generieren

- Hohe Aufwand

- **Fitting Real Data to a Distribution**

- 

### Aktin Test-daten-generator

Für Aktin sollen die Testdaten beim Testen des Importers eingesetzt
werden.

Dabei sollen synthetische CDAs erstellt werden und in Aktin importiert
werden

Testen auf:

- Stabilität 

- Robustheit

- Zuverlässigkeit

Ich schließe daraus:

- Es wird eine große Menge an CDAs benötigt. (Stabilität)

- Es wird eine möglichst große Abdeckung aller Fälle benötigt
  (Robustheit

- Verteilung der Wert sind nicht relevant.

- Die Struktur der ursprünglichen CDAs sollte beibehalten werden um alle
  Fälle abzudecken.

relationsnahe keine Geburt vor 1910

ENtkoppekln klassen Module

P21 Skript : Schnittstelle Fallabbrechnungs Krankenkassen. Was passiert
nach Notaufnahme?

### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File | Modified |
|------|----------|

### AKTIN Testdaten Generator

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### Inhalt

- [Inhalt](#inhalt-1)

- [Doku](#doku)

- [Dateien (Versionierung)](#dateien-versionierung-1)

#### Doku

#### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File | Modified |
|------|----------|

## Einführung in CDA

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
<p>Einführung in CDA</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Inhalt

- [Inhalt](#inhalt-2)

- [Allgemeines Verständnis](#allgemeines-verständnis)

  - [Was ist ein CDA-Dokument?](#was-ist-ein-cda-dokument)

  - [Welchen Zweck erfüllt ein CDA in der
    Gesundheitsinformatik?](#welchen-zweck-erfüllt-ein-cda-in-der-gesundheitsinformatik)

- [HL7-Standart](#hl7-standart)

- [Was ist der HL7-Standard, und wie wird er im CDA-Dokument
  verwendet?](#was-ist-der-hl7-standard-und-wie-wird-er-im-cda-dokument-verwendet)

- [XML-Struktur](#xml-struktur)

  - [Wie ist XML strukturiert, und wie wird es im CDA-Dokument
    verwendet?](#wie-ist-xml-strukturiert-und-wie-wird-es-im-cda-dokument-verwendet)

- [XML-Transformation und Styling](#xml-transformation-und-styling)

  - [Welche Rolle spielt die XML-Stylesheet-Referenz im
    CDA?](#welche-rolle-spielt-die-xml-stylesheet-referenz-im-cda)

  - [Wie unterstützt die XML-Transformation die Präsentation von
    klinischen
    Daten?](#wie-unterstützt-die-xml-transformation-die-präsentation-von-klinischen-daten)

- [Header](#header)

  - [Welche Informationen sind im Dokumentenheader
    enthalten?](#welche-informationen-sind-im-dokumentenheader-enthalten)

  - [Warum ist die Identifikation des Patienten wichtig, und wie wird
    sie
    erreicht?](#warum-ist-die-identifikation-des-patienten-wichtig-und-wie-wird-sie-erreicht)

  - [Was ist die Rolle der verschiedenen Codes im Header (z.B.,
    realmCode, typeId,
    templateId)?](#was-ist-die-rolle-der-verschiedenen-codes-im-header-z.b.-realmcode-typeid-templateid)

- [Dokumentinhalt](#dokumentinhalt)

  - [Welche patientenspezifischen Informationen sind im CDA-Dokument
    vorhanden?](#welche-patientenspezifischen-informationen-sind-im-cda-dokument-vorhanden)

  - [Welche Abschnitte sind im Dokumenteninhalt enthalten, und welche
    Informationen repräsentieren
    sie?](#welche-abschnitte-sind-im-dokumenteninhalt-enthalten-und-welche-informationen-repräsentieren-sie)

  - [Wie werden Zeitpunkte (Datum und Uhrzeit) im CDA
    dargestellt?](#wie-werden-zeitpunkte-datum-und-uhrzeit-im-cda-dargestellt)

  - [Welche Rolle spielen die Abschnitte für Transportmittel,
    Notfallanamnese, Diagnostik
    usw.?](#welche-rolle-spielen-die-abschnitte-für-transportmittel-notfallanamnese-diagnostik-usw.)

  - [Wie werden Codes und Terminologien im CDA verwendet (z.B., LOINC,
    SNOMED
    CT)?](#wie-werden-codes-und-terminologien-im-cda-verwendet-z.b.-loinc-snomed-ct)

  - [Warum sind sie wichtig für die Interoperabilität im
    Gesundheitswesen?](#warum-sind-sie-wichtig-für-die-interoperabilität-im-gesundheitswesen)

- [Dateien (Versionierung)](#dateien-versionierung-2)

### Allgemeines Verständnis

#### Was ist ein CDA-Dokument?

Das **Clinical Document Architecture** (**CDA**) ist ein von HL7
erarbeiteter, auf XML basierender Standard für den Austausch und die
Speicherung medizinischer Inhalte. Dabei entspricht ein CDA-Dokument
immer genau **einem** klinischen Dokument (z. B. Arztbrief,
Befundbericht). Somit erfolgt keine Zusammenfassung mehrerer Dokumente
wie in einer Patientenakte. Deshalb ist ein CDA immer eine
Momentaufnahme zu einem bestimmten Zeitpunkt.

Mit einem CDA kann ein klinisches Dokument in eine strukturierte Form
gebracht werden. Durch die Umwandlung in ein solches CDA kann ein
klinisches Dokument nun von Maschinen/Gesundheitssystemen gelesen und
interpretiert werden. CDAs haben festgelegte Strukturen und Hierarchien,
jedoch stellen sie auch eine Vielzahl an standartisierten Komponenten zu
Verfügung, mit denen ein CDA genau an ein spezifisches Dokument
angepasst werden kann.

#### Welchen Zweck erfüllt ein CDA in der Gesundheitsinformatik?

Der Zweck des CDA ist, strukturierte klinische Dokumente zu erstellen,
zu speichern, auszutauschen und zu interpretieren.

Wesentlich für die Gesundheitsinformatik sind aber primär die
Möglichkeiten für Austausch und Übermittelung von klinischen Daten und
Dokumenten.

Welche Rolle spielt das CDA im Austausch von klinischen Informationen?

Die Rolle des CDA ist es, Interoperabilität zwischen verschiedenen
Systemen und Organisationen in Gesundheitswesen zu ermöglichen. Mithilfe
dem CDA können verschiedene Gesundheitsleister und Systeme effizient
Informationen austauschen, unabhängig davon, welche Software oder
Platform sie verwenden. Dies erleichtert die nahtlose Integration von
klinischen Daten und verbessert die Zusammenarbeit, was letztendlich die
Patientenversorgung verbessert und die Effizienz steigert.

### HL7-Standart

### Was ist der HL7-Standard, und wie wird er im CDA-Dokument verwendet?

HL-7-Standart ist speziell für das Gesundheitswesen entwickelte
Kommunikationsstandard, der die Kommunikation zwischen nahezu allen
Institutionen und Bereichen des Gesundheitswesens ermöglicht. Mit HL7
lassen sich alle wesentlichen Kommunikationsaufgaben abwickeln und die
Effizienz der Kommunikationsvorgänge entscheidend verbessern. Es
existiert 3 verschiedenen HL7 Standards, die heutzutage verwendet sind:
HL7 v2, HL7 v3 und HL7 FHIR. Für uns ist HL7 v3 interessant, da es das
CDA als eine Dokumenten-Spezifikation enthält.

HL7 v3 Standard umfasst:

- ein Informationsmodell (Reference Information Model)

- eine Dokumenten-Spezifikation (CDA)

- einen Messaging-Teil (HL7 v3, der inhaltliche Nachfolger von v2)

- weitere Teile (die nicht relevant sind)

Welche HL7-Standards werden in diesem CDA speziell genutzt (z.B., HL7
FHIR)?

CDA Dokumente können das Code-System von HL7 nutzen, um die Codes
innerhalb des Dokuments zu identifizieren. Dieses spezifische
Code-System mit der OID (Object Identifier) ist Teil der
HL7-Standardterminologie und wird oft als LOINC (Logical Observation
Identifiers Names and Codes) bezeichnet. Dies ermöglicht eine
standardisierte und eindeutige Identifizierung von medizinischen
Beobachtungen und Tests innerhalb des Dokuments.

Wie tragen die HL7-Standards zur Interoperabilität im Gesundheitswesen
bei?

 "CDA" alleine bedeutet nicht, dass Systeme interoperabel sind. CDA
basieren auf verschiedene Klassifikationen. Wenn aber ein System-1 ein
ICD-10 basiertes Dokument schickt, aber System-2 ein DIMDI erwarten,
dann wurden die Informationen korrekt übertragen, aber kein Verständnis
erzielt. Dieses Problem lösen **CDA Templates.** Jedes Dokument
spezifiziert eine Template-ID, und das Template gibt Art, Struktur und
verwendeten Codesysteme des Dokuments vor. Wenn 2 Systeme die gleichen
Templates unterstützen, so sind sie interoperabel. Das Template liefert
alles, was das System braucht, um ein CDA Dokument zu erzeugen und
verarbeiten zu können.

### XML-Struktur

#### Wie ist XML strukturiert, und wie wird es im CDA-Dokument verwendet?

XML besitzt die Fähigkeit, Daten strukturiert und hierarchisch zu
speichern. XML ist die Grundstruktur eines CDAs. Dadurch werden die
einzelnen Abschnitte eines klinisches Dokuments klar abgegrenzt.
Desweiteren können diese Abschnitte dann hierarchisch aufgebaut werden.
Somit werden Unterabschnitte ebenfalls klar abgegrenzt. In XML können
die einzelnen Abschnitte zu vordefinierten Klassen zugeordnet und mit
Attributen versehen werden. So können in die einzelnen Abschnitte in
klinischen Dokumenten durch standardtisierte Klassen abgebildet werden.
Dadurch können verschiedene Gesundheitssysteme diese Informationen
austauschen und interpretieren. Auch können die Abschnitte mit
Informationen aus Code-Systemen attributiert werden, welche Definitionen
von Begriffen und Sachverhalten liefern können.

Was sind die Schlüsselkomponenten eines CDA-Dokuments (Header, Body,
Abschnitte)?

Die Schlüsselkomponenten eines CDA-Dokuments umfassen:

1.  **Header**:

    - Der Header enthält Metadaten und administrative Informationen über
      das Dokument. Dies umfasst Dinge wie den Ersteller des Dokuments,
      den Zeitpunkt der Erstellung, den Patienten, auf den sich das
      Dokument bezieht, und andere relevante Details. Der Header bietet
      Kontext und Hintergrundinformationen für den Inhalt des Dokuments.

2.  **Body**:

    - Der Body enthält den Hauptinhalt des CDA-Dokuments. Hier werden
      die eigentlichen klinischen Informationen in strukturierter Form
      dargestellt. Der Body kann mehrere Abschnitte oder Blöcke von
      Informationen enthalten, die verschiedene Aspekte des klinischen
      Berichts darstellen, wie beispielsweise medizinische Befunde,
      Diagnosen, Behandlungen, Medikamentenlisten usw.

3.  **Abschnitte (Sections)**:

    - Abschnitte sind strukturierte Bereiche innerhalb des Body, die
      spezifische Arten von Informationen enthalten. Jeder Abschnitt ist
      in der Regel für eine bestimmte Art von klinischen Daten oder
      Informationen reserviert und kann spezifische Elemente und
      Strukturen enthalten, die durch entsprechende CDA-Templates
      definiert sind. Beispiele für Abschnitte sind "History of Present
      Illness" (Anamnese), "Medications" (Medikamente), "Allergies"
      (Allergien) usw. Diese Abschnitte helfen dabei, den Hauptinhalt
      des Dokuments zu organisieren und zu strukturieren.

Welche Bedeutung haben die verschiedenen XML-Attribute und -Elemente im
CDA?

Hier sind einige wichtige XML-Attribute und -Elemente:

1.  <span class="mark">\<ClinicalDocument\></span> : Dies ist das
    Wurzelelement eines CDA-Dokuments und enthält alle anderen Elemente
    und Informationen des Dokuments.

2.  <span class="mark">\<realmCode\></span> : Ein Attribut, das angibt,
    in welchem geografischen oder administrativen Bereich das Dokument
    erstellt wurde.

3.  <span class="mark">\<typeId\></span> : Ein Attribut, das den Typ des
    CDA-Dokuments angibt, z.B. ob es sich um einen Entlassungsbrief oder
    einen Befund handelt.

4.  <span class="mark">\<templateId\></span> : Ein Attribut, das auf die
    Vorlage (Template) verweist, die für die Erstellung des
    CDA-Dokuments verwendet wurde. Templates definieren die Struktur und
    den Inhalt des Dokuments gemäß den Anforderungen von Standards wie
    HL7.

5.  <span class="mark">\<id\></span> : Ein Element, das eine eindeutige
    Identifikationsnummer für das CDA-Dokument enthält.

6.  <span class="mark">\<code\></span> : Ein Element, das den Code oder
    die Klassifikation des Dokuments angibt, z.B. den Zweck oder die Art
    des Dokuments.

7.  <span class="mark">\<title\></span> : Ein Element, das den Titel
    oder die Überschrift des CDA-Dokuments enthält.

8.  <span class="mark">\<effectiveTime\></span> : Ein Element, das den
    Zeitpunkt angibt, zu dem das CDA-Dokument erstellt oder aktualisiert
    wurde.

9.  <span class="mark">\<confidentialityCode\></span> : Ein Element, das
    den Vertraulichkeitsgrad des Dokuments angibt, z.B. ob es sich um
    vertrauliche oder öffentliche Informationen handelt.

10. <span class="mark">\<author\></span> : Ein Element, das
    Informationen über den Autor des Dokuments enthält, z.B. Name,
    Kontaktinformationen und Rollenbezeichnung.

11. <span class="mark">\<component\></span>** :** Ein Element, das einen
    einzelnen Abschnitt oder eine Komponente des CDA-Dokuments enthält,
    z.B. einen Laborbefund oder eine medizinische Geschichte.

12. <span class="mark">\<section\></span> : Ein Element, das einen
    Abschnitt des CDA-Dokuments darstellt, z.B. eine Diagnose,
    Medikationsliste oder Behandlungsplan.

### XML-Transformation und Styling

#### Welche Rolle spielt die XML-Stylesheet-Referenz im CDA?

Die XML-Stylesheet-Referenz ermöglicht es, dass ein XML-Parser oder
Viewer weiß, wie das XML Dokument formatiert und dargestellt werden
soll. Es definiert im Wesentlichen die visuelle Darstellung des
XML-Dokuments.

Das wird im <span class="mark">\<?xml-stylesheet?\></span> 
Deklarationsabschnitt innerhalb des XML-Headers angegeben. Sie verweist
auf eine separate Datei, die die Anweisungen für die Formatierung und
Darstellung enthält. Diese separate Datei wird als XSL-Datei bezeichet.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong>-stylesheet type="text/xsl"
href="CDA.xsl"?&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 30 Beispiel

#### Wie unterstützt die XML-Transformation die Präsentation von klinischen Daten?

Hier sind einige Möglichkeiten, wie XML-Transformationen die
Präsentation von Daten unterstützen:

1.  **Formatierung für die Anzeige**: Transformationen können verwendet
    werden, um die strukturierten XML-Daten in verschiedene
    Anzeigeformate umzuwandeln, wie z.B. HTML, PDF oder andere
    benutzerfreundliche Formate. Dies ermöglicht es, klinische Daten auf
    eine Weise zu präsentieren, die für Menschen lesbar ist.

2.  **Anpassung an verschiedene Benutzeroberflächen**:
    XML-Transformationen ermöglichen es, klinische Daten an verschiedene
    Benutzeroberflächen anzupassen, sei es in einem elektronischen
    Patientenakten-System, einem Krankenhausinformationssystem (KIS)
    oder einer mobilen Gesundheits-App. Durch die Transformation können
    die Daten entsprechend den Anforderungen und dem Layout der
    jeweiligen Benutzeroberfläche angepasst werden.

3.  **Filterung und Selektion**: XML-Transformationen können verwendet
    werden, um bestimmte Teile der klinischen Daten zu filtern oder
    auszuwählen, die für eine bestimmte Präsentation relevant sind. Dies
    kann helfen, irrelevante Informationen zu entfernen und den Fokus
    auf die wichtigsten klinischen Details zu legen.

4.  **Darstellung von Hierarchien und Beziehungen**: Durch
    Transformationen können komplexe Hierarchien und Beziehungen
    zwischen klinischen Daten visuell dargestellt werden, um
    Zusammenhänge und Verbindungen besser zu verstehen. Dies kann
    insbesondere bei der Darstellung von medizinischen Befunden,
    Diagnosen und Behandlungsverläufen hilfreich sein.

Insgesamt unterstützen XML-Transformationen, indem sie die
strukturierten XML-Daten in benutzerfreundliche und informative
Darstellungsformen umwandeln. Dies trägt dazu bei, die Kommunikation,
Interpretation und Nutzung von klinischen Informationen im
Gesundheitswesen zu verbessern.

### Header

#### Welche Informationen sind im Dokumentenheader enthalten?

Der Dokumentenheader enthält wichtige Metadaten und Kontextinformationen
über das klinische Dokument. Diese Informationen helfen bei der
Identifizierung, Klassifizierung und Interpretation des Dokuments. Das
sind die einige Informationen;

- Dokumentenidentifikator: Eine eindeutige Kennung, die das Dokument
  identifiziert.

- Patientenidentifikator: E 

- Autoreninformationen: Informationen über die Person oder Organisation,
  die das Dokument erstellt hat.

- Erstellungsdatum und Zeitpunkt

- Klinischer Kontext (Zustand des Patienten, die medizinische Abteilung
  usw.)

- Änderungshistorie

- Vertraulichkeitsstufe (Wer hat Zugriff auf das Dokument)

- Empfängerinformationen

- Kodierungsinformationen: Information über das verwendeten Code-Systeme

- Sprache des Dokuments

#### Warum ist die Identifikation des Patienten wichtig, und wie wird sie erreicht?

Die Identifikation des Patienten ist wichtig aus mehreren Gründen:

- Patientensicherheit. Eine eindeutige Identifikation des Patienten
  hilft, Verwechslungen zu vermeiden und sicherzustellen, dass die
  richtige Behandlungen dem richtigen Patienten zugeordnet werden.

- Kontinuität der Pflege. Eine genaue Identifikation ermöglicht es den
  medizinischen Fachkräften, die relevante Informationen des Patienten
  korrekt zu verfolgen und zu verwalten, unabhängig davon, wo der
  Patient behandelt wird oder wer involviert sind.

Die Identifikation wird durch die Verwendung eindeutiger Kennungen
erreicht. Dafür wird auch die demografische Information (Name,
Geburtsdatum, Geschlecht und eine eindeutige Patientennummer) verwendet.

#### Was ist die Rolle der verschiedenen Codes im Header (z.B., realmCode, typeId, templateId)?

Die Codes dienen dazu, die Struktur, den Typ und andere Aspekte des
Dokuments zu definieren und zu identifizieren.

<span class="mark">realmCode</span> Dieser Code identifiziert den
geografischen oder administrativen Bereich, für den das Dokument
relevant ist.

<span class="mark">typeId</span>  Dieser Code identifiziert den Typ des
CDA-Dokuments. Beschreibung aus wiki.HL7.de:  *The clinical document
typeId identifies the constraints imposed by CDA R2 on the content,
essentially acting as a version identifier.*

<span class="mark">templateId</span> Dieser Code identifiziert die
Vorlage oder die Vorlagen, die für die Erstellung des Dokuments
verwendet wurden. Sie können verwendet werden, um sicherzustellen, dass
das Dokument bestimmten Standards entspricht und die erforderlichen
Informationen enthält. Jede Vorlage hat eine eindeutige Vorlagen-ID, die
im <span class="mark">templateId</span> -Element angegeben wird.

### Dokumentinhalt

#### Welche patientenspezifischen Informationen sind im CDA-Dokument vorhanden?

Ein CDA Dokument kann folgende Informationen über ein Patient erfassen:

- Identifikation (In Header). Dazu gehören Name, Geburtsdatum,
  Geschlecht und eine eindeutige Patientenidentifikationsnummer.

- Kontaktinformation. Adresse, Telefonnummer und Email, falls vorhanden.

- Kontaktinformation über Vormund. Name, Adresse, Kontaktdaten.

- Medizinische Geschichte. Die Information über vergangene Diagnosen,
  Behandlungen, Operationen usw.

- Aktuelle Probleme und Diagnosen.

- Medikationen. Eine Liste der aktuellen Medikamente des Patienten,
  einschließlich Dosierung und Verabreichungshäufigkeit.

- Laborergebnisse. Laboruntersuchungen wie Bluttests, Analysen usw.

- Behandlungspläne. Informationen über geplante medizinische
  Interventionen, Operationen oder Therapien.

- Fortgeschrittene medizinische Direktiven. Dokumente, die die Wünsche
  des Patienten in Bezug auf medizinische Behandlungen festlegen, falls
  er nicht in der Lage ist, Entscheidungen selbst zu treffen.

- Verlaufsdokumentation

- Vitalzeichen. Daten zu den Vitalparametern des Patienten wie
  Blutdruck, Puls, Temperatur und Atmung.

Diese Liste ist nicht endlich und je nach CDA Dokument können die Daten
variieren.

#### Welche Abschnitte sind im Dokumenteninhalt enthalten, und welche Informationen repräsentieren sie?

Abschnitte sind je nach Dokumenttyp unterschiedlich. Z.b. In einem AKTIN
Template werden folgende Abschnitten enthalten.

- Abschlussdiagnosen.

  - Die endgültigen Diagnosen, die während des Notfallbesuchs gestellt
    wurden.

- Allergien und Unverträglichkeit

  - Informationen über bekannte Allergien und Unverträglichkeiten des
    Patienten gegenüber Medikamenten oder anderen Substanzen.

- Befunde / Verlauf / durchgeführte

  - Therapie Dokumentation des klinischen Verlaufs während des
    Notfallbesuchs, einschließlich festgestellter Befunde,
    durchgeführter Therapien und ihrer Ergebnisse.

- Beschwerden bei Vorstellung

  - Eine Beschreibung der Symptome oder Beschwerden, mit denen der
    Patient bei der Notfallaufnahme vorgestellt wurde.

- Diagnostik

  - Informationen über durchgeführte diagnostische Untersuchungen wie
    Laboruntersuchungen, Bildgebung und andere Testverfahren.

- Ersteinschätzung

  - Eine initiale Einschätzung des Gesundheitszustands des Patienten bei
    der Ankunft in der Notaufnahme.

- Klinische Basisinformationen

  - Grundlegende demografische Informationen des Patienten sowie Angaben
    zur aktuellen Medikation und Vorerkrankungen.

- Notfallanamnese 

  -  Informationen über die Vorgeschichte des aktuellen
    Notfallereignisses, einschließlich relevanter Symptome, Ereignisse
    oder Expositionen.

- Transportmittel

  - Details zum Transportmittel, mit dem der Patient zur Notaufnahme
    gebracht wurde.

- Vitalparameter

  - Messwerte von Vitalparametern wie Blutdruck, Puls, Atemfrequenz und
    Temperatur.

- Weiteres Procedere / Therapieempfehlung / Weiterbehandler

  - Empfehlungen für weitere Maßnahmen, Therapien oder die Weiterleitung
    des Patienten an einen anderen Behandler oder eine spezialisierte
    Einrichtung.

- Zusatzmodule (weitere Dokumentation)

  -  Zusätzliche Informationen oder Dokumentationen, die nicht in die
    anderen Abschnitte passen.

- Zuweisung

  - Angaben zur Zuweisung des Patienten zur Notaufnahme, einschließlich
    Informationen über den überweisenden Arzt oder die überweisende
    Einrichtung.

#### Wie werden Zeitpunkte (Datum und Uhrzeit) im CDA dargestellt?

HL7 definiert einen spezifischen Datentyp namens "TS" (Timestamp), der
für die Darstellung von Zeitangaben verwendet wird.

Ein Timestamp kann folgendermaßen formatiert sein:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>YYYYMMDDHHMMSS.TZ</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 31 Timestamp

Dabe steht;

- YYYY für das Jahr (z. B. 2024)

- MM für den Monat (01 bis 12)

- DD für den Tag im Monat (01 bis 31)

- HH für die Stunde im 24-Stunden-Format (00 bis 23)

- MM für die Minute (00 bis 59)

- SS für die Sekunde (00 bis 59)

- TZ für die Zeitzone (z. B. +/-HHMM oder Z für UTC)

Beispiel:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;<strong>time</strong>&gt;</p>
<p>&lt;<strong>low</strong> value="201209091911-0400"/&gt;</p>
<p>&lt;<strong>high</strong> value="201209161911-0400"/&gt;</p>
<p>&lt;/<strong>time</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 32 Timestamp Beispiel

Die Zeitangaben im CDA sind auf diese standardisierte Weise formatiert,
um Interoperabilität zwischen verschiedenen Systemen zu gewährleisten
und einheitliche Datenrepräsentationen zu ermöglichen.

#### Welche Rolle spielen die Abschnitte für Transportmittel, Notfallanamnese, Diagnostik usw.?

Die verschiedenen Abschnitte spielen wichtige Rollen bei der
Dokumentation und Erfassung von klinischen Informationen. Hier ist die
Rolle jedes Abschnitts

1.  **Transportmittel**: Dieser Abschnitt dokumentiert das
    Transportmittel, mit dem der Patient zur Notaufnahme gebracht wurde.
    Die Aufnahme dieser Information ermöglicht es den medizinischen
    Fachkräften, den Zustand des Patienten bei der Ankunft besser zu
    verstehen und mögliche Einflüsse des Transportmittels auf den
    Gesundheitszustand zu berücksichtigen.

2.  **Notfallanamnese**: Hier werden relevante Informationen über die
    Vorgeschichte des aktuellen Notfallereignisses erfasst. Dies kann
    Symptome, Ereignisse, Expositionen oder andere Faktoren umfassen,
    die zur aktuellen Notfallsituation geführt haben. Die
    Notfallanamnese hilft dabei, den Kontext des Notfalls zu verstehen
    und die Behandlung entsprechend anzupassen.

3.  **Diagnostik**: In diesem Abschnitt werden alle durchgeführten
    diagnostischen Untersuchungen dokumentiert, einschließlich
    Laboruntersuchungen, Bildgebung und anderen Testverfahren. Die
    Erfassung dieser Informationen ermöglicht es den behandelnden
    Ärzten, den klinischen Zustand des Patienten zu bewerten und die
    richtigen Diagnosen zu stellen.

4.  **Weiteres Procedere / Therapieempfehlung / Weiterbehandler**: Hier
    werden Empfehlungen für weitere Maßnahmen, Therapien oder die
    Weiterleitung des Patienten an andere Behandler oder Einrichtungen
    festgehalten. Dieser Abschnitt ist entscheidend für die Koordination
    der Patientenversorgung nach dem Notfallbesuch und die
    Sicherstellung einer angemessenen Nachsorge.

#### Wie werden Codes und Terminologien im CDA verwendet (z.B., LOINC, SNOMED CT)?

Im CDA werden Codes und Terminologien verwendet, um medizinische
Konzepte und Informationen eindeutig zu identifizieren und zu codieren.
Weil sie eindeutig sind, erleichtert das den Austausch und die
Interpretation von klinischen Daten zwischen verschiedenen Systemen und
Organisationen. Typische Terminologiesysteme, die im CDA verwendet
werden, sind LOINC (Logical Observation Identifiers Names and Codes) und
SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms).

**LOINC (Logical Observation Identifiers Names and Codes)**: LOINC ist
ein standardisiertes Terminologiesystem, das zur Identifizierung von
Laborergebnissen und klinischen Beobachtungen verwendet wird. Es
verwendet Codes, um Tests, Messungen und Beobachtungen zu beschreiben.
Im CDA können LOINC-Codes verwendet werden, um Laborergebnisse und
klinische Beobachtungen zu kodieren, sodass sie einheitlich und
interoperabel sind.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;!-- *** SURGICAL DRAINS **************** --&gt;</p>
<p>&lt;<strong>component</strong>&gt;</p>
<p>&lt;<strong>section</strong>&gt;</p>
<p>&lt;<strong>templateId</strong>
root="2.16.840.1.113883.10.20.7.13"/&gt;</p>
<p>&lt;<strong>code</strong> code="11537-8"
codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"
displayName="SURGICAL DRAINS"/&gt;</p>
<p>&lt;<strong>title</strong>&gt;Surgical
Drains&lt;/<strong>title</strong>&gt;</p>
<p>&lt;<strong>text</strong>&gt;Penrose drain
placed&lt;/<strong>text</strong>&gt;</p>
<p>&lt;/<strong>section</strong>&gt;</p>
<p>&lt;/<strong>component</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 33 LOINC Beispiel

**SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms)**:
SNOMED CT ist eine umfassende, hierarchisch strukturierte Terminologie,
die klinische Konzepte, Beschreibungen von Krankheiten, klinischen
Befunden, Prozeduren und anderen medizinischen Entitäten umfasst. SNOMED
CT-Codes werden verwendet, um klinische Begriffe und Konzepte im CDA zu
kodieren, was eine detaillierte und präzise Erfassung und Darstellung
von klinischen Informationen ermöglicht.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;<strong>entry</strong>&gt;</p>
<p>&lt;<strong>procedure</strong> moodCode="RQO"
classCode="PROC"&gt;</p>
<p>&lt;!-- *** Planned Procedure (V2) *** --&gt;</p>
<p>&lt;<strong>templateId</strong>
root="2.16.840.1.113883.10.20.22.4.41" extension="2014-06-09"/&gt;</p>
<p>&lt;<strong>id</strong>
root="9a6d1bac-17d3-4195-89c4-1121bc809b5a"/&gt;</p>
<p>&lt;<strong>code</strong> code="73761001"
codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
displayName="Colonoscopy"/&gt;</p>
<p>&lt;<strong>statusCode</strong> code="new"/&gt;</p>
<p>&lt;<strong>effectiveTime</strong>&gt;</p>
<p>&lt;<strong>center</strong> value="20120512"/&gt;</p>
<p>&lt;/<strong>effectiveTime</strong>&gt;</p>
<p>&lt;<strong>author</strong>&gt;</p>
<p>&lt;<strong>templateId</strong>
root="2.16.840.1.113883.10.20.22.4.119"/&gt;</p>
<p>&lt;<strong>time</strong> value="20050329224411-0500"/&gt;</p>
<p>&lt;<strong>assignedAuthor</strong>&gt;</p>
<p>&lt;<strong>id</strong> extension="99999999"
root="2.16.840.1.113883.4.6"/&gt;</p>
<p>&lt;/<strong>assignedAuthor</strong>&gt;</p>
<p>&lt;/<strong>author</strong>&gt;</p>
<p>&lt;/<strong>procedure</strong>&gt;</p>
<p>&lt;/<strong>entry</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 34 SNOMED CT Beispiel

#### Warum sind sie wichtig für die Interoperabilität im Gesundheitswesen?

Die Verwendung von standardisierten Codes und Terminologien im
Gesundheitswesen ist entscheidend für die Interoperabilität aus mehreren
Gründen:

1.  **Einheitliche Datendarstellung**: Standardisierte Codes ermöglichen
    es, medizinische Konzepte und Informationen eindeutig zu
    identifizieren und zu beschreiben. Dadurch wird eine konsistente und
    einheitliche Datendarstellung erreicht, unabhängig von dem System
    oder der Organisation, die die Daten erfasst.

2.  **Interoperabilität zwischen Systemen**: Durch die Verwendung
    standardisierter Codes können Informationen zwischen verschiedenen
    Systemen und Organisationen ausgetauscht und interpretiert werden.
    Dies erleichtert die nahtlose Integration und den Austausch von
    klinischen Daten zwischen verschiedenen medizinischen Einrichtungen,
    Behandlern und IT-Systemen.

3.  **Klinische Entscheidungsunterstützung**: Standardisierte
    Terminologien ermöglichen es klinischen
    Entscheidungsunterstützungssystemen, ein breites Spektrum von
    klinischen Informationen zu verarbeiten und zu analysieren. Dies
    kann dazu beitragen, die Genauigkeit von Diagnosen und
    Behandlungsentscheidungen zu verbessern und die Qualität der
    Patientenversorgung zu erhöhen.

4.  **Qualitätsverbesserung und Forschung**: Standardisierte Codes
    erleichtern die Aggregation und Analyse von klinischen Daten für
    Qualitätsverbesserungsinitiativen und medizinische Forschung. Sie
    ermöglichen es, Daten aus verschiedenen Quellen zu kombinieren und
    zu analysieren, um Trends zu identifizieren, Behandlungsergebnisse
    zu bewerten und evidenzbasierte Praktiken zu entwickeln.

5.  **Compliance und Regulierung**: Die Verwendung standardisierter
    Codes und Terminologien ist oft eine Anforderung von
    Regulierungsbehörden und Gesundheitsorganisationen. Durch die
    Einhaltung dieser Standards können Organisationen sicherstellen,
    dass ihre Systeme und Prozesse den geltenden Vorschriften
    entsprechen.

Insgesamt tragen standardisierte Codes und Terminologien wesentlich zur
Verbesserung der Interoperabilität im Gesundheitswesen bei, indem sie
eine gemeinsame Sprache für die Erfassung, Darstellung und Austausch von
klinischen Daten bereitstellen. Dies fördert eine effizientere und
effektivere Nutzung von Gesundheitsinformationen zur Verbesserung der
Patientenversorgung, Forschung und Qualitätssicherung.

### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File                                                                                                                                | Modified                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| PDF File [HL7_Präsentation.pdf](https://confluence-imi.ukaachen.de/download/attachments/265184042/HL7_Pr%C3%A4sentation.pdf?api=v2) | Feb 01, 2024 by [Alexander Ivanets](https://confluence-imi.ukaachen.de/display/~aivanets) |

## Einführung in XML und JSON

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
<p>Grundlagen von XML und JSON</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Inhalt

- [Inhalt](#inhalt-3)

- [XML](#xml)

  - [JSON](#json)

- [Dateien (Versionierung)](#dateien-versionierung-3)

### XML

#### Grundlagen

##### Was ist XML und wofür wird es verwendet?

XML (eXtensible Markup Language) ist eine Auszeichnungssprache, die dazu
geeignet ist, strukturierte Daten zu definieren und zu speichern. XML
ist ähnlich zu HTML, jedoch ohne vordefinierte Tags. Stattdessen gibt es
die Möglichkeit, eigene Tags zu erstellen, die speziell auf Bedürfnisse
zugeschnitten sind. 

##### Wie sieht die grundlegende Struktur eines XML-Dokuments aus?

Ein XML-Dokument besteht aus folgenden Elementen:

**Deklaration**. Die Deklaration gibt an, dass das Dokument ein
XML-Dokument ist und enthält die
Attribute <span class="mark">version</span> ,
<span class="mark">encoding</span>  und
<span class="mark">standalone</span>.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 35 Deklaration

Die <span class="mark">version</span> gibt die Version der
XML-Spezifikation an, die für das Dokument verwendet wird. Es ist
obligatorisch und sollte normaleweise den Wert "1.0" oder "1.1" haben.

Die <span class="mark">encoding</span> gibt die Zeichenkodierung an, die
für das XML-Dokument verwendet wird. Dieser Attribut ist optional, aber
empfohlen. Häufig verwendete Werte sind "UTF-8", "ISO-8859-1" usw.

Die <span class="mark">standalone</span> gibt an, ob das XML-Dokument
eigenständig ist oder nicht. Es kann entweder den Wert "yes"
(eigenständig) oder "no" (nicht eigenständig) haben. Dieser Attribut ist
optional und falls es fehlt, wird davon ausgegangen, dass das Dokument
nicht eigenständig ist.

**Wurzelelement. **Das Wurzelelement ist das oberste Element in der
Hierarchie des XML-Dokuments und umschließt alle anderen Elemente. Es
kann beliebig benannt werden.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
<p>&lt;<strong>wurzelelement</strong>&gt;</p>
<p>&lt;/<strong>wurzelelement</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 36 Wurzelelement

Elemente und Attribute

##### Was sind XML-Elemente, und wie werden sie definiert?

**Elemente. **Elemente sind die Bausteine eines XML-Dokuments und können
Text oder andere Elemente enthalten. Sie werden durch Tags dargestellt,
die von spitzen Klammern umschlossen sind.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
<p>&lt;<strong>wurzelelement</strong>&gt;</p>
<p>&lt;<strong>element</strong>&gt;Element&lt;/<strong>Element</strong>&gt;</p>
<p>&lt;/<strong>wurzelelement</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 37 Element

Element, das kein Kontext hat, kann leer sein. Man kann es auch analog
zu HTML ein "s*elbstschließenden*" sein.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;<strong>element</strong>&gt;&lt;/<strong>element</strong>&gt;</p>
<p> </p>
<p>&lt;<strong>element</strong> /&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 38 Leer Element

##### Wie können Attribute in einem XML-Element verwendet werden?

**Attribute.** Attribute sind Teil der XML-Elemente. Ein Element kann
mehrere eindeutige Attribute. Attribut gibt weitere Informationen über
XML-Elementen. Um genauer zu sein, sie definieren Eigenschaften der
Elemente. Eine XML-Attribut ist immer ein *Name-Wert* Paar.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
<p>&lt;<strong>wurzelelement</strong>&gt;</p>
<p>&lt;<strong>element</strong> attribut1="wert1"
attribut2="wert2"&gt;Element&lt;/<strong>Element</strong>&gt;</p>
<p>&lt;/<strong>wurzelelement</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 39 Attribute

Attribute werden verwendet, um zwischen den Elementen mit dem gleichen
Namen zu unterscheiden. Daher kann die Verwendung des Attributs ein
wenig näher zur Unterscheidung von zwei oder mehr ähnliche Elemente
hinzuzufügen.

Validierung

##### Warum ist es wichtig, XML-Dokumente zu validieren?

Validierung von XML-Dokumenten dient zu überprüfen, ob ein Dokument
“wohlgeformt” und “gültig” ist. “Wohlgeformt” meint, dass es den
Strukturvorgaben des XML-Datenformates entspricht. “Gültig” meint, dass
auch die selber definierten Regeln eingehalten werden.

Syntaxregeln eines XML-Dokument

- XML-Dokumente müssen ein Wurzelelement haben

- XML-Elemente müssen ein schließendes Tag haben

- Bei XML-Tags wird die Groß-/Kleinschreibung beachtet

- XML-Elemente müssen ordnungsgemäß verschachtelt sein

- XML-Attributwerte müssen in Anführungszeichen gesetzt werden

Ein „gültiges“ XML-Dokument muss wohlgeformt sein. Darüber hinaus muss
es einer Dokumenttypdefinition entsprechen.

Es gibt zwei verschiedene Dokumenttypdefinitionen, die mit XML verwendet
werden können:

- DTD – Die ursprüngliche Dokumenttypdefinition

- XML-Schema – Eine XML-basierte Alternative zu DTD

Welche Rolle spielt eine XML-Schema-Definition (XSD)?

XML-Schema-Definition ist dazu geeignet, die XML-Dokumenten zu
validieren. XSD beschreibt die Struktur eines XML-Dokument. Der Zweck
eines XML-Schemas besteht darin, die rechtlichen Bausteine eines
XML-Dokuments zu definieren:

- die Elemente und Attribute, die in einem Dokument erscheinen können

- die Anzahl (und Reihenfolge) der untergeordneten Elemente

- Datentypen für Elemente und Attribute

- Standard- und Festwerte für Elemente und Attribute

Was ist XSLT und welche Rolle spielt es bei der Erstellung und
Validierung?

XSLT steht für Extensible Stylesheet Language Transformations. XSLT ist
eine XML-basierte Sprache, die in Verbindung mit spezieller
Verarbeitungssoftware für die Transformation von XML-Dokumenten
verwendet wird. XSLT wandelt ein XML-Dokument in ein anderes
XML-Dokument um. Während XSLT primär für Transformationen gedacht ist,
kann es auch dazu verwendet werden, die Struktur und Validität von
XML-Dokumenten zu überprüfen. Durch die Verwendung von XSLT können
Entwickler Regeln definieren. die sicherstellen, dass ein XML-Dokument
bestimmten Validierungsanforderungen entspricht.

Beispielanwendung

Erstellen ein einfaches XML-Dokument, das Informationen zu einer Person
enthält

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>import</strong> xml.etree.ElementTree as ET</p>
<p> </p>
<p><strong>def</strong> create_person(name, age, gender):</p>
<p>person <strong>=</strong> ET.Element("Person")</p>
<p> </p>
<p>name_element <strong>=</strong> ET.SubElement(person, "Name")</p>
<p>name_element.text <strong>=</strong> name</p>
<p> </p>
<p>age_element <strong>=</strong> ET.SubElement(person, "Age")</p>
<p>age_element.text <strong>=</strong> age</p>
<p> </p>
<p>gender_element <strong>=</strong> ET.SubElement(person, "Gender")</p>
<p>gender_element.text <strong>=</strong> gender</p>
<p> </p>
<p>xml_tree <strong>=</strong> ET.ElementTree(person)</p>
<p><strong>return</strong> xml_tree</p>
<p> </p>
<p><strong>def</strong> save_xml(xml_tree, filename):</p>
<p>with open(filename, "wb") as f:</p>
<p>xml_tree.write(f, encoding<strong>=</strong>"utf-8",
xml_declaration<strong>=</strong>True)</p>
<p> </p>
<p><strong>if</strong> __name__ <strong>==</strong> "__main__":</p>
<p>name <strong>=</strong> input("Name: ")</p>
<p>age <strong>=</strong> input("Age: ")</p>
<p>gender <strong>=</strong> input("Gender: ")</p>
<p>xml <strong>=</strong> create_person(name, age, gender)</p>
<p>save_xml(xml, "output.xml")</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 40 xml-erstellen.py

#### JSON

##### Was ist JSON?

###### JavaScript, kurz für "JavaScript Object Notation", ist wie XML ebenfalls eine Sprache um Daten zu strukturieren und auszutauschen. Wobei es seine wichtigste Rolle in der Datenübertragung bei Webanfragen und APIs hat.

###### Unterschiede zwischen JSON und XML:

1.  **Syntax: JSON verwendet eine einfachere Syntax im Vergleich zu XML.
    Es verwendet Schlüssel-Wert-Paare und Arrays, während XML Tags und
    Attribute verwendet.**

2.  

3.  **Lesbarkeit: JSON ist oft leichter lesbar für Menschen aufgrund
    seiner kompakteren Struktur.**

4.  

5.  **Verwendung: Während XML in erster Linie für den Datenaustausch und
    die Dokumentstruktur verwendet wird, wird JSON häufig in
    Webanwendungen und APIs für die Übertragung von Daten zwischen
    Server und Client verwendet. Somit wird JSON bei komplexer Logik und
    dem behandeln von Ereignissen verwendet.**

6.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>{</p>
<p>"Herausgeber": "Xema",</p>
<p>"Nummer": "1234-5678-9012-3456",</p>
<p>"Deckung": 2e+6,</p>
<p>"Waehrung": "EURO",</p>
<p>"Inhaber":</p>
<p>{</p>
<p>"Name": "Mustermann",</p>
<p>"Vorname": "Max",</p>
<p>"Teilnahme am Bonusprogramm": <strong>true</strong>,</p>
<p>"Hobbys": ["Reiten", "Golfen", "Lesen"],</p>
<p>"Alter": 42,</p>
<p>"Kinder": [],</p>
<p>"Partner": <strong>null</strong></p>
<p>}</p>
<p>} </p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 41 JSON-Object: Unternehmen mit Inhaber

##### Welche Datenstrukturen werden in JSON verwendet?

###### JSON kennt folgende Typen von Elemente: 

- **null: (null)**

- 

- **boolean: (true, false)**

- 

- **Zahl: (0-9, x, -, .) ganzahlig negativ und Kommazahl möglich**

- 

- **Zeichenkette: beginnt und endet mit ""  kann escapesequenzen mit \\
  benutzen**

- 

- **Objekt: besteht aus durch Komma getrennte "Eigenschaften". Erzeugt
  Hirachien zwischen den Elementen**

- - **Eigenschaften: besteht aus Schlüssel und Wert getrennt durch :**

  - - **Schlüssel = Zeichenkette**

    - 

    - **Wert = Elemente**

    - 

    - **Bsp. "schlüssel" : "wert"**

    - 

- **Array: Liste von Elementen/ leer**

- 

##### Wie werden Objekte und Arrays in JSON dargestellt?

1.  **Objekte: Ein JSON-Objekt beginnt und endet mit {} und ist eine
    ungeordnete Sammlung von Schlüssel-Wert-Paaren. Die Schlüssel sind
    Strings, und die Werte können Zeichenketten, Zahlen, boolesche
    Werte, Objekte, Arrays, null oder andere unterstützte Datentypen
    sein. (Wichtig: eindeutige Schlüssel!)**

2.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>{</p>
<p>"name": "John Doe",</p>
<p>"age": 30,</p>
<p>"isStudent": <strong>false</strong></p>
<p>}</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 42 Beispiel eines JSON-Objekts:

1.  **Arrays: Ein JSON-Array beginnt und endet mit \[\] und ist eine
    geordnete Liste von Werten. Die Werte können wiederum Zeichenketten,
    Zahlen, boolesche Werte, Objekte, Arrays oder null sein.**

2.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>["apple", "banana", "orange"]</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 43 Beispiel eines JSON-Arrays:

##### Was bedeutet Parsing in Bezug auf JSON?

"Parsing" im Allgemeinen bezieht sich auf die Analyse von strukturierten
Daten, um sie für die Verarbeitung (in einer anderen Sprache) zugänglich
zu machen. 

Im Kontext von JSON bedeutet das, dass der JSON-String in eine
Datenstruktur umgewandelt wird, die von der Programmiersprache
verstanden werden kann.

##### Wie kann ein JSON-Objekt in eine Datenstruktur Ihrer Programmiersprache umgewandelt werden, und umgekehrt? 

In den meisten Programmiersprachen gibt es eingebaute Funktionen oder
Bibliotheken zum Parsen von JSON. Zum Beispiel:

**JavaScript:** In JavaScript kann die
<span class="mark">JSON.parse()</span>-Funktion einen JSON-String in ein
JavaScript-Objekt umwandeln.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>var</strong> jsonString = '{"name": "John Doe", "age": 30,
"isStudent": false}'; <strong>var</strong> jsonObject =
JSON.parse(jsonString);</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 44 javascript

**Python:** In Python kann das Modul <span class="mark">json</span>
verwendet werden.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>import</strong> json</p>
<p> </p>
<p>jsonString <strong>=</strong> '{"name": "John Doe", "age": 30,
"isStudent": false}'</p>
<p>jsonObject <strong>=</strong> json.loads(jsonString)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 45 python

### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File                                                                                                                       | Modified                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| PDF File [XML-Grundlagen.pdf](https://confluence-imi.ukaachen.de/download/attachments/265177596/XML-Grundlagen.pdf?api=v2) | Jan 30, 2024 by [Alexander Ivanets](https://confluence-imi.ukaachen.de/display/~aivanets) |

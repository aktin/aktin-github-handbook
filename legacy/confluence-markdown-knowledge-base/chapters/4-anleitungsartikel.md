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

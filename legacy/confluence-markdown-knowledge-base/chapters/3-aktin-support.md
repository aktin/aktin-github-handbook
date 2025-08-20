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

<img src="../media/media/image1.png"
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

<img src="../media/media/image1.png"
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

<img src="../media/media/image1.png"
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

<img src="../media/media/image1.png"
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

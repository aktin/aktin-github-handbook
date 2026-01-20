# Anleitung Data Warehouse Manager

Der Data Warehouse Manager (DWH-Manager) ist die zentrale Web-Oberfläche zur Steuerung des AKTIN DWHs. Hier verwalten Sie eingehende Datenanfragen und generieren Monatsberichte.

## Anmeldung

1. Rufen Sie die Admin-Oberfläche in Ihrem Browser auf: `http://<SERVER-IP>/aktin/admin`.

![dwh1x400](images/dwh1.png)

2. Melden Sie sich mit Ihren Zugangsdaten an. Dazu werden die Benutzerdaten Ihrer [i2b2-Instanz][i2b2-operation] verwendet. Nach dem Login haben Sie Zugriff auf die Verwaltung der einzelnen
   Funktionalitäten.

![dwh2x400](images/dwh2.png)

## Zentrale Datenanfragen verwalten

Über das AKTIN-Netzwerk gehen regelmäßig Forschungsanfragen ein. Diese werden niemals automatisch beantwortet. Jede neue Anfrage muss durch Sie lokal geprüft und explizit freigegeben werden.

#### 1. Anfrage öffnen

Im Reiter Anfragen sehen Sie eine Übersicht aller offenen Anfragen. Die Art der Anfragen unterteilt sich in *Einzelanfragen* und *Serien-Anfragen*, welches in der Listenansicht entsprechend gekennzeichnet ist. Serien-Anfragen sind Anfragen, die wiederholt auftreten und sich innerhalb einer Serie lediglich im Ausführungszeitpunkt und dem Referenzzeitpunkt der Daten unterscheiden können.

![dwh3x400](images/dwh3.png)

::: tip Übersicht der möglichen Zustände einer Anfrage
- **Eingegangen**
  - Die Anfrage wurde vom zentralen Broker abgeholt, aber noch nicht angesehen
- **Freigabe der Anfrage**
  - Die Anfrage wurde angesehen und kann zur Ausführung freigegeben oder abgelehnt werden
- **Ausführung geplant**
  - Die Anfrage wurde freigegeben und wartet auf die Ausführung, da das Ausführungsdatum noch in der Zukunft liegt
- **Ausführung läuft**
  - Die SQL-Abfrage befindet sich in der Ausführung
- **Freigabe der Ergebnisse**
  - Die Ergebnisse der Ausführung sind einsehbar und die Übermittlung der Ergebnisse an den AKTIN-Broker kann freigegeben oder abgelehnt werden
- **Senden der Ergebnisse**
  - Die Ergebnisse werden an den zentralen AKTIN-Broker gesendet
- **Übermittlung abgeschlossen**
  - Die Ergebnisse wurden erfolgreich übermittelt
- **Abgelehnt**
  - Die Freigabe der Anfrage oder die Übermittlung der Ergebnisse wurde abgelehnt
- **Geschlossen**
  - Die Anfrage wurde auf dem AKTIN-Broker geschlossen oder gelöscht, wurde im DWH-Manager aber noch nicht vollständig beantwortet (d.h. die Anfrage wurde noch nicht abgelehnt oder die Ergebnisse wurden noch nicht übermittelt)
- **Fehlgeschlagen**
  - Bei der Ausführung der Anfrage oder dem Übermitteln der Ergebnisse ist ein Fehler aufgetreten. Wenden Sie sich in diesem Fall an den [AKTIN IT-Support][support-email]
:::

#### 2. Anfrage prüfen

Über das grüne Auge-Symbol oben rechts oder den Status-Balken der Anfrage in der
Übersicht wird die Einzelansicht aufgerufen. Dort sind Informationen zu der entsprechenden
Anfrage zu finden. Unter Auftraggeber wird der anfragende Wissenschaftler genannt. Der
Zeitraum, aus welchem Daten für die Ausführung der Anfrage verwendet werden sollen, wird
durch den Referenzzeitpunkt und den Erhebungszeitraum bestimmt. Zusätzlich ist das Datum
der geplanten Ausführung aufgeführt. Für Serien-Anfragen existiert zusätzlich ein Abfrage-
Intervall, das angibt in welchen zeitlichen Abständen Anfragen dieser Serie gestellt werden.
Sie haben hier auch die Möglichkeit sich alle Anfragen der Serie anzeigen zu lassen. In der
Beschreibung finden Sie eine Zusammenfassung der angefragten Daten und der geplanten
Auswertung. Bei inhaltlichen Fragen zu einer konkreten Anfrage wenden Sie sich bitte
an office@aktin.org.

In der Detailansicht finden Sie alle relevanten Informationen:

* **Beschreibung:** Ziel und Zweck der Forschung
* **Kontakt:** Ansprechpartner für Rückfragen
* **Zeitraum:** Von wann bis wann Daten abgefragt werden
* **Abfrage-Intervall:** Einmalig oder regelmäßig

Sie können die technische Umsetzung prüfen:

* **Quellcode:** Zeigt das SQL- oder R-Skript, das ausgeführt wird.
* **Ergebnisse:** Zeigt eine Vorschau (z. B. Anzahl der betroffenen Patienten), bevor Daten versendet werden.

Eine Anfrage kann in der Einzelansicht freigegeben oder abgelehnt werden, sofern sie auf
dem zentralen Server noch nicht geschlossen oder gelöscht wurde (markiert durch den finalen
Status „Geschlossen“).

### 3. Entscheidung treffen

Bei einer Serien-Anfrage kommen noch weitere Optionen zur Auswahl hinzu. Es ist weiterhin
möglich jede einzelne Ausführung manuell freizugeben (mit oder ohne Überprüfung der
Ergebnisse). Darüber hinaus kann eine Regel für die Serie festgelegt werden. Alle
nachfolgenden Anfragen der entsprechenden Serie werden dann automatisch freigegeben
bzw. abgelehnt, sobald sie neu eingegangen sind.
Falls gewünscht, kann diese Regel auch auf bereits bestehende, nicht beantwortete Anfragen
angewendet werden (dies ist z. B. dann der Fall, wenn nach einer DWH-Neuinstallation bereits
laufende Anfragen übertragen werden oder bereits Ausführungszeitpunkte „verpasst“ wurden).
Sofern zu den betreffenden Zeiträumen Daten vorliegen, würden diese dann rückwirkend
bereitgestellt, wenn diese Option ausgewählt wird.
Die Regel kann in der Einzelansicht einer Anfrage aus der entsprechenden Serie eingesehen
und wieder entfernt werden.

Bei erfolgreich durchgeführten Abfragen können (ggf. auch vor der Übermittlung, wenn die
entsprechende Freigabe-Option gewählt wurde) die Ergebnisse als ZIP-Datei heruntergeladen
werden. Die enthaltenden Daten können in Microsoft Excel importiert werden. Vor der finalen
Freigabe und Weiterleitung der Daten besteht also die Möglichkeit die Daten zu prüfen und
erst danach eine Entscheidung zur Datenweiterleitung zu treffen.
Öffnen Sie für den Excel-Import eine Excel-Arbeitsmappe und wählen Sie unter dem Reiter
„Daten“ die Option „Aus Text“ aus, um die heruntergeladene Text-Datei zu importieren
(extrahieren Sie zunächst den ZIP-Ordner, in dem sie sich befindet). In den folgenden
Dialogen lassen sich Einstellungen bzgl. der Konvertierung festlegen. I.d.R. erkennt Excel die
richtige Einstellung von allein, sodass keine Änderungen von Ihnen gemacht werden müssen.
Die Angabe, die für einen erfolgreichen Import überprüft werden sollte, ist das Trennzeichen,
welches als Tabstopp festgelegt sein sollte. Falls dies nicht der Fall ist, so korrigieren Sie dies
bitte. Nachdem dem Bestätigen der Angaben im Dialog, haben Sie die Möglichkeit
auszuwählen wo die Tabelle eingefügt werden soll.

Nutzen Sie die Buttons am Ende der Seite, um auf die Anfrage zu reagieren:

* **Freigeben (Automatisch):** Die Ergebnisse werden direkt und verschlüsselt an den zentralen Broker übertragen.
* **Manuell Übermitteln:** Sie laden die Ergebnisdatei herunter, um sie z. B. auf einem USB-Stick zu transferieren (für strikt getrennte Netze).
* **Ablehnen:** Es werden keine Daten übertragen. Der Status "Abgelehnt" wird an den Broker gemeldet.

## Monatsberichte erstellen

Das DWH kann automatisierte Berichte über die Datenqualität und Kennzahlen Ihrer Notaufnahme generieren.

1. Wechseln Sie in den Reiter **Berichte**.
2. Klicken Sie auf den Button **Neuer Bericht**.
3. Wählen Sie im Dialog den Zeitraum (Monat/Jahr) aus.
4. Der Bericht erscheint in der Liste mit dem Status `wird erstellt`.

Sobald der Vorgang abgeschlossen ist, wird der Download-Button grün. Klicken Sie darauf, um den Bericht als **PDF** herunterzuladen.
# Import von fallbasierten Behandlungsdaten (§21 KHEntgG)

Zusätzlich zu den klinischen Daten können Sie fallbasierte Abrechnungsdaten (gemäß §21 KHEntgG) in das Data Warehouse importieren. Dies geschieht über eine dedizierte Schnittstelle im DWH-Manager.

### Voraussetzungen und Datenformat

Damit der Import gelingt, müssen die Quelldaten spezifischen Anforderungen entsprechen:

* **Dateiformat:** Die Daten müssen als **CSV-Dateien** vorliegen, die in einem **ZIP-Archiv** gebündelt sind.
* **Kodierung:** UTF-8, Trennzeichen: Semikolon (`;`), Dezimaltrennzeichen: Komma (`,`).
* **Inhalt:**
    * `FALL.csv` (Zwingend erforderlich)
    * `FAB.csv`, `ICD.csv`, `OPS.csv` (Optional)
* **Verknüpfung:** Die Zuordnung zu den Patienten erfolgt über das Feld `KH-internes-Kennzeichen`. Dieses muss exakt mit der Fallnummer übereinstimmen, die bereits über die CDA-Schnittstelle importiert wurde. Fälle, die im DWH nicht bekannt sind, werden ignoriert.

### Ablauf des Imports

Der Prozess ist dreistufig aufgebaut: **Hochladen → Prüfen → Importieren**.

#### 1. Datei hochladen

1.  Wechseln Sie im DWH-Manager auf den Reiter **Daten-Import**.
2.  Wählen Sie unter "Art der Datenverarbeitung" das entsprechende Skript aus.
3.  Klicken Sie auf **Durchsuchen**, wählen Sie Ihr ZIP-Archiv aus und bestätigen Sie mit **Upload**.

*Hinweis: Die Standard-Dateigröße ist auf 1 GB begrenzt.*

#### 2. Datei prüfen (Validierung)

Nach dem Upload erscheint die Datei in der Übersichtstabelle. Bevor die Daten in die Datenbank geschrieben werden, muss die Struktur validiert werden.

1.  Klicken Sie in der Zeile der Datei auf den Button **Prüfen**.
2.  Der Prozess läuft im Hintergrund (Status: `Prüfung läuft`). Dies kann je nach Dateigröße einige Zeit dauern.
3.  Nach Abschluss können Sie über die Buttons neben dem Status das **Ausgabe-Log** oder **Fehler-Log** einsehen, um Details zur Prüfung zu erfahren.

#### 3. Import durchführen

Erst nach erfolgreicher Prüfung wird der **Import-Button** aktiv.

1.  Klicken Sie auf **Import**, um die Daten final in die Datenbank zu schreiben.
2.  Sobald der Status auf `Import abgeschlossen` wechselt, sind die Daten im System verfügbar und können abgefragt werden.

::: danger Wichtige Warnhinweise
**Daten löschen:**
Wenn Sie in der Liste auf den Button **Löschen** (Mülleimer-Symbol) klicken, wird nicht nur die hochgeladene ZIP-Datei entfernt, sondern auch **alle zugehörigen importierten Datensätze aus der Datenbank gelöscht**.

**Daten überschreiben:**
Wenn Sie eine Datei hochladen, die Fälle enthält, die bereits importiert wurden (identisches Kennzeichen), werden die bestehenden Einträge in der Datenbank mit den neuen Daten **überschrieben**.
:::


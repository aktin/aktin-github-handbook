# Debian Update

Seit Version 1.5 des AKTIN Data Warehouse wurde der Updateprozess durch die Debian-Paketierung deutlich vereinfacht. Anstelle eines separaten Skripts übernimmt nun der Debian-Paketmanager das Update
automatisch im Hintergrund.

Sie können das Update über die Kommandozeile (CLI) oder die Web-Oberfläche starten. Das Data Warehouse wird während des Vorgangs neu gestartet. Ein Popup zeigt das Ergebnis nach Abschluss an.

Falls das Update fehlschlägt, stellt das System automatisch die vorherige Version wieder her. In diesem Fall wenden Sie sich bitte an das [AKTIN-IT-Team][support-email].

::: warning
Diese Anleitung gilt nur für Updates ab Version 1.5. Für eine Aktualisierung von Version 1.4 oder älter, wenden Sie sich an das [AKTIN-IT-Team][support-email].
:::

## Ausführung des Updates über die Kommandozeile

Für das Update müssen alle Befehle als `root` ausgeführt werden. Falls der `root`-Nutzer noch nicht aktiviert ist, folgen Sie den Hinweisen im Abschnitt [Freischaltung von root][root-manual] der
Installationsanleitung.

Führen Sie zunächst den Befehl aus, um die Paketlisten des Paketmanagers neu einzulesen:

```bash
apt-get update
```

Anschließend können Sie über den Befehl das neuste verfügbare Paket des AKTIN Data Warehouse installieren:

```bash
apt-get --only-upgrade install aktin-notaufnahme-i2b2
apt-get --only-upgrade install aktin-notaufnahme-dwh
apt-get --only-upgrade install aktin-notaufnahme-updateagent
```

Weitere Schritte sind nicht erforderlich. Während des Updates steht das Data Warehouse nicht zur Verfügung. Wenn bereits die aktuelle Version installiert ist, zeigt die Konsole einen entsprechenden
Hinweis. Nach Abschluss des Updates kann das Data Warehouse wieder normal verwendet werden.

## Ausführung des Updates über die Ansicht des DWH

Um das AKTIN Data Warehouse über die Ansicht zu aktualisieren, wechseln Sie zunächst zum AKTIN Data Warehouse in Ihrem Browser.

### 1. Suche nach einer neuen Version

Klicken Sie oben rechts auf den Update-Button. Während der Suche zeigt der Button eine Animation. Wird die Animation beendet, ohne dass sich der Button ändert, ist bereits die aktuelle Version
installiert.

![update1x400](images/update1.png)

### 2. Initialisierung des Update-Vorgangs

Wenn eine neue Version gefunden wurde, ändert sich der Button. Klicken Sie ihn an, um das Update zu starten. Ein Hinweisfenster informiert, dass das Data Warehouse während des Updates nicht verfügbar
ist und anschließend neu gestartet wird. Bestätigen Sie den Hinweis, um fortzufahren.

![update2x400](images/update2.png)

![update3x400](images/update3.png)

### 3. Durchführung des Updates

Während des Updates werden Sie auf eine externe Statusseite weitergeleitet. Nach Abschluss erfolgt automatisch die Rückkehr zur Startseite.

![update4x400](images/update4.png)

### 4. Abschluss des Updates

Nach dem Update erscheint ein Popup mit dem Ergebnis und dem Konsolenlog. Schließen Sie das Fenster, um den Normalbetrieb wieder aufzunehmen. Das Popup kann jederzeit erneut **über die Versionsnummer**
des Data Warehouse geöffnet werden.

![update5x400](images/update5.png)

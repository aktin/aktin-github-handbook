# Ubuntu Server Upgrade

Diese Anleitung beschreibt das Upgrade einer bestehenden Ubuntu LTS-Version auf die nächste LTS-Version, z. B. von Ubuntu 20.04 LTS (focal) auf Ubuntu 22.04 LTS (jammy).
Dieses Upgrade ist erforderlich für den Betrieb des AKTIN Data Warehouse ab Version 1.6 (ausgenommen Docker-Installationen).
Wenn Sie eine andere Distribution oder ein angepasstes Setup verwenden, kontaktieren Sie bitte den [AKTIN IT-Support][support-email].

## 1. Vorbereitung

Für das Upgrade werden administrative Rechte benötigt. Öffnen Sie eine `root`-Sitzung:

```bash
sudo -i
```

Aktualisieren Sie die Paketquellen und bestehende Pakete, um die neuesten Paketinformationen vom Repository herunterzuladen und verfügbare Aktualisierungen zu installieren.

```bash
apt update
apt upgrade
```

## 2. Durchführung des Distributionsupgrades

Starten Sie das eigentliche Upgrade:

```bash
do-release-upgrade
```

Dieser Befehl führt das System auf die nächste unterstützte Ubuntu-LTS-Version (z. B. 20.04 → 22.04) hoch. Wenn Sie gefragt werden, ob bestehende Konfigurationsdateien ersetzt werden sollen,
**behalten Sie die alten Einstellungen**. Dadurch bleiben beispielsweise SSH-Konfigurationen erhalten. Nach Abschluss wird das System automatisch neu gestartet.

## 3. Nachbearbeitung

Nach dem Neustart des Systems sollten Sie zunächst prüfen, ob das Upgrade erfolgreich abgeschlossen wurde und welche Ubuntu-Version aktuell installiert ist:

```bash
lsb_release -a
```

Fügen Sie anschließend das aktuelle AKTIN-Repository hinzu, um sicherzustellen, dass Ihr System die neuesten AKTIN-Pakete beziehen kann. Folgen Sie dazu den Hinweisen im
Abschnitt [AKTIN Repository einbinden][repo-aktin] der Installationsanleitung.

Damit die neuen Paketquellen erkannt werden, aktualisieren Sie erneut die Paketlisten. So stellt das System sicher, dass alle AKTIN-Komponenten aus der korrekten Repository-Version
geladen werden.

```bash
apt update
```

::: warning Wichtiger Hinweis zu PostgreSQL 
Bei einem Distributions-Upgrade wird oft auch die Datenbank-Software (PostgreSQL) aktualisiert. Dabei wird ein neuer, leerer Datenbank-Server gestartet.
Prüfen Sie nach dem Upgrade, ob Ihre alten Daten verfügbar sind. Falls das System "leer" wirkt, müssen die Daten vom alten in den neuen Datenbank-Cluster migriert werden (über den Befehl `pg_upgradecluster`).
Kontaktieren Sie im Zweifel bitte den [AKTIN IT-Support][support-email]. bevor Sie neue Daten importieren. 
:::

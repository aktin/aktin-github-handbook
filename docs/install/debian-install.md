# Debian Installation

Auf dieser Seite wird die Installation und Konfiguration des AKTIN Data Warehouse beschrieben. Die Software steht als Debian-Paket zur Verfügung und wurde für
**Ubuntu {{ $theme.versions.ubuntu }} LTS ({{ $theme.versions.codename }})** getestet. Wenn Sie eine andere Distribution verwenden möchten, kontaktieren Sie bitte
den [AKTIN IT-Support][support-email]. Für die Vorbereitung des Servers beachten Sie die Hinweise auf der Seite zur [Server-Installation][server-install].

## Vorbereitung der Installation

### Voraussetzungen

Siehe [Systemanforderungen][hardware] und [Netzwerk][network].

### Administrative Rechte (root)

Für die Installation benötigen Sie volle Systemrechte. Aus Sicherheitsgründen sollten Sie den `root`-Benutzer nicht dauerhaft aktivieren, sondern stattdessen `sudo` verwenden. Wechseln Sie für die
Installation in eine temporäre `root`-Sitzung:

```bash
sudo -i
```

Geben Sie Ihr eigenes Benutzerpasswort ein. Sie haben nun dauerhaft `root`-Rechte für diese Sitzung. Alternativ können Sie jedem Befehl ein `sudo` voranstellen.

### Aktualisierung der Zertifikate

Stellen Sie sicher, dass Ihr Server die aktuellsten Zertifikate besitzt, um Probleme beim Zugriff auf das AKTIN Repository zu vermeiden. Aktualisieren Sie die Zertifikate mit folgendem Befehl:

```bash
apt-get update && apt-get install -y ca-certificates
```

### AKTIN Repository einbinden

Um das AKTIN DWH installieren zu können, müssen Sie das AKTIN Repository zu Ihrem System hinzufügen. Fügen Sie zuerst den Repository-Schlüssel hinzu:

```bash
sudo wget -O - https://www.aktin.org/software/repo/org/apt/conf/aktin.gpg.key | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/aktin.gpg
```

Binden Sie anschließend die Repository-Quelle ein:

<pre><code>echo "deb https://www.aktin.org/software/repo/org/apt {{ $theme.versions.codename }} main" | \
sudo tee /etc/apt/sources.list.d/aktin.list</code></pre>

::: info
Das Paket wurde nur mit **Ubuntu {{ $theme.versions.ubuntu }} LTS ({{ $theme.versions.codename }})** getestet und verifiziert.
:::

## Installation des Data Warehouse

Nachdem alle Vorbereitungen abgeschlossen sind, können Sie das AKTIN DWH mit den folgenden Befehlen installieren:

```bash
apt-get update
apt-get install -y aktin-notaufnahme-i2b2
apt-get install -y aktin-notaufnahme-dwh
apt-get install -y aktin-notaufnahme-updateagent
```

* `aktin-notaufnahme-i2b2`: Installiert den Applikationsserver (Wildfly), die Datenbank (PostgreSQL) und einen Apache2 Reverse Proxy
* `aktin-notaufnahme-dwh`: Enthält die eigentliche Data-Warehouse-Software. Dieses Paket wird regelmäßig aktualisiert
* `aktin-notaufnahme-updateagent`: (Optional) Ermöglicht die Aktualisierung des DWH über die Web-Oberfläche

::: important
Bevor Sie Ihr AKTIN Data Warehouse in Betrieb nehmen können, müssen Sie zunächst eine [initiale Konfiguration][configuration] vornehmen.
:::

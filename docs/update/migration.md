# Migration zwischen Debian und Docker

Diese Anleitung beschreibt die Migration eines AKTIN Data Warehouse zwischen klassischen Ubuntu/Debian-Installationen und Docker-Installationen. Sie führt durch Backup, Transfer,
Wiederherstellung und Validierung. Gültig für DWH-Versionen ab 1.5. Für ältere Versionen wenden Sie sich an den [AKTIN IT-Support][support-email].

Offiziell unterstützt ist Ubuntu {{ $theme.versions.ubuntu }} LTS als Betriebssystem. Für Docker-Zielsysteme muss Docker vorab installiert und lauffähig sein. Orientieren Sie sich dazu an
der [Docker-Installationsanleitung][docker-install]. Die DWH-Version muss mindestens 1.5 sein. Die aktuell installierte DWH-Version sehen Sie nach Anmeldung in der Admin-Konsole unter
`http://<SERVER-IP>/aktin/admin`.

## 1. Vorbereitung

Die benötigten Migrations-Skripte finden Sie im öffentlichen Repository
unter [https://github.com/aktin/aktin-scripts/tree/main/dwh-migration](https://github.com/aktin/aktin-scripts/tree/main/dwh-migration). Laden Sie die entsprechenden Skripte für Ihre Quell- und
Zielumgebung herunter:
* `create_deb_backup.sh`: Backups für Debian-Installation
* `create_docker_backup.sh`: Backups für Docker-Installation
* `apply_backup_to_deb.sh`: Spielt ein Backup auf einem Debian-Zielsystem ein
* `apply_backup_to_docker.sh`: Spielt ein Backup auf einem Docker-Zielsystem ein

Für die Migration werden administrative Rechte benötigt, da die Skripte Systemdienste stoppen und auf Datenbanken zugreifen müssen. Starten Sie eine temporäre Root-Sitzung mit folgendem Befehl:

```bash
sudo -i
```

## 2. Backups erstellen

::: tabs
@tab Debian-Installation

1. Kopieren Sie `create_deb_backup.sh` auf den Quellserver in ein Arbeitsverzeichnis.

2. Machen Sie das Skript ausführbar:

```bash
chmod +x create_deb_backup.sh
```

3. Starten Sie die Sicherung:

```bash
./create_deb_backup.sh
```

Das Skript erstellt eine komprimierte Backup-Datei `aktin-backup-YYYYmmddHHMM.tar.gz` im aktuellen Verzeichnis.

@tab Docker-Installation

1. Kopieren Sie das Skript `create_docker_backup.sh` auf den Quellserver.

2. Machen Sie das Skript ausführbar:

```bash
chmod +x create_docker_backup.sh
```

3. Ermitteln Sie die Namen der laufenden Container für `wildfly`, `db` und `httpd`:

```bash
docker ps --format 'table {{.Names}}\t{{.Image}}'
```

Notieren Sie sich die konkreten Container-Namen (z.B. `dwh1-wildfly-1`, `dwh1-db-1`, `dwh1-httpd-1`).

4. Starten Sie die Sicherung. Übergeben Sie dabei die Container-Namen in der Reihenfolge `wildfly`, `db` und `httpd` (Beispiel: `./create_docker_backup.sh dwh1-wildfly-1 dwh1-db-1 dwh1-httpd-1`):

```bash
./create_docker_backup.sh <WILDFLY_NAME> <DB_NAME> <HTTPD_NAME>
```

Das Skript erstellt eine komprimierte Backup-Datei `aktin-backup-YYYYmmddHHMM.tar.gz` im aktuellen Verzeichnis.
:::

## 3. Backup anwenden

::: tabs
@tab Debian-Zielsystem

**Voraussetzung**: Ein frisch installiertes AKTIN DWH auf dem Zielserver.

1. Kopieren Sie das Skript `apply_backup_to_deb.sh` und die erstellte Backup-Datei (`.tar.gz`) auf den Zielserver.

2. Machen Sie das Skript ausführbar:

```bash
chmod +x apply_backup_to_deb.sh 
```

3. Starten Sie die Wiederherstellung unter Angabe der Backup-Datei (Beispiel: `./apply_backup_to_deb.sh aktin-backup-20250918.tar.gz`):

```bash
./apply_backup_to_deb.sh <PFAD_ZUR_BACKUP_DATEI> 
```

@tab Docker-Zielsystem

**Voraussetzung**: Eine laufende, idealerweise noch leere Docker-Installation des AKTIN DWH.

1. Kopieren Sie das Skript `apply_backup_to_docker.sh` und die Backup-Datei auf den Docker-Host.

2. Machen Sie das Skript ausführbar:

```bash
chmod +x apply_backup_to_docker.sh 
```

3. Ermitteln Sie die Namen der laufenden Container für `wildfly`, `db` und `httpd`:

```bash
docker ps --format 'table {{.Names}}\t{{.Image}}'
```

Notieren Sie sich die konkreten Container-Namen (z.B. `dwh1-wildfly-1`, `dwh1-db-1`, `dwh1-httpd-1`).

4. Führen Sie das Skript aus. Die Reihenfolge der Argumente ist: Backup-Datei, Wildfly-Container, Datenbank-Container, httpd-Container (Beispiel:
   `./apply_backup_to_docker.sh backup.tar.gz dwh1-wildfly-1 dwh1-db-1 dwh1-httpd-1`):

```bash
./apply_backup_to_docker.sh <BACKUP_DATEI> <WILDFLY_NAME> <DB_NAME> <HTTPD_NAME> 
```

:::

::: warning Konfiguration prüfen
Durch das Einspielen des Backups wird die Datei `aktin.properties` überschrieben. In neueren DWH-Versionen können neue Konfigurationsfelder hinzugekommen sein (z.B. für Einstellungen von neuen
Features). Prüfen Sie die Datei `aktin.properties` manuell. Stellen Sie sicher, dass `email.session=local` gesetzt ist, falls Sie den lokalen Mailversand nutzen. Ergänzen Sie fehlende
SMTP-Zugangsdaten, falls diese im alten Backup noch nicht enthalten waren.
:::

::: important Datenschutzhinweis
Backups enthalten vertrauliche Konfigurationen und exportierte Daten. Die Archive sind strukturiert und Komponenten darin verschlüsselt. Behandeln Sie die Dateien
dennoch jederzeit vertraulich und begrenzen Sie Zugriffe auf autorisierte Personen. Löschen oder archivieren Sie Backups nach Abschluss gemäß Ihren Richtlinien.
:::

## 4. Validierung nach der Migration

Öffnen Sie die Admin-Konsole unter `http://<SERVER-IP>/aktin/admin` und prüfen Sie, ob die erwartete DWH-Version angezeigt wird. Testen Sie auch die Funktionsfähigkeit, indem Sie den Anweisungen
zum [Test der Betriebsfähigkeit][test-operability] folgen. Bei Fehlermeldungen prüfen Sie die Dienste und Logs.

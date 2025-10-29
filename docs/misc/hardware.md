# Systemanforderungen

Diese Seite beschreibt die empfohlene und minimale Hardware- sowie Softwareausstattung für den Betrieb des AKTIN Data Warehouse. Die Angaben gelten gleichermaßen für die Installation über
Debian-Pakete und für den Docker-basierten Betrieb, sofern nicht anders angegeben.

### Hardware

| Komponente        | Empfehlung       | Minimum       | Hinweise                                      |
|-------------------|------------------|---------------|-----------------------------------------------|
| **CPU**           | 4 Kerne          | 2 Kerne       | Für gleichzeitige Datenverarbeitung empfohlen |
| **RAM**           | 16 GB            | 8 GB          | -                                             |
| **Speicherplatz** | ≥ 100 GB SSD/HDD | 50 GB SSD/HDD | Logdaten und Datenbankbedarf einkalkulieren   |

### Betriebssystem

| Komponente       | Empfehlung                                                               | Hinweise                      |
|------------------|--------------------------------------------------------------------------|-------------------------------|
| **Linux-Server** | Ubuntu {{ $theme.versions.ubuntu }} LTS ({{ $theme.versions.codename }}) | Getestet und empfohlen        |
| **Zugang**       | `root`- oder `sudo`-Berechtigung                                         | Für Installation erforderlich |

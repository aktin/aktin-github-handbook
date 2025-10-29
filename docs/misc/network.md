# Netzwerk

Auf dieser Seite sind alle Netzwerkfreigaben und Verbindungen aufgeführt, die für den Betrieb des AKTIN Data Warehouse erforderlich sind. Die Anforderungen unterscheiden sich leicht zwischen der
Debian-Installation und dem Docker-Betrieb.

### Netzwerk-Anforderungen für Debian-Installation

| Zugriff                    | Server                                 | IP-Adresse     | Port/Protokoll                  | Zweck                             |
|----------------------------|----------------------------------------|----------------|---------------------------------|-----------------------------------|
| **Installation**           | `de.archive.ubuntu.com`                | 141.30.62.23   | 80/tcp                          | Ubuntu-Paketquellen               |
| **Installation / Updates** | `aktin.org`                            | 188.68.47.138  | 443/tcp, 8443/tcp               | Repository und Updates            |
| **Betrieb**                | `aktin-broker.klinikum.rwth-aachen.de` | 134.130.15.160 | 443/tcp                         | Kommunikation mit AKTIN Broker    |
| **Webzugriff (lokal)**     | lokaler Host                           | -              | 80/tcp oder konfigurierter Port | Zugriff auf Weboberfläche des DWH |

### Netzwerk-Anforderungen für Docker-Betrieb

| Zugriff                     | Server                                 | IP-Adresse     | Port/Protokoll          | Zweck                                   |
|-----------------------------|----------------------------------------|----------------|-------------------------|-----------------------------------------|
| **Instsallation / Updates** | `ghcr.io`                              | 140.82.112.34  | 443/tcp                 | Download von Docker-Images und Releases |
| **Betrieb**                 | `aktin-broker.klinikum.rwth-aachen.de` | 134.130.15.160 | 443/tcp                 | Kommunikation mit AKTIN Broker          |
| **Webzugriff (lokal)**      | lokaler Host                           | -              | 80/tcp oder `HTTP_PORT` | Zugriff auf Weboberfläche des DWH       |

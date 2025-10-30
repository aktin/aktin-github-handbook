# Docker Update

Auf dieser Seite wird beschrieben, wie eine bestehende AKTIN Data Warehouse Docker-Installation aktualisiert wird. Das Verfahren wurde mit **Ubuntu {{ $theme.versions.ubuntu }} LTS
({{ $theme.versions.codename }})** getestet. Bei abweichenden Systemumgebungen wenden Sie sich bitte an den [AKTIN IT-Support][support-email].

## Voraussetzungen

Vor Beginn des Updates muss sichergestellt sein, dass auf dem Server die aktuelle Version der [Docker Engine][docker-engine] (≥ 24.0) und des [Docker Compose Plugin][docker-compose] (≥ 2.0)
installiert sind. Überprüfen Sie dies mit den folgenden Befehlen:

```bash
docker --version
docker compose version
```

Beide Befehle sollten Versionsnummern ausgeben. Stellen Sie außerdem sicher, dass Sie Zugriff auf das Arbeitsverzeichnis der Installation besitzen, beispielsweise `/opt/docker-deploy/aktin-dwh/dwh1`.
In diesem Verzeichnis befindet sich die Datei `compose.yml`, die alle Containerdefinitionen enthält, sowie die Datei `secret.txt`, in der das interne Datenbankpasswort gespeichert ist. Diese Datei
darf nicht verändert oder gelöscht werden. Vor dem Update empfiehlt es sich außerdem, ein Backup anzulegen.

## Vorbereitung des Updates

Zuerst sollten Sie den aktuellen Zustand der laufenden Container prüfen. Wechseln Sie dazu in das Installationsverzeichnis und geben Sie den folgenden Befehl ein:

```bash
cd /opt/docker-deploy/aktin-dwh/dwh1
docker compose ps
```

Der Befehl `docker compose ps` zeigt eine Übersicht aller Container mit ihrem aktuellen Status an. Alle Container sollten als Status `running` oder `healthy` anzeigen. Mit dem Befehl
`docker compose config --services` können Sie sich außerdem anzeigen lassen, welche Dienste in der Konfiguration definiert sind.

## Durchführung des Updates

Im nächsten Schritt laden Sie die aktuelle Version der AKTIN Compose-Datei aus dem offiziellen GitHub-Repository herunter. Diese Datei enthält Definitionen der Container, ihrer Versionen und
Verbindungen.

```bash
cd /opt/docker-deploy/aktin-dwh/dwh1
curl -LO https://github.com/aktin/docker-aktin-dwh/releases/latest/download/compose.yml
```

Der Befehl `curl -LO` lädt die Datei in das aktuelle Verzeichnis herunter. Sobald die neue Compose-Datei bereitliegt, laden Sie die aktualisierten Container-Images herunter:

```bash
docker compose pull
```

Dieser Befehl lädt alle Container-Images in der jeweils neuesten Version aus dem AKTIN-Repository herunter. Die bisherigen Images bleiben lokal gespeichert, sodass Sie bei Problemen wieder
zurückwechseln können. Nachdem die neuen Images heruntergeladen wurden, starten Sie die Container neu:

```bash
docker compose up -d
```

Dieser Befehl startet das System mit den aktualisierten Versionen der Container im Hintergrund. Während des Neustarts werden alle Dienste nacheinander aktualisiert und wieder verbunden. Nach Abschluss
des Updates können Sie ungenutzte alte Images löschen, um Speicherplatz freizugeben:

```bash
docker image prune -f
```

## Überprüfung des Updates

Um sicherzustellen, dass das Update erfolgreich war, prüfen Sie zunächst abschließend den Status aller Container:

```bash
docker compose ps
```

Alle Dienste sollten im Zustand `running` oder `healthy` angezeigt werden. Sie können nun den Normalbetrieb wieder aufzunehmen. Falls ein Container als `exited` oder `unhealthy` erscheint, können Sie
die Logdateien der letzten Minuten abrufen. Dort finden Sie mögliche Fehlermeldungen oder Hinweise auf Konfigurationsprobleme.

```bash
docker compose logs --since=10m
```

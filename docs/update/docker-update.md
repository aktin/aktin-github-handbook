# Docker Update

Auf dieser Seite wird beschrieben, wie eine bestehende AKTIN Data Warehouse Docker-Installation aktualisiert wird. Das Verfahren wurde mit **Ubuntu {{ $theme.versions.ubuntu }} LTS
({{ $theme.versions.codename }})** getestet. Bei abweichenden Systemumgebungen wenden Sie sich bitte an den [AKTIN IT-Support][support-email].

## Voraussetzungen

Die Voraussetzungen für das Docker-Update sind identisch mit den [Vorrausetzungen der Docker-Installation][docker-reqs].

Stellen Sie außerdem sicher, dass Sie Zugriff auf das Arbeitsverzeichnis der Installation besitzen, beispielsweise `/opt/docker-deploy/aktin-dwh/dwh1`. In diesem Verzeichnis befindet sich die Datei
`compose.yml`, die alle Containerdefinitionen enthält, sowie die Datei `secret.txt`, in der das interne Datenbankpasswort gespeichert ist. Diese Datei darf nicht verändert oder gelöscht werden. Vor
dem Update empfiehlt es sich außerdem, ein Backup anzulegen.

## Vorbereitung des Updates

Zuerst sollten Sie den aktuellen Zustand der laufenden Container prüfen. Wechseln Sie dazu in das Installationsverzeichnis und geben Sie den folgenden Befehl ein:

```bash
cd /opt/docker-deploy/aktin-dwh/dwh1
docker compose ps
```

Der Befehl `docker compose ps` zeigt eine Übersicht aller Container mit ihrem aktuellen Status an. Alle Container sollten als Status `running` oder `healthy` anzeigen. Mit dem Befehl
`docker compose config --services` können Sie sich außerdem anzeigen lassen, welche Dienste in der Konfiguration definiert sind.

## Durchführung des Updates

Im nächsten Schritt laden Sie die aktuelle Version der AKTIN Compose-Datei aus dem offiziellen GitHub-Repository herunter.

::: warning Backup erstellen
Es wird dringend empfohlen, vor dem Überschreiben der Konfigurationsdatei eine Sicherheitskopie der bestehenden `compose.yml` anzulegen.
:::

```bash
cd /opt/docker-deploy/aktin-dwh/dwh1

# Backup der alten Konfiguration erstellen
cp compose.yml compose.yml.backup_$(date +%F)

# Download der neuen Konfiguration
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

Dieser Befehl erstellt die Container auf Basis der neuen Konfiguration neu. Nach Abschluss des Updates können Sie veraltete Image-Versionen löschen, um Speicherplatz freizugeben:

::: info Kurze Ausfallzeit
Während die Container neu erstellt werden, ist das Data Warehouse für kurze Zeit nicht erreichbar. Die Datenbankinhalte und Konfigurationen in den Volumes bleiben dabei unberührt.
:::

```bash
docker image prune -f
```

Dieser Befehl entfernt sicher nur solche Images, die von keinem laufenden Container mehr verwendet werden (sogenannte _dangling images_). Aktive Daten sind davon nicht betroffen.

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

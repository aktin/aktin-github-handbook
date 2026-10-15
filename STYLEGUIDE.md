# Styleguide

Verbindliche Schreibregeln für alle Seiten unter `docs/`. Bei Fällen, die hier nicht geregelt sind, gilt die im Bestand häufigste Variante.

## Sprache und Ansprache

Das Handbuch spricht die Lesenden mit „Sie“ an. Anleitungsschritte stehen im Imperativ, zum Beispiel „Öffnen Sie die Datei“.

Personenbezeichnungen werden neutral formuliert, etwa „Nutzende“, „Mitarbeitende“ oder „Administration“. Wo eine neutrale Form holpert, steht die Paarform, etwa „Nutzerinnen und Nutzer“. Genderzeichen wie Sternchen oder Doppelpunkt werden nicht verwendet.

## Begriffe

| Verwenden | Nicht verwenden |
|---|---|
| DWH-Manager | Web-Oberfläche, Web-Interface, Admin-Konsole, Admin-Oberfläche |
| AKTIN IT-Support | AKTIN-IT-Support, IT-Support, Support-Team |
| AKTIN-Broker | AKTIN Broker |
| AKTIN Data Warehouse (kurz DWH) | AKTIN-Data-Warehouse |
| Aktualisierung, aktualisieren | Update, Upgrade (Ausnahme siehe unten) |
| Upgrade | nur für den Wechsel der Ubuntu-Version mit `do-release-upgrade` |
| Button | Schaltfläche, Knopf |
| Serienanfrage | Serien-Anfrage |
| Einzelanfrage | Einzel-Anfrage |
| WildFly | Wildfly, wildfly (außer in Pfaden und Befehlen) |
| PostgreSQL | Postgres, postgres (außer in Pfaden und Befehlen) |
| Docker Compose | docker-compose (außer im Befehl) |

Ordner und URLs wie `update/` bleiben unverändert, auch wenn im Text „Aktualisierung“ steht.

## Schreibweisen

Abkürzungen mit geschütztem Leerzeichen: „z. B.“, „d. h.“, „u. a.“.

Zusammensetzungen mit Eigennamen oder Abkürzungen werden durchgekoppelt: „Debian-Installation“, „Docker-Installation“, „Ubuntu-Server“, „CDA-Schnittstelle“.

## Platzhalter

Platzhalter stehen in spitzen Klammern und Großbuchstaben, Wörter werden mit Bindestrich getrennt: `<SERVER-IP>`, `<CONTAINER-NAME>`, `<DATEINAME>`. Beim ersten Vorkommen auf einer Seite wird erklärt, was einzusetzen ist.

## Auszeichnung

Fett steht ausschließlich für UI-Elemente wie Buttons, Menüs, Reiter und Feldnamen: Klicken Sie auf **Speichern**. Fett wird nicht zur Betonung verwendet.

Code-Formatierung steht für Befehle, Pfade, Dateinamen, Konfigurationsschlüssel und Werte: `aktin.properties`, `/opt/wildfly`.

Kursiv wird nicht verwendet.

## Befehle

Befehle stehen in Codeblöcken mit Sprachangabe `bash`. Es gelten diese Varianten:

| Verwenden | Nicht verwenden |
|---|---|
| `systemctl restart <DIENST>` | `service <DIENST> restart` |
| `apt` | `apt-get` |
| `docker compose` | `docker-compose`, `docker restart` für Compose-Container |

## Seitenaufbau

Jede Seite hat genau eine H1 als Titel. Anleitungsschritte sind nummerierte H2 (`## 1. Vorbereitung`), Unterpunkte sind H3. Überschriftenebenen werden nicht übersprungen, da die Seitenleiste nur H2 anzeigt.

Verweise auf den nächsten Schritt am Seitenende entfallen. Die Navigation übernimmt VuePress über die Reihenfolge der Seitenleiste.

## Hinweise

Hinweise stehen in VuePress-Containern:

```md
::: tip
Ergänzende Information.
:::

::: warning
Möglicher Fehler oder Datenverlust bei falscher Bedienung.
:::

::: danger
Irreversible Aktion, zum Beispiel Löschen von Daten.
:::
```

Warnungen stehen vor dem betreffenden Schritt, nicht danach.

## Bilder

Bilder liegen im Ordner `images/` neben der Seite. Der Alt-Text beschreibt den Bildinhalt, zum Beispiel `![Login-Maske des DWH-Managers](images/login1.png)`.

## Links

Wiederkehrende Links werden als Referenz in `docs/.vuepress/_refs.md` gepflegt und auf den Seiten nur über `[Text][referenz]` verwendet.

# Styleguide

Verbindliche Referenz für alle, die Seiten unter `docs/` schreiben oder ändern, Menschen wie KI-Assistenten. Teil 1 regelt Sprache und Auszeichnung, Teil 2 die technische Umsetzung in VuePress, Teil 3 fasst alles als Checkliste zusammen. Bei Fällen, die hier nicht geregelt sind, gilt die im Bestand häufigste Variante.

## Teil 1: Sprache und Auszeichnung

### Sprache und Ansprache

Das Handbuch ist auf Deutsch und spricht die Lesenden mit „Sie“ an. Anleitungsschritte stehen im Imperativ, zum Beispiel „Öffnen Sie die Datei“.

Personenbezeichnungen werden neutral formuliert, etwa „Nutzende“, „Mitarbeitende“ oder „IT-Administration“. Wo eine neutrale Form holpert, steht die Paarform, etwa „Patientinnen und Patienten“. Genderzeichen wie Sternchen oder Doppelpunkt werden nicht verwendet.

### Begriffe

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

Ordner, Dateinamen und URLs wie `update/` bleiben unverändert, auch wenn im Text „Aktualisierung“ steht. Beschriftungen, die wörtlich so in der Software stehen (zum Beispiel ein Button **Update durchführen**), werden nicht übersetzt.

### Schreibweisen

Abkürzungen mit geschütztem Leerzeichen: „z. B.“, „d. h.“, „u. a.“.

Zusammensetzungen mit Eigennamen oder Abkürzungen werden durchgekoppelt: „Debian-Installation“, „Docker-Installation“, „Ubuntu-Server“, „CDA-Schnittstelle“.

### Platzhalter

Platzhalter stehen in spitzen Klammern und Großbuchstaben, Wörter werden mit Bindestrich getrennt: `<SERVER-IP>`, `<CONTAINER-NAME>`, `<DATEINAME>`. Beim ersten Vorkommen auf einer Seite wird erklärt, was einzusetzen ist.

Versionsnummern sind keine Platzhalter, sondern kommen aus `versions.js` (siehe Teil 2).

### Auszeichnung

Fett steht ausschließlich für UI-Elemente wie Buttons, Menüs, Reiter und Feldnamen: Klicken Sie auf **Speichern**. Fett wird nicht zur Betonung verwendet.

Code-Formatierung steht für Befehle, Pfade, Dateinamen, Konfigurationsschlüssel, Statuswerte und Werte: `aktin.properties`, `/opt/wildfly`.

Kursiv wird nicht verwendet.

### Befehle

| Verwenden | Nicht verwenden |
|---|---|
| `systemctl restart <DIENST>` | `service <DIENST> restart` |
| `apt` | `apt-get` |
| `docker compose` | `docker-compose`, `docker restart` für Compose-Container |

### Seitenaufbau

Jede Seite hat genau eine H1 als Titel. Anleitungen mit fester Reihenfolge nutzen nummerierte H2 (`## 1. Vorbereitung`), Unterpunkte sind H3. Seiten ohne feste Reihenfolge nutzen H2 ohne Nummer. Überschriftenebenen werden nicht übersprungen, da die Seitenleiste nur H2 anzeigt (`sidebarDepth: 1`).

Eine Seite beginnt mit ein bis drei Sätzen, wofür sie gedacht ist und für welche Umgebung sie getestet wurde.

Verweise auf den nächsten Schritt am Seitenende entfallen. Die Navigation übernimmt VuePress über die Reihenfolge der Seitenleiste. Ausnahme sind Pflichtschritte, ohne die das System nicht betriebsbereit ist. Sie stehen als `::: warning`.

## Teil 2: Technische Umsetzung in VuePress

Das Handbuch nutzt VuePress 2 mit dem Default Theme. Gebaut wird nur `docs/`. Die Konfiguration liegt in `docs/.vuepress/config.js`.

### Seiten anlegen

Jede Markdown-Datei unter `docs/` wird zu einer Seite, aus `docs/install/configuration.md` wird `/install/configuration.html`. Dateinamen sind englisch, klein und mit Bindestrich getrennt.

Die Seitenleiste wird nicht automatisch erzeugt. Eine neue Seite muss in `config.js` unter `sidebar` in der passenden Gruppe eingetragen werden. Die Position dort bestimmt auch die automatischen Links zur vorherigen und nächsten Seite. Der Text in der Seitenleiste ist die H1 der Seite.

| Ordner | Inhalt |
|---|---|
| `install/` | Erstinstallation und Konfiguration |
| `update/` | Aktualisierung, Upgrade, Migration |
| `operation/` | Bedienung im laufenden Betrieb |
| `misc/` | Anforderungen, Fehlerbehebung, Changelog |

### Versionen

Versionsnummern werden nie hart in den Text geschrieben. Sie stehen zentral in `docs/.vuepress/versions.js` und werden im Fließtext so eingebunden:

```md
Getestet mit Ubuntu {{ $theme.versions.ubuntu }} LTS ({{ $theme.versions.codename }}).
```

Verfügbar sind `dwh`, `api`, `ubuntu` und `codename`. Eine neue Version wird nur in `versions.js` gepflegt.

VuePress wertet `{{ }}` in Codeblöcken und Inline-Code standardmäßig nicht aus. Dort erscheint der Ausdruck wörtlich. Versionen gehören deshalb in den Fließtext. Umgekehrt dürfen Befehle wie `docker ps --format "{{.Names}}"` in Codeblöcken stehen, ohne dass VuePress sie anfasst.

### Links

Wiederkehrende Links werden einmal in `docs/.vuepress/_refs.md` definiert und stehen dann auf allen Seiten zur Verfügung:

```md
[support-email]: mailto:it-support@aktin.org
[configuration]: /install/configuration.html
[activate-root]: /install/debian-install.html#administrative-rechte-root
```

Auf der Seite wird nur die Referenz verwendet:

```md
Wenden Sie sich an den [AKTIN IT-Support][support-email].
Nehmen Sie eine [initiale Konfiguration][configuration] vor.
```

Interne Ziele beginnen mit `/` und enden auf `.html`. Der `base`-Pfad wird von VuePress ergänzt und gehört nicht in den Link. Ein Anker entsteht aus der Überschrift in Kleinbuchstaben, Umlaute verlieren die Punkte, Leerzeichen werden zu Bindestrichen, und führende Ziffern bekommen einen Unterstrich (`## 2. Durchführung` wird zu `#_2-durchfuhrung`). Wer eine Überschrift ändert, prüft, ob `_refs.md` auf sie zeigt.

Einmalige externe Links dürfen direkt auf der Seite stehen.

### Hinweise

Erlaubt sind nur diese drei Container:

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

Ein eigener Titel steht hinter dem Typ: `::: warning Wichtiger Hinweis zu PostgreSQL`. Container dürfen Code, Links und Listen enthalten.

Für lange Ausgaben, die nicht jede Person braucht, gibt es zusätzlich den aufklappbaren Block:

```md
::: details Vollständige Ausgabe
...
:::
```

Nicht verwendet werden `::: info`, `::: note`, `::: important` und die GitHub-Syntax `> [!note]`. Sie würden nur die Zahl der Varianten erhöhen.

Hinweise stehen vor dem betreffenden Schritt, nicht danach.

### Reiter für Debian und Docker

Unterscheiden sich Schritte zwischen den Installationsarten, stehen beide Varianten in Reitern. Die Reiter heißen immer `Debian` und `Docker`, in dieser Reihenfolge:

```md
::: tabs
@tab Debian

Inhalt für die Debian-Installation.

@tab Docker

Inhalt für die Docker-Installation.
:::
```

Zwischen `@tab` und dem Inhalt steht eine Leerzeile. Mit `@tab:active` wird ein anderer Reiter vorausgewählt, das wird im Handbuch aber nicht genutzt.

### Codeblöcke

Codeblöcke haben immer eine Sprachangabe, für Shell-Befehle `bash`, für Konfigurationsdateien die passende Sprache wie `properties`, `yaml` oder `ini`. Ein Block enthält nur Befehle, keine Prompts wie `$` oder `#`, damit sie sich direkt kopieren lassen. Ausgaben stehen in einem eigenen Block mit Sprache `text`.

Codeblöcke innerhalb nummerierter Listen werden um drei Leerzeichen eingerückt, sonst beginnt die Nummerierung danach neu:

````md
1. Prüfen Sie den Status:

   ```bash
   systemctl status wildfly
   ```

2. Starten Sie den Dienst neu.
````

Muss ein Befehl als root laufen, steht das im Text davor, nicht als `sudo` im Block. Ausnahme sind Seiten, auf denen ausdrücklich ohne root-Sitzung gearbeitet wird.

### Bilder

Bilder liegen im Ordner `images/` neben der Seite und werden relativ eingebunden. Dateinamen sind sprechend und klein geschrieben, zum Beispiel `login1.png`, nicht `Screenshot from 2026-01-21.png`. Der Alt-Text beschreibt den Bildinhalt:

```md
![Login-Maske des DWH-Managers](images/login1.png)
```

Logo und Favicon liegen in `docs/.vuepress/public/images/` und werden absolut referenziert (`/images/logo.png`).

Screenshots dürfen keine personenbezogenen Daten enthalten. Echte Patientendaten, Namen oder interne Hostnamen werden vor dem Einchecken geschwärzt.

### Lokale Vorschau

```bash
npm install
npm run docs:dev
```

`npm run docs:build` meldet tote interne Links als Warnung.

## Teil 3: Checkliste vor dem Commit

1. Genau eine H1, keine übersprungenen Überschriftenebenen.
2. Begriffe und Schreibweisen nach Teil 1, keine Genderzeichen.
3. Fett nur für UI-Elemente, kein Kursiv.
4. Platzhalter als `<GROSSBUCHSTABEN>`, beim ersten Vorkommen erklärt.
5. Keine hart codierten Versionsnummern, sondern `{{ $theme.versions.* }}` im Fließtext.
6. Wiederkehrende Links über `_refs.md`, geänderte Anker dort nachgezogen.
7. Nur `tip`, `warning`, `danger` und `details` als Container, Hinweise vor dem Schritt.
8. Debian und Docker als Reiter, wenn sich die Schritte unterscheiden.
9. Codeblöcke mit Sprachangabe, ohne Prompt, in Listen eingerückt.
10. Bilder mit sprechendem Namen und beschreibendem Alt-Text, ohne personenbezogene Daten.
11. Neue Seiten in `config.js` in der Seitenleiste eingetragen.

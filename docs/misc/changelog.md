# Changelog

## Version 1.6 (04-2025)

**System & Komponenten**
* Basis-Wechsel auf `Ubuntu Server 22.04 LTS`
* Aktualisierung der Kernkomponenten: `Java 11`, `WildFly 22.0.1`, `PostgreSQL 14`, `Apache 2.4.52`, `PHP 8.1`, `Python 3.10` und `R 4.1.2`
* Update der `i2b2`-Komponenten auf Version 1.8.1a

**Verbesserungen**
* Refactoring der Debian-Maintainer-Skripte
* UI-Überarbeitung: Neue Icons, verbesserte Status-Anzeigen für Anfragen und automatische Update-Prüfung beim Laden der Seite
* Optimierung der Update-Logik durch Trennung von Geschäftslogik und Benutzeroberfläche

---

## Version 1.5.1 (12-2021)

* **Importskript V1.5:** Performance-Optimierung und Fixes beim Löschen alter §21-Daten sowie bei ICD-Kollisionen
* **Abhängigkeiten:** Der Dienst `wildfly` ist nun nur noch einseitig von `postgresql-12` abhängig. *Unattended Upgrades* für PostgreSQL wurden deaktiviert, um Konflikte zu vermeiden
* Diverse Fehlerbehebungen im Monatsbericht und in der UI (Update-Popup)

---

## Version 1.5 (09-2021)

**Installation & Betrieb**
* Wechsel vom `.tar.gz`-Archiv zu nativen Debian-Paketen (`.deb`)
    * Ermöglicht automatische Updates über die Weboberfläche
    * Pakete sind digital signiert und unterstützen Offline-Installationen
* Dienst-Kopplung: Start/Stopp von `wildfly` steuert nun automatisch auch `postgresql-12`

**Konfiguration & Import**
* Debugging-Optionen für `rscript` in der `aktin.properties` hinzugefügt
* Verlagerung der Datasource-Konfiguration aus der `standalone.xml` in den Ordner `deployments`
* Importskript V1.3: Groß-/Kleinschreibung wird ignoriert; automatische Umbenennung von Spalten für Sekundärdiagnosen

---

## Version 1.4.1 (05-2021)

* **Importskript V1.1:** Vereinfachung der Anforderungen
    * Nur noch `FALL.csv` ist Pflicht
    * `FAB.csv`, `OPS.csv` und `ICD.csv` sind optional
    * Invalide optionale Felder werden ignoriert, ohne den Import des Falls zu blockieren

---

## Version 1.4 (05-2021)

* **§21 Import:** Neues Modul und Importskript V1.0 für stationäre Behandlungsdaten gemäß §21 KHEntgG
* **Weboberfläche:** Neuer Reiter für Daten-Import und Löschfunktion für Berichte
* **Zertifizierung:** Hinzufügen einer Studie zur Zertifizierung der CDA-Schnittstelle
* Fixes im Monatsbericht V0.15 (Datumsformate)

---

## Version 1.3 (11-2020)

**System-Upgrade**
* Wechsel des Basis-Betriebssystems von `Debian 8`/`CentOS 7` auf `Ubuntu Server 20.04`
* Großes Komponenten-Update: `Java 11`, `WildFly 18`, `Postgres 12`, `PHP 7.4`, `Python 3.8`

**Konfiguration**
* Migration der Mail-Konfiguration von `email.config` in die zentrale `aktin.properties`

---

## Version 1.1

* **Verteiltes Rechnen:** Einführung von Distributed Computing via `rscript` vor der Datenübertragung
* **CDA:** Aktualisierte Validierung und Entfernung des Supports für veraltete Templates
* Anpassung der Broker-URL für den Umzug nach Aachen
* Fix: ENQUIRE-SIC-Erzeugung überspringt keine Nummern mehr bei Fehlern

---

## Version 1.0.x

* **1.0.2:** Korrektur impliziter Fall-Merges bei erneutem Versand gleicher CDA-Dokumente mit abweichender Patienten-ID
* **1.0.1:** E-Mail-Benachrichtigungen setzen nun expliziten Absender (`From`), um Spam-Filter zu umgehen
* **1.0:**
    * Einführung des Consent-Managers (Ein-/Ausschluss von Patienten)
    * Neue Rollen in `i2b2` (`admin`, `study_nurse`)
    * Serien-Anfragen und Freigabe-Regeln implementiert

---

## Version 0.9

* **Weboberfläche:** Einführung der Einzelfallansicht und Live-Updates bei Anfragen
* **CDA & FHIR:** `OperationOutcome` liefert nun Details statt leerer Rückgaben. Kompatibilität zum FHIR-Standard verbessert
* **Datenbank:** Temporäre Tabellen werden automatisch bereinigt; Export-Dateinamen unterscheiden sich nun von Tabellennamen

---

## Version 0.8.1

* Einführung der Verwaltungsoberfläche für Monatsberichte und Datenanfragen
* Feature zur Speicherung eingehender CDA-Dokumente via `import.cda.debug.dir`
* Umfangreiches Update des Monatsberichts (V01.2) inkl. manueller Zeitraumaustestung

---

## Version 0.7

* Update auf CDA Version v1.26
* Initiale Implementierung der Report-Funktion (Monatsbericht) und E-Mail-Versand
* Einführung periodischer Statusmeldungen an den zentralen Broker ("Heartbeat")
* Fixes beim Import von Multiresistenten Keimen und CEDIS-Codes

---

## Version 0.6

* Update auf CDA Version v1.21
* Validierung: Unterscheidung zwischen Warnungen und Fehlern; zusätzliche Prüfung der XSD-Konformität
* Erweiterte HL7-FHIR-Implementierung (`$validate`, `$transform`, `$search`)

---

## Version 0.4 - 0.5

* **0.5:** Demo-Clients übermitteln nun Charset (Fallback auf `UTF-8`)
* **0.4.1:** Dokumentation und Logs für den externen Zugriff auf den Demo-Server erweitert
* **0.4:** Basis-Update auf CDA Version v1.17
# Table of Contents

1.1 AKTIN Support – CLI Cheat Sheet [7](#aktin-support-cli-cheat-sheet)

1.1.1 Common: [7](#common)

1.1.2 Docker: [7](#docker)

1.1.3 Debian: [7](#debian)

1.2 Broker Monitoring Example [7](#broker-monitoring-example)

1.3 Copy of Support Vertretung 02.07 - .11.07.2025
[8](#copy-of-support-vertretung-02.07---.11.07.2025)

1.3.1 Tickets in der Schwebe [9](#tickets-in-der-schwebe)

1.4 Hersteller Support [11](#hersteller-support)

1.5 Support Vertretung 13.05.-20.05.2025
[11](#support-vertretung-13.05.-20.05.2025)

1.5.1 Tickets in der Schwebe [11](#tickets-in-der-schwebe-1)

1.6 Support Vertretung 15.10.-21.10.24
[12](#support-vertretung-15.10.-21.10.24)

1.6.1 Tickets in der Schwebe [13](#tickets-in-der-schwebe-2)

1.7 Support Vertretung 19.12.-06.01.2025
[14](#support-vertretung-19.12.-06.01.2025)

1.7.1 Tickets in der Schwebe [14](#tickets-in-der-schwebe-3)

1.8 Wichtige URLs [15](#wichtige-urls)

2.1 Broker Anfrage [16](#broker-anfrage)

2.1.1 Ablauf [16](#ablauf)

2.2 CDA Import [19](#cda-import)

2.2.1 Einzelimport [19](#einzelimport)

2.2.2 Fügen Sie die erforderlichen Schritte hinzu:
[19](#fügen-sie-die-erforderlichen-schritte-hinzu)

2.2.3 Batchimport [19](#batchimport)

2.2.4 Verwandte Artikel [20](#verwandte-artikel)

2.3 Debug RScript [21](#debug-rscript)

2.4 DWH Logdateien erstellen [21](#dwh-logdateien-erstellen)

2.4.1 Schritt-für-Schritt-Anleitung [21](#schritt-für-schritt-anleitung)

2.4.2 Verwandte Artikel [22](#verwandte-artikel-1)

2.5 Schritt-für-Schritt-Anleitung [22](#schritt-für-schritt-anleitung-1)

2.6 HTTPS-Zugriff aktivieren [22](#https-zugriff-aktivieren)

2.6.1 Hintergrund [22](#hintergrund)

2.6.2 Lösung [23](#lösung)

2.6.3 Anmerkungen [23](#anmerkungen)

2.6.4 Anleitung [23](#anleitung)

2.7 I2B2 Berechtigungen von Usern [23](#i2b2-berechtigungen-von-usern)

2.8 Installation Broker Monitoring [25](#installation-broker-monitoring)

2.8.1 Schritt-für-Schritt-Anleitung
[25](#schritt-für-schritt-anleitung-2)

2.8.2 Verwandte Artikel [34](#verwandte-artikel-3)

2.9 Löschen von Fällen [35](#löschen-von-fällen)

2.9.1 Schritt-für-Schritt-Anleitung
[35](#schritt-für-schritt-anleitung-3)

2.9.2 Verwandte Artikel [36](#verwandte-artikel-4)

2.10 Manuelle Datenabfrage [36](#manuelle-datenabfrage)

2.10.1 Schritt-für-Schritt-Anleitung
[36](#schritt-für-schritt-anleitung-4)

2.10.2 Verwandte Artikel [37](#verwandte-artikel-5)

2.11 Manuelles AKTIN Update [37](#manuelles-aktin-update)

2.11.1 Schritt-für-Schritt-Anleitung
[37](#schritt-für-schritt-anleitung-5)

2.11.2 Verwandte Artikel [38](#verwandte-artikel-6)

2.12 Ubuntu Distributions Upgrade [38](#ubuntu-distributions-upgrade)

2.12.1 Ablauf [39](#ablauf-1)

2.12.2 Post-Distributionsupgrade Problembehebung
[39](#post-distributionsupgrade-problembehebung)

2.13 Ubuntu Speicher Erweiterung [40](#ubuntu-speicher-erweiterung)

2.13.1 Ablauf [40](#ablauf-2)

2.14 Zugriff per PGAdmin auf ein lokales AKTIN DWH
[40](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

2.14.1 Voraussetzungen [40](#voraussetzungen)

2.14.2 Schritt-für-Schritt-Anleitung
[41](#schritt-für-schritt-anleitung-6)

2.14.3 Verwandte Artikel [44](#verwandte-artikel-7)

3.1 Adminkonsole Fehler 404 [45](#adminkonsole-fehler-404)

3.1.1 Hintergrund [45](#hintergrund-1)

3.1.2 Fehlersuche [46](#fehlersuche)

3.1.3 Verwandte Artikel [47](#verwandte-artikel-8)

3.2 Anfragen an das DWH führen zu Absturz
[47](#anfragen-an-das-dwh-führen-zu-absturz)

3.2.1 Problem [47](#problem)

3.2.2 Lösung [47](#lösung-1)

3.3 DWH 1.6 Update depends on postgresql \<=229
[48](#dwh-1.6-update-depends-on-postgresql-229)

3.3.1 Problem [48](#problem-1)

3.3.2 Lösung [48](#lösung-2)

3.4 DWH Update 1.6 verbindet sich nicht mehr mit dem Broker
[49](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

3.4.1 Problem [49](#problem-2)

3.4.2 Idee [49](#idee)

3.4.3 Fehleranalyse [50](#fehleranalyse)

3.4.4 Lösung [53](#lösung-3)

3.5 DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly neustart
[53](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

3.5.1 Hintergrund [53](#hintergrund-2)

3.5.2 Vermutung [53](#vermutung)

3.5.3 Verwandte Artikel [54](#verwandte-artikel-9)

3.6 Falsche IP auf automatisierten Mails des DWHs
[55](#falsche-ip-auf-automatisierten-mails-des-dwhs)

3.6.1 Hintergrund [55](#hintergrund-3)

3.6.2 Problem [55](#problem-3)

3.6.3 Lösung [55](#lösung-4)

3.6.4 Verwandte Artikel [55](#verwandte-artikel-10)

3.7 Firewall Probleme: Proxy [55](#firewall-probleme-proxy)

3.7.1 Problem [55](#problem-4)

3.7.2 Lösung [56](#lösung-5)

3.7.3 Verwandte Artikel [56](#verwandte-artikel-11)

3.8 Installation des DWH auf Ubuntu 24.04LTS
[56](#installation-des-dwh-auf-ubuntu-24.04lts)

3.8.1 Problem [56](#problem-5)

3.8.2 Lösung [56](#lösung-6)

3.8.3 Weitere Lösung [57](#weitere-lösung)

3.8.4 Verwandte Artikel [57](#verwandte-artikel-12)

3.9 Login Probleme [57](#login-probleme)

3.9.1 AKTIN Rolle richtig setzen: [57](#aktin-rolle-richtig-setzen)

3.9.2 AKTIN Rollen [58](#aktin-rollen)

3.10 Monatsbericht/Report: Abnormal Termination Exception
[58](#monatsberichtreport-abnormal-termination-exception)

3.10.1 Problem [58](#problem-6)

3.10.2 Grund [59](#grund)

3.10.3 Lösung [59](#lösung-7)

3.10.4 Verwandte Artikel [59](#verwandte-artikel-13)

3.11 Monatsbericht nicht erstellt: Patient ohne ID
[60](#monatsbericht-nicht-erstellt-patient-ohne-id)

3.11.1 Problem [60](#problem-7)

3.11.2 Grund [60](#grund-1)

3.11.3 Lösung [60](#lösung-8)

3.11.4 Verwandte Artikel [60](#verwandte-artikel-14)

3.12 User I2B2 Datenbank Informationen auslesen
[60](#user-i2b2-datenbank-informationen-auslesen)

3.12.1 User-Datenbankinformationen auslesen
[60](#user-datenbankinformationen-auslesen)

3.12.2 Weitere Informationen zur Fehleranalyse
[61](#weitere-informationen-zur-fehleranalyse)

3.13 Wildfly hat keine Verbindung zu Postgresql
[61](#wildfly-hat-keine-verbindung-zu-postgresql)

3.13.1 Hintergrund [61](#hintergrund-4)

3.13.2 Fehlersuche [61](#fehlersuche-1)

3.13.3 Verwandte Artikel [62](#verwandte-artikel-15)

3.14 Wildfly Startet nicht mehr [62](#wildfly-startet-nicht-mehr)

3.14.1 Hintergrund [62](#hintergrund-5)

3.14.2 Fehlersuche [62](#fehlersuche-2)

3.14.3 Bekannte Probleme [63](#bekannte-probleme)

3.14.4 Verwandte Artikel [64](#verwandte-artikel-16)

4.1 Bestehende Verfahren für Testdaten Generierung
[65](#bestehende-verfahren-für-testdaten-generierung)

4.1.1 Inhalt [65](#inhalt)

4.1.2 Ziel [65](#ziel)

4.1.3 Problem [65](#problem-8)

4.1.4 Bestehende Verfahren [65](#bestehende-verfahren)

4.1.5 Aktin Test-daten-generator [67](#aktin-test-daten-generator)

4.1.6 Dateien (Versionierung) [67](#dateien-versionierung)

4.1.7 AKTIN Testdaten Generator [68](#aktin-testdaten-generator)

4.2 Einführung in CDA [68](#einführung-in-cda)

4.2.1 Inhalt [68](#inhalt-2)

4.2.2 Allgemeines Verständnis [69](#allgemeines-verständnis)

4.2.3 HL7-Standart [70](#hl7-standart)

4.2.4 Was ist der HL7-Standard, und wie wird er im CDA-Dokument
verwendet?
[70](#was-ist-der-hl7-standard-und-wie-wird-er-im-cda-dokument-verwendet)

4.2.5 XML-Struktur [70](#xml-struktur)

4.2.6 XML-Transformation und Styling
[72](#xml-transformation-und-styling)

4.2.7 Header [73](#header)

4.2.8 Dokumentinhalt [74](#dokumentinhalt)

4.2.9 Dateien (Versionierung) [78](#dateien-versionierung-2)

4.3 Einführung in XML und JSON [78](#einführung-in-xml-und-json)

4.3.1 Inhalt [78](#inhalt-3)

4.3.2 XML [79](#xml)

4.3.3 Dateien (Versionierung) [84](#dateien-versionierung-3)

*Datenbank* für das Hinterlegen von Wissen im AKTIN Notaufnahmeregister.

- [AKTIN Support](#aktin-support)

  - [AKTIN Support – CLI Cheat Sheet](#aktin-support-cli-cheat-sheet)

  - [Broker Monitoring Example](#broker-monitoring-example)

  - [Copy of Support Vertretung 02.07 -
    .11.07.2025](#copy-of-support-vertretung-02.07---.11.07.2025)

  - [Hersteller Support](#hersteller-support)

  - [Support Vertretung
    13.05.-20.05.2025](#support-vertretung-13.05.-20.05.2025)

  - [Support Vertretung
    15.10.-21.10.24](#support-vertretung-15.10.-21.10.24)

  - [Support Vertretung
    19.12.-06.01.2025](#support-vertretung-19.12.-06.01.2025)

  - [Wichtige URLs](#wichtige-urls)

- [Anleitungsartikel](#anleitungsartikel)

  - [Broker Anfrage](#broker-anfrage)

  - [CDA Import](#cda-import)

  - [Debug RScript](#debug-rscript)

  - [DWH Logdateien erstellen](#dwh-logdateien-erstellen)

  - [Einloggen als root](#schritt-für-schritt-anleitung-1)

  - [HTTPS-Zugriff aktivieren](#https-zugriff-aktivieren)

  - [I2B2 Berechtigungen von Usern](#i2b2-berechtigungen-von-usern)

  - [Installation Broker Monitoring](#installation-broker-monitoring)

  - [Löschen von Fällen](#löschen-von-fällen)

  - [Manuelle Datenabfrage](#manuelle-datenabfrage)

  - [Manuelles AKTIN Update](#manuelles-aktin-update)

  - [Ubuntu Distributions Upgrade](#ubuntu-distributions-upgrade)

  - [Ubuntu Speicher Erweiterung](#ubuntu-speicher-erweiterung)

  - [Zugriff per PGAdmin auf ein lokales AKTIN
    DWH](#zugriff-per-pgadmin-auf-ein-lokales-aktin-dwh)

- [Fehlerbehebungsartikel](#fehlerbehebungsartikel)

  - [Adminkonsole Fehler 404](#adminkonsole-fehler-404)

  - [Anfragen an das DWH führen zu
    Absturz](#anfragen-an-das-dwh-führen-zu-absturz)

  - [DWH 1.6 Update depends on postgresql
    \<=229](#dwh-1.6-update-depends-on-postgresql-229)

  - [DWH Update 1.6 verbindet sich nicht mehr mit dem
    Broker](#dwh-update-1.6-verbindet-sich-nicht-mehr-mit-dem-broker)

  - [DWH verliert regelmäßig Kontakt mit Broker bis zum Wildfly
    neustart](#dwh-verliert-regelmäßig-kontakt-mit-broker-bis-zum-wildfly-neustart)

  - [Falsche IP auf automatisierten Mails des
    DWHs](#falsche-ip-auf-automatisierten-mails-des-dwhs)

  - [Firewall Probleme: Proxy](#firewall-probleme-proxy)

  - [Installation des DWH auf Ubuntu
    24.04LTS](#installation-des-dwh-auf-ubuntu-24.04lts)

  - [Login Probleme](#login-probleme)

    - [AKTIN Rollen](#aktin-rollen)

  - [Monatsbericht/Report: Abnormal Termination
    Exception](#monatsberichtreport-abnormal-termination-exception)

  - [Monatsbericht nicht erstellt: Patient ohne
    ID](#monatsbericht-nicht-erstellt-patient-ohne-id)

  - [User I2B2 Datenbank Informationen
    auslesen](#user-i2b2-datenbank-informationen-auslesen)

  - [Wildfly hat keine Verbindung zu
    Postgresql](#wildfly-hat-keine-verbindung-zu-postgresql)

  - [Wildfly Startet nicht mehr](#wildfly-startet-nicht-mehr)

- [Grundlagen](#grundlagen)

  - [Bestehende Verfahren für Testdaten
    Generierung](#bestehende-verfahren-für-testdaten-generierung)

    - [AKTIN Testdaten Generator](#aktin-testdaten-generator)

  - [Einführung in CDA](#einführung-in-cda)

  - [Einführung in XML und JSON](#einführung-in-xml-und-json)

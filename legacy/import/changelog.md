## AKTIN : DWH Import

* * *

- Last Published: 2025-08-13
\|
- Version: 0.20-SNAPSHOT


- HL7 CDA Dokument
- [Kurzanleitung CDA](cda-quickstart.md "Kurzanleitung CDA")
- [CDA Release V1.21](cda-release-v1.21.md "CDA Release V1.21")
- [CDA Release V1.26](cda-release-v1.26.md "CDA Release V1.26")
- Importschnittstelle
- [Kurzanleitung CDA](cda-quickstart.md "Kurzanleitung CDA")
- [Import Schnittstellen](Schnittstellen.md "Import Schnittstellen")
- [RESTful/HL7 FHIR](hl7-fhir.md "RESTful/HL7 FHIR")
- [IHE XDS.b SOAP](xds.md "IHE XDS.b SOAP")
- Changelog
- [Roadmap](roadmap.md "Roadmap")
- [Support](support.md "Support")
- Demo Server
- [Demo Server](demo-server.md "Demo Server")

* * *

[![Built by Maven](./images/logos/maven-feather.png)](http://maven.apache.org/ "Built by Maven")

# ﻿Changelog

## Version 0.6

- Aktualisierung auf CDA Version v1.21 (2016-08-04)
- Änderungen bzgl. des Umgangs mit Episoden-IDs (vgl. [Releasenotes](cda-release-v1.21.md))
- Bei der Validierung des CDA werden Schematron-Warnungen werden nun als solche ausgegeben. Zuvor wurden alle Warnungen als Fehler behandelt.
- Validierung beinhaltet nun auch die Prüfung der XSD-Konformität zusätzlich zur Schematron-Validierung.
- Erweiterte HL7-FHIR-Implementierung: Conformance resource, Binary resource unterstützt Operationen $validate, $transform, $search.
- i2b2-Weboberfläche ohne Vorgabe der “demo”-Anmeldedaten.

## Version 0.5

- Demo clients (FHIR und XDS.b) übermitteln nun auch Zeichensatz (charset). Wenn kein Zeichensatz erkannt werden kann, wird UTF-8 übermittelt.

## Version 0.4.1

- Ausführlichere Ausgabe beim Start des Demo-Servers.
- Dokumentation (web) zum Start des Demo-Servers für externen Netzwerkzugriff.

## Version 0.4

- Aktualisierung auf CDA version v1.17 (2015-11-18)

* * *

Copyright © 2013–2025.
All rights reserved.


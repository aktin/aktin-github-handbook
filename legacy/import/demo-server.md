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
- [Changelog](changelog.md "Changelog")
- [Roadmap](roadmap.md "Roadmap")
- [Support](support.md "Support")

* * *

[![Built by Maven](./images/logos/maven-feather.png)](http://maven.apache.org/ "Built by Maven")

## ﻿Java Demo Server Anwendung

Die Demo Server Anwendung stellt nur die Import-Schnittstellen bereit und kann verwendet werden um die Gültigkeit von CDA-Dokumenten bei der Entwicklung zu testen oder für einen Schnittstellen-Test mit dem Notaufnahme-System.

Die aktuelle Version der Softwarepakete ist 0.20-SNAPSHOT.

Das [Softwarepaket kann als ZIP-Archiv heruntergeladen werden](${releaseRepoUrl}/org/aktin/demo-distribution/0.20-SNAPSHOT/demo-distribution-0.20-SNAPSHOT.zip). Es enthält eine Serveranwendung mit HL7-FHIR und IHE-XDS-Schnittstellen, Beispieldokumente sowie eine Client-Anwendung um Dateien an den Validierungsserver zu senden.

Zusätzlich sind die Quelltexte verfügbar:

- [Quelltext Demo Server und Client](${releaseRepoUrl}/org/aktin/demo-server/0.20-SNAPSHOT/demo-server-0.20-SNAPSHOT-sources.jar)
- [Quelltext CDA-Validierung](${releaseRepoUrl}/org/aktin/cda-validation/0.20-SNAPSHOT/cda-validation-0.20-SNAPSHOT-sources.jar)

## Vorausetzungen

Die Demosoftware erfordert ein Java 8 Runtime Environment.

## Server starten

Der Demo-Server kann folgendermaßen gestartet werden:

1. Mit der Windows-Konsole in den Ordner wechseln, in dem die Zipdatei entpackt wurde.

2. In der Konsole den Befehl `java-server.bat` ausführen.

3. Der Server zeigt in der Standardausgabe URLs an, die verwendet werden können um die FHIR und XDS.b- Schnittstellen zu testen.

4. Der Port wird dynamisch bestimmt oder kann durch den Aufruf `java-server.bat <port>` festgelegt werden.

5. Default ist, dass der Server nur lokal (d.h. localhost) erreichbar ist. Mit dem Aufruf `java-server.bat <port> public` ist der Server auch von anderen Netzwerkgeräten erreichbar.


## Daten an die FHIR-Schnittstelle schicken

Um CDA-Dateien an die FHIR-Schnittstelle zu schicken, gibt es mit dem Softwarepaket zwei Möglichkeiten.

1. Mit der Konsole die Java-Anwendung `java-client-fhir.bat` starten. Als Argumente werden die FHIR-URL erwartet (aus Serverkonsole kopieren) sowie ein Dateiname eines CDA-Dokuments.

2. Mit dem Programm `curl`. Das Programm ist in den meisten Linux-Distributionen verfügbar, muss unter Windows jedoch [separat installiert werden](http://curl.haxx.se/download.html). Anschließen können die Skripte `curl-statusonly.bat` und `curl-response.bat` verwendet werden.


## Verwendung in MacOS X und Linux

Sofern ein Java 8 Runtime Environment (JRE) installiert ist, kann die Software problemlos in MacOS X und Linux verwendet werden.

Aktuell sind die bat-Skripte für Windows vorbereitet. Die entsprechenden Befehle können aber in den bat-Skripten nachgelesen werden.

* * *

Copyright © 2013–2025.
All rights reserved.


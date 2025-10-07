## AKTIN : DWH Import

* * *

- Last Published: 2025-08-13
\|
- Version: 0.20-SNAPSHOT


- HL7 CDA Dokument
- [Kurzanleitung CDA](cda-quickstart.md "Kurzanleitung CDA")
- CDA Release V1.21
- [CDA Release V1.26](cda-release-v1.26.md "CDA Release V1.26")
- Importschnittstelle
- [Kurzanleitung CDA](cda-quickstart.md "Kurzanleitung CDA")
- [Import Schnittstellen](Schnittstellen.md "Import Schnittstellen")
- [RESTful/HL7 FHIR](hl7-fhir.md "RESTful/HL7 FHIR")
- [IHE XDS.b SOAP](xds.md "IHE XDS.b SOAP")
- [Changelog](changelog.md "Changelog")
- [Roadmap](roadmap.md "Roadmap")
- [Support](support.md "Support")
- Demo Server
- [Demo Server](demo-server.md "Demo Server")


* * *

[![Built by Maven](./images/logos/maven-feather.png)](http://maven.apache.org/ "Built by Maven")

# ﻿Zusammenfassung der Änderungen im CDA Release v1.21

Diese Informationen richten sich an die Entwickler der CDA-Dokumente, die das Mapping zwischen dem Notaufnahme-System und dem Basismodul-CDA herstellen bzw. das CDA generieren.

Die hier genannten (projektrelevanten) Änderungen beziehen sich auf die Umstellung von CDA Release v1.17 (also das im zuvor gültige AKTIN Release 0.5 verwendete) auf CDA Release v1.21 (das im aktuell gültigen AKTIN Release 0.6 verwendet wird).

Weitere allgemeine Informationen zur CDA-Implementierung finden Sie auch unter dem Menüpunkt [Kurzanleitung CDA](cda-quickstart.md)

Der aktuelle [Demo-Server](demo-server.md) validiert nach dem aktuellen Release und kann für die Entwicklung als Test-Tool genutzt werden.

## Encounter-ID

Es wurde eine Encounter-ID eingeführt (in ‘ClinicalDocument/componentOf/encompassingEncounter’). Diese ID muss unique sein für einen Patientenkontakt (Notaufnahmebesuch). Wenn ein CDA eines Patienten zum gleichen Notaufnahmebesuch erneut gesendet wird, muss diese ID gleich sein, damit das Dokument aktualisiert (überschrieben) wird. Wenn der Patient erneut die Notaufnahme aufsucht, muss eine andere ID vergeben werden. Dies ist analog zu den Anforderungen, die bisher für die Set-ID galten. Wir verwenden die Set-ID nicht mehr für den Import, aber natürlich sollte sie trotzdem sinnvoll gesetzt werden. Eine Möglichkeit wäre eine Modul-ID für das CDA-Basismodul als Root zu verwenden und die Encounter-ID als Extension.

## Abschlussdiagnosen SequenceNumber

[http://aktin.art-decor.org/aktin-html-20160804T182136/tmp-1.2.276.0.76.10.4048-2016-06-22T000000.html](http://aktin.art-decor.org/aktin-html-20160804T182136/tmp-1.2.276.0.76.10.4048-2016-06-22T000000.html) Das Template 1.2.276.0.76.10.4048 Problem Concern Act (Abschlussdiagnosen) hat jetzt eine SequenceNumber Falls Sie in Ihrem System eine “führende”/wichtigste Diagnose haben, sollte diese mit der sequenceNumber “1” markiert werden, falls Sie diese Information nicht haben, muss nichts geändert werden.

## Diagnose Zusatzcodes

[http://aktin.art-decor.org/aktin-html-20160804T182136/tmp-1.2.276.0.76.10.4049-2016-06-22T000000.html](http://aktin.art-decor.org/aktin-html-20160804T182136/tmp-1.2.276.0.76.10.4049-2016-06-22T000000.html) In der gleichen section kann man jetzt Diagnose Zusatzcodes (Verdacht, gesichert, z.N. und Ausschluss) codieren. Wir verwenden in AKTIN die qualifier aus dem CodeSystem 1.2.276.0.76.3.1.1.5.1.21 – diese müssen also dort angegeben werden, falls verfügbar– z. B.

```
<qualifier>
    <name code="8" codeSystem="2.16.840.1.113883.3.7.1.0"/>
    <value code="V" codeSystem="1.2.276.0.76.3.1.1.5.1.21"/>
</qualifier>

```

Zusätzlich ist in den Beispielen beschrieben, wie die Information standardkonform (Negation, EffectiveTime High,…) codiert werden soll. Dies sollte umgesetzt werden, ist aber für den AKTIN-Import nicht relevant.

## Diagnostik effectiveTime

Die effectiveTime in allen Diagnostik-Templates ist jetzt auf Required herabgestuft, so dass man jetzt NullFlavor angeben kann. Sollten Sie bisher Dummy-Zeitpunkte eingetragen haben um Fehler zu vermeiden, stellen Sie dies bitte auf NullFlavor um.

## CEDIS code (value 705)

Es gab einen Fehler mit einem CEDIS code (value 705). Der Fehler ist behoben, falls Sie dafür einen Workaround implementiert haben, sollte dieser entfernt werden.

## Multiresistenten Keime

[http://aktin.art-decor.org/aktin-html-20160804T182136/tmp-1.2.276.0.76.10.4073-2016-08-02T000000.html](http://aktin.art-decor.org/aktin-html-20160804T182136/tmp-1.2.276.0.76.10.4073-2016-08-02T000000.html) Die Abbildung der multiresistenten Keime wurde vereinfacht. MRSA wird jetzt nur noch mit

```
<value xsi:type="CD" code="MRSA" codeSystem="1.2.276.0.76.5.441" displayName="MRSA"/>

```

codiert und ein Verdacht so:

```
<value xsi:type="CD" code="MRSA" codeSystem="1.2.276.0.76.5.441" displayName="MRSA">
    <qualifier>
        <name code="FSTAT" codeSystem="1.2.276.0.76.3.1.195.5.72" displayName="Befundstatus"/>
        <value code="SUSP" codeSystem="1.2.276.0.76.3.1.195.5.73" displayName="Verdacht"/>
    </qualifier>
</value>

```

## ClinicalDocument templateId

Die ‘ClinicalDocument/templateId’ ist geändert auf ‘templateId root=1.2.276.0.76.10.1019’ Das neue CDA-Release enthält beide Versionen “v1” mit ‘templateId root="1.2.276.0.76.10.1015’ und ‘v2’ mit der neuen TemplateID. Um auf ‘v2’ umzustellen, muss nur die TemplateID geändert werden, dann wird automatisch gegen v2-Schematron geprüft. Natürlich müssen Sie außerdem die zuvor genannten Änderungen umsetzen, sonst treten Validierungsfehler auf. Wir empfehlen dringend die Nutzung des V2-Templates, da im V1-Template das Notaufnahmeprotokoll noch nicht vollständig abgebildet ist.

Bei Fragen zur Umsetzung der CDA-Änderungen wenden Sie sich gerne an [it-support@aktin.org](mailto:it-support@aktin.org)

* * *

Copyright © 2013–2025.
All rights reserved.


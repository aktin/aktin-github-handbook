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
- RESTful/HL7 FHIR
- [IHE XDS.b SOAP](xds.md "IHE XDS.b SOAP")
- [Changelog](changelog.md "Changelog")
- [Roadmap](roadmap.md "Roadmap")
- [Support](support.md "Support")
- Demo Server
- [Demo Server](demo-server.md "Demo Server")


* * *

[![Built by Maven](./images/logos/maven-feather.png)](http://maven.apache.org/ "Built by Maven")

# ﻿HL7 FHIR Schnittstelle

CDA-Dokumente werden abgeliefert per RESTful HTTP entsprechend dem FHIR Draft.

## Übermitteln von Dokumenten

Um ein Dokument zu übermitteln wird eine HTTP PUT-Operation an [http://IHRSERVER/aktin/cda/fhir/Binary](http://IHRSERVER/aktin/cda/fhir/Binary) durchgeführt.

Siehe auch Standard Draft [https://www.hl7.org/fhir/documents.html#bundle](https://www.hl7.org/fhir/documents.html#bundle) (Aktuell in Bearbeitung. Deshalb teilweise fehlende Referenzen. Es ist nicht auszuschließen, dass ggf. zukünftig der Binary end-point überarbeitet oder entfernt wird)

Das Ergebnis der Operation wird durch den HTTP-Statuskode angezeigt. Im Erfolgsfall ist der Statuskode `201 Created` (neuer Patientenkontakt) oder `200 OK` (Daten für bestehenden Patientenkontakt aktualisiert) und es wird kein Antwortdokument geliefert.

Im Content-type-header muss immer `text/xml` stehen und ein gültiges XML-Dokument muss übermittelt werden. Ist dies nicht der Fall, wird der Status `415 Unsupported media type` zurückgegeben.

Sofern das XML-Dokument (syntaktisch) gültig ist, erfolgt anschließend eine automatische Validierung gegen die passenden Schematron-Regeln. Schlägt die Validierung fehlt, so wird der Status `422 Unprocessable entity` zurückgegeben. Zusätzlich wird die FHIR-XML-Resource `OperationOutcome` zurückgeliefert mit detaillierten Fehlerbeschreibungen aus dem Schematron-Durchlauf.

Nach erfolgreicher Validierung wird das Dokument verarbeitet und im Data Warehouse gespeichert. Treten in diesem Ablauf interne Fehler auf, so wird der Statuskode `500 Internal Error` zurückgeliefert.

Als Antwort wird die FHIR-Ressource [OperationOutcome](https://www.hl7.org/fhir/operationoutcome.html) zurückgeliefert. Im Erfolgsfall ist diese inhaltlich leer. Im Fehlerfall sind dort detaillierte Fehlerbeschreibungen enthalten.

## Weitere Fehlermeldungen

Wird ein HTTP-Fehlercode `503 Service Unavailable` zurückgegeben, so ist zwar der Applikation-Server aktiv und erreichbar, aber die Import-Schnittstelle funktioniert nicht. Wahrscheinlich liegt ein Problem mit dem Dployment der Software vor. Starten Sie den Applikation-Server neu und prüfen Sie die Datei /var/log/wildfly/console.log

Wird ein HTTP-Fehlercode `405 Method Not Allowed` zurückgegeben, so liegt dies an einem falschen HTTP-Aufruf. Es wird nur die Methode POST unterstützt. Prüfen Sie Ihre Übermittlungsschnittstelle bzw. verwenden Sie die aktuelle Version unserer Software für die Übermittlung von Testdokumenten.

## Validierung von Dokumenten ohne Übermittlung

Siehe dazu online [https://www.hl7.org/fhir/documents.html#bundle](https://www.hl7.org/fhir/documents.html#bundle) sowie [https://www.hl7.org/fhir/operation-resource-validate.html](https://www.hl7.org/fhir/operation-resource-validate.html)

Nach HL7 FHIR lassen sich Dokumente validieren, indem eine POST-Operation an die Adresse `http://IHRSERVER/aktin/cda/fhir/Binary/$validate` durchgeführt wird. Es erfolgen alle Schritte wie bei der Übermittlung von Dokumenten, allerdings wird das Dokument verworfen und nicht im Data Warehouse gespeichert.

Die Antwort bei einer Validierungsoperation ist analog zur Übermittlung eine [OperationOutcome](https://www.hl7.org/fhir/operationoutcome.html) Ressource.

* * *

Copyright © 2013–2025.
All rights reserved.


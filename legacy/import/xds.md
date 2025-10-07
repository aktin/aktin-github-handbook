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
- IHE XDS.b SOAP
- [Changelog](changelog.md "Changelog")
- [Roadmap](roadmap.md "Roadmap")
- [Support](support.md "Support")
- Demo Server
- [Demo Server](demo-server.md "Demo Server")

* * *

# ﻿IHE XDS.b SOAP-Schnittstelle

CDA-Dokumente werden per SOAP entsprechend dem IHE XDS.b Standard abgeliefert.

Weitere Informationen zum IHE Profil XDS.b gibt es unter den folgenden Links:

[http://www.ihe.net/Technical\_Framework/upload/IHE\_ITI\_TF\_Supplement\_XDS-2.pdf](http://www.ihe.net/Technical_Framework/upload/IHE_ITI_TF_Supplement_XDS-2.pdf)

[http://wiki.ihe.net/index.php?title=XDS.b\_Implementation](http://wiki.ihe.net/index.php?title=XDS.b_Implementation)

Ebenfalls hilfreich sind Anleitungen unter [http://wiki.ihe.net/index.php?title=XDS.b\_Implementation#Example\_Provide\_and\_Register\_Document\_Set-b\_transaction](http://wiki.ihe.net/index.php?title=XDS.b_Implementation#Example_Provide_and_Register_Document_Set-b_transaction) und insbesondere das (annotierte Beispiel) [http://wiki.ihe.net/index.php?title=Annotated\_ProvideAndRegister.b\_Transaction](http://wiki.ihe.net/index.php?title=Annotated_ProvideAndRegister.b_Transaction) nach dem auch der Beispielclient entworfen wurde.

Passender Quellcode befindet sich im Projekt `demo-server` unter `org.aktin.cda.etl.demo.XdsClient`.

* * *

Copyright © 2013–2025.
All rights reserved.


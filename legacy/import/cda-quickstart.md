## AKTIN : DWH Import

* * *

- Last Published: 2025-08-13
\|
- Version: 0.20-SNAPSHOT


- HL7 CDA Dokument
- Kurzanleitung CDA
- [CDA Release V1.21](cda-release-v1.21.md "CDA Release V1.21")
- [CDA Release V1.26](cda-release-v1.26.md "CDA Release V1.26")
- Importschnittstelle
- Kurzanleitung CDA
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

# ﻿CDA Kurzanleitung

## Datensatz Basismodul

Der Datensatz für das Basismodul ist auf der Seite [http://aktin.art-decor.org](http://aktin.art-decor.org) im aktuellen Release (HTML) unter dem Bereich Datensatz einzusehen.

Weitere inhaltliche Informationen zum Datensatz, sowie eine Vorlage des Formulars für eine Implementierung als Eingabeformular im KIS befinden sich unter [http://notaufnahme.data-set.org/](http://notaufnahme.data-set.org/) bzw. [http://www.notaufnahmeprotokoll.de/site/](http://www.notaufnahmeprotokoll.de/site/)

Die CDA-Spezifikation basiert auf diesem Datensatz. Das Mapping zwischen dem Datensatz und den entsprechenden Elementen im CDA ist ebenfalls über die ART-DECOR Seite des AKTIN-Projekts nachvollziehbar.

Fragen bzgl. der medizinischen Inhalte bzw. des Hintergrunds lassen sich ggf. durch das PDF-Formular, verfügbar unter [http://www.notaufnahmeprotokoll.de/site/downloads/viewcategory/4-modul-basis.html](http://www.notaufnahmeprotokoll.de/site/downloads/viewcategory/4-modul-basis.html) und die [Erläuterungen](Basismodul.pdf) dazu klären. Dort sind insbesondere auch die Abgrenzung unklarer Ausprägungen der Valuesets näher erläutert.

Technische Fragen zur Umsetzung als CDA-Dokument sollten durch den Implementierungsleitfaden auf der ART-DECOR Seite (PDF) beantwortet werden.

Bei weiteren Fragen hilft der [IT-Support](support.html) des AKTIN-Projekts gerne weiter.

## CDA Verwaltungsinformationen, Constraints und Datenschutz

Im Basismodul-CDA gibt es zwei IDs, die zwingend korrekt gesetzt werden müssen: \* EncounterID \* PatientID

Weiterhin gibt es eine ID, die sehr wünschenswert ist, aber nicht zwingend angegeben werden muss: \* internes Fallkennzeichen / Fallnummer

Darüber hinaus gibt es noch eine ID, die entsprechend der CDA-Regeln gesetzt werden sollte, aber für den Import in das DWH nicht wichtig ist: \* SetID

In [dieser grafischen Übersicht](id.png) ist die Hierarchie der wichtigen IDs dargestellt. in dieser Grafik [Beispiel IDs im CDA](cda-ids.png) ist dargestellt, wo die entsprechenden IDs im CDA zu finden sind.

Als Identifier für eine Episode (hier definiert als ein Patientenkontakt, für den ein neues Notaufnahmeprotokoll angelegt werden soll) wird das Element `/ClinicalDocument/componentOf/encompassingEncounter/id[1]` verwendet. `@root` und `@extension` müssen also gleich bleiben, falls ein CDA-Dokument nachträglich geändert werden soll. Wenn der Patient erneut die Notaufnahme aufsucht, muss eine andere ID vergeben werden.

Das Quelldatensystem bzw. der Importer muss also sicherstellen, dass die `EncounterID` entsprechend eindeutig ist und bei inhaltlichen Änderungen eines Patientenkontakts unverändert bleibt. Dies ist nicht unbedingt gleichzusetzen mit einer Fallnummer oder Abrechnungsnummer, da je nach lokaler Umsetzung im KIS mehrere Notaufnahme-Formulare einem (Abrechnungs-)Fall zugeordnet werden könnten. Je nachdem wie das KIS bzw. die Prozesse strukturiert sind (auch bzgl. nachträglicher Änderungen) sind die IDs entsprechend der beschriebenen Anforderungen zu wählen oder ggf. zu generieren. Als `EncounterID` kann ggf. die FormularID der Dokumentationseinheit für den Notaufnahmekontakt(Episode) verwendet werden. Dabei sind ggf. die Besonderheiten des Notaufnahmesystems zu beachten: Falls Formulare storniert oder gelöscht werden (können), wäre es besser (falls möglich) eine übergeordnete ID zu verwenden, die den Notaufnahmekontakt(Episode) repräsentiert.

Als Identifier für den Patienten dient im Basismodul-CDA das Element `/ClinicalDocument/recordTarget/patientRole/id`.

Diese ID kann sinnvollerweise mit der Patienten-ID im KIS bzw. einem entsprechenden Pseudonym befüllt werden. Diese ID wird nur verwendet um Formulare eines Patienten zusammenfassen zu können. Vgl. dazu das AKTIN-Datenschutzkonzept.

Als Identifier für den Fall (internes Fallkennzeichen) dient im Basismodul-CDA das optionale Element `/ClinicalDocument/componentOf/encompassingEncounter/id[2]`. Diese ID soll zukünftig verwendet werden um Entlassdaten (analog §21-Datensatz) mit den Notaufnahmedaten zusammenzuführen.

Eine Vorverarbeitung/Pseudonymisierung im Quell-System ist nicht notwendig, da beim Import die Patienten-IDs mit einem Einweg-Hash verschlüsselt werden und somit keine Rück-Zuordnung zu identifizierenden Daten möglich ist, sondern lediglich ein anonymes Mapping zwischen Episoden des gleichen Patienten. Wenn eine Pseudonymisierung zwischengeschaltet wird, kann das Probleme verursachen bei der Qualitätssicherung (Datenabgleich) und beim OptOut. Immer dann, wenn Klinik-Personal personenbezogen auf die Daten zugreifen muss, wäre der Zugriff auf die Pseudonymisierungsliste notwendig. Daher ist es empfehlenswert mit IDs zu arbeiten, die dem Nutzer im Klinik-Informationssystem bekannt sind.

Im AKTIN Data Warehouse werden keine direkt identifizierenden Daten gespeichert (vgl. Datenschutzkonzept). Diese Daten könnten bei der CDA-Erzeugung im Quell-System bereits weggelassen oder durch Dummy-Einträge ersetzt werden. Im Sinne eines korrekten CDA-Dokuments ist es aber besser vollständige CDAs mit identifizierenden Daten zu senden. Die identifizierenden Daten werden von der krankenhausinternen AKTIN-Schnittstelle nicht verarbeitet oder gespeichert.

Das CDA hat eine `/ClinicalDocument/setId`, die das Dokument eindeutig identifiziert. Für den Import spielt diese ID keine Rolle, aber sie sollte CDA-konform gewählt werden. Beispielsweise könnte man in der root das Basismodul-CDA referenzieren und als extension die eindeutige EncounterID verwenden. Theoretisch wäre bei einer Änderung auch `/ClinicalDocument/versionNumber` zu erhöhen – die Schnittstelle beachtet dies aber nicht, sondern überschreibt Informationen mit gleicher `EncounterID` (s. o.) und gleicher `PatientID`.

## Änderungen an Falldaten, PatientenID, EncounterID, Löschen/Stornieren von Epsioden/Fällen

Die CDAs sollen zu einem möglichst frühen Zeitpunkt (mindestens 1x täglich, vorzugsweise kontinuierlich) in das Datawarehouse übermittelt werden. Es kann passieren, dass nach der Übermittlung noch Daten im Notaufnahme-System verändert werden. In jedem Fall sollten diese Änderungen auch im AKTIN-DWH aktualisiert werden. Je nach Implemetierung des Imports und der Trigger-Möglichkeiten sind dazu verschiedene Strategien denkbar. Im Idealfall können die Fälle anhand von internen Nachrichten oder Triggern erneut versendet werden, wenn sich etwas ändert. Falls ein solcher Trigger nicht verfügbar ist, können die Fälle auch einfach nach 1 Woche, 1 Monat und/oder 1 Jahr erneut gesendet werden um ggf. in der Zwischenzeit veränderte Inhalte zu übertragen. Die Werte werden dann im DWH überschrieben - d. h. wenn die Werte sich nicht geändert haben, hat das Überschreiben keine Auswirkung (außer dass der Import-Zeitpunkt neu gesetzt wird)

Alle Änderungen, die die PatientenID oder EncounterID betreffen, müssen gesondert betrachtet werden: \* Löschen von Daten aus dem AKTIN-DWH \* Änderung der PatientenID \* Änderung der EncounterID \* Änderung der PatientenID und EncounterID

Die Funktionen zum Löschen befinden sich noch in der Entwicklung. Damit können dann OptOut umgesetzt werden und ebenso das auomatisierte Löschen von Fällen, die IM KIS storniert oder gelöscht wurden.

Änderungen an der PatientenID können auftreten, wenn Fälle zunächst unter einer falschen PatientenID angelegt werden, z.B. wenn die Identität zunächst unklar ist, wenn Dokumentationsfehler korrigiert werden, bei Massenanfall von Verletzten etc. In solchen Fällen kann das CDA mit der geänderten PatientenID erneut gesendet werden. Das AKTIN-DWH interpretiert dies als Änderung - d. h. die ursprünglichen Daten mit der alten PatientenID werden gelöscht und der Fall neu eingefügt

Änderungen an der EncounterID können nicht unterschieden werden von neuen Encountern und würden also ggf. zu Dubletten führen. Daher ist unbedingt darauf zu achten, dass sich die EncounterID durch Änderungen an den Daten einer Episode niemals ändern kann. Sollte das aus irgendeinem Grund nötig sein, muss der alte Fall zuvor gelöscht werden.

Gleiches gilt auch wenn sich beiden IDs ändern: Für das System ist das ein neuer Fall. Sollte das aus irgendeinem Grund nötig sein, muss der alte Fall zuvor gelöscht werden.

## Fehlende Information, Null Flavors und Dummy-Einträge

Fehlende Informationen (i. e. Teile des CDA-Dokuments, die in der lokalen Notaufnahme grundsätzlich nicht dokumentiert werden oder bei einzelnen Patienten nicht vorhanden sind) sollten nach Möglichkeit entsprechend der CDA-Vorgaben weggelassen oder mit Null Flavors versehen werden.

Knoten bzw. Teilbäume mit der Kardinalität `0..1` sollten weggelassen werden, wenn keine sinnvollen Werte vorhanden sind.

`1..1 R` (required) Elemente können mit `@nullFlavor` Attributen belegt werden. Beispielsweise kann durch `<id nullFlavor="NA"/>` vermieden werden einen wertlosen Dummy-Wert für `<id extension="XYZ" root="1.2.3.4.5"/>` anzugeben. Auch Zeitpunkte, die im Quellsystem nicht vorhanden sind, können so weggelassen werden: `<effectiveTime nullFlavor="NA"/>`.

Nur Elemente, die `1..1 M` (mandatory) sind, müssen ggf. mit Dummy Werten belegt werden um ein gültiges CDA-Dokument zu erzeugen. Sollten systematisch Informationen fehlen, die im CDA mandatory sind, wenden Sie sich bitte an den [IT-Support](support.html) um zu klären wie die Datenqualität in solchen Fällen möglichst erhalten werden kann.

## Strukturierte Einträge vs. Freitext

Die CDA Spezifikation besteht aus vielen strukturierten Elementen, definiert aber auch Freitext-Felder, in die die relevanten Informationen eingetragen werden können/sollen. Die Freitext-Informationen werden bis auf wenige Ausnahmen durch die AKTIN-Schnittstelle nicht ausgewertet, d. h. jede Information, die nur in Form von Freitexten im CDA vorkommt ist für das Data Warehouse verloren. Im Sinne einer hohen Datenqualität ist es deshalb notwendig die strukturierten Felder im CDA entsprechend der inhaltlichen Anforderungen des Datensatzes und konform zur CDA-Spezifikation zu füllen - Freitext-Angaben sind insofern rein optional, auch wenn sie z. T. notwendig sind um ein standardkonformes CDA-Dokument zu erzeugen. Ausnahmen sind lediglich die Informationen, die als Freitexte Bestandteil des AKTIN-Datensatzes sind und deshalb auch als Freitexte erhoben und gespeichert werden.

Insbesondere bieten Freitextfelder aus Projekt-Sicht keine auswertbare Möglichkeit Informationen unterzubringen, die nicht in die strukturierten Felder passen. Hier gibt es einen Unterschied zwischen dem was für das AKTIN Projekt notwendig bzw. sinnvoll ist und was eigentlich im Sinne eines standardkonformen CDA-Dokuments best practice wäre. Bei Fragen zur Umcodierung/inhaltlichen Anpassung von nur teilweise vorhandenen oder abweichend codierten Daten wenden Sie sich bitte an den [IT-Support](support.html).

* * *

Copyright © 2013–2025.
All rights reserved.


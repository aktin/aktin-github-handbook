# Grundlagen

## Bestehende Verfahren für Testdaten Generierung

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
<p>Hier finden Sie Zusammenfassungen bestehender Verfahren für die
generierung von medizinischen Testdaten.</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Inhalt

- [Inhalt](#inhalt)

- [Ziel](#ziel)

- [Problem](#problem-8)

- [Bestehende Verfahren](#bestehende-verfahren)

- [Aktin Test-daten-generator](#aktin-test-daten-generator)

- [Dateien (Versionierung)](#dateien-versionierung)

### Ziel

Generierung von künstlich erzeugten (synthetischen) Datensätzen aus
bestehenden medizinischen Datensätzen. 

- maximale Ähnlichkeit zu den ursprünglichen Datensätzen (Gleiche
  Verteilung der Attribute und Gleiche Korrelation der Attribute
  zueinander)

- minimale Identifizierbarkeit auf die ursprünglichen Datensätze 

### Problem

Synthetische Daten müssen möglichst echt sein um sie für das Testen von
medizischen Produkten einzusetzen. Deshalb sollten synthetische Daten
immer aus echten Daten generiert werden. Im Optimalfall wären hierfür
echte Datensätze am Besten, jedoch sind solche nicht anonymisiert und
können dementsprechend nicht veröffentlicht oder von Dritten verwendet
werden. Deshalb gilt es bei der Erzeugung von synthetischen Daten den
optimalen Weg zwischen Anonymisierung und Ähnlichkeit zu Echten Daten zu
finden.

Durch die hohe Anzahl an Attributen und das oft seltene Auftreten von
bestimmten Krankheiten ist es in manchen Fällen fast unmöglich
synthetische Datensätze zu generieren, die nicht identifizierbar sind.

### Bestehende Verfahren

Es gibt grundsätzlich drei Arten von synthetischen Daten: 

- Dummy Daten / Mocks: random Werte, Struktur gleich 

- Regelbasiered: festgelegte Logic für synthetischen Daten basierend auf
  echten Datensätze

- KIbasierend: Ki Modell erzeugen synthetische Daten nachdem sie auf auf
  echten Datensätzen trainiert wurden

#### KI-Based

- KIs werden auf echten Datensätzen trainiert und können dann
  synthetische Datensätze erzeugen die diesen ähneln.

- Problem: Manche Ergebnisse können auf die ursprünglichen Datensätze
  zurückverfolgt werden.

##### Generative Adversarial Networks (GAN)

- Generator erstellt und Diskriminator prüft mit den echten Vorlagen

- Identification Constraints für Identifizierbarkeit

- benötigt homogene Datensätze

- Viel Aufwand für Training und Datenpflege

- Gute Ergebnisse

- an algorithm based on two neural networks, working together to
  generate fake yet realistic data points. One neural network attempts
  to generate fake data points while the other learns to differentiate
  fake and real samples. GAN models are complex to train and
  computationally intensive, but can generate highly detailed, realistic
  synthetic data points

##### Generative Language Models (LM) with namend entity annotations (NER)

- Natural language Dokuments with annotations for the trainign of
  Natural language Processing Models

- this study uses GPT-2 and LSTM for generating synthetic records

- it needs to be a structure aware LM

- focus on Utility,

- Privacy was studied with high utility cases in user study

##### Variational Auto-Encoder (VAE)

- an unsupervised algorithm that can learn the distribution of an
  original dataset and generate synthetic data via double
  transformation, known as an encoded-decoded architecture. The model
  formulates a reconstruction error, which can be minimized with
  iterative training. 

- *Learn more about VAE in the excellent post by [Baptiste
  Rocca](https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73).*

##### Diffusion Models

- algorithms that corrupt training data by adding Gaussian noise until
  the image becomes pure noise, then train a neural network to reverse
  this process, gradually denoising until a new image is produced.
  Diffusion models have high training stability and can produce high
  quality results for both image and audio

#### Rule Based Methods

- kann nur auf eine domain spezifisch angewendet werden.

- kann aber große Mengen Datasets generieren

- Hohe Aufwand

- **Fitting Real Data to a Distribution**

- 

### Aktin Test-daten-generator

Für Aktin sollen die Testdaten beim Testen des Importers eingesetzt
werden.

Dabei sollen synthetische CDAs erstellt werden und in Aktin importiert
werden

Testen auf:

- Stabilität 

- Robustheit

- Zuverlässigkeit

Ich schließe daraus:

- Es wird eine große Menge an CDAs benötigt. (Stabilität)

- Es wird eine möglichst große Abdeckung aller Fälle benötigt
  (Robustheit

- Verteilung der Wert sind nicht relevant.

- Die Struktur der ursprünglichen CDAs sollte beibehalten werden um alle
  Fälle abzudecken.

relationsnahe keine Geburt vor 1910

ENtkoppekln klassen Module

P21 Skript : Schnittstelle Fallabbrechnungs Krankenkassen. Was passiert
nach Notaufnahme?

### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File | Modified |
|------|----------|

### AKTIN Testdaten Generator

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

#### Inhalt

- [Inhalt](#inhalt-1)

- [Doku](#doku)

- [Dateien (Versionierung)](#dateien-versionierung-1)

#### Doku

#### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File | Modified |
|------|----------|

## Einführung in CDA

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
<p>Einführung in CDA</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Inhalt

- [Inhalt](#inhalt-2)

- [Allgemeines Verständnis](#allgemeines-verständnis)

  - [Was ist ein CDA-Dokument?](#was-ist-ein-cda-dokument)

  - [Welchen Zweck erfüllt ein CDA in der
    Gesundheitsinformatik?](#welchen-zweck-erfüllt-ein-cda-in-der-gesundheitsinformatik)

- [HL7-Standart](#hl7-standart)

- [Was ist der HL7-Standard, und wie wird er im CDA-Dokument
  verwendet?](#was-ist-der-hl7-standard-und-wie-wird-er-im-cda-dokument-verwendet)

- [XML-Struktur](#xml-struktur)

  - [Wie ist XML strukturiert, und wie wird es im CDA-Dokument
    verwendet?](#wie-ist-xml-strukturiert-und-wie-wird-es-im-cda-dokument-verwendet)

- [XML-Transformation und Styling](#xml-transformation-und-styling)

  - [Welche Rolle spielt die XML-Stylesheet-Referenz im
    CDA?](#welche-rolle-spielt-die-xml-stylesheet-referenz-im-cda)

  - [Wie unterstützt die XML-Transformation die Präsentation von
    klinischen
    Daten?](#wie-unterstützt-die-xml-transformation-die-präsentation-von-klinischen-daten)

- [Header](#header)

  - [Welche Informationen sind im Dokumentenheader
    enthalten?](#welche-informationen-sind-im-dokumentenheader-enthalten)

  - [Warum ist die Identifikation des Patienten wichtig, und wie wird
    sie
    erreicht?](#warum-ist-die-identifikation-des-patienten-wichtig-und-wie-wird-sie-erreicht)

  - [Was ist die Rolle der verschiedenen Codes im Header (z.B.,
    realmCode, typeId,
    templateId)?](#was-ist-die-rolle-der-verschiedenen-codes-im-header-z.b.-realmcode-typeid-templateid)

- [Dokumentinhalt](#dokumentinhalt)

  - [Welche patientenspezifischen Informationen sind im CDA-Dokument
    vorhanden?](#welche-patientenspezifischen-informationen-sind-im-cda-dokument-vorhanden)

  - [Welche Abschnitte sind im Dokumenteninhalt enthalten, und welche
    Informationen repräsentieren
    sie?](#welche-abschnitte-sind-im-dokumenteninhalt-enthalten-und-welche-informationen-repräsentieren-sie)

  - [Wie werden Zeitpunkte (Datum und Uhrzeit) im CDA
    dargestellt?](#wie-werden-zeitpunkte-datum-und-uhrzeit-im-cda-dargestellt)

  - [Welche Rolle spielen die Abschnitte für Transportmittel,
    Notfallanamnese, Diagnostik
    usw.?](#welche-rolle-spielen-die-abschnitte-für-transportmittel-notfallanamnese-diagnostik-usw.)

  - [Wie werden Codes und Terminologien im CDA verwendet (z.B., LOINC,
    SNOMED
    CT)?](#wie-werden-codes-und-terminologien-im-cda-verwendet-z.b.-loinc-snomed-ct)

  - [Warum sind sie wichtig für die Interoperabilität im
    Gesundheitswesen?](#warum-sind-sie-wichtig-für-die-interoperabilität-im-gesundheitswesen)

- [Dateien (Versionierung)](#dateien-versionierung-2)

### Allgemeines Verständnis

#### Was ist ein CDA-Dokument?

Das **Clinical Document Architecture** (**CDA**) ist ein von HL7
erarbeiteter, auf XML basierender Standard für den Austausch und die
Speicherung medizinischer Inhalte. Dabei entspricht ein CDA-Dokument
immer genau **einem** klinischen Dokument (z. B. Arztbrief,
Befundbericht). Somit erfolgt keine Zusammenfassung mehrerer Dokumente
wie in einer Patientenakte. Deshalb ist ein CDA immer eine
Momentaufnahme zu einem bestimmten Zeitpunkt.

Mit einem CDA kann ein klinisches Dokument in eine strukturierte Form
gebracht werden. Durch die Umwandlung in ein solches CDA kann ein
klinisches Dokument nun von Maschinen/Gesundheitssystemen gelesen und
interpretiert werden. CDAs haben festgelegte Strukturen und Hierarchien,
jedoch stellen sie auch eine Vielzahl an standartisierten Komponenten zu
Verfügung, mit denen ein CDA genau an ein spezifisches Dokument
angepasst werden kann.

#### Welchen Zweck erfüllt ein CDA in der Gesundheitsinformatik?

Der Zweck des CDA ist, strukturierte klinische Dokumente zu erstellen,
zu speichern, auszutauschen und zu interpretieren.

Wesentlich für die Gesundheitsinformatik sind aber primär die
Möglichkeiten für Austausch und Übermittelung von klinischen Daten und
Dokumenten.

Welche Rolle spielt das CDA im Austausch von klinischen Informationen?

Die Rolle des CDA ist es, Interoperabilität zwischen verschiedenen
Systemen und Organisationen in Gesundheitswesen zu ermöglichen. Mithilfe
dem CDA können verschiedene Gesundheitsleister und Systeme effizient
Informationen austauschen, unabhängig davon, welche Software oder
Platform sie verwenden. Dies erleichtert die nahtlose Integration von
klinischen Daten und verbessert die Zusammenarbeit, was letztendlich die
Patientenversorgung verbessert und die Effizienz steigert.

### HL7-Standart

### Was ist der HL7-Standard, und wie wird er im CDA-Dokument verwendet?

HL-7-Standart ist speziell für das Gesundheitswesen entwickelte
Kommunikationsstandard, der die Kommunikation zwischen nahezu allen
Institutionen und Bereichen des Gesundheitswesens ermöglicht. Mit HL7
lassen sich alle wesentlichen Kommunikationsaufgaben abwickeln und die
Effizienz der Kommunikationsvorgänge entscheidend verbessern. Es
existiert 3 verschiedenen HL7 Standards, die heutzutage verwendet sind:
HL7 v2, HL7 v3 und HL7 FHIR. Für uns ist HL7 v3 interessant, da es das
CDA als eine Dokumenten-Spezifikation enthält.

HL7 v3 Standard umfasst:

- ein Informationsmodell (Reference Information Model)

- eine Dokumenten-Spezifikation (CDA)

- einen Messaging-Teil (HL7 v3, der inhaltliche Nachfolger von v2)

- weitere Teile (die nicht relevant sind)

Welche HL7-Standards werden in diesem CDA speziell genutzt (z.B., HL7
FHIR)?

CDA Dokumente können das Code-System von HL7 nutzen, um die Codes
innerhalb des Dokuments zu identifizieren. Dieses spezifische
Code-System mit der OID (Object Identifier) ist Teil der
HL7-Standardterminologie und wird oft als LOINC (Logical Observation
Identifiers Names and Codes) bezeichnet. Dies ermöglicht eine
standardisierte und eindeutige Identifizierung von medizinischen
Beobachtungen und Tests innerhalb des Dokuments.

Wie tragen die HL7-Standards zur Interoperabilität im Gesundheitswesen
bei?

 "CDA" alleine bedeutet nicht, dass Systeme interoperabel sind. CDA
basieren auf verschiedene Klassifikationen. Wenn aber ein System-1 ein
ICD-10 basiertes Dokument schickt, aber System-2 ein DIMDI erwarten,
dann wurden die Informationen korrekt übertragen, aber kein Verständnis
erzielt. Dieses Problem lösen **CDA Templates.** Jedes Dokument
spezifiziert eine Template-ID, und das Template gibt Art, Struktur und
verwendeten Codesysteme des Dokuments vor. Wenn 2 Systeme die gleichen
Templates unterstützen, so sind sie interoperabel. Das Template liefert
alles, was das System braucht, um ein CDA Dokument zu erzeugen und
verarbeiten zu können.

### XML-Struktur

#### Wie ist XML strukturiert, und wie wird es im CDA-Dokument verwendet?

XML besitzt die Fähigkeit, Daten strukturiert und hierarchisch zu
speichern. XML ist die Grundstruktur eines CDAs. Dadurch werden die
einzelnen Abschnitte eines klinisches Dokuments klar abgegrenzt.
Desweiteren können diese Abschnitte dann hierarchisch aufgebaut werden.
Somit werden Unterabschnitte ebenfalls klar abgegrenzt. In XML können
die einzelnen Abschnitte zu vordefinierten Klassen zugeordnet und mit
Attributen versehen werden. So können in die einzelnen Abschnitte in
klinischen Dokumenten durch standardtisierte Klassen abgebildet werden.
Dadurch können verschiedene Gesundheitssysteme diese Informationen
austauschen und interpretieren. Auch können die Abschnitte mit
Informationen aus Code-Systemen attributiert werden, welche Definitionen
von Begriffen und Sachverhalten liefern können.

Was sind die Schlüsselkomponenten eines CDA-Dokuments (Header, Body,
Abschnitte)?

Die Schlüsselkomponenten eines CDA-Dokuments umfassen:

1.  **Header**:

    - Der Header enthält Metadaten und administrative Informationen über
      das Dokument. Dies umfasst Dinge wie den Ersteller des Dokuments,
      den Zeitpunkt der Erstellung, den Patienten, auf den sich das
      Dokument bezieht, und andere relevante Details. Der Header bietet
      Kontext und Hintergrundinformationen für den Inhalt des Dokuments.

2.  **Body**:

    - Der Body enthält den Hauptinhalt des CDA-Dokuments. Hier werden
      die eigentlichen klinischen Informationen in strukturierter Form
      dargestellt. Der Body kann mehrere Abschnitte oder Blöcke von
      Informationen enthalten, die verschiedene Aspekte des klinischen
      Berichts darstellen, wie beispielsweise medizinische Befunde,
      Diagnosen, Behandlungen, Medikamentenlisten usw.

3.  **Abschnitte (Sections)**:

    - Abschnitte sind strukturierte Bereiche innerhalb des Body, die
      spezifische Arten von Informationen enthalten. Jeder Abschnitt ist
      in der Regel für eine bestimmte Art von klinischen Daten oder
      Informationen reserviert und kann spezifische Elemente und
      Strukturen enthalten, die durch entsprechende CDA-Templates
      definiert sind. Beispiele für Abschnitte sind "History of Present
      Illness" (Anamnese), "Medications" (Medikamente), "Allergies"
      (Allergien) usw. Diese Abschnitte helfen dabei, den Hauptinhalt
      des Dokuments zu organisieren und zu strukturieren.

Welche Bedeutung haben die verschiedenen XML-Attribute und -Elemente im
CDA?

Hier sind einige wichtige XML-Attribute und -Elemente:

1.  <span class="mark">\<ClinicalDocument\></span> : Dies ist das
    Wurzelelement eines CDA-Dokuments und enthält alle anderen Elemente
    und Informationen des Dokuments.

2.  <span class="mark">\<realmCode\></span> : Ein Attribut, das angibt,
    in welchem geografischen oder administrativen Bereich das Dokument
    erstellt wurde.

3.  <span class="mark">\<typeId\></span> : Ein Attribut, das den Typ des
    CDA-Dokuments angibt, z.B. ob es sich um einen Entlassungsbrief oder
    einen Befund handelt.

4.  <span class="mark">\<templateId\></span> : Ein Attribut, das auf die
    Vorlage (Template) verweist, die für die Erstellung des
    CDA-Dokuments verwendet wurde. Templates definieren die Struktur und
    den Inhalt des Dokuments gemäß den Anforderungen von Standards wie
    HL7.

5.  <span class="mark">\<id\></span> : Ein Element, das eine eindeutige
    Identifikationsnummer für das CDA-Dokument enthält.

6.  <span class="mark">\<code\></span> : Ein Element, das den Code oder
    die Klassifikation des Dokuments angibt, z.B. den Zweck oder die Art
    des Dokuments.

7.  <span class="mark">\<title\></span> : Ein Element, das den Titel
    oder die Überschrift des CDA-Dokuments enthält.

8.  <span class="mark">\<effectiveTime\></span> : Ein Element, das den
    Zeitpunkt angibt, zu dem das CDA-Dokument erstellt oder aktualisiert
    wurde.

9.  <span class="mark">\<confidentialityCode\></span> : Ein Element, das
    den Vertraulichkeitsgrad des Dokuments angibt, z.B. ob es sich um
    vertrauliche oder öffentliche Informationen handelt.

10. <span class="mark">\<author\></span> : Ein Element, das
    Informationen über den Autor des Dokuments enthält, z.B. Name,
    Kontaktinformationen und Rollenbezeichnung.

11. <span class="mark">\<component\></span>** :** Ein Element, das einen
    einzelnen Abschnitt oder eine Komponente des CDA-Dokuments enthält,
    z.B. einen Laborbefund oder eine medizinische Geschichte.

12. <span class="mark">\<section\></span> : Ein Element, das einen
    Abschnitt des CDA-Dokuments darstellt, z.B. eine Diagnose,
    Medikationsliste oder Behandlungsplan.

### XML-Transformation und Styling

#### Welche Rolle spielt die XML-Stylesheet-Referenz im CDA?

Die XML-Stylesheet-Referenz ermöglicht es, dass ein XML-Parser oder
Viewer weiß, wie das XML Dokument formatiert und dargestellt werden
soll. Es definiert im Wesentlichen die visuelle Darstellung des
XML-Dokuments.

Das wird im <span class="mark">\<?xml-stylesheet?\></span> 
Deklarationsabschnitt innerhalb des XML-Headers angegeben. Sie verweist
auf eine separate Datei, die die Anweisungen für die Formatierung und
Darstellung enthält. Diese separate Datei wird als XSL-Datei bezeichet.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong>-stylesheet type="text/xsl"
href="CDA.xsl"?&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 30 Beispiel

#### Wie unterstützt die XML-Transformation die Präsentation von klinischen Daten?

Hier sind einige Möglichkeiten, wie XML-Transformationen die
Präsentation von Daten unterstützen:

1.  **Formatierung für die Anzeige**: Transformationen können verwendet
    werden, um die strukturierten XML-Daten in verschiedene
    Anzeigeformate umzuwandeln, wie z.B. HTML, PDF oder andere
    benutzerfreundliche Formate. Dies ermöglicht es, klinische Daten auf
    eine Weise zu präsentieren, die für Menschen lesbar ist.

2.  **Anpassung an verschiedene Benutzeroberflächen**:
    XML-Transformationen ermöglichen es, klinische Daten an verschiedene
    Benutzeroberflächen anzupassen, sei es in einem elektronischen
    Patientenakten-System, einem Krankenhausinformationssystem (KIS)
    oder einer mobilen Gesundheits-App. Durch die Transformation können
    die Daten entsprechend den Anforderungen und dem Layout der
    jeweiligen Benutzeroberfläche angepasst werden.

3.  **Filterung und Selektion**: XML-Transformationen können verwendet
    werden, um bestimmte Teile der klinischen Daten zu filtern oder
    auszuwählen, die für eine bestimmte Präsentation relevant sind. Dies
    kann helfen, irrelevante Informationen zu entfernen und den Fokus
    auf die wichtigsten klinischen Details zu legen.

4.  **Darstellung von Hierarchien und Beziehungen**: Durch
    Transformationen können komplexe Hierarchien und Beziehungen
    zwischen klinischen Daten visuell dargestellt werden, um
    Zusammenhänge und Verbindungen besser zu verstehen. Dies kann
    insbesondere bei der Darstellung von medizinischen Befunden,
    Diagnosen und Behandlungsverläufen hilfreich sein.

Insgesamt unterstützen XML-Transformationen, indem sie die
strukturierten XML-Daten in benutzerfreundliche und informative
Darstellungsformen umwandeln. Dies trägt dazu bei, die Kommunikation,
Interpretation und Nutzung von klinischen Informationen im
Gesundheitswesen zu verbessern.

### Header

#### Welche Informationen sind im Dokumentenheader enthalten?

Der Dokumentenheader enthält wichtige Metadaten und Kontextinformationen
über das klinische Dokument. Diese Informationen helfen bei der
Identifizierung, Klassifizierung und Interpretation des Dokuments. Das
sind die einige Informationen;

- Dokumentenidentifikator: Eine eindeutige Kennung, die das Dokument
  identifiziert.

- Patientenidentifikator: E 

- Autoreninformationen: Informationen über die Person oder Organisation,
  die das Dokument erstellt hat.

- Erstellungsdatum und Zeitpunkt

- Klinischer Kontext (Zustand des Patienten, die medizinische Abteilung
  usw.)

- Änderungshistorie

- Vertraulichkeitsstufe (Wer hat Zugriff auf das Dokument)

- Empfängerinformationen

- Kodierungsinformationen: Information über das verwendeten Code-Systeme

- Sprache des Dokuments

#### Warum ist die Identifikation des Patienten wichtig, und wie wird sie erreicht?

Die Identifikation des Patienten ist wichtig aus mehreren Gründen:

- Patientensicherheit. Eine eindeutige Identifikation des Patienten
  hilft, Verwechslungen zu vermeiden und sicherzustellen, dass die
  richtige Behandlungen dem richtigen Patienten zugeordnet werden.

- Kontinuität der Pflege. Eine genaue Identifikation ermöglicht es den
  medizinischen Fachkräften, die relevante Informationen des Patienten
  korrekt zu verfolgen und zu verwalten, unabhängig davon, wo der
  Patient behandelt wird oder wer involviert sind.

Die Identifikation wird durch die Verwendung eindeutiger Kennungen
erreicht. Dafür wird auch die demografische Information (Name,
Geburtsdatum, Geschlecht und eine eindeutige Patientennummer) verwendet.

#### Was ist die Rolle der verschiedenen Codes im Header (z.B., realmCode, typeId, templateId)?

Die Codes dienen dazu, die Struktur, den Typ und andere Aspekte des
Dokuments zu definieren und zu identifizieren.

<span class="mark">realmCode</span> Dieser Code identifiziert den
geografischen oder administrativen Bereich, für den das Dokument
relevant ist.

<span class="mark">typeId</span>  Dieser Code identifiziert den Typ des
CDA-Dokuments. Beschreibung aus wiki.HL7.de:  *The clinical document
typeId identifies the constraints imposed by CDA R2 on the content,
essentially acting as a version identifier.*

<span class="mark">templateId</span> Dieser Code identifiziert die
Vorlage oder die Vorlagen, die für die Erstellung des Dokuments
verwendet wurden. Sie können verwendet werden, um sicherzustellen, dass
das Dokument bestimmten Standards entspricht und die erforderlichen
Informationen enthält. Jede Vorlage hat eine eindeutige Vorlagen-ID, die
im <span class="mark">templateId</span> -Element angegeben wird.

### Dokumentinhalt

#### Welche patientenspezifischen Informationen sind im CDA-Dokument vorhanden?

Ein CDA Dokument kann folgende Informationen über ein Patient erfassen:

- Identifikation (In Header). Dazu gehören Name, Geburtsdatum,
  Geschlecht und eine eindeutige Patientenidentifikationsnummer.

- Kontaktinformation. Adresse, Telefonnummer und Email, falls vorhanden.

- Kontaktinformation über Vormund. Name, Adresse, Kontaktdaten.

- Medizinische Geschichte. Die Information über vergangene Diagnosen,
  Behandlungen, Operationen usw.

- Aktuelle Probleme und Diagnosen.

- Medikationen. Eine Liste der aktuellen Medikamente des Patienten,
  einschließlich Dosierung und Verabreichungshäufigkeit.

- Laborergebnisse. Laboruntersuchungen wie Bluttests, Analysen usw.

- Behandlungspläne. Informationen über geplante medizinische
  Interventionen, Operationen oder Therapien.

- Fortgeschrittene medizinische Direktiven. Dokumente, die die Wünsche
  des Patienten in Bezug auf medizinische Behandlungen festlegen, falls
  er nicht in der Lage ist, Entscheidungen selbst zu treffen.

- Verlaufsdokumentation

- Vitalzeichen. Daten zu den Vitalparametern des Patienten wie
  Blutdruck, Puls, Temperatur und Atmung.

Diese Liste ist nicht endlich und je nach CDA Dokument können die Daten
variieren.

#### Welche Abschnitte sind im Dokumenteninhalt enthalten, und welche Informationen repräsentieren sie?

Abschnitte sind je nach Dokumenttyp unterschiedlich. Z.b. In einem AKTIN
Template werden folgende Abschnitten enthalten.

- Abschlussdiagnosen.

  - Die endgültigen Diagnosen, die während des Notfallbesuchs gestellt
    wurden.

- Allergien und Unverträglichkeit

  - Informationen über bekannte Allergien und Unverträglichkeiten des
    Patienten gegenüber Medikamenten oder anderen Substanzen.

- Befunde / Verlauf / durchgeführte

  - Therapie Dokumentation des klinischen Verlaufs während des
    Notfallbesuchs, einschließlich festgestellter Befunde,
    durchgeführter Therapien und ihrer Ergebnisse.

- Beschwerden bei Vorstellung

  - Eine Beschreibung der Symptome oder Beschwerden, mit denen der
    Patient bei der Notfallaufnahme vorgestellt wurde.

- Diagnostik

  - Informationen über durchgeführte diagnostische Untersuchungen wie
    Laboruntersuchungen, Bildgebung und andere Testverfahren.

- Ersteinschätzung

  - Eine initiale Einschätzung des Gesundheitszustands des Patienten bei
    der Ankunft in der Notaufnahme.

- Klinische Basisinformationen

  - Grundlegende demografische Informationen des Patienten sowie Angaben
    zur aktuellen Medikation und Vorerkrankungen.

- Notfallanamnese 

  -  Informationen über die Vorgeschichte des aktuellen
    Notfallereignisses, einschließlich relevanter Symptome, Ereignisse
    oder Expositionen.

- Transportmittel

  - Details zum Transportmittel, mit dem der Patient zur Notaufnahme
    gebracht wurde.

- Vitalparameter

  - Messwerte von Vitalparametern wie Blutdruck, Puls, Atemfrequenz und
    Temperatur.

- Weiteres Procedere / Therapieempfehlung / Weiterbehandler

  - Empfehlungen für weitere Maßnahmen, Therapien oder die Weiterleitung
    des Patienten an einen anderen Behandler oder eine spezialisierte
    Einrichtung.

- Zusatzmodule (weitere Dokumentation)

  -  Zusätzliche Informationen oder Dokumentationen, die nicht in die
    anderen Abschnitte passen.

- Zuweisung

  - Angaben zur Zuweisung des Patienten zur Notaufnahme, einschließlich
    Informationen über den überweisenden Arzt oder die überweisende
    Einrichtung.

#### Wie werden Zeitpunkte (Datum und Uhrzeit) im CDA dargestellt?

HL7 definiert einen spezifischen Datentyp namens "TS" (Timestamp), der
für die Darstellung von Zeitangaben verwendet wird.

Ein Timestamp kann folgendermaßen formatiert sein:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>YYYYMMDDHHMMSS.TZ</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 31 Timestamp

Dabe steht;

- YYYY für das Jahr (z. B. 2024)

- MM für den Monat (01 bis 12)

- DD für den Tag im Monat (01 bis 31)

- HH für die Stunde im 24-Stunden-Format (00 bis 23)

- MM für die Minute (00 bis 59)

- SS für die Sekunde (00 bis 59)

- TZ für die Zeitzone (z. B. +/-HHMM oder Z für UTC)

Beispiel:

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;<strong>time</strong>&gt;</p>
<p>&lt;<strong>low</strong> value="201209091911-0400"/&gt;</p>
<p>&lt;<strong>high</strong> value="201209161911-0400"/&gt;</p>
<p>&lt;/<strong>time</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 32 Timestamp Beispiel

Die Zeitangaben im CDA sind auf diese standardisierte Weise formatiert,
um Interoperabilität zwischen verschiedenen Systemen zu gewährleisten
und einheitliche Datenrepräsentationen zu ermöglichen.

#### Welche Rolle spielen die Abschnitte für Transportmittel, Notfallanamnese, Diagnostik usw.?

Die verschiedenen Abschnitte spielen wichtige Rollen bei der
Dokumentation und Erfassung von klinischen Informationen. Hier ist die
Rolle jedes Abschnitts

1.  **Transportmittel**: Dieser Abschnitt dokumentiert das
    Transportmittel, mit dem der Patient zur Notaufnahme gebracht wurde.
    Die Aufnahme dieser Information ermöglicht es den medizinischen
    Fachkräften, den Zustand des Patienten bei der Ankunft besser zu
    verstehen und mögliche Einflüsse des Transportmittels auf den
    Gesundheitszustand zu berücksichtigen.

2.  **Notfallanamnese**: Hier werden relevante Informationen über die
    Vorgeschichte des aktuellen Notfallereignisses erfasst. Dies kann
    Symptome, Ereignisse, Expositionen oder andere Faktoren umfassen,
    die zur aktuellen Notfallsituation geführt haben. Die
    Notfallanamnese hilft dabei, den Kontext des Notfalls zu verstehen
    und die Behandlung entsprechend anzupassen.

3.  **Diagnostik**: In diesem Abschnitt werden alle durchgeführten
    diagnostischen Untersuchungen dokumentiert, einschließlich
    Laboruntersuchungen, Bildgebung und anderen Testverfahren. Die
    Erfassung dieser Informationen ermöglicht es den behandelnden
    Ärzten, den klinischen Zustand des Patienten zu bewerten und die
    richtigen Diagnosen zu stellen.

4.  **Weiteres Procedere / Therapieempfehlung / Weiterbehandler**: Hier
    werden Empfehlungen für weitere Maßnahmen, Therapien oder die
    Weiterleitung des Patienten an andere Behandler oder Einrichtungen
    festgehalten. Dieser Abschnitt ist entscheidend für die Koordination
    der Patientenversorgung nach dem Notfallbesuch und die
    Sicherstellung einer angemessenen Nachsorge.

#### Wie werden Codes und Terminologien im CDA verwendet (z.B., LOINC, SNOMED CT)?

Im CDA werden Codes und Terminologien verwendet, um medizinische
Konzepte und Informationen eindeutig zu identifizieren und zu codieren.
Weil sie eindeutig sind, erleichtert das den Austausch und die
Interpretation von klinischen Daten zwischen verschiedenen Systemen und
Organisationen. Typische Terminologiesysteme, die im CDA verwendet
werden, sind LOINC (Logical Observation Identifiers Names and Codes) und
SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms).

**LOINC (Logical Observation Identifiers Names and Codes)**: LOINC ist
ein standardisiertes Terminologiesystem, das zur Identifizierung von
Laborergebnissen und klinischen Beobachtungen verwendet wird. Es
verwendet Codes, um Tests, Messungen und Beobachtungen zu beschreiben.
Im CDA können LOINC-Codes verwendet werden, um Laborergebnisse und
klinische Beobachtungen zu kodieren, sodass sie einheitlich und
interoperabel sind.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;!-- *** SURGICAL DRAINS **************** --&gt;</p>
<p>&lt;<strong>component</strong>&gt;</p>
<p>&lt;<strong>section</strong>&gt;</p>
<p>&lt;<strong>templateId</strong>
root="2.16.840.1.113883.10.20.7.13"/&gt;</p>
<p>&lt;<strong>code</strong> code="11537-8"
codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"
displayName="SURGICAL DRAINS"/&gt;</p>
<p>&lt;<strong>title</strong>&gt;Surgical
Drains&lt;/<strong>title</strong>&gt;</p>
<p>&lt;<strong>text</strong>&gt;Penrose drain
placed&lt;/<strong>text</strong>&gt;</p>
<p>&lt;/<strong>section</strong>&gt;</p>
<p>&lt;/<strong>component</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 33 LOINC Beispiel

**SNOMED CT (Systematized Nomenclature of Medicine -- Clinical Terms)**:
SNOMED CT ist eine umfassende, hierarchisch strukturierte Terminologie,
die klinische Konzepte, Beschreibungen von Krankheiten, klinischen
Befunden, Prozeduren und anderen medizinischen Entitäten umfasst. SNOMED
CT-Codes werden verwendet, um klinische Begriffe und Konzepte im CDA zu
kodieren, was eine detaillierte und präzise Erfassung und Darstellung
von klinischen Informationen ermöglicht.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;<strong>entry</strong>&gt;</p>
<p>&lt;<strong>procedure</strong> moodCode="RQO"
classCode="PROC"&gt;</p>
<p>&lt;!-- *** Planned Procedure (V2) *** --&gt;</p>
<p>&lt;<strong>templateId</strong>
root="2.16.840.1.113883.10.20.22.4.41" extension="2014-06-09"/&gt;</p>
<p>&lt;<strong>id</strong>
root="9a6d1bac-17d3-4195-89c4-1121bc809b5a"/&gt;</p>
<p>&lt;<strong>code</strong> code="73761001"
codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"
displayName="Colonoscopy"/&gt;</p>
<p>&lt;<strong>statusCode</strong> code="new"/&gt;</p>
<p>&lt;<strong>effectiveTime</strong>&gt;</p>
<p>&lt;<strong>center</strong> value="20120512"/&gt;</p>
<p>&lt;/<strong>effectiveTime</strong>&gt;</p>
<p>&lt;<strong>author</strong>&gt;</p>
<p>&lt;<strong>templateId</strong>
root="2.16.840.1.113883.10.20.22.4.119"/&gt;</p>
<p>&lt;<strong>time</strong> value="20050329224411-0500"/&gt;</p>
<p>&lt;<strong>assignedAuthor</strong>&gt;</p>
<p>&lt;<strong>id</strong> extension="99999999"
root="2.16.840.1.113883.4.6"/&gt;</p>
<p>&lt;/<strong>assignedAuthor</strong>&gt;</p>
<p>&lt;/<strong>author</strong>&gt;</p>
<p>&lt;/<strong>procedure</strong>&gt;</p>
<p>&lt;/<strong>entry</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 34 SNOMED CT Beispiel

#### Warum sind sie wichtig für die Interoperabilität im Gesundheitswesen?

Die Verwendung von standardisierten Codes und Terminologien im
Gesundheitswesen ist entscheidend für die Interoperabilität aus mehreren
Gründen:

1.  **Einheitliche Datendarstellung**: Standardisierte Codes ermöglichen
    es, medizinische Konzepte und Informationen eindeutig zu
    identifizieren und zu beschreiben. Dadurch wird eine konsistente und
    einheitliche Datendarstellung erreicht, unabhängig von dem System
    oder der Organisation, die die Daten erfasst.

2.  **Interoperabilität zwischen Systemen**: Durch die Verwendung
    standardisierter Codes können Informationen zwischen verschiedenen
    Systemen und Organisationen ausgetauscht und interpretiert werden.
    Dies erleichtert die nahtlose Integration und den Austausch von
    klinischen Daten zwischen verschiedenen medizinischen Einrichtungen,
    Behandlern und IT-Systemen.

3.  **Klinische Entscheidungsunterstützung**: Standardisierte
    Terminologien ermöglichen es klinischen
    Entscheidungsunterstützungssystemen, ein breites Spektrum von
    klinischen Informationen zu verarbeiten und zu analysieren. Dies
    kann dazu beitragen, die Genauigkeit von Diagnosen und
    Behandlungsentscheidungen zu verbessern und die Qualität der
    Patientenversorgung zu erhöhen.

4.  **Qualitätsverbesserung und Forschung**: Standardisierte Codes
    erleichtern die Aggregation und Analyse von klinischen Daten für
    Qualitätsverbesserungsinitiativen und medizinische Forschung. Sie
    ermöglichen es, Daten aus verschiedenen Quellen zu kombinieren und
    zu analysieren, um Trends zu identifizieren, Behandlungsergebnisse
    zu bewerten und evidenzbasierte Praktiken zu entwickeln.

5.  **Compliance und Regulierung**: Die Verwendung standardisierter
    Codes und Terminologien ist oft eine Anforderung von
    Regulierungsbehörden und Gesundheitsorganisationen. Durch die
    Einhaltung dieser Standards können Organisationen sicherstellen,
    dass ihre Systeme und Prozesse den geltenden Vorschriften
    entsprechen.

Insgesamt tragen standardisierte Codes und Terminologien wesentlich zur
Verbesserung der Interoperabilität im Gesundheitswesen bei, indem sie
eine gemeinsame Sprache für die Erfassung, Darstellung und Austausch von
klinischen Daten bereitstellen. Dies fördert eine effizientere und
effektivere Nutzung von Gesundheitsinformationen zur Verbesserung der
Patientenversorgung, Forschung und Qualitätssicherung.

### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File                                                                                                                                | Modified                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| PDF File [HL7_Präsentation.pdf](https://confluence-imi.ukaachen.de/download/attachments/265184042/HL7_Pr%C3%A4sentation.pdf?api=v2) | Feb 01, 2024 by [Alexander Ivanets](https://confluence-imi.ukaachen.de/display/~aivanets) |

## Einführung in XML und JSON

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>Auf dieser Seite finden Sie ...</strong></p>
<p>Grundlagen von XML und JSON</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

### Inhalt

- [Inhalt](#inhalt-3)

- [XML](#xml)

  - [JSON](#json)

- [Dateien (Versionierung)](#dateien-versionierung-3)

### XML

#### Grundlagen

##### Was ist XML und wofür wird es verwendet?

XML (eXtensible Markup Language) ist eine Auszeichnungssprache, die dazu
geeignet ist, strukturierte Daten zu definieren und zu speichern. XML
ist ähnlich zu HTML, jedoch ohne vordefinierte Tags. Stattdessen gibt es
die Möglichkeit, eigene Tags zu erstellen, die speziell auf Bedürfnisse
zugeschnitten sind. 

##### Wie sieht die grundlegende Struktur eines XML-Dokuments aus?

Ein XML-Dokument besteht aus folgenden Elementen:

**Deklaration**. Die Deklaration gibt an, dass das Dokument ein
XML-Dokument ist und enthält die
Attribute <span class="mark">version</span> ,
<span class="mark">encoding</span>  und
<span class="mark">standalone</span>.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 35 Deklaration

Die <span class="mark">version</span> gibt die Version der
XML-Spezifikation an, die für das Dokument verwendet wird. Es ist
obligatorisch und sollte normaleweise den Wert "1.0" oder "1.1" haben.

Die <span class="mark">encoding</span> gibt die Zeichenkodierung an, die
für das XML-Dokument verwendet wird. Dieser Attribut ist optional, aber
empfohlen. Häufig verwendete Werte sind "UTF-8", "ISO-8859-1" usw.

Die <span class="mark">standalone</span> gibt an, ob das XML-Dokument
eigenständig ist oder nicht. Es kann entweder den Wert "yes"
(eigenständig) oder "no" (nicht eigenständig) haben. Dieser Attribut ist
optional und falls es fehlt, wird davon ausgegangen, dass das Dokument
nicht eigenständig ist.

**Wurzelelement. **Das Wurzelelement ist das oberste Element in der
Hierarchie des XML-Dokuments und umschließt alle anderen Elemente. Es
kann beliebig benannt werden.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
<p>&lt;<strong>wurzelelement</strong>&gt;</p>
<p>&lt;/<strong>wurzelelement</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 36 Wurzelelement

Elemente und Attribute

##### Was sind XML-Elemente, und wie werden sie definiert?

**Elemente. **Elemente sind die Bausteine eines XML-Dokuments und können
Text oder andere Elemente enthalten. Sie werden durch Tags dargestellt,
die von spitzen Klammern umschlossen sind.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
<p>&lt;<strong>wurzelelement</strong>&gt;</p>
<p>&lt;<strong>element</strong>&gt;Element&lt;/<strong>Element</strong>&gt;</p>
<p>&lt;/<strong>wurzelelement</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 37 Element

Element, das kein Kontext hat, kann leer sein. Man kann es auch analog
zu HTML ein "s*elbstschließenden*" sein.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;<strong>element</strong>&gt;&lt;/<strong>element</strong>&gt;</p>
<p> </p>
<p>&lt;<strong>element</strong> /&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 38 Leer Element

##### Wie können Attribute in einem XML-Element verwendet werden?

**Attribute.** Attribute sind Teil der XML-Elemente. Ein Element kann
mehrere eindeutige Attribute. Attribut gibt weitere Informationen über
XML-Elementen. Um genauer zu sein, sie definieren Eigenschaften der
Elemente. Eine XML-Attribut ist immer ein *Name-Wert* Paar.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>&lt;?<strong>xml</strong> version=“1.0“ encoding=“UTF-8
standalone=“yes“ ?&gt;</p>
<p>&lt;<strong>wurzelelement</strong>&gt;</p>
<p>&lt;<strong>element</strong> attribut1="wert1"
attribut2="wert2"&gt;Element&lt;/<strong>Element</strong>&gt;</p>
<p>&lt;/<strong>wurzelelement</strong>&gt;</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 39 Attribute

Attribute werden verwendet, um zwischen den Elementen mit dem gleichen
Namen zu unterscheiden. Daher kann die Verwendung des Attributs ein
wenig näher zur Unterscheidung von zwei oder mehr ähnliche Elemente
hinzuzufügen.

Validierung

##### Warum ist es wichtig, XML-Dokumente zu validieren?

Validierung von XML-Dokumenten dient zu überprüfen, ob ein Dokument
“wohlgeformt” und “gültig” ist. “Wohlgeformt” meint, dass es den
Strukturvorgaben des XML-Datenformates entspricht. “Gültig” meint, dass
auch die selber definierten Regeln eingehalten werden.

Syntaxregeln eines XML-Dokument

- XML-Dokumente müssen ein Wurzelelement haben

- XML-Elemente müssen ein schließendes Tag haben

- Bei XML-Tags wird die Groß-/Kleinschreibung beachtet

- XML-Elemente müssen ordnungsgemäß verschachtelt sein

- XML-Attributwerte müssen in Anführungszeichen gesetzt werden

Ein „gültiges“ XML-Dokument muss wohlgeformt sein. Darüber hinaus muss
es einer Dokumenttypdefinition entsprechen.

Es gibt zwei verschiedene Dokumenttypdefinitionen, die mit XML verwendet
werden können:

- DTD – Die ursprüngliche Dokumenttypdefinition

- XML-Schema – Eine XML-basierte Alternative zu DTD

Welche Rolle spielt eine XML-Schema-Definition (XSD)?

XML-Schema-Definition ist dazu geeignet, die XML-Dokumenten zu
validieren. XSD beschreibt die Struktur eines XML-Dokument. Der Zweck
eines XML-Schemas besteht darin, die rechtlichen Bausteine eines
XML-Dokuments zu definieren:

- die Elemente und Attribute, die in einem Dokument erscheinen können

- die Anzahl (und Reihenfolge) der untergeordneten Elemente

- Datentypen für Elemente und Attribute

- Standard- und Festwerte für Elemente und Attribute

Was ist XSLT und welche Rolle spielt es bei der Erstellung und
Validierung?

XSLT steht für Extensible Stylesheet Language Transformations. XSLT ist
eine XML-basierte Sprache, die in Verbindung mit spezieller
Verarbeitungssoftware für die Transformation von XML-Dokumenten
verwendet wird. XSLT wandelt ein XML-Dokument in ein anderes
XML-Dokument um. Während XSLT primär für Transformationen gedacht ist,
kann es auch dazu verwendet werden, die Struktur und Validität von
XML-Dokumenten zu überprüfen. Durch die Verwendung von XSLT können
Entwickler Regeln definieren. die sicherstellen, dass ein XML-Dokument
bestimmten Validierungsanforderungen entspricht.

Beispielanwendung

Erstellen ein einfaches XML-Dokument, das Informationen zu einer Person
enthält

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>import</strong> xml.etree.ElementTree as ET</p>
<p> </p>
<p><strong>def</strong> create_person(name, age, gender):</p>
<p>person <strong>=</strong> ET.Element("Person")</p>
<p> </p>
<p>name_element <strong>=</strong> ET.SubElement(person, "Name")</p>
<p>name_element.text <strong>=</strong> name</p>
<p> </p>
<p>age_element <strong>=</strong> ET.SubElement(person, "Age")</p>
<p>age_element.text <strong>=</strong> age</p>
<p> </p>
<p>gender_element <strong>=</strong> ET.SubElement(person, "Gender")</p>
<p>gender_element.text <strong>=</strong> gender</p>
<p> </p>
<p>xml_tree <strong>=</strong> ET.ElementTree(person)</p>
<p><strong>return</strong> xml_tree</p>
<p> </p>
<p><strong>def</strong> save_xml(xml_tree, filename):</p>
<p>with open(filename, "wb") as f:</p>
<p>xml_tree.write(f, encoding<strong>=</strong>"utf-8",
xml_declaration<strong>=</strong>True)</p>
<p> </p>
<p><strong>if</strong> __name__ <strong>==</strong> "__main__":</p>
<p>name <strong>=</strong> input("Name: ")</p>
<p>age <strong>=</strong> input("Age: ")</p>
<p>gender <strong>=</strong> input("Gender: ")</p>
<p>xml <strong>=</strong> create_person(name, age, gender)</p>
<p>save_xml(xml, "output.xml")</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 40 xml-erstellen.py

#### JSON

##### Was ist JSON?

###### JavaScript, kurz für "JavaScript Object Notation", ist wie XML ebenfalls eine Sprache um Daten zu strukturieren und auszutauschen. Wobei es seine wichtigste Rolle in der Datenübertragung bei Webanfragen und APIs hat.

###### Unterschiede zwischen JSON und XML:

1.  **Syntax: JSON verwendet eine einfachere Syntax im Vergleich zu XML.
    Es verwendet Schlüssel-Wert-Paare und Arrays, während XML Tags und
    Attribute verwendet.**

2.  

3.  **Lesbarkeit: JSON ist oft leichter lesbar für Menschen aufgrund
    seiner kompakteren Struktur.**

4.  

5.  **Verwendung: Während XML in erster Linie für den Datenaustausch und
    die Dokumentstruktur verwendet wird, wird JSON häufig in
    Webanwendungen und APIs für die Übertragung von Daten zwischen
    Server und Client verwendet. Somit wird JSON bei komplexer Logik und
    dem behandeln von Ereignissen verwendet.**

6.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>{</p>
<p>"Herausgeber": "Xema",</p>
<p>"Nummer": "1234-5678-9012-3456",</p>
<p>"Deckung": 2e+6,</p>
<p>"Waehrung": "EURO",</p>
<p>"Inhaber":</p>
<p>{</p>
<p>"Name": "Mustermann",</p>
<p>"Vorname": "Max",</p>
<p>"Teilnahme am Bonusprogramm": <strong>true</strong>,</p>
<p>"Hobbys": ["Reiten", "Golfen", "Lesen"],</p>
<p>"Alter": 42,</p>
<p>"Kinder": [],</p>
<p>"Partner": <strong>null</strong></p>
<p>}</p>
<p>} </p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 41 JSON-Object: Unternehmen mit Inhaber

##### Welche Datenstrukturen werden in JSON verwendet?

###### JSON kennt folgende Typen von Elemente: 

- **null: (null)**

- 

- **boolean: (true, false)**

- 

- **Zahl: (0-9, x, -, .) ganzahlig negativ und Kommazahl möglich**

- 

- **Zeichenkette: beginnt und endet mit ""  kann escapesequenzen mit \\
  benutzen**

- 

- **Objekt: besteht aus durch Komma getrennte "Eigenschaften". Erzeugt
  Hirachien zwischen den Elementen**

- - **Eigenschaften: besteht aus Schlüssel und Wert getrennt durch :**

  - - **Schlüssel = Zeichenkette**

    - 

    - **Wert = Elemente**

    - 

    - **Bsp. "schlüssel" : "wert"**

    - 

- **Array: Liste von Elementen/ leer**

- 

##### Wie werden Objekte und Arrays in JSON dargestellt?

1.  **Objekte: Ein JSON-Objekt beginnt und endet mit {} und ist eine
    ungeordnete Sammlung von Schlüssel-Wert-Paaren. Die Schlüssel sind
    Strings, und die Werte können Zeichenketten, Zahlen, boolesche
    Werte, Objekte, Arrays, null oder andere unterstützte Datentypen
    sein. (Wichtig: eindeutige Schlüssel!)**

2.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>{</p>
<p>"name": "John Doe",</p>
<p>"age": 30,</p>
<p>"isStudent": <strong>false</strong></p>
<p>}</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 42 Beispiel eines JSON-Objekts:

1.  **Arrays: Ein JSON-Array beginnt und endet mit \[\] und ist eine
    geordnete Liste von Werten. Die Werte können wiederum Zeichenketten,
    Zahlen, boolesche Werte, Objekte, Arrays oder null sein.**

2.  

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>["apple", "banana", "orange"]</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 43 Beispiel eines JSON-Arrays:

##### Was bedeutet Parsing in Bezug auf JSON?

"Parsing" im Allgemeinen bezieht sich auf die Analyse von strukturierten
Daten, um sie für die Verarbeitung (in einer anderen Sprache) zugänglich
zu machen. 

Im Kontext von JSON bedeutet das, dass der JSON-String in eine
Datenstruktur umgewandelt wird, die von der Programmiersprache
verstanden werden kann.

##### Wie kann ein JSON-Objekt in eine Datenstruktur Ihrer Programmiersprache umgewandelt werden, und umgekehrt? 

In den meisten Programmiersprachen gibt es eingebaute Funktionen oder
Bibliotheken zum Parsen von JSON. Zum Beispiel:

**JavaScript:** In JavaScript kann die
<span class="mark">JSON.parse()</span>-Funktion einen JSON-String in ein
JavaScript-Objekt umwandeln.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>var</strong> jsonString = '{"name": "John Doe", "age": 30,
"isStudent": false}'; <strong>var</strong> jsonObject =
JSON.parse(jsonString);</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 44 javascript

**Python:** In Python kann das Modul <span class="mark">json</span>
verwendet werden.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p><strong>import</strong> json</p>
<p> </p>
<p>jsonString <strong>=</strong> '{"name": "John Doe", "age": 30,
"isStudent": false}'</p>
<p>jsonObject <strong>=</strong> json.loads(jsonString)</p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Code block 45 python

### Dateien (Versionierung)

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Eine Anleitung und Hinweise zum Upload, sowie der Bennennung und
Versionierung von Dateien finden Sie → <a
href="https://confluence-imi.ukaachen.de/spaces/IMISOP/pages/90628435/Anleitung+Hochladen+von+Dateien+in+Confluence+Draft">hier</a></p>
</blockquote></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| File                                                                                                                       | Modified                                                                                  |
|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| PDF File [XML-Grundlagen.pdf](https://confluence-imi.ukaachen.de/download/attachments/265177596/XML-Grundlagen.pdf?api=v2) | Jan 30, 2024 by [Alexander Ivanets](https://confluence-imi.ukaachen.de/display/~aivanets) |

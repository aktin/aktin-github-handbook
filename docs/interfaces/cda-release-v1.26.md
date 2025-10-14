## AKTIN : DWH Import

* * *


# Zusammenfassung der Änderungen im CDA Release v1.26

Diese Informationen richten sich an die Entwickler der CDA-Dokumente, die das Mapping zwischen dem Notaufnahme-System und dem Basismodul-CDA herstellen bzw. das CDA generieren.

Die hier genannten (projektrelevanten) Änderungen beziehen sich auf die Umstellung von CDA Release v1.21 (also das im zuvor gültige AKTIN Release 0.6.x verwendete) auf CDA Release v1.26 (das im aktuell gültigen AKTIN Release 0.7 verwendet wird).

Wenn Sie noch nicht auf v1.21 umgestellt haben, beachten Sie bitte auch die [Anleitung dazu](cda-release-v1.21.html)

Weitere allgemeine Informationen zur CDA-Implementierung finden Sie auch unter dem Menüpunkt [Kurzanleitung CDA](cda-quickstart.html)

Der aktuelle [Demo-Server](demo-server.html) validiert nach dem aktuellen Release und kann für die Entwicklung als Test-Tool genutzt werden.

## Aufnahme-Zeitpunkt

Im Template 1.2.276.0.76.10.2036 CDA encompassingEncounter/Patientenkontakt wurde das Element hl7:effectiveTime/hl7:low als 1..1 M definiert. Notaufnahmeprotokolle ohne Aufnahme-Zeitpunkt werden als ungültig abgelehnt. Da dieser Zeitpunkt in vielen Notaufnahmesystemen ohnehin ein Pflichtfeld ist bzw. automatisch vorliegt und der Import in das AKTIN-DWH auch vorher nicht funktioniert hat (mit einer anderen Fehlermeldung), ist dies eigentlich keine Änderung. Sie sollten trotzdem bei der CDA-Erzeugung sicherstellen, dass dieses Feld immer mit einem sinnvollen Wert gefüllt wird.

## CEDIS-Code 999 / UNK

Es gab in v1.21 einen Fehler, der die Angabe des `CEDIS Code 999` (umgesetzt als `nullFlavor UNK`) verhindert hat. Mit der Version v1.26 ist es jetzt wieder möglich diesen Wert richtig zu codieren. Sollten Sie aufgrund von Schematron-Fehlern hier einen Workaround eingebaut haben, können Sie das jetzt rückgängig machen. Falls Sie CEDIS-Codes nutzen und der Wert “999” bei Ihnen vorkommt, sollten sie kurz prüfen, ob Sie das wie beschrieben als `nullFlavor UNK` umgesetzt haben.

Im Template 1.2.276.0.76.10.2036 CDA encompassingEncounter/Patientenkontakt war es auch vorher schon möglich mehrere IDs anzugeben. In der aktuellen CDA-Version ist jetzt definiert, dass die erste ID (verpflichtend) die Episodennummer darstellt und die zweite ID (optional) die Fallnummer. Bitte ergänzen Sie diese Fallnummer in Ihrem CDA.

## Fallnummer

Zukünftig ist geplant eine Upload-Funktion für Entlass-Daten (angelehnt an §21-Datensatz) anzubieten. Um diese Daten zuordnen zu können, wird zusätzlich zu der Episoden-ID (Identifier eines Notaufnahme-Patientenkontakts) die interne Fallnummer des KIS-Systems benötigt (in §21-Terminologie “internes Fallkennzeichen”). Diese optionale ID wird ebenso wie die anderen IDs gehasht abgelegt und nur für das Mapping verwendet. Die IDs werden niemals im Klartext gespeichert und auch die gehashten IDs werden nicht im Rahmen von Datenabfragen übermittelt.

```
<componentOf>
    <encompassingEncounter classCode="ENC" moodCode="EVN">
        <!-- Aufnahme-Identifikator id[1]-->
        <id root="1.2.276.0.76.3.87686.1.45" extension="657827456837"/>
        <!-- Abrechnung-Fallnummer id[2]-->
        <id root="1.2.276.0.76.3.87686.1.45" extension="21197154"/>
        [...]
    </encompassingEncounter>
</componentOf>

```

## Multiresistente Keime

Hier gibt es keine strukturelle Änderung. Beim letzten Release bestand das Problem, dass der `nullFlavor OTH` (Code für “Andere multiresistente Keime”) nicht verwendet werden konnte aufgrund einer fehlerhaften Schematron-Regel. Das Problem konnte bisher leider nur teilweise behoben werden.

Die folgende Angabe für “Verdacht auf andere multiresistente Keime” funktoniert leider nicht.

```
<value xsi:type="CD" nullFlavor="OTH">
    <qualifier>
        <name code="FSTAT" codeSystem="1.2.276.0.76.3.1.195.5.72" displayName="Befundstatus"/>
        <value code="SUSP" codeSystem="1.2.276.0.76.3.1.195.5.73" displayName="Verdacht"/>
    </qualifier>
</value>

```

Es gibt keine Möglichkeit diesen Wert korrekt zu codieren. Als Alternative empfehlen wir diesen Wert ohne Qualifier (als “einfaches Ja”) zu codieren:

```
<value xsi:type="CD" nullFlavor="OTH"/>

```

Bei Fragen zur Umsetzung der CDA-Änderungen wenden Sie sich gerne an [it-support@aktin.org](mailto:it-support@aktin.org)

* * *

Copyright © 2013–2025.
All rights reserved.


# Consent-Manager (TODO)

Der Consent Manager ermöglicht es, Patienten gezielt in Studien einzuschließen oder vom Datenversand auszuschließen (opt-in / opt-out). Diese Funktion ist besonders wichtig für Studien, die eine explizite Einwilligung erfordern oder bei denen bestimmte Patienten widersprochen haben.

## Funktionsweise

Der Consent Manager prüft bei jedem Datenexport, ob für einen Patienten ein Eintrag vorliegt.
* **Ausschluss (Opt-out):** Daten des Patienten werden für die gewählte Studie nicht exportiert.
* **Einschluss (Opt-in):** Nur Patienten mit einem expliziten Einschluss werden exportiert (abhängig von der Studienkonfiguration).

## Verwendung

### 1. Studie auswählen

Nach der Anmeldung im AKTIN Data Warehouse finden Sie den Menüpunkt **Consent Manager**.

1. Wählen Sie im Dropdown-Menü die gewünschte **Studie** aus.
2. Es erscheint eine Liste aller bereits erfassten Einträge für diese Studie.
3. Über das Suchfeld können Sie nach bestehenden Einträgen filtern.

### 2. Teilnehmer verwalten

Klicken Sie auf **Eintrag hinzufügen**, um einen neuen Status für einen Patienten zu setzen. Das Formular fragt je nach Studienkonfiguration unterschiedliche Felder ab:

* **SIC (Study Identification Code):** Die Studiennummer des Patienten. Wird je nach Konfiguration automatisch vergeben (laufende Nummer) oder muss manuell eingetragen werden.
* **Identifikator:** Hier müssen Sie den Patienten eindeutig identifizieren. Das System fragt – passend zu Ihrer `aktin.properties`-Konfiguration – nach einem der folgenden Werte:
    * **Patientennummer:** Die ID des Patienten im KIS.
    * **Fallnummer:** Die Abrechnungsnummer des Aufenthalts.
    * **Episodennummer:** Die Nummer des spezifischen Notaufnahme-Kontakts.
* **Teilnahme:** Wählen Sie hier den Status:
    * `Einschluss` (Patient nimmt teil)
    * `Ausschluss` (Patient widerspricht)
    * *Hinweis: Manche Studien erlauben technisch nur eine der beiden Optionen.*
* **Kommentar:** Optionales Feld für Notizen (z. B. "Widerspruch durch Angehörige am TT.MM.JJJJ").

Klicken Sie abschließend auf **Speichern**.

### 3. Eintrag löschen

Um einen Eintrag zu entfernen (z. B. bei Fehleingabe):
1. Suchen Sie den Eintrag in der Liste.
2. Klicken Sie auf das **Löschen-Icon** (Mülleimer) in der entsprechenden Zeile.
3. Bestätigen Sie den Vorgang. 

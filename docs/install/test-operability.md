# Test der Betriebsfähigkeit

Unter der URL `http://<IHR-SERVER>/aktin/admin/plain/test.html` können Sie die Konfiguration testen.

* **Broker-Verbindung testen**: Prüft die Verbindung zum zentralen AKTIN-Broker.
* **Email-Konfiguration testen**: Sendet eine Test-E-Mail an die in der Konfiguration hinterlegte Adresse.
* **R-Scripte/Berichte testen**: Überprüft die Funktionalität der R-Bibliotheken, die zur Erstellung von Berichten benötigt werden.

Wenn ein Test fehlschlägt, überprüfen Sie die entsprechenden Einstellungen in der `aktin.properties`-Datei.

Nach der Installation der AKTIN-DWH-Software ist es anzuraten, dessen Betriebsfähigkeit zu testen. Im folgenden Bereich können Sie Methoden und Funktionalitäten für die Verifikation der
Betriebsfähigkeit entnehmen.
Data Warehouse

Wenn die Installation erfolgreich durchgeführt wurde, kann anschließend per Webbrowser auf das integrierte Data Warehouse zugegriffen werden. In der Adresszeile muss die entsprechende
IP-Adresse/Servername angepasst werden: `http://<IHR SERVER>/webclient/`
CDA Importschnittstelle

Die Importschnittstelle des Servers kann mit den Client-Programmen aus dem Software-Paket (ZIP) des Demo-Server getestet werden:

java-client-fhir.bat `http://<IHR SERVER>/aktin/cda/fhir/Binary` examples\basismodul-beispiel-storyboard01.xml

Verbindung und E-Mail-Konfiguration

Unter dem Link `http://<IHR SERVER>/aktin/admin/plain/test.html` lassen sich die durchgeführten Anpassungen bezüglich Broker und E-Mail sowie Reporterstellung testen.

img2

Der erste Button testet die Erreichbarkeit des zentralen AKTIN-Broker. Der lokale Server übersendet dem zentralen Broker nur Statusinformationen, wie die Serverversion und Aktivität. Der zweite Button
testet die eingerichtete E-Mail-Adresse. Nach Bestätigung des Buttons wird eine E-Mail an die in aktin.properties angegebene Ziel-Adresse gesendet. Der dritte Button testet die R-Bibliotheken. Diese
werden zur Erzeugung der Berichte verwendet.

img3

Sollte der E-Mail-Test fehlschlagen und das Textfeld zeigt keine grüne Erfolgsmeldung anzeigen, könnte dies ein Hinweis auf eine fehlerhafte E-Mail-Einstellung sein. In diesem Fall muss die
E-Mail-Konfiguration geändert (Abschnitt Weitere Anmerkungen) oder die Softwarepakete erneut geladen werden.

img4


[support-email]: mailto:it-support@aktin.org

[i2b2-manual]: ../misc/i2b2-manual.md
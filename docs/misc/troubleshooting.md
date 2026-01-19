# Fehlerbehebung

## Admin-Konsole zeigt Fehler 404

**🔴 Fehlerbild**
Beim Aufruf der Admin-Oberfläche unter `http://<server>/aktin/admin` erscheint im Browser eine leere Seite oder eine Standard-Fehlermeldung des Servers: **404 - Not Found**

**❓ Ursache**
Der Wildfly-Applikationsserver läuft zwar, aber die AKTIN-Anwendung (dwh-j2ee-{{ $theme.versions.dwh }}.ear) wurde nicht erfolgreich gestartet (deployed). Dies liegt oft an fehlenden Datenbankverbindungen oder einer fehlerhaften Konfiguration beim Start.

**✅ Lösung**
1. Prüfen Sie, ob Wildfly läuft:
```bash
systemctl status wildfly
```

2. Prüfen Sie die Log-Datei auf Fehler beim Deployment:
```bash
grep "ERROR" /var/log/wildfly/server.log | tail -n 20
```

3. Falls die Datenbank nicht erreichbar war, starten Sie Wildfly neu:
```bash
systemctl restart wildfly
```

**🔎 Kontrolle**
Warten Sie ca. 60 Sekunden nach dem Neustart und laden Sie die Seite im Browser neu. Das Login-Fenster sollte nun erscheinen.

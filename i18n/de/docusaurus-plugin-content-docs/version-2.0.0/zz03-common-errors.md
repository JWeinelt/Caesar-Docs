# Häufige Fehler

Auf dieser Seite sind Fehlermeldungen aufgeführt, die häufig vorkommen können.

---

**Veni, vidi, crashed. (2729)**
Dieser Fehler wird angezeigt, wenn der CäsarWorker nicht antwortet.

*Möglichkeiten zur Behebung:*
- Stelle sicher, dass der Worker ausgeführt wird: überprüfe, ob das Cäsar-Logo in der Taskleiste angezeigt wird oder schaue in den Task manager.
- Drücke im Client `Alt+H`, um das Hilfemenü zu öffnen. Klicke dort `Neustart erzwingen`.
- Schließe alle Instanzen von Cäsar im Taskmanager und öffne es erneut.

---

**Alea iacta est. (9661)**
Dieser Fehler wird angezeigt, wenn das Cäsar-Backend mit einem internen Fehler (HTTP Code 5xx) antwortet.

*Möglichkeiten zur Behebung:*
- Überprüfe die Server-Log-Daten auf auffällige Fehler. 
- Starte das Backend neu.
- Erstelle eine Fehlermeldung darüber auf [GitHub](https://github.com/Jweinelt/Caesar/issues).
- Beschreibe deutlich, was du gemacht hast und wie der Fehler auftrat.

---

**Tempus fugit, error manet. (9684)**
Thrown when the backend is not responding to the client.

*Möglichkeiten zur Behebung:*
- Check if your backend is up and running.
- Check firewall settings
- Check your internet connection
- Restart routers and modems
- Restart the backend and/or your server

---

**Divide et impera – failed. (1584)**
Dieser Fehler bedeutet, dass der Client nicht ausreichend Arbeitsspeicher (1584) oder Festplattenspeicher (1585) hat.

*Möglichkeiten zur Behebung:*
- Versuche, den Client neu zu starten
- Schließe Programme, die viel Arbeitsspeicher benötigen
- Gebe Speicherplatz frei
- Starte deinen Computer neu
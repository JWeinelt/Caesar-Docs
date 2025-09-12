---
id: faq
---

# Häufig gestellte Fragen

Auf dieser Seite findest du häufig gestellte Fragen von Nutzer:innen, Administrator:innen und Entwickler:innen.


---

## Was ist Cäsar?

**Cäsar** ist ein auf Java basierendes Programm zur Verwaltung und Administrierung von Minecraft-Servern. Es enthält Funktionen
für Moderation, Support, Warnungen, Banns, Kicks, Stummschaltungen und vieles mehr. Dank der einfach gehaltenen API können
Entwickler:innen sehr leicht neue Funktionen in Cäsar hinzufügen.

---

## Wird *Cäsar* aktiv weiterentwickelt?

Ja! Während alte Prototypen wie das *CloudNETWebpanel* zwar eingestellt wurden, ist Cäsar die Weiterentwicklung mit allen
Funktionen. Es wird entwickelt von Julian Weinelt.

---

## Wieso gibt es Preispläne?

Cäsar ist freie und kostenlose Software. Die Preispläne auf der Website beziehen sich hierbei auf einen Service,
der vom Cäsar-Team angeboten wird, dies beinhaltet Hosting und schnellere Hilfestellung.
Cäsar enthält Funktionen, die nur durch den Betrieb eines zentralen Servers möglich sind, daher unterstützen zahlende Nutzer
das Projekt umso mehr, denn sie halten es finanziell am Leben. Die Software selbst ist kostenlos und wird es immer bleiben.

---

## Unterstützt Cäsar die Bedrock Edition?

Cäsar selbst ist nur ein Backend-Server, der in erster Linie vollkommen unabhängig von der Minecraft-Version und -Edition ist.
Cäsar erkennt Bedrock-Spieler, wenn Floodgate und Geyser genutzt werden, wenn das passende Plugin installiert ist, und
unterscheidet dieser besser. Letztendlich hängt das vom Setup ab.

---

## Gibt es einen Discord-Bot?

Ja! Cäsar enthält eine Discord-Integration mit einigen sehr praktischen Funktionen:
- Ansehen und bearbeiten von Tickets
- Verwaltung von Banns, Kicks, Warnungen und Stummschaltungen
- Benachrichtigungen zu In-Game-Aktionen
- Verbindung von Discord-Rollen zu Berechtigungen in Minecraft

Viele weitere Features sind für die Zukunft geplant.

:::note[Bitte beachten!]

Cäsar kommt zwar mit einer Discord-**Integration,** den Bot selbst muss aber der User bereitstellen (Token generieren, etc.)
Dies liegt daran, dass wir den Bot-Token nicht öffentlich machen können, Cäsar aber quelloffen ist.

:::

---

## Welche Datenbanken untersützt Cäsar?

Cäsar arbeitet auch bei Datenbanken mit einem modularen System. Von Haus aus werden MySQL/MariaDB und SQLite unterstützt.
Weitere Datenbanktypen können per Plugin installiert werden.

Bitte beachte, dass die Nutzung von lokalen dateibasierten Datenbanken (H2, SQLite) nicht empfohlen wird.

---

## Kann ich Cäsar in Docker nutzen?

Derzeit: nein. Docker-Unterstützung ist aktuell noch in Planung, wird aber kommen, sobald Cäsar stabil läuft.

---

## Benötigt Cäsar eine Authentifizierung?

Ja. Du kannst Benutzerkonten in Cäsar erstellen und dich mit diesen in die Schnittstelle einloggen.
OAuth2 / Single-Sign-On-Unterstützung sind noch in Planung.

Sicherheit ist die oberste Priorität. Stelle unbedingt sicher, dass du alle Berechtigungen gut einstellst.

---

## Worin unterscheidet sich Caesar von anderen Panels?

Im Gegensatz zu generischen Panels ist **Caesar**:

- maßgeschneidert für **CloudNet v4**
- tief in **Minecraft und Discord** integriert
- modular aufgebaut
- ausgestattet für Echtzeit-Servereinblicke und Strafenverwaltung
- mit Fokus auf Zukunftssicherheit und Automatisierung entwickelt

---

## Woher kommt der Name „Caesar“?

So wie Julius Caesar eine zersplitterte Republik geeint und reformiert hat, vereint **Caesar** die Server-Administration über verschiedene Systeme und Tools hinweg.  
Es bringt Klarheit, Ordnung und Stärke in ein konsistentes Backend.  
(Der Entwickler hatte Latein in der Schule und liebt lateinische Namen 😂)

---

## Welche Zukunftspläne gibt es?

Geplante Features sind u. a.:

- Vollständige Entwickler-Dokumentation
- Spielerverwaltung
- Live-Konsolen
- Integration von Servern außerhalb von CloudNet
- Ein Plugin-Marktplatz
- Unterstützung für andere Minecraft-Plugins über deren API
- Unterstützung für Fabric/Forge
- Unterstützung für Minecraft-Server unter Version 1.16

Begleite uns auf dieser Reise und hilf dabei, die Zukunft mitzugestalten!

---

## Ich habe einen Bug gefunden / einen Feature-Wunsch – wohin damit?

Bitte eröffne ein [Issue auf GitHub](https://github.com/JWeinelt/Caesar/issues) oder tritt unserem [Community-Discord](https://dc.caesarnet.cloud) bei.  
Wir freuen uns über jedes Feedback!

---

## Wird es Support für SimpleCloud oder andere Tools geben?

Aktuell bietet SimpleCloud keine REST-API an. Daher kann Caesar sich nicht damit verbinden.  
Sobald diese API existiert, wird die Unterstützung nachgereicht.

Wenn du andere Tools unterstützt haben möchtest, eröffne bitte ein Issue dazu.  
Bitte habe Verständnis, dass wir nicht für jedes Tool nativen Support bieten können – aber mit Plugins kannst du dir vielleicht selbst etwas Passendes bauen.

---

## Gibt es einen Changelog?

Ja. Den Versionsverlauf und wichtige Änderungen findest du in den [Discussions](https://github.com/JWeinelt/Caesar/discussions).

---

_Caesar wird mit Leidenschaft von Julian Weinelt entwickelt – für eine stärkere, elegantere und menschlichere Minecraft-Administration._

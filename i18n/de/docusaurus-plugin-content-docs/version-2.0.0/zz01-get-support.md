---
id: get-support
---

# Support erhalten
Es gibt mehrere Wege, um mit dem Caesar-Support in Kontakt zu treten:

* Das **[offizielle Forum](https://forum.caesarnet.cloud/)** bietet dir Hilfe durch die Community. Bitte lies dir vorher die Guidelines durch.
* Tritt dem **[Discord-Server](https://dc.caesarnet.cloud/)** bei, um direkt Unterstützung von anderen Nutzern und dem Caesar-Team zu erhalten. Du kannst in Community-Channels posten oder ein privates Support-Ticket eröffnen.

> Nutzer mit 🥈 Silber- oder 🥇 Gold-Support-Level erhalten **direkten Support vom Caesar-Team kostenlos**.

## Wie der Support-Modus funktioniert

In manchen Fällen muss sich ein Mitglied des Caesar-Teams in deine Instanz einloggen, um dir zu helfen. Dafür stellt Caesar den sicheren, integrierten **Support-Modus** bereit.

Du kannst ihn entweder über dein Caesar-Panel oder über die Kommandozeile aktivieren:

```bash
security mode support activate
```

Dadurch wird ein temporärer Zugangscode erzeugt, der verschlüsselte Login-Daten enthält. Diesen Code musst du anschließend **an das Support-Team weitergeben**.

## Beispielausgabe

```base64
Q0FFU0FSJTEyMy40NTYuNzguOSV0ZW1wLTU4OTk6TmpMNHk2SVpUSTY5ZjZnJiZDQVMtRU5DUiMyU1JUODlMU0YyMDM2M3F3THo1ZTk4NVhCR1RyS1NXczlNcVQ1Y2VhTG83RlNWMzBjVg==
```

Nach dem Entschlüsseln sieht die Zeichenkette so aus:

```bash
CAESAR%123.456.78.9%temp-5899:NjL4y6IZTI69f6g&&CAS-ENCR#2SRT89LSF20363qwLz5e985XBGTrKSWs9MqT5ceaLo7FSV30cV
```

### Erklärung

* `CAESAR%` kennzeichnet die Zeichenkette als Caesar-Support-Token.
* `123.456.78.9` ist die IP-Adresse deiner Caesar-Instanz.
* `temp-5899:NjL4y6IZTI69f6g` ist ein temporärer Benutzername mit Passwort (im Format `username:password`).
* `&&CAS-ENCR#...` ist ein verschlüsselter Identifikator, der aus der MAC-Adresse deines Servers sowie zwei einzigartigen internen Werten generiert wird. Dadurch ist jedes Support-Token einzigartig und sicher.

## Sicherheitsdetails

* Der **temporäre Account ist nur 10 Minuten gültig**.
* Du kannst die Sitzung **jederzeit beenden**.
* Wenn sich ein Supporter einloggen möchte, **musst du den Login manuell freigeben**.
* Alle Support-Clients des Caesar-Teams sind mit einem **digitalen Zertifikat** ausgestattet, das ihre Identität bestätigt.

## Warum es sicher ist

Der Support-Modus wurde mit **Datenschutz und Kontrolle** im Fokus entwickelt. Du behältst jederzeit die Kontrolle – es gibt keinen versteckten Hintergrundzugang. Das Token ist verschlüsselt, zeitlich begrenzt und erfordert deine Bestätigung, bevor jemand auf deine Instanz zugreifen kann.

```

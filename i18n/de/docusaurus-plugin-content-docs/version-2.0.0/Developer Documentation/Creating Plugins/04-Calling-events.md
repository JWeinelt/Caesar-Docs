# Ausführen von Events

Nachdem du dein eigenes Event definiert hast, willst du natürlich auch, dass es ausgeführt wird.
Das wird auch über die `Registry` gesteuert:

```Java
getRegistry().callEvent(new Event("ExampleEvent"));
```

In diesem Beispiel führen wir das Event `ExampleEvent` aus.
Events können jedoch auch Werte enthalten. Dieser sind mit `Properties` im Event-Objekt hinterlegt.
Beispielsweise möchten wir ein Event `UserLoginEvent` ausführen, wenn ein Benutzer sich anmeldet. Dort wollen wir auch weitergeben,
welcher Nutzer sich anmeldet und ob er 2FA nutzt.

Dazu definieren wir ``EventProperty``s:
```Java
Event exampleEvent = new Event("ExampleEvent")
	.property("example", "text") // Enthält einen Text als Wert
	.property("number", 1234) // Enthält eine Zahl als Wert
	.propery("komma", 1.23) // Enthält eine Gleitkommazahl als Wert
	.property("isValid", true) // Enthält einen Wahrheitswert als Wert
	.propery("someClass", player); // Enthält eine beliebige Klasse als Wert
```

:::important

Wenn Werte mit Klassen genutzt werden, muss sichergestellt sein, dass das Plugin mit dem Listener diese Klasse auch kennt!

:::

:::caution[Wichtig!]

**Hinterlege niemals Passwörter, Tokens o.ä. in Events.** __Jeder__ kann Events abhören und könnte so mit einem kompromittierten Plugin Passwörter abgreifen.

:::


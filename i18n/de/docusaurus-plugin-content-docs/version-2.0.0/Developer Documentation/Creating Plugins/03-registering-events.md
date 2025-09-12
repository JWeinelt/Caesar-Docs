# Registrieren von Events
Cäsar bietet eine leichtgewichtige und leistungsstarke Event-API.
Durch diese können Module miteinander kommunizieren, sogar ohne das andere entsprechende Modul als Abhängigkeit definieren zu müssen. 


Events werden mit dem globalen `Registry`-Objekt verarbeitet. Du erhältst eine Instanz mit `Caesar.getRegistry();` oder `Registry.getInstance();`.

Du kannst neue Events mit dem folgenden Code definieren:
```java
Registry.getInstance().registerEvents(yourModuleInstance, "YourExampleEvent");
```
Wichtig dabei ist, dass eine Instanz des registrierenden Plugins mit übergeben wird.

:::caution[Sorge für Klarheit!]

Verwende immer **beschreibende** Namen für Events und schreibe sie in **PascalCase**!

:::

:::tip[Mach es dir einfach]

Du kannst auch mehrere Events gleichzeitig definieren:
```java
Registry.getInstance().registerEvents(yourModuleInstance, "YourExampleEvent", "OtherEvent");
```

:::
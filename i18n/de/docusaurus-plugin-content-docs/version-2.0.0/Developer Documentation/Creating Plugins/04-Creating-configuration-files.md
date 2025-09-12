# Arbeiten mit Konfigurationen

:::warning

Diese Funktion ist in der neuesten Version von Cäsar noch nicht implementiert oder unvollständig. Bugs und Fehler sind daher möglich.

:::

Cäsar serialisiert alle Konfigurationsdateien mit GSON und speichert diese im JSON-Format.
Verwaltet wird dies von der Klasse `LocalStorage`.
Auf dieser Seite erfährst du, wie du Konfigurationsdateien erstellst und lädst.

## Loslegen: Die Konfigurationsklasse
Für die Serialisierung ist es notwendig eine Klasse zu erstellen, die von ``ConfigurationHolder`` erbt.
Dort können neue Werte für die Speicherung mithilfe von Variablen hinzugefügt werden.
Als Variablentypen können alle **primitiven Datentypen** und serialisierbare Klassen genutzt werden.

:::warning

Diese Klassen und einige andere solltest du nicht in Konfigurationsdateien nutzen:

* `java.awt.Color`
* `org.bukkit.World`
* `java.io.File`
* `java.net.Socket`
* `java.nio.file.Path`
* `org.w3c.dom.Document`
* `javax.imageio.ImageIO`
* `Thread`, `Process`, oder `InputStream`/`OutputStream`

Diese Klassen enthalten native Ressourcen, Live-Referenzen oder sind nicht kompatibel mit der standardmäßigen Serialisierung von GSON.

:::

---

### Good practice

Anstatt nicht-serialisierbare Klassen zu nutzen, sollten **Daten-Wrapper** genutzt werden.
Die Werte, die im nicht-serialisierbaren Objekt wichtig sind, um es zu rekreieren, werden mit serialisierbaren Klassen
oder primitiven Datentypen abgebildet:

```java
public class SerializableWorld {
    public String worldName;
    public UUID worldID;

    public SerializableWorld() {}

    public SerializableWorld(World world) {
        this.worldName = world.getName();
        this.worldID = world.getUniqueId();
    }

    public World toWorld(UUID uniqueID) {
        World w = Bukkit.getWorld(uniqueID);
        if (w == null) return null;
        return w;
    }
}
```

:::tip

Wenn du einzelne Variablen von der Speicherung ausschließen willst, nutze das Schlüsselwort `transient`:

```java
public transient BufferedImage backgroundImage;
```

Solche Felder werden bei der Serialisierung durch GSON nicht berücksichtigt.

:::

## Erstellen der Konfiguration
```java
// Es ist empfehlenswert, @Getter und @Setter aus Lombok zu nutzen, um die Lesbarkeit zu verbessern.
@Getter
@Setter
public class YourConfiguration extends ConfigurationHolder {
  private String someString = "default"; // enthält als Standardwert "default"
  private int someNumber = 0;
  private boolean enableSomething = true;
  private YourConfigSubClass someOtherConfig; // Wenn diese Variable nicht initialisiert wird, wird sie nicht gespeichert.

  // Listen und HashMaps werden ebenfalls unterstützt.
  private final List<String> someStringList = new ArrayList<>(); // Empfehlung: Direkt initialisieren und add...() und remove...() Methoden nutzen.

  public void addSomeValue(String value) {
    someStringList.add(value);
  }

  public void removeSomeValue(String value) {
    someStringList.remove(value);
  }
}
```

:::tip

Anstatt ``java.awt.Color`` zu nutzen, speichere Werte als `String` und wandle die Daten mit der Hilfsklasse
[``DatabaseColorParser``](https://github.com/JWeinelt/Caesar/blob/master/src/main/java/de/julianweinelt/caesar/util/DatabaseColorParser.java) um.

:::

Die obere Klasse wird serialisiert in etwa so aussehen:
```json
{
  "someString": "default",
  "someNumber": 0,
  "enableSomething": true,
  "someStringList": []
}
```

Dabei fehlt `someOtherConfig`, da dort kein Wert initialisiert wurde.


## Registrierung
Als erstes benötigst du eine Instanz von ``LocalStorage``. Diese Klasse verwaltet alle Konfigurationsdateien.
```java
LocalStorage storage = LocalStorage.getInstance();
```
Danach müssen wir die neue Konfiguration registrieren:
```java
PluginConfiguration baseConfig = storage.registerConfigEntry(yourPlugin);
```
Mit der `PluginConfiguration`-Klasse werden mehrere Mögliche Konfigurationen pro Plugin verarbeitet.
```java
baseConfig.createConfig("someConfig.json", "MainConfig").setConfig(new YourConfiguration()).save();

// Konfigurationsklasse abrufen
baseConfig.getConfig("MainConfig");

// Daten laden
baseConfig.loadConfig("MainConfig"); // Gibt einen ConfigurationHolder zurück. Dieser kann anschließend in deine Klasse gecastet werden.
// Daten laden, ohne Casting:
baseConfig.loadConfig("MainConfig", YourConfiguration.class);

// Speichern
baseConfig.getConfig("MainConfig").save();
```
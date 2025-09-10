> [!WARNING]
> This feature is still **work in progress.** It may not be finished yet or may contain bugs.

Caesar serializes all configuration files with GSON. These are all managed within ``LocalStorage``. This will show you how to register a new configuration file and how to load/save it.

### 🛫 Getting started: your configuration class
For serialization, its important to create a new class which extends ``ConfigurationHolder``. There, you can add new values using variables.
As variable types you can use classes, integers, strings, floats, doubles, booleans and chars. Please keep in mind that classes must be serializable.

> [!WARNING]
> Some example classes you should not use in your configuration directly are:
>
> * `java.awt.Color`
> * `org.bukkit.World`
> * `java.io.File`
> * `java.net.Socket`
> * `java.nio.file.Path`
> * `org.w3c.dom.Document`
> * `javax.imageio.ImageIO`
> * any `Thread`, `Process`, or `InputStream`/`OutputStream`
> * any class that maintains a reference to system resources or runtime contexts

These types either contain native resources, live references, or are simply not compatible with GSON’s default serialization mechanism.

---

### ✅ Good practice

Instead of directly using non-serializable classes, **create lightweight data wrappers**.
For example:

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

With this, you gain the power of persistence without the curse of incompatibility.

---

> [!TIP]
> If you want to *exclude* fields from being saved to disk, use the `transient` keyword:
> 
> ```java
> public transient BufferedImage backgroundImage;
>  ```
> 
> These fields will be ignored by GSON during serialization/deserialization.

### 📝 Creating your configuration
```java
// It's recommended to use @Getter and @Setter to manage values
@Getter
@Setter
public class YourConfiguration extends ConfigurationHolder {
  private String someString = "default"; // Will be used as default value
  private int someNumber = 0;
  private boolean enableSomething = true;
  private YourConfigSubClass someOtherConfig; // if not assigned, won't be added to the serialized JSON

  // Lists and HashMaps are also supported.
  private final List<String> someStringList = new ArrayList<>(); // Recommended: initialize it and create add() and remove() methods.

  public void addSomeValue(String value) {
    someStringList.add(value);
  }

  public void removeSomeValue(String value) {
    someStringList.remove(value);
  }
}
```

> [!TIP]
> Instead of using ``java.awt.Color``, use ``String`` values and parse them with the helper class [``DatabaseColorParser``](https://github.com/JWeinelt/Caesar/blob/master/src/main/java/de/julianweinelt/caesar/util/DatabaseColorParser.java).

Now, the above file will look like this when serialized:
```json
{
  "someString": "default",
  "someNumber": 0,
  "enableSomething": true,
  "someStringList": []
}
```

## ➕ Registering your configuration
First you have to retrieve an object of ``LocalStorage``:
```java
LocalStorage storage = LocalStorage.getInstance();
```
After that, we have to register the new configuration:
```java
PluginConfiguration baseConfig = storage.registerConfigEntry(yourPlugin);
```
The ``PluginConfiguration`` is used to handle multiple possible configuration files for plugins. When we got this, we can create a new configuration file:
```java
baseConfig.createConfig("someConfig.json", "MainConfig").setConfig(new YourConfiguration()).save();

// Getting a config class
baseConfig.getConfig("MainConfig");

// Loading data
baseConfig.loadConfig("MainConfig"); // returns a ConfigurationHolder

// Saving data
baseConfig.getConfig("MainConfig").save();
```
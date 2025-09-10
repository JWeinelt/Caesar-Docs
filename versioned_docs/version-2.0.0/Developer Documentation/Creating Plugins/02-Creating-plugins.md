# Creating plugins

:::warning

This feature is still **work in progress.** It may not be finished yet or may contain bugs.

:::

This page will guide you through the development process of an example plugin for the Caesar system.

### Prerequisites
- Java JDK 21 or newer
- IntelliJ IDEA (recommended)
- Maven (recommended)


### Get started
First of all, you need to import the main API of Caesar into your project:

```xml
<repository>
  <id>unifiedvision-caesar</id>
  <name>Unified Vision Repo</name>
  <url>https://repo.codeblocksmc.de/caesar</url>
</repository>
```

```groovy
maven {
    name "unifiedvisionCaesar"
    url "https://repo.codeblocksmc.de/caesar"
}
```

Dependency:
```XML
<dependency>
  <groupId>de.julianweinelt.caesar</groupId>
  <artifactId>CaesarMC</artifactId>
  <version>1.0-SNAPSHOT</version>
</dependency>
```
```groovy
implementation "de.julianweinelt.caesar:CaesarMC:1.0-SNAPSHOT"
```

You have to let Caesar know that you want to register a plugin. Your plugin needs a main class that extends ``CPlugin``. Example:

```java title="YourPlugin.java"
public class YourPlugin extends CPlugin {
  @Getter
  private static YourPlugin instance;

  @Override
  public void onLoad() {
    instance = this; // Recommended at onLoad(). Afterwards, you can call YourPlugin.getInstance(); at runtime.
  }

  @Override
  public void onEnable() {
    // Code at enable startup goes here.
  }

  @Override
  public void onDisable() {
    // What should your plugin do when its being disabled?
  }

  @Override
  public void onBukkitEnable() {
    // Code at enable startup when loaded on CaesarBridge goes here.
  }
  
  @Override
  public void onBukkitDisable() {
    // Called when plugin is using CaesarBridge and is being disabled.
  }

  @Override
  public void onBukkitLoad() {
    // Called when plugin is loaded by CaesarBridge.
  }
}
```

You also need to give Caesar some information about your plugin, e.g. its name, its version, where main class is located in class path, who created the plugin, etc.
Therefore, you have to create a file in your `resources` folder: `plugin.json`.

This JSON file defines the basic structure and metadata for integrating a plugin with the Caesar backend system. Below is a breakdown of all fields and their purposes.
:::note

All keys starting with `"comment"` (e.g. `"comment"`, `"comment1"`) are ignored during parsing. They serve as human-readable documentation inside the file.

:::

### 🧩 `plugin`
This section contains general metadata about your plugin.
These values are used for identification, dependency handling, and version control.

| Key       | Type                 | Description                                                                                   |
|-----------|----------------------|-----------------------------------------------------------------------------------------------|
| `name`    | `string`             | The unique name of the plugin. This is **required**.                                          |
| `version` | `string`             | The version of the plugin (e.g. `"1.0.0"`). This is **required**.                             |
| `authors` | `array` of `strings` | List of authors or contributors to the plugin.                                                |
| `depend`  | `array` of `strings` | Optional. List of other plugins this plugin depends on. These must be loaded before this one. |

### ⚙️ `caesar`
This section provides **technical metadata** needed for Caesar to load and run the plugin.

| Key             | Type      | Description                                                                                               |
|-----------------|-----------|-----------------------------------------------------------------------------------------------------------|
| `mainClass `    | `string ` | Fully qualified class name that acts as the plugin's main entry point (e.g., `com.yourplugin.MainClass`). |
| `minAPIVersion` | `string ` | Minimum Caesar API version required to load this plugin. Prevents compatibility issues.                   |
| `useBridge`     | `boolean` | If this plugin is compatible with CaesarBridge.                                                           |

### 🖥️ `client`
This section defines how the plugin interacts with the Caesar Client, especially if it adds visual elements or pages.

| Key                  | Type      | Description                                                                                                                        |
|----------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| `hasPage`            | `boolean` | Indicates whether this plugin includes a client-facing page.                                                                       |
| `pageViewPermission` | `string`  | The permission string required to view the plugin's page in the web interface.                                                     |
| `default`            | `boolean` | If set to true, this page will be the default landing page for users who have access. Only one plugin should be marked as default. |

### 📌 Example `plugin.json`
```JSON
{
  "plugin": {
    "name:": "ExamplePlugin",
    "version": "1.0.0",
    "authors": ["You", "and", "others"],
    "depend": []
  },
  "caesar": {
    "mainClass": "com.yourplugin.MainClass",
    "minAPIVersion": "1.0.1",
    "useBridge": "true"
  },
  "client": {
    "hasPage": true,
    "pageViewPermission": "yourplugin.somepermission",
    "default": false
  }
}
```

:::note


When setting `client.hasPage` to `true`, you **must** create a `page.json` file.

:::

## 🖇️ Using CaearBridge
Caesar uses the component **CaesarBridge** to connect to Minecraft servers. It's a plugin that must be installed on every server, if:
- The server is running stand-alone.
- You want to use report or punishment features.
- A plugin you've installed on the backend requires to be run on the Minecraft servers.


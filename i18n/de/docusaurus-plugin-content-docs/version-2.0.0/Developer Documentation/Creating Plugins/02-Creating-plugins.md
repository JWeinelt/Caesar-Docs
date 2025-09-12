# Erstellen von Modulen

This page will guide you through the development process of an example plugin for the Caesar system.

### Voraussetzungen
- Java JDK 21 oder neuer
- IntelliJ IDEA (empfohlen)
- Maven (empfohlen)


### Loslegen
Zu aller erst muss die Cäsar-API in das Projekt importiert werden:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="maven" label="Maven" default>
```XML
<repository>
  <id>unifiedvision-caesar</id>
  <name>Unified Vision Repo</name>
  <url>https://repo.codeblocksmc.de/caesar</url>
</repository>
```
</TabItem>
  <TabItem value="groovy" label="Gradle Groovy">
```Groovy
maven {
    name "unifiedvisionCaesar"
    url "https://repo.codeblocksmc.de/caesar"
}
```
</TabItem>
</Tabs>



Abhängigkeit:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="maven" label="Maven" default>
```XML
<dependency>
  <groupId>de.julianweinelt.caesar</groupId>
  <artifactId>CaesarMC</artifactId>
  <version>1.0-SNAPSHOT</version>
</dependency>
```
</TabItem>
  <TabItem value="groovy" label="Gradle Groovy">
```groovy
implementation "de.julianweinelt.caesar:CaesarMC:1.0-SNAPSHOT"
```
</TabItem>
</Tabs>

Du musst Cäsar auch wissen lassen, dass du ein Plugin registrieren willst. Daher benötigt jedes Plugin eine Main-Klasse, die von `CPlugin` erbt.
Beispiel:

```java title="YourPlugin.java"
public class YourPlugin extends CPlugin {
  @Getter
  private static YourPlugin instance;

  @Override
  public void onLoad() {
    instance = this; // Empfohlen in onLoad(). Danach kann YourPlugin.getInstance(); während der Laufzeit aufgerufen werden.
  }

  @Override
  public void onEnable() {
    // Füge den Code ein, der ausgeführt wird, wenn das Model aktiviert wird.
  }

  @Override
  public void onDisable() {
      // Füge den Code ein, der ausgeführt wird, wenn das Model deaktiviert wird.
  }

  @Override
  public void onBukkitEnable() {
      // Füge den Code ein, der ausgeführt wird, wenn das Model als Plugin von CaesarBridge aktiviert wird.
  }
  
  @Override
  public void onBukkitDisable() {
      // Füge den Code ein, der ausgeführt wird, wenn das Model als Plugin von CaesarBridge deaktiviert wird.
  }

  @Override
  public void onBukkitLoad() {
      // Füge den Code ein, der ausgeführt wird, wenn das Model als Plugin von CaesarBridge geladen wird.
  }
}
```

Damit Cäsar das Modul richtig erkennt, benötigt es einige Informationen, wie den Namen, die Version, wo die Hauptklasse 
liegt, etc., um das Modul richtig laden zu können.
Deshalb muss eine Datei im `resources`-Ordner im Classpath angelegt werden: `plugin.json`.

Diese JSON-Datei enthält alle erforderlichen Metadaten über das Plugin. Alle Felder werden nachfolgend erläutert:

:::note

Alle JSON-Felder, die mit `"comment"` (z. B. `"comment"`, `"comment1"`) anfangen, werden beim Verarbeiten ignoriert.
Sie dienen zur benutzerfreundlichen Dokumentation innerhalb der Datei.

:::

### 🧩 `plugin`
Dieser Bereich enthält grundlegende Metadaten zu deinem Modul.
Die Werte werden zur Identifikation sowie zur Versions- und Abhängigkeitsverwaltung genutzt.

| Name      | Typ                  | Beschreibung                                                            |
|-----------|----------------------|-------------------------------------------------------------------------|
| `name`    | `string`             | Der Name des Moduls. Dieses Feld ist **erforderlich.**                  |
| `version` | `string`             | Version des Moduls (z. B. `"1.0.0"`). Dieses Feld ist **erforderlich.** |
| `authors` | `array` of `strings` | Eine Liste von Autoren, die das Modul entwickelt haben.                 |
| `depend`  | `array` of `strings` | Optional. Gibt an, welche Module vor diesem Model geladen sein müssen.  |

### ⚙️ `caesar`
Dieser Bereich enthält **technische Daten** über das Modul, die Cäsar benötigt, um es korrekt auszuführen.

| Name            | Typ       | Beschreibung                                                                                                  |
|-----------------|-----------|---------------------------------------------------------------------------------------------------------------|
| `mainClass `    | `string ` | Vollständiger Klassenname mit Pfad im Classpath, der als Startpunkt dient (z. B. `com.yourplugin.MainClass`). |
| `minAPIVersion` | `string ` | Minimale Cäsar API Version, die der Server/CäsarBridge haben muss. Dient zur Kompatibilitätsüberwachung.      |
| `useBridge`     | `boolean` | Gibt an, ob das Modul kompatibel mit CäsarBridge ist und dort als Plugin geladen werden soll.                 |

### 🖥️ `client`
This section defines how the plugin interacts with the Caesar Client, especially if it adds visual elements or pages.

| Key                  | Type      | Description                                                                                                          |
|----------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| `hasPage`            | `boolean` | Gibt an, ob das Modul eine Client-Oberfläche enthält, die auf Clients installiert werden muss.                       |
| `pageViewPermission` | `string`  | Diese Berechtigung muss ein Benutzer haben, um die Seite im Panel aufrufen zu können.                                |
| `default`            | `boolean` | Wenn aktiviert, wird die Seite zur Standardseite für Nutzer. Pro Modul sollte nur eine Standardseite definiert sein. |

### 📌 Beispielhafte `plugin.json`
```JSON
{
  "plugin": {
    "name:": "Beispielmodul",
    "version": "1.0.0",
    "authors": ["Du", "und", "andere"],
    "depend": []
  },
  "caesar": {
    "mainClass": "de.deinplugin.MainClass",
    "minAPIVersion": "1.0.1",
    "useBridge": "true"
  },
  "client": {
    "hasPage": true,
    "pageViewPermission": "deinplugin.somepermission",
    "default": false
  }
}
```

:::note

Wenn du die Einstellung `client.hasPage` auf `true` stellst, musst du eine `page.json`-Datei erstellen.
Mehr zu Pages findest du [hier.](06-Creating-new-UIs-in-Client.md)

:::

## 🖇️ Verwendung von CaesarBridge

Caesar nutzt die Komponente **CaesarBridge**, um sich mit Minecraft-Servern zu verbinden.  
Dabei handelt es sich um ein Plugin, das auf jedem Server installiert werden muss, wenn:

- der Server im Standalone-Modus läuft.
- du Melde- oder Strafen-Funktionen nutzen möchtest.
- ein von dir im Backend installiertes Plugin auch auf den Minecraft-Servern ausgeführt werden muss.  

# API-Referenz

Dies ist die Entwicklerdokumentation von Cäsar. Hier wirst du lernen, wie die Grundfunktionen der Cäsar-API genutzt werden.

Zu aller erst musst du die Cäsar-API deinem Projekt hinzufügen:


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

:::note

Diese Repository ist **nur** für die Basismodule von Cäsar. Mehr dazu in [Communityentwicklung](#API-Referenz)

:::
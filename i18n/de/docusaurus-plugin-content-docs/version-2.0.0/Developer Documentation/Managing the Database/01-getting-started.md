---

---

# Getting started
With the Caesar API, you can easily work with Database tables, even without writing e.g. SQL.

By using this approach, you make your database functions automatically compatible with all database types support by Caesar.

:::important

To use the Caesar Database API, you have to install the Database-API plugin from the [marketplace](https://market.caesarnet.cloud/view?plugin=db-api).

:::

After installing the plugin, you need to integrate the API in your project:



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="maven" label="Maven" default>
    ```XML
    <dependency>
        <groupId>de.julianweinelt.caesar</groupId>
        <artifactId>DB-API</artifactId>
        <version>${version}</version>
    </dependency>
```
  </TabItem>
  <TabItem value="gradle-groovy" label="Gradle (Groovy)">
    ```groovy title="Kotlin (Kotlin)"
implementation "de.julianweinelt.caesar:DB-API:${version}"
```
</TabItem>
  <TabItem value="gradle-kotlin" label="Gradle (Kotlin)">
    ```groovy title="Kotlin (Kotlin)"
implementation("de.julianweinelt.caesar:DB-API:${version}")
```
  </TabItem>
</Tabs>

Make sure to replace `${version}` with the actual version.

:::important[Remember!]

Don't forget to add `"DB-API"` as a dependency in your `plugin.json`.

:::
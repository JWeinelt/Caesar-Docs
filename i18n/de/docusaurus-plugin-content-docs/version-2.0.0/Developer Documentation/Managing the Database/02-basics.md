# The basics
:::warning

This feature is still **work in progress.** It may not be finished yet or may contain bugs.

:::

The Caesar core system provides a simple and safe API for plugins to interact with the internal SQL database. This guide will walk you through how to retrieve, create, and manipulate database tables with your plugin.

> 🏛️ Inspired by Roman order and structure, Caesar enforces clear ownership and safe data access across all modules.

## 📥 Getting Access to the Database

To begin, retrieve the `DatabaseRegistry` for your plugin:

```java
DatabaseRegistry databaseRegistry = DatabaseRegistry.getInstance(yourPlugin);
```

This object serves as the main entry point to perform SQL statements, queries, and table creation.

:::caution

For safety, you can only delete tables that your plugin created. Attempting to delete tables managed by Caesar Core or other plugins will not work.

:::

## 🏗️ Creating Tables

To register a new table for your plugin, use the `DatabaseTable` builder:
```java
public void createTable() {
  DatabaseTable table = DatabaseTable.Builder("example_table", yourPluginInstance) // Plugin instance ensures table ownership
    .addColumn("id", ColumnType.INTEGER, ColumnProperty.UNIQUE, ColumnProperty.AUTO_INCREMENT)
    .addColumn("other", ColumnType.STRING)
    .columnDefault("other", "somedefault")
    .build();

  databaseRegistry.registerTable(table);
}
```

You may also configure **primary** and **foreign** keys during the build process:

```java
DatabaseTable.Builder("my_table", yourPlugin)
  .addColumn("id", ColumnType.INTEGER, ColumnProperty.UNIQUE, ColumnProperty.AUTO_INCREMENT)
  .addColumn("category_id", ColumnType.INTEGER)
  .primary("id")
  .foreign("category_table", "category_id", "category_id")
  .build();
```

For more details and advanced examples, see the [Creating database tables](#) wiki page.

### 📦 Retrieving a Table

To retrieve a table object:

```java
DatabaseTable table = databaseRegistry.getTable("sometable");
```

:::warning

If the table was not created by your plugin, it will be read-only.

:::

## ✍️ Insert a New Row

```java
DatabaseRow row = table.createNewRow()
  .value("id", 1)
  .value("other", "somevalue");

table.insertRow(row);
```

You may also insert multiple rows in a batch:

```java
table.insertRowBatch(row1, row2, ...);
```

## 🔍 Conditions (WHERE clauses)

Use `ExecuteCondition` to define SQL-like WHERE conditions:

```java
ExecuteCondition condition = new ExecuteCondition()
  .require("column", "value")
  .requireLower("intValue", 1);
```

## 🔄 Updating Rows

```java
RowUpdate update = new RowUpdate()
  .column("column", "newValue");

table.updateRow(update, condition);
```

## ❌ Deleting Rows

```java
table.deleteRow(condition);
```

## 📊 Selecting Data

```java
ResultSet set = table.select(); // or: table.select(condition)

while (set.next()) {
  // Access data
}
set.close(); // Always close the set after working with it. It will free your memory.
```

You may also want to select only some columns:
```java
table.select(new String[]{"id", "example"}); // You can specify a condition after the array/list of columns.
table.select(Arrays.asList("another", "column"));
```

:::tip[Notice]

Always close your ResultSet to improve performance and avoid resource leaks.

:::

## 🛡️ Plugin Safety and Isolation

Plugins cannot modify or delete tables that they do not own.

Any unauthorized actions will result in a warning and be blocked.

## 🔮 Coming Soon (Planned Features)

- `selectAsync(...)` with `CompletableFuture` support for async access
- Lightweight ORM-style annotations for class mapping
- Core-logged table creation and deletion events

> “Scientia potentia est.” – Knowledge is power. With Caesar, you wield it responsibly.
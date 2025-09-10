# Creating tables

:::warning

This feature is still **work in progress.** It may not be finished yet or may contain bugs.

:::

This guide provides more advanced patterns for defining tables using the Caesar plugin database API. If you're unfamiliar with the basics, start with the main guide here: [Creating database tables](https://github.com/JWeinelt/Caesar/wiki/Creating-database-tables).

### 🔗 Composite Keys

To ensure uniqueness based on multiple columns (e.g. for mapping many-to-many relationships), define a composite primary key:

```java
DatabaseTable table = DatabaseTable.Builder("user_roles", plugin)
  .addColumn("user_id", ColumnType.INTEGER)
  .addColumn("role_id", ColumnType.INTEGER)
  .primary("user_id", "role_id")
  .build();
```

This is perfect for join tables or complex unique mappings.

### 🧬 Foreign Keys Across Plugins

While plugins can’t modify others’ tables, foreign keys referencing them are possible:

```java
DatabaseTable table = DatabaseTable.Builder("audit_log", plugin)
  .addColumn("log_id", ColumnType.INTEGER, ColumnProperty.AUTO_INCREMENT)
  .addColumn("actor_id", ColumnType.INTEGER)
  .foreign("users", "id", "actor_id")
  .build();
```

This ties the `actor_id` column to the `id` column of a user table, useful for keeping data integrity.

### 🏛️ Default Values & Property Mixing

You can freely mix column defaults and properties:

```java
DatabaseTable table = DatabaseTable.Builder("feature_flags", plugin)
  .addColumn("feature", ColumnType.STRING, ColumnProperty.UNIQUE)
  .addColumn("enabled", ColumnType.BOOLEAN)
  .columnDefault("enabled", false)
  .build();
```

Perfect for toggles, config flags, and feature rollouts.

### 🧱 Optional: Unique Constraints without Primary Key

Sometimes, you don’t want a primary key but still want uniqueness:

```java
DatabaseTable table = DatabaseTable.Builder("sessions", plugin)
  .addColumn("token", ColumnType.STRING, ColumnProperty.UNIQUE)
  .addColumn("user_id", ColumnType.INTEGER)
  .build();
```

Useful for temporary or external identifiers.

### 🔄 Creating Association Tables

You can even model complex associations with both keys and additional metadata:

```java
DatabaseTable table = DatabaseTable.Builder("project_memberships", plugin)
  .addColumn("project_id", ColumnType.INTEGER)
  .addColumn("member_id", ColumnType.INTEGER)
  .addColumn("joined_at", ColumnType.TIMESTAMP)
  .primary("project_id", "member_id")
  .foreign("projects", "id", "project_id")
  .foreign("users", "id", "member_id")
  .build();
```

### 🧪 Tips & Conventions

Always define at least one unique constraint or primary key.
Use columnDefault(...) for sensible defaults (e.g. false, 0, "unknown").
Foreign keys work across plugin tables but remain read-only if not owned.
Register tables once on plugin load to avoid duplication errors.

> “Divide et impera” – Divide and rule. Design your tables with clarity and precision.
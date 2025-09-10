# Adding new database providers

With Caesar, you can easily add databases that are not natively supported using the API.

## Provider class
You have to create a class that will handle the connection and contains the logic for each database operation.
This class needs to extend `Storage`. You will be prompted to add all needed methods.
Example:
```java
public class MongoDBStorageProvider extends Storage {
  public MongoDBStorageProvider(String host, int port, String database, String user, String password) {
        super(host, port, database, user, password);
  }

  @Override
  public boolean connect() {
    // Some connection logic here
  }

  // Followed by other essential methods
}
```

Now that we have a working provider, we need to register it into the Storage Factory:
```java
public static final StorageType MONGO_DB = new StorageType("MONGODB", 27017, config -> new MongoDBStorageProvider(
            config.getDatabaseHost(),
            config.getDatabasePort(),
            config.getDatabaseName(),
            config.getDatabaseUser(),
            config.getDatabasePassword()
    ));
```

That's it!
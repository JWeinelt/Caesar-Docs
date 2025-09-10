# Registrieren von Events
Caesar comes with a lightweight yes powerful event API. With this, plugins can communicate with each other, even without specifying a dependency to the corresponding plugin.

Events are handled via the global `Registry` object. Obtain it by using `Caesar.getRegistry();` or `Registry.getInstance();`

You can define an event using the following statement:
```java
Registry.getInstance().defineEvent("YourExampleEvent");
```
That's it! Caesar doesn't need to know more about it at defining.

> [!CAUTION]
> Please always choose **descriptive** names and use **PascalCase** for your events!

> [!TIP]
> You may also define a bunch of events with just one line:
> ```java
> Registry.getInstance().defineEvents("ExampleEvent", "OtherExampleEvent");
> ```
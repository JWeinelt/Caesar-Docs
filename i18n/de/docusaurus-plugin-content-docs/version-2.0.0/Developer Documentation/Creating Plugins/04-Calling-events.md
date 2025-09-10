# Arbeiten mit Events

Now, after creating an event, we also want it to be called at particular actions.
To achieve that, we are using `Registry` again:

```Java
getRegistry().callEvent("ExampleEvent", new Event("ExampleEvent"));
```

In that case, we are calling the event `ExampleEvent`. But we probably want to give it some values.
For example, when a user logs in, and we fire the event `UserLoginEvent`, we want to know which user is logging in and probably also logs in using any 2FA mode.

For that, you can define ``EventProperty``s.
```Java
Event exampleEvent = new Event("ExampleEvent")
	.property("example", "text") // Can contain a string as value
	.property("number", 1234) // Can contain an integer as value
	.propery("komma", 1.23) // Can contain a float or double as value
	.property("isValid", true) // Can contain a boolean as value
	.propery("someClass", player); // Can contain any type of class
```
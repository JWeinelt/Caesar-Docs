# Developer Conventions

> “A clearly structured code is like a well-organized legion – efficient, disciplined, and understandable for everyone.”

These guidelines are aimed to make the work on **Caesar Backend** easier for every developer.

----------

### 📚 General principles

-   **Readability takes precedence over cleverness**  
    Write your code for humans, not for machines. A clear and understandable code is better than a "smart", which noone understands.
    
-   **Consistency over personal preference**  
    Consistent style across all files. It's better to be good together than brilliant alone.
    
-   **Small units**  
    Functions and methods should be short, precise and clearly named.
    

----------

### ☕ Java Style Guide

#### 📌 Classes & Files

-   One class per file. ``Enum``s may be declared in the same class file if it makes sense.
-   Class names are **substantives** in PascalCase:  
    `ServerManager`, `PerformanceStats`
    

#### 📌 Methods & variables
-   Methods: camelCase, descriptive:  
    `startServer()`, `updatePerformanceChart()`
-   Variables: short, but descriptive:  
    `serverList`, `cpuUsage`, `logEntries`
    

#### 📌 Comments
Use **JavaDocs** for public methods/classes.
    

```java
/**
 * Starts a minecraf server based on the name.
 *
 * @param name Name of the server
 * @return true, if the start was successful
 */ 
public boolean startServer(String name) { ... }
 ```

#### 📌 Formatting

-   Move-in: Tabs
-   Opening curly brackets
    
```java
if (server.isRunning()) {
    server.stop();
}
```

#### 📌 Logging

- Use **SLF4J** with **Logback**. No ``System.out``.
- Please do not use the annotation ``@Slf4J``. That's because of our custom modern Logger implementation to make it possible that errors are displayed in the panel.
    

```java
private static final Logger log = LoggerFactory.getLogger(ServerService.class);
```

#### 📌 Lombok
-   Use **@Getter**, **@Setter** and **@Builder**.


### 🌐 REST API Design (Javalin)

-   Base-Path: `/api/v1/`
-   Resources in plural: `/servers`, `/players`
-   HTTP methods semantic:
    -   `GET /servers` → Get a list of servers
    -   `POST /servers` → Create server
    -   `DELETE /servers/{id}` → Delete/stop server
- Responses with **JSON**, with meaningful status codes (e.g. 200, 201, 404, 500)

### 🔄 Git Commit conventions

-   English
-   Structure: `issue-id (if given) type(scope): message`
-   Examples:
    -   `#0001 feat(server): add restart endpoint`
    -   `#0054 fix(ui): correct layout issue on dark mode`
    -   `chore(deps): update Javalin to v3.2.1`
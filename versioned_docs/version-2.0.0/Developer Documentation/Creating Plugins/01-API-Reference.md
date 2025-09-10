# API Reference

Welcome to the API Reference! This will guide you through the basics of the Caesar API and how to use it.

First of all, you have to add the Caesar Repository to your project.

Maven:
```XML
<repository>
  <id>unifiedvision-caesar</id>
  <name>Unified Vision Repo</name>
  <url>https://repo.codeblocksmc.de/caesar</url>
</repository>
```

Gradle:
```Groovy
maven {
    name "unifiedvisionCaesar"
    url "https://repo.codeblocksmc.de/caesar"
}
```

:::note

This repository is **only** for basic modules and the base API provided by this project. Read more about that in [Community Development](#).

:::
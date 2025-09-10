---
id: faq
---

# FAQ

Welcome to the FAQ page for **Caesar**, the unified control and moderation backend for Minecraft networks.
Below you'll find answers to common questions from server admins, developers, and curious players.

---

## What is Caesar?

**Caesar** is a Java-based backend and API designed to help administrators manage bans, warnings, reports, server info, and more – all in one place. It integrates deeply with **CloudNet v4** and features modern tools such as a **Discord bot**, a **moderation panel**, and planned **Docker support**.

---

## Is Caesar still under active development?

Yes! While older prototypes like the *CloudNETWebpanel* were discontinued, **Caesar** is the official and active successor.
It is being developed by **Julian Weinelt** and will be available as a Docker container soon.

---

## Why are there different plans?

While *Caesar* is open and free software, the contributors spend much time in this project. Julian Weinelt even spends money
to make running the backend services like automatic updates possible.
Caesar will ever stay absolutely free with all features; the support plans are just service plans.
You will get premium support by subscribing to one of these plans and keep Caesar alive with that.

---

## Does Caesar support Bedrock players?

While Caesar is platform-agnostic on the backend, Bedrock player support depends on your Minecraft server setup 
(e.g., GeyserMC + Floodgate). Caesar will log and process all users known to the system, including Bedrock players, 
if configured correctly.

---

## Is there a Discord bot?

Yes! Caesar ships with a powerful Discord integration, allowing you to:

- View and process support tickets
- Manage bans, kicks, and warnings
- Get notified of in-game reports
- Link Discord roles to server permissions

More features are planned in future versions.

---

## 🛠What databases does Caesar support?

Caesar uses a modular database system. Natively it supports: MySQL/MariaDB and SQLite.
There are many plugins you can install to add support for other database types.

Please remember, H2 and SQLite are **not recommended** for productive environments.

---

## Can I run Caesar in Docker?

At this time: no – Docker support is planned.

Instructions will be provided in the [README](https://github.com/Jweinelt/Caesar/blob/main/README.md) once Docker is officially supported.

---

## Does Caesar require authentication?

Yes. The Caesar panel includes:

- User authentication for moderators and admins
- Token-based API access
- Planned: OAuth2 / Single Sign-On support

Security is a priority – make sure to configure access roles properly.

---

## How is Caesar different from other panels?

Unlike generic panels, **Caesar** is:

- Tailored for **CloudNet v4**
- Deeply integrated with **Minecraft and Discord**
- Designed with modularity in mind
- Equipped for real-time server insights and punishment management
- Built with future-proofing and automation as core principles

---

## Where does the name “Caesar” come from?

Just as Julius Caesar unified and reformed a fractured republic, **Caesar** unifies server administration across
multiple systems and tools. It brings clarity, order, and power into one consistent backend. 
(The creator had Latin in school and loves Latin names 😂)

---

## What are future plans?

Upcoming features include:

- Full developer documentation
- Player management
- Live consoles
- Integration of servers outside of CloudNET
- A plugin marketplace
- Support for other Minecraft plugins with their API
- Support for Fabric/Forge
- Support for Minecraft Servers below 1.16

Join our journey and help shape the future!

---

## I found a bug / have a feature request – where do I go?

Please open an [issue on GitHub](https://github.com/JWeinelt/Caesar/issues) or join our [community Discord](https://dc.caesarnet.cloud). We value all feedback!

---

## Will there be support for SimpleCloud or other tools?

At this time, SimpleCloud does not provide a REST API. Therefore, Caesar can't hook into it. When it gets this API, it will be added.
If you need other tools to be supported, open an issue about that.
Please acknowledge that we cannot provide support for any tool out there natively. But with plugins, maybe you could make
it possible by yourself?

---

## Is there a changelog?

Yes – you can find version history and important changes in [the discussions](https://github.com/JWeinelt/Caesar/discussions).

---

_Caesar is being forged with passion by Julian Weinelt – for a more powerful, elegant, and humane Minecraft administration experience._


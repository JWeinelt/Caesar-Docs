# Connecting single servers
:::warning

This feature is still **work in progress.** It may not be finished yet or may contain bugs.

:::

Besides CloudNET, you are also able to add **single** Minecraft server to Caesar.

For that, you need to install the `CaesarBridge` plugin on the server(s). Here's how to install and set it up:

1. 📥 Download the Plugin [here](#).
2. 📂 Drop it into your `plugins` folder of the Minecraft server.
3. 🔓 Activate Caesar's **single server mode** in the administration settings.
4. 🛜 Create a new connection.
5. 🔐 Copy the API key provided.
6. 📄 Run the command `/caesar mode instance`
7. 📝 Run the command `/caesar activate <key>`
8. 💻 Enter the host name and port of your instance in the `config.yml`file of the plugin.
9. ⌨️ Run the command `/caesar restart` on the Minecraft server.
10. ↪️ Caesar should try to connect to the main instance now.
11. ✅ You are set! Your server is now linked to Caesar.

:::warning[Important!]

You can view the API key of a connection only **once.**

:::

:::tip[Best practice]

Always create a new connection for every server!

:::

:::important[Important for Security!]

**Under NO CIRCUMSTANCES SHARE ANY API KEY TO THIRD PARTIES!**

:::

The API key on the Minecraft server will now be encrypted. You won't be able to see it after this setup.

## What you can do with the newly imported Minecraft server
- You can manage it (restarting, stopping, changing memory)
- You can see a live console
- You can see live players
- It is connected to your punishment system (if enabled)
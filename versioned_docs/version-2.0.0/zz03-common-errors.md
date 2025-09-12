Here you find errors with their description and how to fix them.

---

**Veni, vidi, crashed. (2729)**
This error occurs when the Caesar Worker is not responding.

*How to fix:*
- Make sure the Worker is running: Check your taskbar for the Caesar icon or look at the task manager.
- In the panel, press `Alt+H` to open the help page. Click `force restart`.
- Close all instances of Caesar in the task manager and open it again.

---

**Alea iacta est. (9661)**
This error occurs when the Caesar Backend returns an internal error (HTTP 5xx).

*How to fix:*
- Check the logs of the server for any suspicious outputs. If there are any, save them.
- Restart the Caesar Backend.
- Create an issue about this on [GitHub](https://github.com/Jweinelt/Caesar/issues).
- Describe clearly what exactly happened and what you did.

---

**Tempus fugit, error manet. (9684)**
Thrown when the backend is not responding to the client.

*How to fix:*
- Check if your backend is up and running.
- Check firewall settings
- Check your internet connection
- Restart routers and modems
- Restart the backend and/or your server

---

**Divide et impera – failed. (1584)**
This error means your client has not enough memory (1584) or disk space (1585) to run correctly.

*How to fix:*
- Try to restart your client
- Close programs that are using much memory
- Free some space on your disk
- Restart your computer
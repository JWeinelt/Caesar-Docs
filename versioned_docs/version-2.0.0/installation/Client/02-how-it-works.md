# How the client works
In general, the client for Caesar is divided into 2 parts: the Frontend and the *Worker*.
The Frontend will display information on your screen, while the worker handles background processes, notifications, downloads and so on.
Both parts are connected to each other using a *web socket.*

There are some additional parts that are going to be downloaded during the setup process:
## Oculus
Oculus, formerly known as 'ConsoleWorker', is an additional client making you able
to see the console of your servers live.


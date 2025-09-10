# Installing on Linux server

:::tip

On Linux systems, we recommend using ``wget`` to download the zip-file. Alternatively, you may use
```bash
curl -O https://somefile.zip
```

:::

Please make sure you have installed every software needed. If not, run this command:
```bash
sudo apt-get update
sudo apt-get install screen wget unzip nano
```

Download the .zip-file or .tar.gz-file from GitHub:
```bash
wget https://github.com/JWeinelt/Caesar/releases/version.zip
```
***or***
```bash
curl -O https://github.com/JWeinelt/Caesar/releases/version.zip
```
Replace ``version``  with the actual version of Caesar backend, mostly the newest.
You can either download the file with ``.zip`` or ``.tar.gz``.

Now, unpack the archive. If downloaded it as a zip-file, run
```bash
unzip Caesar.zip
```
When using tar, run
```bash
tar -xvzf Caesar.tar.gz
```
When running the command ``ls`` you should see an output similar to this:
```bash
root@someserver:-$ ls
caesar-server.jar    changelog.txt    modules    start.bat    start.sh
```
As we are using a Linux system, we can safely delete the file ``start.bat``:
```bash
rm start.bat
```
Now, we have to give the ``start.sh`` file the permission to be executed:
```bash
chmod +x start.sh
```

:::tip

We highly recommend creating a dedicated user for Caesar to enhance security. First, create a new user:
```bash
sudo useradd -r -M -s /usr/sbin/nologin caesar
```
This command will create a new user named 'caesar'. It has no home directory and you can't login to the server using this user. Now, we need to say the > user, that the Caesar directory is theirs:
```bash
sudo chown -R caesar:caesar /home/Caesar
```
Replace ``/home/Caesar`` with the actual path of your installation.
Next, go into the installation directory and execute ``chmod``:
```bash
cd /home/Caesar
chmod +x start.sh
```

:::

If you are using a dedicated user for Caesar, you have to edit the file ``start.sh`` as the following:
```bash
#!/bin/bash

# Remember: when changing this file, backups are good to go :-)

# Uncomment this line to get Caesar executed by its user.
# Change 'caesar' to the user you created.
sudo -u caesar

# Set the directory for the script
cd "$(dirname "$0")"

# Log file
LOGFILE="caesar.log"

# Only start if screen session does not exist
if ! screen -list | grep -q "Caesar-Backend"; then
    echo "Starting Caesar backend..."
    screen -dmS Caesar-Backend bash -c "java -Xmx2G -Xms2G -jar caesar-server.jar --check-updates | tee -a $LOGFILE"
else
    echo "Caesar backend is already running!"
fi
```

Now, you only have to execute
```bash
./start.sh
```
There you go! Caesar is now starting.

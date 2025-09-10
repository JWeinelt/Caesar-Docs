# Securing Caesar

It's absolutely essential to make your Caesar installation as secure as possible.
Caesar takes action into your CloudNET system and has advanced rights on your Discord server. Therefore, what may you do to make it safe?

## 1.: Use secure passwords
A strong password is at least 8 characters long and contains uppercase and lowercase letters, numbers and symbols.
Also, a password that you can easily remember is worse. Use a safe password and a password manager.

You're able to define password rules for your users.

## 2.: Don't share any credentials
**No one** should know your password except yourself. If someone needs access to the system, give them a temporary user.

:::warning[Important to know]

The support on Discord or other channel **will never** ask for any credentials!
Read more about [supporting here.](#)

:::

## 3.: Use a secured address
Caesar supports installing an SSL certificate. This will make your connection secure (http://caesar.example.com -> https://caesar.example.com)
You may also use **NGINX** or **Apache** as a **reverse-proxy.**

:::tip

If you don't have a domain or don't want to install the certificate locally, please open a ticket on Discord.
There you'll get an address by us: `https://instance.caesarnet.cloud/<yourname>`. This service is free for admins with Premium or Enterprise plan.
When using Basic plan, it costs 1€/month.

:::

## 4.: Backups
Backups are the most important thing when working with software. Caesar supports 2 different types of backups:
- Full snapshot backup
- Incremental backup

The **full snapshot** will save everything (or the parts you selected) in a compressed file. With big setups, this may take a little bit more disk space and take some more time to create.
And this is the advantage of **incremental backups:** it will store **only changed** values. This doesn't take the full space of your installation, but only e.g. changed database values and new plugins. When using incremental backups, you should delete old backups by yourself, as this may break newer backups, because they are depending on each other.
Caesar also supports a mix of both: e.g. it's taking a daily incremental backup and a full snapshot every Sunday.
Also, you can add optional options to the backups:
- If they should be encrypted (encryption password needed)
- The timing
- If the backup should be validated
- Place to store

:::caution[Important]

You should **always** back up your whole server backup in addition to local backups.

:::

## 5.: Use the role & permission system
Caesar provides a role-based permission system, but you can also assign permissions directly to a user. 
For example, a supporter doesn't need access to all configuration files, a developer to support tickets and bans, etc.

## Using the password policy
You may also create a **password policy rule** for users on your instance. This will enforce rules for the users' passwords such as:
- have to use **lowercase** and **uppercase** letters
- have to use **digits**
- have to use **symbols**
- set minimum/maximum length
- set password expiry

:::warning

**Password expiry** is **not recommended** in production use, as it may make passwords not that secure.
Humans tend to use passwords within patterns, which may cause security issues.

:::

### How to enable and configure password policies
1. Go to the panel under `settings -> administration`
2. Click `security`
3. Under `password policy`, click the check button to enable it.
4. Select the rules you want to apply.
5. Click `Apply changes` to send the new configuration to the server and all clients.

### Enabling 2FA

:::warning[Upcoming feature]

This feature has not been added to Caesar yet.

:::

Two-factor-authentication is the best way to make user accounts secure.
You can choose between two ways of 2FA:
1. Using your Authenticator App (Google Authenticator, Microsoft Authenticator)
2. Using the Caesar App
---
id: get-support
---

# How to get Support
If you need assistance with Caesar, there are several ways to get support.

* Visit the **[official forum](https://forum.caesarnet.cloud/)** to ask questions and find answers from the community. Please make sure to follow the forum guidelines.
* Join the **[Discord server](https://dc.caesarnet.cloud/)** to get help directly from other users and the Caesar team. You can post in community channels or open a private support ticket.

> Users with 🥈 Silver or 🥇 Gold support tiers receive **direct support from Caesar staff for free**.


## How Support Mode Works

In some cases, a Caesar staff member may need to log into your instance to assist you. For this, Caesar provides a secure built-in **Support Mode**.

You can activate it from your Caesar panel or via the command line:

```bash
security mode support activate
```

This generates a temporary access code that contains encrypted login credentials. You will then need to **share this code** with the support staff member.

## Example Output

```base64
Q0FFU0FSJTEyMy40NTYuNzguOSV0ZW1wLTU4OTk6TmpMNHk2SVpUSTY5ZjZnJiZDQVMtRU5DUiMyU1JUODlMU0YyMDM2M3F3THo1ZTk4NVhCR1RyS1NXczlNcVQ1Y2VhTG83RlNWMzBjVg==
```

When decoded, this string looks like:

```bash
CAESAR%123.456.78.9%temp-5899:NjL4y6IZTI69f6g&&CAS-ENCR#2SRT89LSF20363qwLz5e985XBGTrKSWs9MqT5ceaLo7FSV30cV
```

### Breakdown

* `CAESAR%` identifies the string as a Caesar support access token.
* `123.456.78.9` is the IP address of your Caesar instance.
* `temp-5899:NjL4y6IZTI69f6g` is a temporary username and password (in `username:password` format).
* `&&CAS-ENCR#...` is an encrypted identifier generated from your server’s MAC address and two unique internal values. This makes each support token unique and secure.


## Security Details

* The **temporary account is valid for 10 minutes** only.
* You may end the session **any time.**
* When a supporter attempts to log in, **you must manually approve the login**.
* All support clients used by Caesar staff carry a **digital certificate** to verify their identity.


## Why It’s Safe

Support Mode has been designed with **privacy and control in mind**. You stay in control at all times – without any hidden background access. The token is encrypted, time-limited, and requires your confirmation before anyone can log in.

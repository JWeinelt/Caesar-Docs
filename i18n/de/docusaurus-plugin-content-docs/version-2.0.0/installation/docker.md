# Using Caesar with Docker

## Overview
Caesar supports running as a Docker container for an easy, fast, and reliable deployment.
This guide explains how to install, configure, and start Caesar using Docker.

Docker allows you to run Caesar without installing Java or any other dependencies directly on your server — everything is packed into one container!

## Prerequisites
- ✅ A machine with Docker installed
- ✅ Optional but recommended: Docker Compose for more advanced setups
- ✅ At least ~1 GB of free RAM and some disk space
- ✅ Access to the internet to pull the Docker image

🐳 Pulling the Caesar Image
The official Caesar image is hosted on GitHub Container Registry (GHCR).

You can pull the latest version like this:

```bash
docker pull ghcr.io/jweinelt/caesar:latest
```
To verify that it’s downloaded:

```bash
docker images
```

## Running Caesar
### Basic Command
To start Caesar with the default configuration:
```bash
docker run -d \
  --name caesar \
  -p 48000-48005:48000-48005 \
  ghcr.io/jweinelt/caesar:latest
```

This:
- Runs Caesar in detached mode (`-d`)
- Maps ports `48000–48005` (required for Caesar’s services)
- Names the container `caesar`

### Environment Variables & Configuration

You can (and should) configure Caesar through environment variables or mounted volumes.
Here are some examples:
Variable | Description | Example
-- | -- | --
`DB_HOST` | Database host | `localhost`
`DB_PORT` | Database port | `3306`
`DB_USER` | Database user | `caesar`
`DB_PASS` | Database password | `secret`

You can pass these into Docker:
```bash
docker run -d \
  --name caesar \
  -e DB_HOST=localhost \
  -e DB_USER=caesar \
  -e DB_PASS=secret \
  -p 48000-48005:48000-48005 \
  ghcr.io/jweinelt/caesar:latest
```
Or you can mount a `config.properties` file into the container:
```bash
docker run -d \
  --name caesar \
  -v /path/to/config.properties:/app/config.properties \
  -p 48000-48005:48000-48005 \
  ghcr.io/jweinelt/caesar:latest
```
### Stopping & Removing the Container
To stop Caesar:
```bash
docker stop caesar
```
To fully remove caesar from your computer:
```bash
docker rm caesar
```

### Updating to a New Version
It's always recommended to update to the latest **stable** version of Caesar.

:::important

Updating Caesar through Docker will delete your data! Use **the built-in** update services instead.

:::

When a new version of Caesar is released:
```bash
docker pull ghcr.io/jweinelt/caesar:latest
docker stop caesar
docker rm caesar
docker run … (see above)
```

## Optional: Docker Compose
For more advanced setups or if you also want to run a database container alongside, you can use Docker Compose.
Here’s a minimal example `docker-compose.yml`:
```yml
version: '3.8'

services:
  caesar:
    image: ghcr.io/jweinelt/caesar:latest
    ports:
      - "48000-48005:48000-48005"
    environment:
      DB_HOST: db
      DB_USER: caesar
      DB_PASS: secret
    volumes:
      - ./data:/app/data

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: caesar
      MYSQL_USER: caesar
      MYSQL_PASSWORD: secret
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```
Start it:
```bash
docker compose up -d
```
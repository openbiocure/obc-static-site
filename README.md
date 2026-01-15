# OpenBioCure Static Site

OpenBioCure landing page built with Next.js and deployed on multiple platforms.

## Development

```bash
npm install
npm run dev      # Runs on http://localhost:3005
npm run build    # Builds static export to /out directory
```

## Deployment

### Primary Server (172.16.13.10)

The main production server running on Docker with nginx.

**Server Details:**
- IP: `172.16.13.10`
- User: `root`
- Uses Podman (Docker-compatible)
- Container runs on port 80

#### Starting the Server

```bash
# SSH to server
ssh root@172.16.13.10

# Start Docker service (if not running)
systemctl start docker

# Start the container
docker start obc-app

# Check status
docker ps | grep obc-app

# View logs
docker logs obc-app
```

#### Stopping the Server

```bash
# Stop the container
docker stop obc-app

# Check status
docker ps -a | grep obc-app
```

#### Deploying Updates

```bash
# 1. Build locally
npm run build

# 2. Copy files to server
sshpass -p '123456' scp -r -o StrictHostKeyChecking=no out/ Dockerfile nginx.conf root@172.16.13.10:/opt/obc-app/

# 3. Rebuild and restart container
sshpass -p '123456' ssh -o StrictHostKeyChecking=no root@172.16.13.10 'cd /opt/obc-app && docker build -t obc-app . && docker stop obc-app && docker rm obc-app && docker run -d --name obc-app -p 80:80 obc-app'
```

#### Initial Server Setup

```bash
# Create deployment directory
ssh root@172.16.13.10 'mkdir -p /opt/obc-app'

# Copy files
sshpass -p '123456' scp -r -o StrictHostKeyChecking=no out/ Dockerfile nginx.conf .dockerignore root@172.16.13.10:/opt/obc-app/

# Build and run
sshpass -p '123456' ssh -o StrictHostKeyChecking=no root@172.16.13.10 'cd /opt/obc-app && docker build -t obc-app . && docker run -d --name obc-app -p 80:80 obc-app'
```

### Vercel Backup Deployment

Automatic deployment to Vercel on git push to `main` branch.

**Vercel URL:** https://obc-static-site.vercel.app/

The site is automatically deployed when you push to GitHub. No manual steps required.

### Failover Setup (Cloudflare DNS)

When the primary server (172.16.13.10) is down, switch DNS to Vercel:

#### Switching to Vercel (Server Down)

1. Go to Cloudflare DNS settings
2. Edit the `openbiocure.ai` A record:
   - **Type:** `A`
   - **Name:** `@` or `openbiocure.ai`
   - **IPv4 address:** `216.198.79.1`
   - **Proxy status:** Toggle OFF (Gray cloud - DNS only)
   - **TTL:** Auto
3. Save changes
4. Wait 1-2 minutes for DNS propagation

#### Switching Back to Primary Server (Server Up)

1. Go to Cloudflare DNS settings
2. Edit the `openbiocure.ai` record:
   - **Type:** `CNAME`
   - **Name:** `openbiocure.ai`
   - **Target:** `56e3aaf0-34ff-444b-a973-f4eca7eb3458.cfargotunnel.com`
   - **Proxy status:** Toggle ON (Orange cloud - Proxied)
   - **TTL:** Auto
3. Save changes

**Note:** The Cloudflare Tunnel connects to the Docker container on 172.16.13.10.

## Project Structure

```
├── pages/              # Next.js pages
├── components/         # React components
├── public/            # Static assets
├── out/               # Build output (Next.js static export)
├── Dockerfile         # Docker configuration
├── nginx.conf         # Nginx server configuration
└── next.config.js     # Next.js configuration (static export enabled)
```

## Docker Configuration

The site runs in a lightweight nginx Alpine container serving static files from the `/out` directory.

**Features:**
- SPA routing support (try_files fallback)
- Static asset caching (1 year)
- Gzip compression
- Custom nginx configuration

## Environment

- **Node.js:** Latest LTS
- **Next.js:** 16.1.1
- **Docker/Podman:** Latest
- **Nginx:** Alpine-based container

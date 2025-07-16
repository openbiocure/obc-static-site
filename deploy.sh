#!/bin/bash
source /opt/bash-lib/lib/init.sh
import service
import console

SERVICE_NAME="obcsite"
SERVICE_DIR="/opt/obc-static-site"
SERVICE_COMMAND="npm run start"
PID_FILE="/var/run/obcsite.pid"
LOG_FILE="/var/log/obsite.log"

# Build and start
cd "$SERVICE_DIR"
npm run build


# Kill old service
service.kill_respawn "$SERVICE_NAME" --force --verbose
sleep 3

service.start "$SERVICE_NAME" "$SERVICE_COMMAND" --background --respawn --log-file "$LOG_FILE" --pid-file "$PID_FILE" --port 3000

console.success "Deployment completed!"
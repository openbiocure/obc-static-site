#!/bin/bash

# Deployment configuration
REMOTE_HOST="172.16.13.124"
REMOTE_USER="root"
REMOTE_PASSWORD="123456"
REMOTE_DIR="/opt/obc-static-site"
REMOTE_PORT="3000"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment to ${REMOTE_HOST}...${NC}"

# Check if build exists
if [ ! -d ".next" ]; then
    echo -e "${RED}Error: Build directory not found. Please run 'npm run build' first.${NC}"
    exit 1
fi

# Install sshpass if not available
if ! command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}Installing sshpass...${NC}"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install sshpass
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y sshpass
    else
        echo -e "${RED}Please install sshpass manually for your OS${NC}"
        exit 1
    fi
fi

# Create deployment package
echo -e "${YELLOW}Creating deployment package...${NC}"
DEPLOY_DIR="deploy-package"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy necessary files
cp -r .next "$DEPLOY_DIR/"
cp -r public "$DEPLOY_DIR/"
cp package.json "$DEPLOY_DIR/"
cp package-lock.json "$DEPLOY_DIR/"
cp next.config.js "$DEPLOY_DIR/"
cp -r components "$DEPLOY_DIR/"
cp -r lib "$DEPLOY_DIR/"
cp -r app "$DEPLOY_DIR/"

# Create tar archive
echo -e "${YELLOW}Creating archive...${NC}"
tar -czf obc-static-site.tar.gz -C "$DEPLOY_DIR" .

# Upload to remote server
echo -e "${YELLOW}Uploading to remote server...${NC}"
sshpass -p "$REMOTE_PASSWORD" scp -o StrictHostKeyChecking=no obc-static-site.tar.gz "$REMOTE_USER@$REMOTE_HOST:/tmp/"

# Execute remote deployment
echo -e "${YELLOW}Executing remote deployment...${NC}"
sshpass -p "$REMOTE_PASSWORD" ssh -o StrictHostKeyChecking=no "$REMOTE_USER@$REMOTE_HOST" << 'EOF'
#!/bin/bash

# Remote deployment script
REMOTE_DIR="/opt/obc-static-site"
REMOTE_PORT="3000"
SERVICE_NAME="obcsite"
PID_FILE="/var/run/obcsite.pid"
LOG_FILE="/var/log/obcsite.log"

echo "Stopping existing service..."
if [ -f "$PID_FILE" ]; then
    kill $(cat "$PID_FILE") 2>/dev/null || true
    rm -f "$PID_FILE"
fi

echo "Creating directory structure..."
mkdir -p "$REMOTE_DIR"
cd "$REMOTE_DIR"

echo "Extracting deployment package..."
tar -xzf /tmp/obc-static-site.tar.gz
rm -f /tmp/obc-static-site.tar.gz

echo "Installing dependencies..."
npm ci --production

echo "Starting service..."
nohup npm start > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"

echo "Service started with PID: $(cat $PID_FILE)"
echo "Log file: $LOG_FILE"
echo "Service will be available at: http://172.16.13.124:$REMOTE_PORT"

# Wait a moment and check if service is running
sleep 3
if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
    echo "✅ Service is running successfully!"
else
    echo "❌ Service failed to start. Check logs: $LOG_FILE"
    exit 1
fi
EOF

# Cleanup local files
echo -e "${YELLOW}Cleaning up local files...${NC}"
rm -rf "$DEPLOY_DIR"
rm -f obc-static-site.tar.gz

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your site is now available at: http://172.16.13.124:3002${NC}"
echo -e "${GREEN}📄 Privacy Policy: http://172.16.13.124:3002/privacy${NC}"

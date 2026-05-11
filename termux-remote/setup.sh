#!/data/data/com.termux/files/usr/bin/bash
# Termux Remote Desktop - Full browser control from anywhere
# Run this in Termux on Android

set -e

echo "=============================="
echo " Termux Remote Desktop Setup"
echo "=============================="

# 1. Update & install base
pkg update -y
pkg upgrade -y
pkg install -y x11-repo tur-repo proot-distro git wget curl \
  tigervnc x11vnc openssh netcat-openbsd pulseaudio

# 2. Install Ubuntu via proot
echo "[*] Installing Ubuntu (proot)..."
proot-distro install ubuntu

# 3. Install desktop + browser + tools inside proot
proot-distro login ubuntu -- bash -c "
  export DEBIAN_FRONTEND=noninteractive
  apt update -y
  apt install -y xfce4 xfce4-goodies firefox-esr chromium \
    x11vnc novnc python3-websockify supervisor \
    curl wget nano htop net-tools

  # Create VNC startup script
  cat > /start-vnc.sh << 'EOF'
#!/bin/bash
export DISPLAY=:1
export HOME=/root

# Set VNC password
mkdir -p ~/.vnc
if [ ! -f ~/.vnc/passwd ]; then
  echo -e 'pawpals\npawpals' | vncpasswd -f > ~/.vnc/passwd
  chmod 600 ~/.vnc/passwd
fi

# Start VNC server
vncserver :1 -geometry 1280x720 -depth 24 -localhost

# Start x11vnc on port 5900 (bridged to VNC)
x11vnc -display :1 -forever -shared -rfbport 5900 -passwd pawpals &

# Start noVNC web client on port 6080
/usr/share/novnc/utils/novnc_proxy --vnc localhost:5900 --listen 6080 &

# Start Firefox
firefox --display=:1 &

echo ''
echo '========================================'
echo ' VNC:  localhost:5900  (password: pawpals)'
echo ' noVNC: http://localhost:6080/vnc.html'
echo '========================================'
EOF
  chmod +x /start-vnc.sh
"

# 4. Create launch script in Termux
cat > $PREFIX/bin/start-remote << 'TERMUX'
#!/data/data/com.termux/files/usr/bin/bash
echo "[*] Starting remote desktop..."

# Start proot Ubuntu
proot-distro login ubuntu -- bash -c "
  # Kill any existing VNC
  vncserver -kill :1 2>/dev/null || true
  pkill x11vnc 2>/dev/null || true
  sleep 1

  # Start everything
  /start-vnc.sh &

  # Wait for services
  sleep 3

  echo ''
  echo '=== Local Access ==='
  echo 'VNC:  localhost:5900  (password: pawpals)'
  echo 'Web:  http://localhost:6080/vnc.html'
  echo ''
"

echo "[*] Setting up reverse tunnel..."
echo "Choose tunnel method:"
echo "1) Serveo (ssh -R, easy, no account needed)"
echo "2) ngrok (faster, needs free account)"
read -p "Choice [1/2]: " tunnel_choice

if [ "$tunnel_choice" = "1" ]; then
  echo "[*] Starting Serveo tunnel..."
  echo "[*] Sharing VNC port 5900..."
  ssh -o StrictHostKeyChecking=no -R 80:localhost:5900 serveo.net &
  SSH_PID=$!
  sleep 3
  echo ""
  echo "================================================"
  echo " Serveo VNC URL will appear in the SSH output"
  echo " Tell the remote person the VNC URL + password"
  echo "================================================"
  wait $SSH_PID
elif [ "$tunnel_choice" = "2" ]; then
  echo "[*] Install ngrok first: pkg install ngrok"
  echo "[*] Then run: ngrok tcp 5900"
else
  echo "Invalid choice"
fi
TERMUX

chmod +x $PREFIX/bin/start-remote

echo ""
echo "=============================="
echo " Setup Complete!"
echo "=============================="
echo ""
echo "To start remote desktop:"
echo "  start-remote"
echo ""
echo "Then share the Serveo URL with the remote person."
echo "They connect via any VNC client (RealVNC, TightVNC, etc.)"
echo "Password: pawpals"
echo ""
echo "For web browser access (no VNC client needed):"
echo "  http://localhost:6080/vnc.html"
echo ""

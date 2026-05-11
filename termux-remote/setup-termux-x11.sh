#!/data/data/com.termux/files/usr/bin/bash
# Termux:X11 + Remote Desktop Control
# Run this in Termux on Android (F-Droid Termux + Termux:X11)

set -e

echo "=============================="
echo " Termux:X11 + Remote Control"
echo "=============================="

# 1. Install base packages
pkg update -y
pkg upgrade -y
pkg install -y x11-repo tur-repo proot-distro git wget curl \
  openssh termux-x11-nightly tigervnc

# 2. Install Ubuntu via proot
echo "[*] Installing Ubuntu..."
proot-distro install ubuntu

# 3. Install desktop + browser + x11vnc inside proot
proot-distro login ubuntu -- bash -c "
  export DEBIAN_FRONTEND=noninteractive
  apt update -y
  apt install -y xfce4 xfce4-goodies firefox chromium \
    x11vnc curl wget nano dbus-x11 \
    xfce4-terminal thunar

  # Set VNC password (same for x11vnc)
  mkdir -p ~/.vnc
  echo -e 'pawpals\npawpals' | vncpasswd -f > ~/.vnc/passwd
  chmod 600 ~/.vnc/passwd
"

# 4. Create main launcher script
cat > $PREFIX/bin/pawpals-desktop << 'TERMUX'
#!/data/data/com.termux/files/usr/bin/bash

# Kill existing sessions
termux-x11 --kill 2>/dev/null || true
pkill -f "termux-x11" 2>/dev/null || true
pkill -f "x11vnc" 2>/dev/null || true

# 5-second window to open Termux:X11 app
echo "============================================"
echo " STEP 1: Open Termux:X11 app on your phone"
echo "         (looks like a black screen)"
echo "============================================"
echo ""
echo " Waiting 10 seconds for you to open it..."
sleep 10

# Start Termux:X11 server
termux-x11 :1 -xres 1280x720 &
sleep 2

export DISPLAY=:1
export PULSE_SERVER=tcp:127.0.0.1

# Start XFCE desktop inside proot
proot-distro login ubuntu -- bash -c "
  export DISPLAY=:1
  export HOME=/root
  dbus-launch --exit-with-session startxfce4 &
  sleep 5

  # Start x11vnc sharing the SAME display (Termux:X11 :1)
  x11vnc -display :1 -forever -shared -rfbport 5900 \
    -passwd pawpals -bg -o ~/.vnc/x11vnc.log

  # Launch browser
  firefox --display=:1 &
  sleep 2
" &

echo ""
echo "=============================="
echo " LOCAL: Termux:X11 is running"
echo "=============================="
echo ""
echo "Setup reverse tunnel for remote control?"
echo "1) Serveo (ssh -R, no account needed)"
echo "2) Skip (local only)"
read -p "Choice [1/2]: " ch

if [ "$ch" = "1" ]; then
  echo "[*] Starting Serveo tunnel (VNC port 5900)..."
  echo "[*] Share this URL with the remote person:"
  ssh -o StrictHostKeyChecking=no \
    -o ServerAliveInterval=30 \
    -R 80:localhost:5900 serveo.net 2>&1 | head -5
fi
TERMUX

chmod +x $PREFIX/bin/pawpals-desktop

echo ""
echo "=============================="
echo " Setup Complete!"
echo "=============================="
echo ""
echo "To start:"
echo "  1. Open Termux:X11 app"
echo "  2. In Termux terminal, run:"
echo "     pawpals-desktop"
echo ""
echo "You'll see XFCE desktop on your phone via Termux:X11."
echo "Remote person connects via the Serveo VNC URL."
echo "VNC password: pawpals"
echo ""
echo "They'll see and control the SAME desktop as you."
echo ""

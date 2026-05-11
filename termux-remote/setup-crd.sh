#!/data/data/com.termux/files/usr/bin/bash
# Lite version - Chrome Remote Desktop (more reliable)
# Run this in Termux on Android

set -e

pkg update -y
pkg install -y x11-repo tur-repo proot-distro git wget curl

proot-distro install ubuntu

proot-distro login ubuntu -- bash -c "
  export DEBIAN_FRONTEND=noninteractive
  apt update -y
  apt install -y xfce4 xfce4-goodies firefox chromium \
    curl wget nano htop desktop-base dbus-x11

  # Install Chrome Remote Desktop
  wget -q https://dl.google.com/linux/direct/chrome-remote-desktop_current_amd64.deb
  apt install -y ./chrome-remote-desktop_current_amd64.deb 2>/dev/null || {
    apt install -y -f
    dpkg -i ./chrome-remote-desktop_current_amd64.deb 2>/dev/null || true
  }
  rm -f chrome-remote-desktop_current_amd64.deb

  # Set XFCE as default for CRD
  bash -c 'echo \"exec /usr/bin/xfce4-session\" > /etc/chrome-remote-desktop-session'

  echo ''
  echo '============================='
  echo ' Chrome Remote Desktop Setup'
  echo '============================='
  echo ''
  echo '1. Install Chrome Remote Desktop on your PC:'
  echo '   https://remotedesktop.google.com/headless'
  echo ''
  echo '2. In proot Ubuntu, run:'
  echo '   DISPLAY= /opt/google/chrome-remote-desktop/start-host --code=\"YOUR_CODE\"'
  echo '   --redirect-url=\"https://remotedesktop.google.com/_/oauthredirect\" --name=PawPals-Android'
  echo ''
  echo '3. Access from https://remotedesktop.google.com/access'
  echo ''
  echo 'Note: Chrome Remote Desktop handles NAT/firewall/auth automatically.'
  echo 'Much more reliable than VNC over mobile networks.'
  echo ''
"

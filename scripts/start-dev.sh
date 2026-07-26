#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Prefer Homebrew Node 22 — system Node 24 is currently broken on this machine.
if [[ -x /opt/homebrew/opt/node@22/bin/node ]]; then
  export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
fi

echo "node: $(node -v) ($(command -v node))"
ulimit -n 65536 2>/dev/null || true

echo "Stopping listeners on ports 3000-3010..."
for port in $(seq 3000 3010); do
  pids=$(lsof -nP -iTCP:"$port" -sTCP:LISTEN -t 2>/dev/null || true)
  if [[ -n "${pids}" ]]; then
    echo "  kill $port -> $pids"
    kill -9 $pids 2>/dev/null || true
  fi
done
pkill -9 -f "next dev" 2>/dev/null || true
sleep 1

if lsof -nP -iTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Port 3000 still busy. Run: kill -9 \$(lsof -nP -iTCP:3000 -sTCP:LISTEN -t)"
  exit 1
fi

rm -rf .next
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="${NODE_OPTIONS:-} --max-old-space-size=4096"

echo "Starting http://127.0.0.1:3000"
npm run dev -- --port 3000 --hostname 127.0.0.1

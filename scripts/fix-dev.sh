#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Raising file descriptor limit"
ulimit -n 65536 2>/dev/null || ulimit -n 10240 2>/dev/null || true
echo "    ulimit -n = $(ulimit -n)"

echo "==> Freeing ports 3000-3015 and stopping Node/Next"
for port in $(seq 3000 3015); do
  pids=$(lsof -nP -iTCP:"$port" -sTCP:LISTEN -t 2>/dev/null || true)
  if [[ -n "${pids}" ]]; then
    echo "    killing port $port -> $pids"
    kill -9 $pids 2>/dev/null || true
  fi
done
killall -9 node 2>/dev/null || true
pkill -9 -f "next dev" 2>/dev/null || true
pkill -9 -f "next-server" 2>/dev/null || true
sleep 1
if lsof -nP -iTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "!! Port 3000 still busy. Run:"
  echo '   kill -9 $(lsof -nP -iTCP:3000 -sTCP:LISTEN -t)'
  exit 1
fi
echo "    port 3000 is free"

echo "==> Clearing caches"
rm -rf .next /tmp/the-business-unicorn-next

export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="${NODE_OPTIONS:-} --max-old-space-size=4096"

echo "==> Starting http://127.0.0.1:3000 (webpack, Tailwind PostCSS off for now)"
echo "    First compile should be under ~30s if the hang is fixed."
npm run dev -- --port 3000 --hostname 127.0.0.1

#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# macOS default soft limit is often 256; Next/Turbopack watchers need far more.
ulimit -n 65536 2>/dev/null || ulimit -n 10240 2>/dev/null || true
echo "File descriptor limit: $(ulimit -n)"

# Prefer polling when the OS watcher hits EMFILE (too many open files).
export WATCHPACK_POLLING=true
export CHOKIDAR_USEPOLLING=true
export NEXT_TELEMETRY_DISABLED=1

echo "Stopping Next.js / Node servers on ports 3000-3015..."
for port in 3000 3001 3002 3003 3010 3011 3456 3055; do
  pids=$(lsof -nP -iTCP:"$port" -sTCP:LISTEN -t 2>/dev/null || true)
  if [[ -n "${pids}" ]]; then
    echo "  killing port $port -> $pids"
    kill -9 $pids 2>/dev/null || true
  fi
done

pkill -f "next-server" 2>/dev/null || true
pkill -f "next dev" 2>/dev/null || true
pkill -f "next start" 2>/dev/null || true
sleep 1

echo "Removing stale lock only (keeping cache for faster startup)..."
rm -f .next/lock .next/dev/lock

echo "Starting local dev server on http://127.0.0.1:3000 (webpack) ..."
echo "First page load can take up to a minute. After that, refreshes should be quick."
npm run dev -- --port 3000 --hostname 127.0.0.1

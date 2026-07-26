#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/../public"

PORT="${1:-8080}"

echo "Stopping anything on port $PORT..."
pids=$(lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null || true)
if [[ -n "${pids}" ]]; then
  kill -9 $pids 2>/dev/null || true
fi

echo "Static preview (no Next.js compile):"
echo "  http://127.0.0.1:${PORT}/preview.html"
echo
echo "Press Ctrl+C to stop."
python3 -m http.server "$PORT" --bind 127.0.0.1

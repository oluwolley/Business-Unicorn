#!/usr/bin/env bash
# Run this in Terminal.app (outside Cursor) for the best chance of fixing local Next.
set -euo pipefail

SRC="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${HOME}/Developer/the-business-unicorn"

echo "==> 1) Kill stuck Node/Next"
killall -9 node 2>/dev/null || true
sleep 1

echo "==> 2) Copy project off Desktop to $DEST"
mkdir -p "$(dirname "$DEST")"
# Skip node_modules/.next — step 4 reinstalls deps fresh anyway.
rsync -a --delete \
  --exclude '.next' \
  --exclude 'node_modules' \
  --exclude '.git/objects/pack/*.tmp' \
  "$SRC/" "$DEST/"
cd "$DEST"

echo "==> 3) Prefer Node 22 if available"
if command -v nvm >/dev/null 2>&1; then
  # shellcheck disable=SC1090
  . "$(nvm_find_nvmrc >/dev/null 2>&1 && echo)" || true
fi
if [[ -x /opt/homebrew/opt/node@22/bin/node ]]; then
  export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
elif command -v brew >/dev/null 2>&1; then
  echo "    Installing node@22 via Homebrew (may take a minute)..."
  brew install node@22 || true
  export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
fi
echo "    node: $(node -v)"
echo "    npm:  $(npm -v)"

echo "==> 4) Raise file limits and reinstall"
ulimit -n 65536 2>/dev/null || true
rm -rf .next node_modules
npm install

echo "==> 5) Start webpack dev server"
export NEXT_TELEMETRY_DISABLED=1
npm run dev -- --port 3000 --hostname 127.0.0.1

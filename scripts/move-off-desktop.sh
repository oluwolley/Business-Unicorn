#!/usr/bin/env bash
# Move this project off iCloud Desktop onto a fast local folder, then start dev.
set -euo pipefail

SRC="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${HOME}/Developer/the-business-unicorn"

echo "Next warned: slow filesystem on Desktop (often iCloud)."
echo "Copying:"
echo "  from: $SRC"
echo "  to:   $DEST"
echo

mkdir -p "$(dirname "$DEST")"
rsync -a --delete --exclude '.next' "$SRC/" "$DEST/"

echo
echo "Done. Next steps:"
echo "  1. In Cursor: File → Open Folder → $DEST"
echo "  2. In a terminal there:"
echo "       bash scripts/fix-dev.sh"
echo "  3. Open http://127.0.0.1:3000"

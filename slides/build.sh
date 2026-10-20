#!/bin/sh
# Usage: ./build.sh <deck-dir>/<deck>.md   (writes <deck>.pdf next to it)
set -e
cd "$(dirname "$0")"
[ -d node_modules ] || npm install --silent --no-package-lock
md=$(realpath "$1")
dir=$(dirname "$md")
html="${md%.md}.html"
node render.mjs "$md" "$html"
weasyprint -q -u "$dir/" "$html" "${md%.md}.pdf"
rm "$html"

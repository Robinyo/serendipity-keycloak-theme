#!/bin/bash
set -o errexit

declare -r currentDir="$(dirname "${BASH_SOURCE[0]}")"
source "${currentDir}/build.properties"

DISTRIBUTION_NAME=serendipity-keycloak-theme-$THEME_VERSION

echo "Removing '$DISTRIBUTION_NAME.zip'"
rm -rf $DISTRIBUTION_NAME.zip

mkdir serendipity
echo "Packaging Serendipity Keycloak theme as '$DISTRIBUTION_NAME.zip'"

cp -rf theme/* serendipity/
zip -r $DISTRIBUTION_NAME.zip serendipity -x "*.DS_Store" "*Thumbs.db"

echo "Removing tempory files and folders"
rm -rf serendipity

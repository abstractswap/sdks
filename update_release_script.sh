#!/bin/bash

# Navigate to the sdks directory
cd sdks

# Find all package.json files
find . -name 'package.json' -type f | while read -r file; do
    # Use awk to replace the line
    awk '
    {
        if ($0 ~ /"release": "semantic-release"/) {
            print "    \"release\": \"semantic-release -e ../../.releaserc.js\""
        } else {
            print $0
        }
    }
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
done

echo "Replacement complete. Please check the package.json files to ensure the changes were made correctly."

#!/bin/bash

# List of packages to update
PACKAGES="permit2-sdk sdk-core universal-router-sdk v3-sdk router-sdk uniswapx-sdk v2-sdk v4-sdk"

# Function to update package.json files
update_package_json() {
    local file="$1"
    local temp_file="${file}.tmp"
    
    # Create a temporary file
    cp "$file" "$temp_file"
    
    for pkg in $PACKAGES; do
        # Remove workspace:* from dependencies
        sed -i '' "s|\"@abstractswap/$pkg\": \"workspace:\\*\"|\"@abstractswap/$pkg\": \"\"|g" "$temp_file"
        # Remove workspace:* from devDependencies
        sed -i '' "s|\"@abstractswap/$pkg\": \"workspace:\\*\"|\"@abstractswap/$pkg\": \"\"|g" "$temp_file"
        # Remove workspace:* from peerDependencies
        sed -i '' "s|\"@abstractswap/$pkg\": \"workspace:\\*\"|\"@abstractswap/$pkg\": \"\"|g" "$temp_file"
    done
    
    # Replace the original file with the updated one
    mv "$temp_file" "$file"
}

# Find all package.json files, excluding those in node_modules
find . -name "package.json" -not -path "*/node_modules/*" -type f | while read -r file; do
    echo "Updating $file"
    update_package_json "$file"
done

echo "All package.json files have been updated."

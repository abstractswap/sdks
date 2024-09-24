#!/bin/bash

PACKAGES="permit2-sdk sdk-core universal-router-sdk v3-sdk router-sdk uniswapx-sdk v2-sdk v4-sdk"

# Function to process TypeScript files
process_ts_files() {
    for pkg in $PACKAGES; do
        find . -type f -name "*.ts" -not -path "./node_modules/*" -exec grep -l "@uniswap/$pkg" {} + | xargs -I {} sed -i '' "s|@uniswap/$pkg|@abstractswap/$pkg|g" {}
    done
}

# Function to process package.json files
process_package_json() {
    find . -name "package.json" -type f -not -path "./node_modules/*" -print0 | while IFS= read -r -d '' file; do
        for pkg in $PACKAGES; do
            # Update dependencies
            sed -i '' "s|\"@uniswap/$pkg\": \(.*\)|\"@abstractswap/$pkg\": \1|g" "$file"
            # Update devDependencies
            sed -i '' "s|\"@uniswap/$pkg\": \(.*\)|\"@abstractswap/$pkg\": \1|g" "$file"
            # Update peerDependencies
            sed -i '' "s|\"@uniswap/$pkg\": \(.*\)|\"@abstractswap/$pkg\": \1|g" "$file"
        done
    done
}

# Main execution
echo "Processing TypeScript files..."
process_ts_files

echo "Processing package.json files..."
process_package_json

echo "Replacement complete."

#!/bin/bash

# File Templates
bash_path="scripts/create-component"
styles_template="$bash_path/defaults/styles.ts"
index_template="$bash_path/defaults/index.ts"
component_template="$bash_path/defaults/component.tsx"

# Path variables
main_path="src/"
directory=$main_path$1
name=${directory##*/}
index="$directory/index.ts"
component="$directory/$name.tsx"
styles="$directory/styles.ts"

# Create files
mkdir $directory
cat $styles_template > $styles
cat $index_template > $index
cat $component_template > $component

# Replace Placeholder Names
replace="s/PLACEHOLDER/$name/g"
perl -pi -e $replace $index
perl -pi -e $replace $component

echo "$name created!"

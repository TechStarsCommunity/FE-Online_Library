#!/bin/bash

# Fetch the latest changes from the remote repository
git fetch --all

# Loop through all remote branches
for branch in $(git branch -r | grep -v '\->' | awk '{print $1}' | grep -v 'HEAD' | sed 's/origin\///'); do
    # Reset the branch to origin/develop
    git checkout -B "$branch" "origin/$branch"
    git reset --hard "origin/develop"
done

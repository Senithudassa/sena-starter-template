#!/bin/zsh

# Initialize Git
git init
git branch -M main
git add .
git commit -m "Initial commit from Sena Starter"

# Create GitHub repo
echo -n "Enter GitHub token: "
read token
echo -n "Enter repository name: "
read repo_name

# Get GitHub username using API
username=$(curl -s -H "Authorization: token $token" https://api.github.com/user | grep '"login":' | cut -d'"' -f4)

# Create repository
curl -X POST -H "Authorization: token $token" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d "{\"name\":\"$repo_name\"}"

# Set remote and push
git remote add origin "https://${token}@github.com/${username}/${repo_name}.git"
git push -u origin main

echo "✅ GitHub repo created: https://github.com/${username}/${repo_name}"

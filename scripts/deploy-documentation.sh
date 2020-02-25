#!/usr/bin/env sh

set -e

PACKAGE_VERSION=$(cat lerna.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

npm run docs:build

cd docs/.vuepress/dist
touch .nojekyll

git init
git add -A
git commit -m "Documentation v${PACKAGE_VERSION} deploy"

git push -f git@github.com:preusx/dermis.git master:gh-pages
cd -

rm -rf docs/.vuepress/dist

echo "Deployed!"

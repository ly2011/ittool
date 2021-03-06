git checkout master

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  npm config set allow-same-version true
  npm config set registry http://registry.npmjs.org
  npm version $VERSION --no-git-tag-version
  VERSION=$VERSION npm run build

  # commit
  git tag v$VERSION
  git commit -am "[release] $VERSION"

  # publish
  git push origin master
  git push origin refs/tags/v$VERSION

  npm publish
fi
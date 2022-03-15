#!/bin/bash
git clone $CI_REPOSITORY_URL &> /dev/null
git config --global user.email $USEREMAIL
git config --global user.name $USERNAME

git fetch --tags
version="$(git tag --sort=committerdate | tail -1)"
if [ -z "$version" ]
then
    ver=0.0.0
fi
echo $version

major="$(cut -d "." -f 1 <<< $version)"
minor="$(cut -d "." -f 2 <<< $version)"
patch="$(cut -d "." -f 3 <<< $version)"
final_major=$((major+1))
final_minor=$((minor+1))
final_patch=$((patch+1))
reset_minor="0"
reset_patch="0"

if [$UPDATE_TYPE -eq "patch"]
then
    ver=("$major.$minor.$final_patch")
fi
if [$UPDATE_TYPE -eq "minor"]
then
    ver=("$major.$final_minor.$reset_patch")
fi
if [$UPDATE_TYPE -eq "major"]
then
    ver=("$final_major.$reset_minor.$reset_patch")
fi

echo "Post String"
echo $ver

if test -f "package.json"; then
    echo "package.json exist"
    echo $(cat package.json | jq '.version=$version' --arg version $ver) > package.json
fi

if test -f ".gitlab/.version"; then
    echo "package.json exist"
    echo "version=$ver" > .gitlab/.version
fi

echo "Upload Step"
#git stage ".gitlab/.version"; git stage "package.json"; git commit -m "version increment [skip ci]";
#git push http://${USERNAME}:${ACCESS_TOKEN}@gitlab.com/${CI_PROJECT_PATH}.git $CI_COMMIT_BRANCH
#git tag $ver ; git push http://${USERNAME}:${ACCESS_TOKEN}@gitlab.com/${CI_PROJECT_PATH}.git $ver

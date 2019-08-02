#! /bin/bash

SITE_PATH='/home/git/myBlog'

echo ${SITE_PATH}
cd ${SITE_PATH}
git checkout master 
echo "--------------------------Start to update my code--------------------------"
git reset --hard origin/master
git clean -f
echo "--------------------------Start to pull --------------------------"
git pull origin master
echo "--------------------------Pull Ok --------------------------"
chown -R $USER:$USERGROUP $SITE_PATH
echo "--------------------------Complete!--------------------------"

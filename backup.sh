#!/bin/bash
#Purpose = Backup of Important Data
#Created on 28-02-2017
#Version 1.0
#START
TIME=`date +%b-%d-%y`
FILENAME=backup-$TIME.tar.gz
mongodump -d juggernaut-server -o ~/home/anchal/Desktop/backupfile
tar -zcvf tar-archive-name.tar.gz juggernaut-server
#END 

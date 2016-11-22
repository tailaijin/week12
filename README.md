# week12

Windows
--------------------------------------
Download mongodb, go to terminal where mongo is installed, login as administrator, start mongod 

----------------------------------------------------------------------
cd to /Users/yourusername/

curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.0-rc2.tgz 

tar -zxvf mongodb-osx-x86_64-3.4.0-rc2.tgz 

mv mongodb-osx-x86_64-3.4.0-rc2 mongodb 

export PATH=/Users/yourusername/mongodb/bin:$PATH

mkdir data
cd data
mkdir db

Go to /Users/yourusername
sudo chown -R `id -u` /data/db
Go to /Users/yourusername/mongodb/bin
run mongodb


Download robomongo client at https://robomongo.org/ for mongodb to see the data

-------------------------------------------------------------------------------------------------------
mongo import example
--------------------------------
mongoimport -d charts -c columnchart --type csv --headerline --file /Users/yourusername/D3-WebCharts/filestoload/collegesByState.csv

--------------------------------------------------------------
MYSQL - MAC
------------------------------------------
http://dev.mysql.com/downloads/mysql/ - Download the DMG Archive and install 5.7

Follow the link below to install
http://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html

Download the MySql workbench from http://dev.mysql.com/downloads/workbench and follow the instructions.
-------------------------------------------------------------------------------------

MYSQL - Windows - Download the MySQL Installer MSI and follow the directions

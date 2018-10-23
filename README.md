# CyberMiles - DApp Framework Examples

CyberMiles decentralized applications can now be built by the global CyberMiles community. This repository, a work in progress, contains free DApp framework examples for creating e-commerce prototypes/proof-of-concepts/projects on the CyberMiles blockchain.

## One - Nodejs, Express and Pug (a.k.a Jade)

### Build "One" from scratch

The following script will create a blank Nodejs and Express example. See https://nodejs.org/en/ and https://expressjs.com/ for further development documentation.

```
#!/bin/bash
# Ubuntu 16.04LTS CyberMiles DApp example
# This is a script which can quickly create an environment in which a CyberMiles decentralized application can be created from scratch.

# Housekeeping
cd ~
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install build-essential

# Global variables
projectFolder="example_one"
dAppName="src"

# Install Nodejs
wget -qO- https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get upgrade
sudo apt-get -y install nodejs

# Install npm
sudo apt-get -y install npm
sudo npm -y install npm@latest -g

# Initialize - Answer questions similar to below, but obviously using your own information
cd ~
mkdir $projectFolder
cd $projectFolder
sudo chown -R $USER:$(id -gn $USER) /home/ubuntu/.config
npm init

#name: (example_one) 
#version: (1.0.0) 
#description: A CyberMiles DApp example using https://nodejs.org/en/ and https://expressjs.com/
#entry point: (index.js) 
#test command: test
#git repository: https://github.com/CyberMiles/cybermiles-dapp-framework-examples.git
#keywords: CyberMiles DApp
#author: @tpmccallum
#license: (ISC) MIT

# Save express permanently to the project
npm install express --save

# Save CMT Web3 permanently to the project
npm install web3-cmt --save

# Create the project skeleton using express-generator
cd ~
cd $projectFolder
sudo npm -y install express-generator -g
express --view=pug $dAppName
cd $dAppName
npm install

# Start the application which will be available on port 3000 of the machine
# http://hostname:3000


# Starts the app 
# npm start

# Starts the app in Debug mode (which is what we should use when developing and testing)
DEBUG=$dAppName:* npm start

```

### Clone "One" and start the application

You can clone and deploy the example called "One" by using the following commands

```
cd ~
https://github.com/CyberMiles/cybermiles-dapp-framework-examples.git
cd cybermiles-dapp-framework-examples
cd example_one/src
npm install

# Starts the app 
npm start

# Starts the app in Debug mode (which is what we should use when developing and testing)
# DEBUG=$dAppName:* npm start

```


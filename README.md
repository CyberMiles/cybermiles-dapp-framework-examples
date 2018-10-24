# CyberMiles - DApp Framework Examples

CyberMiles decentralized applications can now be built by the global CyberMiles community. This repository, a work in progress, contains free DApp framework examples for creating e-commerce prototypes/proof-of-concepts/projects on the CyberMiles blockchain.

## Example one - Nodejs, Express and Pug (a.k.a Jade)

### Build example one skeleton from scratch

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

# Save Web3 CMT permanently to the project
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

### Clone example one and start the application

You can clone and deploy this example one source code if you want a head-start. Feel free to build on top of this example; the source code in this repo will continue to grow (as apposed to the above skeleton which will always just be the bare bones of an application to get you started from scratch).

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

![Screenshot](https://github.com/CyberMiles/cybermiles-dapp-framework-examples/blob/master/images/example_one_screenshot.png)

### Providing a blockchain for the application to talk to

There is a shell script which will install a CyberMiles testnet node on a local Ubuntu 16.04 LTS instance. This script is located in the README file of the https://github.com/CyberMiles/travis GitHub page.

Once the CyberMiles testnet is synced, the following sort of syntax can be used to talk to the blockchain via the DApp i.e. to get the block height via the DApp's index page, we would firstly need to add this code to the index.js file so that we could access the local CMT node using web3cmt.

```
var Web3 = require("web3-cmt")
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
```

We would then be able to execute the following function, which would return the block height.
```
web3.eth.getBlock(function(error, result){ if(!error) console.log(JSON.stringify(result)); else console.log(error); })
```


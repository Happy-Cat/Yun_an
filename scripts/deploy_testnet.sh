#!/bin/bash
set -e

echo "==>deploy_testnet..."

echo '$ npm -v'
npm -v

echo '$ node -v'
node -v

echo "build..."
echo "$ npm run build"
npm run build

echo "deploy..."

workdir=$(cd $(dirname $0); pwd)
sh ${workdir}/deploy_package.sh  azureuser@10.0.3.4  /home/azureuser/testnet_dfuture  /home/azureuser/upgrade-temp  azureuser@13.75.108.221



echo "==>deploy_testnet completed"

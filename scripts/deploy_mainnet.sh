#!/bin/bash
set -e

echo "==>deploy_mainnet..."
# workdir
workdir=$(cd $(dirname $0); pwd)
# import utils
source $workdir/utils.sh

echo '$ npm -v'
npm -v

echo '$ node -v'
node -v

# check balance
check_branch "master"

echo "==>build..."
echo "$ npm run build"
# npm run build
export DEPLOY_IN_CDN=true && npm run build

echo "==>deploy..."

# workdir=$(cd $(dirname $0); pwd)

# sh ${workdir}/deploy_package.sh  azureuser@10.0.3.25  /home/azureuser/defi_www  /home/azureuser/upgrade-temp  azureuser@13.75.108.221

echo "请手动将dist下的目录上传到BLOB中， 在执行update.index.sh将index.html入口文件复制到nginx服务器目录..."

echo "==>deploy_mainnet completed"

#!/bin/bash
set -e

echo "package dist..."

if [ -z "$1" ]; then
  echo "required ssh remote server"
  exit 1
fi
if [ -z "$2" ]; then
  echo "required remote server deployPath"
  exit 1
fi
if [ -z "$3" ]; then
  echo "required remote server upgradeTemp"
  exit 1
fi

# package
build_dir="dist_package"
packName=dfuture_heco_test_dist_`date -u +%Y-%m-%dT%TZ`.tar.gz
# packName=client_dist_latest.tar.gz
distFile=${build_dir}/${packName}
# deploy
deployServer=$1
deployPath=$2
upgradeTemp=$3
proxyCommand=$4


if [ -d "${build_dir}" ]; then
  echo '==>rm -r '${build_dir}
  rm -r ${build_dir}
else
  rm ${build_dir}/*
fi
echo '==>mkdir '${build_dir}
mkdir ${build_dir}

#
if [ -f ${distFile} ];then
  echo "==>rm ${distFile}"
  rm ${distFile}
fi
# tar
echo "==>tar zcvf ${distFile} -C ./dist ." \
  && tar zcf ${distFile} -C ./dist . \
  && echo "==>tar completed"

# # md5sum
# (echo "==>cd ${build_dir}" \
#   && cd ${build_dir} \
#   && echo "==>md5sum ${packName}" \
#   && md5sum ${packName} > ${packName}.md5 \
#   && cat ${packName}.md5 )

#
if [ -z "$proxyCommand" ]; then
  echo "scp remote..."
  echo "==>scp ${distFile} ${deployServer}:${upgradeTemp}" \
    && scp ${distFile} ${deployServer}:${upgradeTemp}

  echo "upgrade..."
  echo "==>tar zxvf ${upgradeTemp}/${packName} -C ${deployPath}"
  ssh ${deployServer} "tar zxvf ${upgradeTemp}/${packName} -C ${deployPath}"
else
  echo "scp remote by proxy..."
  echo "==>scp ${distFile} ${deployServer}:${upgradeTemp}" \
    && scp -o ProxyCommand="ssh -q ${proxyCommand} -W %h:%p" ${distFile} ${deployServer}:${upgradeTemp}

  echo "upgrade..."
  echo "==>tar zxvf ${upgradeTemp}/${packName} -C ${deployPath}"
  ssh ${deployServer} -o ProxyCommand="ssh -q ${proxyCommand} -W %h:%p"  "tar zxvf ${upgradeTemp}/${packName} -C ${deployPath}"
fi

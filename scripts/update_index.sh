#
# 更新移动暖的入口index.html文件
#
# workdir
workdir=$(cd $(dirname $0); pwd)
# import utils
source $workdir/utils.sh

# 版本号
version=1.2.0

# check balance
check_branch "master"

scp -o ProxyCommand='ssh -q azureuser@13.75.108.221 -W %h:%p' -r ./dist/$version/{index.html,release_tag.txt} azureuser@10.0.3.25:/home/azureuser/defi_www
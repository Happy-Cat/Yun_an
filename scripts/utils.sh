
check_branch() {
  if [ -z "$1" ]; then
    echo "required allow branch"
    exit 1
  fi

  current_branch=$(git branch|awk '{print $2}'| grep -o "[^ ]\+\( \+[^ ]\+\)*")

  debug_info="current branch is $current_branch, allow branch is $1"

  if [[ $current_branch != $1 ]]; then
    echo "ERROR: check_branch failed!!! $debug_info"
    exit;
  fi
  echo "check_branch ok. $debug_info"
}

main_branch=dev
# 发布脚本名称，省略sh 比如当前脚本 push.sh
source=push

message_params=$1

# 默认上传消息
git_message="update dev"

# 错误日志输出目录
path="$(pwd)/log"
log=$path/$source-error.log

# $1 表示命令行参数中的第一个参数，即传递给脚本的第一个参数。
# $0 表示当前脚本的名称或路径。

# 判断信息是否存在
message_check(){
    # 判断是否有输入消息参数
   if [ -n "$message_params" ]
   then
      git_message=$message_params
   fi
}
# 检查日志目录是否存在不存在则创建
check_log() {
    if [ -e $path]
        echo "日志目录已存在，错误日志将输出到 $log"
    then
        echo "正在生成错误日志目录……😊"
        mkdir -p $path
    fi
}

# 执行脚本
exec_project(){
    echo "项目推送中!修改信息为……🍊 $message_params"
    cd $1
    # 发布到主分支的消息
    git add -A  2>>$log
    git commit -m "$git_message"
    git push origin "$main_branch"
    echo "主分支推送成功！🎉🎉🎉"
}

message_check
check_log

# 判断当前路径是bin目录还是项目目录
if [[ "$0" == "$source.sh" || "$0" == "./$source.sh" ]]
then
   echo "当前执行目录为bin目录 🚗"
   exec_project ..
else
   echo "当前执行目录为工程目录 🛹"
   exec_project .
fi
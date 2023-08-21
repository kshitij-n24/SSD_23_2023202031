#! /bin/bash

cpp_files=$(ls $1 | grep -e .cpp$)

for i in $cpp_files;
do
    if [ "$1"=~/$ ]; then
        grep "#include" "$1""$i"
      else
        path="$1"/"$i"
        grep "#include" $path
    fi
done

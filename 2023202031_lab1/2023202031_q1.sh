#! /bin/bash 

sort $1 | head -n $(($(wc -l $1 | cut -b 1)/2 + 1)) | tail -n 1

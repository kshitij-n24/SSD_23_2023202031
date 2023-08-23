#! /bin/bash

read num_test_cases 

read -a arr

for i in ${arr[*]}; 
  do
    chk_even=$(( $i % 2 ))
    if [ $chk_even -ne 0 ]; then
    half_rows=$(( i/2 ))
    for (( j=0; j<=half_rows; j++ ));
      do
            if [ $i -lt $(( 2*$j+1 )) ]; then
                num_spaces=$(( (2*$j+1) - $i ))
              else
                num_spaces=$(( $i - (2*$j+1) ))
            fi
            
            inst_num_limit=$(( num_spaces/2 ))
            row_arr=()
            idx_row_char=0
            for (( l=0; l<inst_num_limit; l++ ));
              do
                row_arr[$idx_row_char]=" "
                idx_row_char=$(( idx_row_char+1 ))
              done
            for (( m=0; m<( 2*j+1 ) ; m++ )); do
                row_arr[$idx_row_char]="*"
                idx_row_char=$(( idx_row_char+1 ))
            done
            for (( n=0; n<inst_num_limit; n++ ));
              do
                row_arr[$idx_row_char]=" "
                idx_row_char=$(( idx_row_char+1 ))
              done
        echo "${row_arr[*]}"
      done
      for (( j=half_rows-1; j>=0; j-- ));
      do
            if [ $i -lt $(( 2*$j+1 )) ]; then
                num_spaces=$(( (2*$j+1) - $i ))
              else
                num_spaces=$(( $i - (2*$j+1) ))
            fi
            
            inst_num_limit=$(( num_spaces/2 ))
            row_arr=()
            idx_row_char=0
            for (( l=0; l<inst_num_limit; l++ ));
              do
                row_arr[$idx_row_char]=" "
                idx_row_char=$(( idx_row_char+1 ))
              done
            for (( m=0; m<( 2*j+1 ) ; m++ )); do
                row_arr[$idx_row_char]="*"
                idx_row_char=$(( idx_row_char+1 ))
            done
            for (( n=0; n<inst_num_limit; n++ ));
              do
                row_arr[$idx_row_char]=" "
                idx_row_char=$(( idx_row_char+1 ))
              done
        echo "${row_arr[*]}"
      done   
    fi
  done

#! /usr/bin/env python3

import csv
from tabulate import tabulate
import random

data_list = []
headers = []

with open("stock_data.csv", "r") as data_file:
    stock_reader = csv.reader(data_file, delimiter=",")
    for line in stock_reader:
        data_list.append(line)

    headers = data_list[0]
    data_list.pop(0)

def write_to_csv(file_name):
    with open(file_name, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(headers)
        for i in data_list:
            writer.writerow(i)

# Q 1.1


for row in data_list:
    for i in range(6):
        row.pop()

write_to_csv("Q1_1.txt")

# Preprocessing

data_list = list(map(lambda row: [sub.replace(',', '') for sub in row], data_list))

# Q 1.2

data_list = list(filter(lambda x: (float(x[6]) > -3) , data_list))

write_to_csv("Q1_2.txt")

# Q 1.3

open_list = list(map(lambda x: float(x[1]), data_list))
avg_open = sum(open_list)/len(open_list)

high_list = list(map(lambda x: float(x[2]), data_list))
avg_high = sum(high_list)/len(high_list)

low_list = list(map(lambda x: float(x[3]), data_list))
avg_low = sum(low_list)/len(low_list)

with open("Q1_3.txt", "w") as out3:
    out3.write(f"Average of open {avg_open}\n")
    out3.write(f"Average of high {avg_high}\n")
    out3.write(f"Average of low {avg_low}\n")

# Q 1.4

srch_let = input("Please enter a letter to search from: ")

out4_table = []

for row in data_list:
    if row[0][0].lower() == srch_let.lower():
        out4_table.append([row[0], row[4]])

data_list = out4_table
headers = ['Symbol', 'LTP']

print(tabulate(data_list, headers=headers))

write_to_csv("Q1_4.txt")

# Q 1.5

headers = ['Salary', 'Age', 'Class', 'Status']

ran_sal = 0
ran_age = 0
ran_class = 0
ran_status = 0

age_list = range(21, 55)
class_list = ['A','B','C','D','E','F']
status_list = [True, False]

data_list = []

for i in range(10):
    ran_sal = random.uniform(10000.00, 50000.00)
    ran_age = random.choice(age_list)
    ran_class = random.choice(class_list)
    ran_status = random.choice(status_list)

    data_list.append([ran_sal, ran_age, ran_class, ran_status])



write_to_csv("Q1_5.txt")

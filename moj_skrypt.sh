#!/bin/bash

# Runs verifyta on concrete and abstract models

# Colours
ColorOff='\033[0m'      # Text Reset
URed='\033[4;31m'       # Red
UBlue='\033[4;34m'      # Blue
Grey='\033[0;30m'       # grey
# Uppaal path
UPPATH=~/Desktop/uppaal-4.1.24/bin-Linux/verifyta

CMODEL='./sample_input/model.xml'
AMODEL='./output_files/a1_i3.xml'
QUERY='./sample_input/queries.q'
LOGFILE='./output_files/mojlog.txt'
CSVFILE='./output_files/result.csv'

MODEL_DIR='./output_files'
# AMODEL_LIST1=("a1_t" "a1_i1" "a1_i2" "a1_i3" "a1_i4")
AMODEL_LIST1=("a1_t")
# AMODEL_LIST2=("a2_t" "a2_i")

NLIST=('1' '2' '3')

date +"%c" > $LOGFILE

echo -e "conf\tSt\ttime" > $CSVFILE

for NV in {1..3}; do
    for NC in {1..3}; do
        AFILE="a2_${NV}_${NC}_may"
        UARGS="-u ${MODEL_DIR}/${AFILE}.xml $QUERY"
        
        echo -e "${UBlue}Verifying abstract model (${AFILE})...${ColorOff}"
        res=$($UPPATH $UARGS  2>>$LOGFILE | tail -6 | tee /dev/tty)
        
        REG_STATES='(?<=States stored : )(\d+)(?= states)'
        REG_CPU='(?<=CPU user time used : )(\d+)(?= ms)'
        
        states=$(echo $res | grep -Po "${REG_STATES}")
        cputime=$(echo $res | grep -Po "${REG_CPU}")

        echo -e "$NV,$NC\t$states\t$cputime" >> $CSVFILE
    done
    printf %"$COLUMNS"s |tr " " "-"
done

column $CSVFILE -s $'\t' -t

# note UPPAAL warnings/errors are omitted 
num_warn=$(grep -c "warning" $LOGFILE)
num_err=$(grep -c "error" $LOGFILE)
echo -e "${Grey}Check log file for warnings ($num_warn) and errors ($num_err).${ColorOff}"

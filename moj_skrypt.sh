#!/bin/bash

# Runs verifyta on concrete and abstract models

# Colours
ColorOff='\033[0m'      # Text Reset
URed='\033[4;31m'       # Red
UBlue='\033[4;34m'      # Blue
Grey='\033[0;30m'       # grey
# Uppaal path
UPPATH=~/Desktop/uppaal-4.1.24/bin-Linux/verifyta
UPPATH_OLD=~/Desktop/uppaal-4.0.15/bin-Linux/verifyta
UPPATH64=~/Desktop/uppaal64-4.1.24/bin-Linux/verifyta

CMODEL='./sample_input/model.xml'
QUERY='./sample_input/queries.q'
LOGFILE='./output_files/mojlog.txt'
CSVFILE='./output_files/result.csv'
MODEL_DIR='./output_files'

date +"%c" > $LOGFILE

# APREF_ARR=('a1' 'a2' 'a12')
# ASUFF_ARR=('may' 'must')

APREF_ARR=('a2')
ASUFF_ARR=('must')

CSVFILE="./output_files/result_c.csv"
echo -e "conf\tSt\ttime" > $CSVFILE
for NV in {1..13}; do
    for NC in {1..3}; do
        AFILE="c_${NV}_${NC}"
        UARGS="-u ${MODEL_DIR}/${AFILE}.xml $QUERY"
        
        echo -e "${UBlue}Verifying abstract model (${AFILE})...${ColorOff}"
        res=$($UPPATH $UARGS  2>>$LOGFILE | tail -6 | tee /dev/tty)
        # res=$($UPPATH_OLD $UARGS  2>>$LOGFILE | tail -6 | tee /dev/tty)
        
        REG_STATES='(?<=States stored : )(\d+)(?= states)'
        REG_CPU='(?<=CPU user time used : )(\d+)(?= ms)'
        
        states=$(echo $res | grep -Po "${REG_STATES}")
        cputime=$(echo $res | grep -Po "${REG_CPU}")

        echo -e "$NV,$NC\t$states\t$cputime" >> $CSVFILE
    done
    printf %"$COLUMNS"s |tr " " "-"
done
column $CSVFILE -s $'\t' -t


# for APREF in "${APREF_ARR[@]}"; do
#     for ASUFF in "${ASUFF_ARR[@]}"; do
#         CSVFILE="./output_files/result_${APREF}_${ASUFF}.csv"
#         echo -e "conf\tSt\ttime" > $CSVFILE
#         for NV in {1..10}; do
#             for NC in {1..3}; do
#                 AFILE="${APREF}_${NV}_${NC}_${ASUFF}"
#                 UARGS="-u ${MODEL_DIR}/${AFILE}.xml $QUERY"
                
#                 echo -e "${UBlue}Verifying abstract model (${AFILE})...${ColorOff}"
#                 # res=$($UPPATH $UARGS  2>>$LOGFILE | tail -6 | tee /dev/tty)
#                 res=$($UPPATH64 $UARGS  2>>$LOGFILE | tail -6 | tee /dev/tty)
#                 # res=$($UPPATH_OLD $UARGS  2>>$LOGFILE | tail -6 | tee /dev/tty)
                
#                 REG_STATES='(?<=States stored : )(\d+)(?= states)'
#                 REG_CPU='(?<=CPU user time used : )(\d+)(?= ms)'
                
#                 states=$(echo $res | grep -Po "${REG_STATES}")
#                 cputime=$(echo $res | grep -Po "${REG_CPU}")

#                 echo -e "$NV,$NC\t$states\t$cputime" >> $CSVFILE
#             done
#             printf %"$COLUMNS"s |tr " " "-"
#         done
#         column $CSVFILE -s $'\t' -t
#         printf %"$COLUMNS"s |tr " " "-"
#     done
# done

# note UPPAAL warnings/errors are omitted 
num_warn=$(grep -c "warning" $LOGFILE)
num_err=$(grep -c "error" $LOGFILE)
echo -e "${Grey}Check log file for warnings ($num_warn) and errors ($num_err).${ColorOff}"

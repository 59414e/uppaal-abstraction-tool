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

MODEL_DIR='./output_files/'
AMODEL_LIST=("a1_t" "a1_i1" "a1_i2" "a1_i3" "a1_i4")

date +"%c" > $LOGFILE
echo -e "${URed}Concrete model:${ColorOff}"
$UPPATH -u $CMODEL $QUERY  | tail -6

for mname in ${AMODEL_LIST[@]}; do
    echo -e "${UBlue}Abstract model ${mname}:${ColorOff}"
    $UPPATH -u "${MODEL_DIR}${mname}.xml" $QUERY 2>>$LOGFILE | tail -6
done

# echo -e "${UBlue}Abstract model:${ColorOff}"
# $UPPATH -u $AMODEL $QUERY 2>>$LOGFILE | tail -6

echo -e "${Grey}Check log file for warnings/errors if any${ColorOff}"
# note UPPAAL warnings/errors are omitted 
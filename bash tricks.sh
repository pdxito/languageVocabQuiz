#!/bin/bash
   for i in `seq 1 10`;
        do
                curl http://www.manythings.org/bilingual/spa/$i.js >> $i.js
                echo $i
        done
        
        
        
        

rm [0-9]*
awk -F $'\t' 'BEGIN {OFS = FS} {print "\""$3"\""":""\""$5"\","'} 3.js



#!/bin/bash
   for i in `seq 1 100`;
        do
                awk -F $'\t' 'BEGIN {OFS = FS} {print "\""$3"\""":""\""$5"\","'} $i.js >> sayings.js
        done
        
// -v is the invert in the grep search
cat sayings.js | grep -v '"":"",' >> phrases.js
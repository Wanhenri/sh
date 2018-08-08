#/bin/bash
#

dir=/stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064


for prev in 24 
do
echo "${prev}"
echo "Inicio mergetime"
cdo -r mergetime $dir/JAN2017_${prev}Z_'*Z.nc' $dir/JAN2017_24Z.nc
echo "Fim mergetime"
echo "inicio media diaria"
cdo -r dayavg $dir/JAN2017_${prev}Z.nc $dir/JAN2017_${prev}Z_diaria.nc
echo "fim media diaria"
done

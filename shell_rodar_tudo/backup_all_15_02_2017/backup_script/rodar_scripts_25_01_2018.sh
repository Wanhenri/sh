#/bin/bash
#
# versao 0.1
#
# NOME
#   rodar_scripts.sh
#
# DESCRICAO
#   Roda diversos scripts: grib ; grafico imagem (modelo Vs observado) ; series ; taylor  
#
# NOTA
#   Um log em /var/log/$SCRIPT.log e gerado a cada execucao deste script.
#
#  CRIADO_POR	   Wanderson Henrique dos Santos    18/01/2018
#  MODIFICADO_POR  (DD/MM/YYYY)
#  Wanderson     (20/01/2018) -  Modifiquei o local do script para um diretorio no online19...w.santos...ano_2018
#  Wanderson     (22/01/2018) -  Script funcionando com o acrescimo do 'for'
#  Wanderson     (24/01/2018) -  Acrescentei o campo de concaternar os dados e logo em seguida fazer a media diaria
#				obs.: como nao consegui acumular os dados em 18z 00z 06z 12z , resolvi fazer a media
#				diaria.
#				PARA O FUTURO: ENCONTRAR UMA FORMA DE ACUMULAR OS DADOS
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
#  [nome]     (DD/MM/YYYY) -  Descrição
dirin=/stornext/online19/mcga_fisica/w.santos/ano_2018/shell_rodar_tudo
dirout=/stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064
diroutscrp=/stornext/online19/mcga_fisica/w.santos/ano_2018/shell_rodar_tudo/template
dirconvert=/stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064
log=$dirout/log.txt
echo "Inicio: `date +%d-%m-%y_%H:%M:%S`" >> $log

for tm in 18 00 06 12 
do
HH=${tm}
totalmes=31
mesone=DEC
mes=12
ano=2016
totalmestwo=1 #31
mestwo=JAN
#ano do 'janeiro' em questao
ano_prev=2017
dayinicial=${totalmes}
prev=24
	cat $dirin/grib2prev4tempo_shell.gs \
		 | sed s/{HH}/${HH}/g               \
		 | sed s/{TTM}/${totalmes}/g        \
		 | sed s/{MSO}/${mesone}/g   | sed s/{MS}/${mes}/g              \
		 | sed s/{AO}/${ano}/g              \
		 | sed s/{TTMTW}/${totalmestwo}/g   \
		 | sed s/{MTW}/${mestwo}/g   | sed s/{DIL}/${dayinicial}/g | sed s/{PV}/${prev}/g             \
	> ./grib2prev4tempo_shell_${prev}Z.gs
         mv grib2prev4tempo_shell_${prev}Z.gs $diroutscrp
# aplicando permissão
chmod +x $dirin/rodar_scripts.sh
# entrando na pasta
cd $diroutscrp
#executando
grads -lc grib2prev4tempo_shell_${prev}Z.gs
 echo "execucao: Finalizada"
 echo "Fim: `date +%d-%m-%y_%H:%M:%S`" >> $log
 echo "PREV:${mestwo}'_${prev}Z_${HH}"
#converter netCDF
 echo "converter ctl para netcdf"
 echo "$dirconvert/${mestwo}${ano_prev}_${prev}Z_${HH}Z.ctl!"
  cdo -f nc import_binary $dirconvert/${mestwo}${ano_prev}_${prev}Z_${HH}Z.ctl   $dirconvert/${mestwo}${ano_prev}_${prev}Z_${HH}Z.nc
   echo "conversao: Finalizada"
#  sleep 600 
done # Fim for tm=18 00 06 12 
#concatenar
#fazer media diaria
for prev in 24
do
echo "${prev}"
echo "Inicio mergetime"
cdo -r mergetime $dirout/JAN2017_${prev}Z_'*Z.nc' $dirout/JAN2017_24Z.nc
echo "Fim mergetime"
echo "inicio media diaria"
cdo -r dayavg $dirout/JAN2017_${prev}Z.nc $dirout/JAN2017_${prev}Z_diaria.nc
echo "fim media diaria"
done


 

exit

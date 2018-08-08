#/bin/bash
#
# versao 0.1
#
# NOME
#   rodar_scripts.sh
#
# OBJETIVO
#   Roda diversos scripts: grib ; grafico imagem (modelo Vs observado) ; series ; taylor
# DESCRICAO
#   1ºSepara os dados do modelo BAM TQ0666L64 em previsoes de 24h,48h,72h,96h,120h,144h,168. Cada previsao com 12z,00z,06z,12z.
#   2ºConverte cada .ctl em .nc
#        Ex.: cada 24h possui 18z,00z,06z,12z todos em .ctl
#   3ºConcatenar os dados de 18z,00z,06z,12z, de cada arquivo de previsao de 24h,48z,72h,96h,120h,144h,168h
#   4º Faz media diaria(dayavg - comando no cdo) de cada arquivo concatenado anteriormente
#   5ºGera as imagens de previsao de 24h,48h,72h,96h,120h,144h,168h
#
# LINGUAGEM
#   Foi utilizado: sed   //   grads  //  cdo
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
#  Wanderson     (29/01/2018) - Acrescentei a descricao no script
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

#=== FUNCTION ================================================================
#        NAME: PARTE 1
# DESCRIPTION:deletando arquivos que serao gerados novamente 
#  PARAMETER :
#===============================================================================
echo "deletando arquivo"
#GERA LOG
echo "Inicio: `date +%d-%m-%y_%H:%M:%S`" >> $log
#=== FUNCTION ================================================================
#        NAME: PARTE 2
# DESCRIPTION: 
#  PARAMETER :
#===============================================================================
#for pv in 24 48 72 96 120 144 168
#do
#for tm in 18 00 06 12 
#do
#    HH=${tm}
#    totalmes=30
#    mesone=NOV
#    mes=11
#    ano=2016
#    totalmestwo=31 #31
#    mestwo=DEC
#ano do 'janeiro' em questao
#    ano_prev=2016
#    dayinicial=${totalmes}
#    prev=${pv}
#	cat $dirin/grib2prev4tempo_shell.gs \
#		 | sed s/{HH}/${HH}/g               \
#		 | sed s/{TTM}/${totalmes}/g        \
#		 | sed s/{MSO}/${mesone}/g   | sed s/{MS}/${mes}/g              \
#		 | sed s/{AO}/${ano}/g              \
#		 | sed s/{TTMTW}/${totalmestwo}/g   \
#		 | sed s/{MTW}/${mestwo}/g   | sed s/{DIL}/${dayinicial}/g | sed s/{PV}/${prev}/g             \
#	> ./grib2prev4tempo_shell_${prev}Z.gs
#         mv grib2prev4tempo_shell_${prev}Z.gs $diroutscrp
## aplicando permissão
#    chmod +x $dirin/rodar_scripts.sh
# entrando na pasta
#    cd $diroutscrp
#executando
#    grads -lc grib2prev4tempo_shell_${prev}Z.gs
#    echo "execucao: Finalizada"
#    echo "Fim: `date +%d-%m-%y_%H:%M:%S`" >> $log
#    echo "PREV:${mestwo}'_${prev}Z_${HH}"
##converter netCDF
#    echo "converter ctl para netcdf"
#    echo "$dirconvert/${mestwo}${ano_prev}_${prev}Z_${HH}Z.ctl!"
#    cdo -f nc import_binary $dirconvert/${mestwo}${ano_prev}_${prev}Z_${HH}Z.ctl   $dirconvert/${mestwo}${ano_prev}_${prev}Z_${HH}Z.nc
#    echo "conversao: Finalizada"
##  sleep 600 
#done # Fim for tm=18 00 06 12 
#done # Fim 24 48
##=== FUNCTION ================================================================
#        NAME: PARTE 3
# DESCRIPTION: concatenar   ;   fazer media diaria 
#  PARAMETER :
#===============================================================================
for prev in 168
do
mestwo=DEC
#    echo "${prev}"
#    echo "Inicio mergetime"
#    cdo -r mergetime $dirout/${mestwo}2016_${prev}Z_'*Z.nc' $dirout/${mestwo}2016_${prev}Z.nc
#    echo "Fim mergetime"
    echo "inicio media diaria"
    cdo -r dayavg $dirout/${mestwo}2017_${prev}Z.nc $dirout/${mestwo}2017_${prev}Z_diaria.nc
    echo "fim media diaria"
done
#=== FUNCTION ================================================================
#        NAME: PARTE 4
# DESCRIPTION: gerar imagens 
#  PARAMETER : 
#===============================================================================
for hr in 168
do
hora=${hr}
diain=1
diaout=31
month=DEC
ano=2017
cat $diroutscrp/validation_new.gs \
                 | sed s/{H}/${hora}/g        \
                 | sed s/{DI}/${diain}/g   | sed s/{DO}/${diaout}/g              \
                 | sed s/{M}/${month}/g              \
                 | sed s/{A}/${ano}/g   \
> ./validation_new_${hora}Z.gs
mv validation_new_${hora}Z.gs $diroutscrp

# aplicando permissão
# entrando na pasta
    cd $diroutscrp
#executando
    grads -lc validation_new_${hora}Z.gs
done
#=== FUNCTION ================================================================
#        NAME: PARTE 5
# DESCRIPTION: juntar imagens 
#  PARAMETER : 
#===============================================================================
#for prev in 24 48
#do
#mogrify -trim validation_${prev}Z_JAN_2017.png
#done 
#montage -mode concatenate -tile 1x validation_*.png Validation_out.png
#abrir imagem concatenada
#display Validation_out.png

exit

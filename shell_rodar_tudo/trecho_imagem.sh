#/bin/bash
#
diroutscrp=/stornext/online19/mcga_fisica/w.santos/ano_2018/shell_rodar_tudo/template
dirout=/stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064

for hr in 24 48 72
do
hora=${hr}
diain=1
diaout=31
month=JAN
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

for prev in 24 48
do
mogrify -trim $dirout/validation_${prev}Z_JAN_2017.png
done 
montage -mode concatenate -tile 1x $dirout/validation_*.png Validation_out.png
abrir imagem concatenada
display $dirout/Validation_out.png



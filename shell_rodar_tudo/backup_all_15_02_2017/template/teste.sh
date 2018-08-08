#/bin/bash
#
hora=48
diain=1
diaout=3
month=JAN
ano=2017

cat validation_new.gs \
                 | sed s/{H}/${hora}/g        \
                 | sed s/{DI}/${diain}/g   | sed s/{DO}/${diaout}/g              \
                 | sed s/{M}/${month}/g              \
                 | sed s/{A}/${ano}/g   \
> ./validation_new_${hora}Z.gs

# aplicando permissão
# entrando na pasta
#executando
    grads -lc validation_new_${hora}Z.gs

exit


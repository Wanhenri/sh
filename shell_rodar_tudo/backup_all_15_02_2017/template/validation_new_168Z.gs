'reinit'
hora = '168'
diain = '1'
diaout = '28'
month = 'FEB'
ano='2017'

'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/'month''ano'_'hora'Z_diaria.nc'

'reset'
'set lat -50 50'
'set display color white'
'c'
'set gxout shaded'
'set clevs    2  4  6   8  10  12 14 16 18'
'set ccols   0 11 5  13  3  10 12  8  2  6' 
'set grads off'
'set t 1'
'p2=ave(prec,time=18Z'diain''month''ano',time=18Z0'diaout''month''ano')'
'd p2'
'draw title BAM 'hora'Z 'month'/'ano' 'hora'Z'
'run cbarn'
'printim /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/validation_'hora'Z_'month'_'ano'.png'

'quit'


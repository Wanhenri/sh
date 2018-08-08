'reinit'
hora = 24
diain = 1
diaout = 31
month = JAN

'sdfopen /stornext/online19/mcga_fisica/dados_para_acrescentar_no_datain_dmd/roberto_dados_organizado/dados_GFS/estacao/prev.2017.jan.'hora'h.nc'

'reset'
'set lat -50 50'
'set display color white'
'c'
'set gxout shaded'
'set clevs    2  4  6   8  10  12 14 16 18'
'set ccols   0 11 5  13  3  10 12  8  2  6'
'set grads off'
'set t 1'
'p2=ave(APCP_surface,time=12Z01JAN2017,time=12Z31JAN2017)'
'd p2'
'draw title GFS 'hora'Z  'month'/2017 '
'run cbarn'

'printim /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/GFS_JAN_'hora'Z.png'

'quit'


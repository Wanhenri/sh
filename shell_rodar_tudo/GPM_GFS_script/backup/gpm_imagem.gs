'reinit'
hora = 72
diain = 1
diaout = 31
month = JAN

'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/3B-MO.MS.MRG.3IMERG.20170101-S000000-E235959.01.V04A.HDF5_teste.nc'

'reset'
'set lat -50 50'
'set display color white'
'c'
'set gxout shaded'
'set clevs    2  4  6   8  10  12 14 16 18'
'set ccols   0 11 5  13  3  10 12  8  2  6'
'set grads off'
'set t 1'
'p2=precipitation*24'
'd p2'
'draw title GPM  'month'/2017 '
'run cbarn'

'printim /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/GPM_JAN.png'

'quit'


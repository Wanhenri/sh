'reinit'
'c'

'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/JAN2017_144Z_18Z.nc'
'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/JAN2017_144Z_00Z.nc'
'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/JAN2017_144Z_06Z.nc'
'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/JAN2017_144Z_12Z.nc'
'sdfopen /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/JAN2017_144Z_diaria.nc'
'set x 1 2000'
'set y 1 1000'
'set z 1'

'dd=((prec.1(t=3)+prec.2(t=3)+prec.3(t=3)+prec.4(t=3))/4)'
'k=prec.5(t=3)'
'd dd-k'

linha=sublin(result,1)
longe=subwrd(linha,1)
longe2=subwrd(linha,2)
longe3=subwrd(linha,5)
longe4=subwrd(linha,3)
say longe' ' longe2
say longe4' ' longe3
*Constant field.  Value = 0

  



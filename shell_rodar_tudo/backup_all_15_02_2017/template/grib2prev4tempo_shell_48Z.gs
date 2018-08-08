'reinit'
'set display color white'
'c'
************************************************
* parametros de entrada do mes a ser executado
************************************************
HH='12'
totalmes = '31'
mesone = 'JAN'
mes = '01'
ano = '2017'
totalmestwo ='28'
mestwo = 'FEB'
dayinicial = '31' -6
prev='48'
*24,48,72,96,120,144,168
************************************************
*HH1='00 06 12 18'
*h=1
*while(h>=4)
*HH=subwrd(HH1,h)

mesaux = mes + 1
if(mesaux>12);mesaux = mesaux - 12; endif;
i=1
imax = totalmestwo + 7
monthin = mesone
monthout = mesone
_undef=-999.0
auxyear =0
while(i<=imax)
 if(dayinicial<10);dayinicial = '0'dayinicial; endif;
 
'open /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/'ano''mes''dayinicial'12/GPOSNMC'ano''mes''dayinicial'12P.fct.TQ0666L064.ctl'
 say 'open /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/'ano''mes''dayinicial'12/GPOSNMC'ano''mes''dayinicial'12P.fct.TQ0666L064.ctl'

 i = i + 1
 say 'i='i
 dayinicial = dayinicial + 1
  if(dayinicial>totalmes & auxyear =0 & mes != mesaux )
     dayinicial = dayinicial - totalmes
     mes = mes + 1
     if(mes>12);mes=1; ano = ano + 1; auxyear =1; endif;
     if(mes<10);mes='0'mes; endif;
  endif
endwhile


if(auxyear =1)
  mes = mes - 1
  if(mes = 0); mes = 12; ano = ano -1; endif;
  if(mes<10);mes = '0'mes; endif;
endif
say 'mes='mes

if(mestwo = "JAN");yeartwo = ano+1; else; yeartwo = ano; endif;
say 'mestwo='mestwo   ' ''yeartwo='yeartwo
tmesin = 0
tmesout = 0

'set stat on'
'set gxout fwrite'
name=''mestwo''yeartwo'_'prev'Z_'HH'Z'
*'set fwrite /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/daily_2012_2013_fct5/out/'name'.bin'
'set fwrite /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/'name'.bin'
say 'set fwrite /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/'name'.bin'
*gfs
*'set x 1 720'
*'set y 1 361'
yearone = ano
yeartwo = yearone
m=1
tmesin = 0
tmesout = 0
auxarq = 8-(prev/24)
while(m<=1)
  i=1
  arq = auxarq
say 'arq='arq
  'media=0'
  datain = totalmes
  datafi = datain + 1
   while(i<=totalmestwo )
     if(datain > totalmes); datain = datain - totalmes; monthin = mestwo;  tmesin = 1; endif;
     if(datafi > totalmes); datafi = datafi - totalmes; monthout = mestwo; tmesout = 1; endif;
     if(datain<10); datain = '0'datain; endif;
     if(datafi<10); datafi = '0'datafi; endif;
     if(tmesin = 1 | tmesout = 1)
*original       if(monthin = "JAN" & mesone = "DEC");yearone = ano + 1; endif;
*original       if(monthout = "JAN" & mesone = "DEC");yeartwo = ano + 1; endif;   
       if(monthin = "JAN" & mesone = "DEC");yearone = ano + 1; endif;
       if(monthout = "JAN" & mesone = "DEC");yeartwo = ano + 1; endif;

     endif
*    'set lon 0 360'
*    'set lat -90 90'

     'set x 1 2000'
     'set y 1 1000'

    'set time 'HH'Z'datafi''monthout''yeartwo
     say 'set time 'HH'Z'datafi''monthout''yeartwo
    say 'gravando variavel 1 nivel'  
    'set z 1'
       'd topo.'arq''
       'd lsmk.'arq''
       'd PSLC.'arq''
       'd PSNM.'arq''
       'd TP2M.'arq''
       'd U10T.'arq''
       'd V10T.'arq''
       'd PREC.'arq''
       'd PRCV.'arq''
       'd CSSF.'arq''
       'd CLSF.'arq''
       'd USST.'arq''
       'd VSST.'arq''
       'd CBNV.'arq''
       'd OCIS.'arq''
       'd CAPE.'arq''
       'd CINE.'arq''
say 'gravando variaveis multiniveis'

vars.1='UVEL';vars.2='VVEL';vars.3='OMEG';vars.4='ZGEO';vars.5='TEMP';vars.6='UMRL';vars.7='UMES';
       a=1
     while(a<=7)
       k=1
       while(k<=32)
        'set z 'k
        'd 'vars.a'.'arq''
*	'd 'vars.a'.'arq
         k=k+1
       endwhile
       a=a+1
      endwhile


     
   arq = arq + 1   
   i=i+1
   if(tmesin = 1);tmesin = 0; datain = datain + totalmes; yearone=ano; endif;
   if(tmesout = 1);tmesout = 0; datafi = datafi + totalmes; yeartwo=ano; endif;
   datain = datain + 1
   datafi = datain + 1
   monthin = mesone
   monthout = monthin
   endwhile


auxarq = auxarq - 1   
m=m+1
endwhile
'disable fwrite'

if(mestwo = JAN & mes = 12); yeartwo = yeartwo + 1; endif;

*  Write a descriptor file 
rc = write(dummy.ctl,'dset ^'name'.bin')
rc = write(dummy.ctl,'*',append)
rc = write(dummy.ctl,'undef -2.56E+33',append)
rc = write(dummy.ctl,'*',append)
rc = write(dummy.ctl,'title PRESSURE HISTORY    CPTEC AGCM REVIS 1.0 2000  T666L64  COLD',append)
rc = write(dummy.ctl,'*',append)
rc = write(dummy.ctl,'xdef  2000 linear    0.000   0.1800000000',append)
rc = write(dummy.ctl,'ydef  1000 linear  -89.910   0.1800000000',append)
*rc = write(dummy.ctl,'xdef   901 linear    0.000   0.4000000000',append)
*rc = write(dummy.ctl,'ydef   451 linear  -90.000   0.4000000000',append)
rc = write(dummy.ctl,'tdef 'totalmestwo' linear 'HH':00Z01'mestwo''yeartwo' 24hr',append)
rc = write(dummy.ctl,'*',append)
rc = write(dummy.ctl,'zdef    32 levels  1000  975  950  925  900 875  850 825  800 775  750 725  700 675 650',append)
rc = write(dummy.ctl,'                  600  550  500  450  400  350  300  250  200  150',append)
rc = write(dummy.ctl,'                  100   70   50   30   20   10  3',append)
rc = write(dummy.ctl,'vars    24',append)
rc = write(dummy.ctl,'topo  0 99 surface TOPOGRAPHY [m]',append)
rc = write(dummy.ctl,'lsmk  0 99 surface LAND SEA MASK [0,1]',append)
rc = write(dummy.ctl,'PSLC  0 99 sfc    SURFACE PRESSURE                        (HPA             )',append)
rc = write(dummy.ctl,'PSNM  0 99 msl    SEA LEVEL PRESSURE                      (HPA             )',append)
rc = write(dummy.ctl,'TP2M  0 99 sfc2m  TEMPERATURE AT 2-M FROM SURFACE         (K               )',append)
rc = write(dummy.ctl,'U10T  0 99 sfc10m 10 METRE U-WIND COMPONENT               (M/S             )',append)
rc = write(dummy.ctl,'V10T  0 99 sfc10m 10 METRE V-WIND COMPONENT               (M/S             )',append)
rc = write(dummy.ctl,'PREC  0 99 sfc    TOTAL PRECIPITATION                     (KG/M2/DAY       )',append)
rc = write(dummy.ctl,'PRCV  0 99 sfc    CONVECTIVE PRECIPITATION                (KG/M2/DAY       )',append)
rc = write(dummy.ctl,'CSSF  0 99 sfc    SENSIBLE HEAT FLUX FROM SURFACE         (W/M2            )',append)
rc = write(dummy.ctl,'CLSF  0 99 sfc    LATENT HEAT FLUX FROM SURFACE           (W/M2            )',append)
rc = write(dummy.ctl,'USST  0 99 sfc    SURFACE ZONAL WIND STRESS               (PA              )',append)
rc = write(dummy.ctl,'VSST  0 99 sfc    SURFACE MERIDIONAL WIND STRESS          (PA              )',append)
rc = write(dummy.ctl,'CBNV  0 99 cltlay CLOUD COVER                             (0-1             )',append)
rc = write(dummy.ctl,'OCIS  0 99 sfc    DOWNWARD SHORT WAVE AT GROUND           (W/M2            )',append)
rc = write(dummy.ctl,'CAPE  0 99 atm    CONVECTIVE AVAIL. POT.ENERGY            (M2/S2           )',append)
rc = write(dummy.ctl,'CINE  0 99 atm    CONVECTIVE INHIB. ENERGY                (M2/S2           )',append)
rc = write(dummy.ctl,'UVEL  32 99       ZONAL WIND (U)                          (M/S             )',append)
rc = write(dummy.ctl,'VVEL  32 99       MERIDIONAL WIND (V)                     (M/S             )',append)
rc = write(dummy.ctl,'OMEG  32 99       OMEGA                                   (PA/S            )',append)
rc = write(dummy.ctl,'ZGEO  32 99       GEOPOTENTIAL HEIGHT                     (GPM             )',append)
rc = write(dummy.ctl,'TEMP  32 99       ABSOLUTE TEMPERATURE                    (K               )',append)
rc = write(dummy.ctl,'UMRL  32 99       RELATIVE HUMIDITY                       (NO DIM          )',append)
rc = write(dummy.ctl,'UMES  32 99       SPECIFIC HUMIDITY                       (KG/KG           )',append)
rc = write(dummy.ctl,'endvars',append)
rc = close(dummy.ctl)
*'!mv dummy.ctl /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/daily_2012_2013_fct5/out/'name'.ctl'
'!mv dummy.ctl /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0666L064/'name'.ctl'
'quit'


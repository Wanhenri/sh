'reinit'
hora = 168
diain = 01
diaout = 31
month = DECJANFEB
i=1
while(i<=1)
*'open /stornext/online8/mcga/saulo.magnum/paper_NWP/PREC-FINAL/AGCM_new1/ORI-DEC-JAN-FEB-2013_168Z.ctl'
*'open DEC2012_'hora'Z.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/HUMO_ssib/DEC-JAN-FEB2013_'hora'Z.ctl'
*'open /stornext/home/saulo.magnum/scratchout/oensMB09/pos/dataout/TQ0126L028/2014060512/01P/GPOS01P20140605122014060612P.fct.TQ0126L028.ctl'
*'open /scratchout/oper/tempo/oensMB09/pos/dataout/TQ0126L028/2014060512/GPOS01P20140605122014060612P.fct.TQ0126L028.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010112/GPOSNMC2013010112.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010212/GPOSNMC2013010212.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010312/GPOSNMC2013010312.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010412/GPOSNMC2013010412.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010512/GPOSNMC2013010512.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010612/GPOSNMC2013010612.ctl'
*'open /stornext/home/saulo.magnum/online8/dados/TQ0299L064/pascoa/Fabio_novo/2013010712/GPOSNMC2013010712.ctl'
*'open /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/daily_2014-2015_fct5/out/DEC-FEB2015_120Z.ctl'
*****'open /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0299L064/'month'2015_'hora'Z.ctl'

****'open /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0299L064/'month'2015_'hora'Z.ctl'

'open /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0299L064/'month'2015_'hora'Z.ctl'
*'open /stornext/online19/mcga_fisica/w.santos/teste_all_GDN/DJF_ARA_new_VKubota_6_5_2016/newARA_DJF2015/'month'2015_'hora'Z.ctl'


*'open /stornext/home/juliana.silva/scratchout/agcm_cptec/pos/dataout/TQ0299L064/JAN2013_'hora'Z.ctl'
*'open /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/new_2015_GDM1_HUMO_PBL4_CRDCLD6/exp6_new2_2015_grepar2=3_grepar3=12000_grepar4=2/JAN2013_24Z.ctl'
*'open /stornext/online8/mcga/juliana.silva/dados_obs/TMPA_daily_new.ctl'
*'open /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/new_2015_GDM1_HUMO_PBL4_CRDCLD6/ex:p7BETTER_new2_grepar2=5_grepar3=15000_grepar4=0.5/JAN2013_120Z.ctl'
*'open /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/exp09_GRE1_MORR_PBL3_CRDCLD1/JAN2013_72Z.ctl'
*'open /stornext/online8/mcga/saulo.magnum/paper_NWP/PREC-FINAL/GFS/GFS-DEC-JAN-FEB-2013_48Z.ctl'
*'open /stornext/online8/mcga/saulo.magnum/paper_NWP/PREC-FINAL/AGCM_new2/DEC-JAN-FEB2013_120Z.ctl'

'reset'
'set lat -50 50'
'set display color white'
'c'
'set gxout shaded'
*'set  clevs  3 5   7  10 13  16 20 25 30'
'set clevs    2  4  6   8  10  12 14 16 18'
*'set clevs    1  3  5   7  10  13 16 20 25'
'set ccols   0 11 5  13  3  10 12  8  2  6' 
'set grads off'
'set t 1'
*'d lterp(ave(prec.1,time=18Z31DEC2012,time=12Z01JAN2013,2),prec.2(time=12Z02JAN2013))'
*'d prec'
*'media = ave(prec,time=12Z02JAN2013,time=12Z31JAN2013)'
*say 'media = ave(prec.'i',time=13Z'diain''month'2013,time=12Z'diaout''month'2013)'
*'media = ave(prec.'i',time=13Z'diain''month'2013,time=12Z'diaout''month'2013)'
*'media = ave(prec,time=12Z01DEC2012,time=12Z28FEB2013)'
*'media=ave(prec.1,time=12Z03JAN2013,time=12Z04JAN2013)+ave(prec.2,time=12Z04JAN2013,time=12Z05JAN2013)+ave(prec.3,time=12Z05JAN2013,time=12Z06JAN2013)+ave(prec.4,time=12Z06JAN2013,time=12Z07JAN2013)+ave(prec.5,time=12Z07JAN2013,time=12Z08JAN2013)+ave(prec.6,time=12Z07JAN2013,time=12Z08JAN2013)+ave(prec.7,time=12Z08JAN2013,time=12Z09JAN2013)'
*'media=media/7'
*'d media'
*'d ave(prec,t=2,t=90)'
*'p1=ave(prec,time=12Z01DEC2012,time=12Z31DEC2012)'
*'p2=ave(prec,time=12Z01JAN2015,time=12Z31JAN2015)'
*'p3=ave(prec,time=12Z01DEC2014,time=12Z31DEC2014)'
*'d p3'
'd ave(prec,time=12Z01DEC2014,time=12Z28FEB2015)'
*'set time 12Z01JAN2013'
*'d prec'
*'draw title en2D=1.25e-2_r8/bb+1.0e-6..sem factor..dd=5000 'month'/2015 'hora'Z'
'draw title  DJF newARA 31-05-16 'month'/2015 'hora'Z'  
*'draw title Fabio Novo 'hora'Z'
*'draw title Validation KUBOTA'
'run cbarn'
*'printim /stornext/online8/mcga/juliana.silva/dados_obs/obs_5dias.png'
*'printim /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/new_2015_GDM1_HUMO_PBL4_CRDCLD6/exp6_new2_2015_grepar2=3_grepar3=12000_grepar4=2/validation_5d_'month''hora'Z.png'
*'printim /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/new_2015_GDM1_HUMO_PBL4_CRDCLD6/exp7BETTER_new2_grepar2=5_grepar3=15000_grepar4=0.5/validation_120_5d.png'
*'printim /stornext/online8/mcga/juliana.silva/dataout/TQ0299L064/exp09_GRE1_MORR_PBL3_CRDCLD1/validation_72Z_5d.png'
*'printim /stornext/home/juliana.silva/scratchout/agcm_cptec/pos/dataout/TQ0299L064/validation'hora'Z_5dias.png'
*'printim /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0299L064/validation_'hora'Z_'month'.png'
*'printim /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0299L064/validation_'hora'Z_'month'_com_entr2D=125_dd_5000.png'
'printim /stornext/home/w.santos/scratchout/agcm_cptec/pos/dataout/TQ0299L064/validation_'hora'Z_'month'_DJF_newARA_31_05_16.png'
*'printim /stornext/online19/mcga_fisica/w.santos/teste_all_GDN/DJF_ARA_new_VKubota_6_5_2016/newARA_DJF2015/validation_'hora'Z_'month'_DJF_ARA.png'


diain = diain + 1
diain = '0'diain
hora = hora + 24
i = i + 1
endwhile
'quit'


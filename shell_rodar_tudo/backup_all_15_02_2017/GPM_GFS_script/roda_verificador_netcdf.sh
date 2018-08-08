#!/bin/bash

#=== FUNCTION ================================================================
#        NAME:
# DESCRIPTION:deletando arquivos que serao gerados novamente 
#  PARAMETER :
#===============================================================================

ano=

3B-MO.MS.MRG.3IMERG.20170101-S000000-E235959.01.V04A.HDF5.nc


main()
{
#serve para pular linhas
echo -e  "\e[Escolha uma das opcoes abaixo \"teste\".\nBora la!\a!"
echo "1 - GPM"
echo "2 - GFS"
echo "3 - Sair"
echo 
echo -n "Qual a opção desejada? "
read opcao
case $opcao in 
 "1")GPM;;
 "2")GFS;;
 "3")exit;;
*)"Opcao desconhecida." ; echo ; Menu ;;
esac
}

GPM(){
echo "TESTE GPM"
gpm_imagem.gs
main
}

GFS()
{
echo "TESTE GFS"
gfs_imagem.gs
main
}

main
#gpm_imagem.gs

#gfs_imagem.gs



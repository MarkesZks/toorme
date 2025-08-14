# PASSO A PASSO PARA RODAR E VALIDAR CONTAINER POSTGRES

1) Verificar se o WSL está funcionando:
   - Abra o CMD e digite:
     wsl

2) Verificar se o Docker está rodando:
   - No CMD:
     docker ps
   - Se listar algo (mesmo vazio), o Docker está OK.

3) Adicionar o Docker no PATH do Windows (se necessário):
   - No CMD:
     where.exe docker
   - Copie o caminho exibido.
   - Vá em Configurações do Sistema -> Variáveis de Ambiente e adicione no PATH.
   - Reinicie o computador.

4) Tornar o arquivo run_container.sh executável (no VSCode/WSL):
   chmod +x run_container.sh

5) Subir o container:
   source run_container.sh

6) Validar se o container está rodando:
   docker ps
   - Copie o NOME ou ID do container.
   - Entrar no container:
     docker exec -it <nome_ou_id_do_container> bash

7) Acessar o banco dentro do container:
   psql -U root -d toorme

8) Comandos no psql:
   - Listar bancos:
     \l
   - Listar tabelas:
     \dt
   - Exemplo esperado:
           List of relations
    Schema |        Name         | Type  | Owner
   --------+---------------------+-------+-------
    public | locations           | table | root
    public | notifications       | table | root
    public | suppliers           | table | root
    public | travelplanlocations | table | root
    public | travelplans         | table | root
    public | trips               | table | root
    public | users               | table | root
    public | vehicles            | table | root
   (8 rows)

9) Sair:
   - Do psql:
     \q
   - Do container:
     exit

Pronto! Seu container PostgreSQL e o banco toorme estão rodando.

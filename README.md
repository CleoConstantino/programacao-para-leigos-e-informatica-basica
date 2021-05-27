
# # Programação para Leigos e informática do básico ao avançado - Udemy - 18h - 05/2021
  
- Fundamentos da informática;  
- Sistemas Operacionais (Windows, Linux e Mac);  
- Redes de Computadores e Internet;  
- Linguagens de Programação;  
- Fundamentos de Bancos de Dados;  
- Fundamentos de Desenvolvimento de Sistemas;  
- Fundamentos de Publicação e Hospedagem de Sistemas;  
- Introdução á Linguagem de Programação Python;  
- Introdução á Linguagem de Programação Java;  
- Fundamentos de Programação Web (HTML, CSS e JavaScript);

## Fundamentos da informática:

**Como funciona um computador:** é qualquer equipamento que faça computação (processamento, calculo).

**Processador:** é o que indica o quanto rápido/bom é um computador. Intel é uma fabricante de processador, AMD também é uma fabricante, AMR é uma fabricante de processador para celular.

**Memória:** 
*Voláteis:* memória RAM 4GB. 
*Não voláteis:* HD, disco rígido, Hard Disc, SSD.

**Dispositivos de computação:** 
**Rede:* cabeada, e não cabeada: wireless;
Bluethoot*;
*USB;*

Dispositivos de saída: som, video, impressora.

Dispositivo de entrada: teclado, voz.

Sistema operacional: Windows, Linux, Mac OSX.

Boot: é uma checagem básica dos equipamentos e a passagem das informações do Hardware para o sistema operacional.

O Google é a principal fonte de pesquisa para dúvidas. Tem também o [StackOverflow](https://pt.stackoverflow.com/) para questões de programação. E no [Telegam](tgram.io) pode entrar em grupos que ajudam.

*Nunca utilizar acentuação, espeço ou caractere especial nos repositórios.*

## Fundamentos de sistemas operacionais

 ***- Windows:***

Disco local (C:), é o disco do sistema. 64 bits são programas mais modernos. 

**Para inserir o Path do sistema** > menu iniciar > digitar Meu computador > botão direito em cima > Propriedades > ir em configurações avançadas do sistema > aba avançado > Variáveis de ambiente > selecionar *Path* > clicar em editar > Novo. 

**Terminal do Windows:** cmd, prompt de comando. Botão direito em cima > Executar como administrador.

***Linux:***
O Linux é mais recomendado para programação, o Windows não deve ser utilizado. [DistroWathch.com](https://distrowatch.com/) distribuições mais populares > ex: Manjaro, Mint, Ubuntu. E [TOP 500](https://www.top500.org/) que são os 500 computadores mais top do mundo. [Resultado](https://www.top500.org/statistics/list/) do sistema operacional que esses pc usam.

Máquinas virtuais Linux: basicamente, é um software que simula máquinas.  Pode utilizar o [Virtual Box](https://www.virtualbox.org/) ou o [VM Ware](https://www.vmware.com/br.html). 

**Principais protocolos:**

Endereço IP (internet propocol): ex: 192.168.1.2 para [verificar o IP externo](https://www.whatismyip.com/).

TCP/IP (transmission control protocol): faz o controle de transmissão de informações;

HTTP/HTTPS (hypertext transfer protocol): o *S* representa que tem uma camada a mais de segurança e o acesso vai estar criptografado. Sem o S representa que os dados trafegam sem criptografia. A [Let's Encrypt](https://letsencrypt.org/pt-br/) fornece gratuitamente esse 'cadeado'.  Porta padrão de acesso do HTTP é 80. Porta padrão de acesso do HTTPS é 443. Para analisar o website: acessar qualquer website > botão direito > Inspecionar > aba Network > Refresh > clica no 1º link.

Métodos HTTP: 
GET (pegar): trás dados do servidor para sua máquina local;
POST (enviar): é o método para enviar informações;
PUT (atualizar): atualiza dados;

FTP/SFTP: trafega na porta 21/22 protocolo de transferências de arquivos;
SSL: a função desse protocolo é de tornar o HTTP e o FTP seguros;
ICMP: tem a função de trocar mensagens entre as máquinas;
SMTP (simple mail transfer protocol): portas 25/segurança 465 - desde 2013 > 587;
 IMAP: protocolo de acesso ao correio da internet, pode fazer múltiplos acesso de caixas de e-mail;
 POP: protocolo dos correios, só acessa uma caixa de e-mail;
 MINE: extenções multifunção para mensagens de internet, permite colocar imagens, vídeos no e-mail.

**Domínio:** É o endereço  da internet de determinada companhia. Para pesquisar [clique aqui](https://registro.br/).

**Cliente-Servidor:** utiliza um cliente (Firefox) para fazer acesso a uma página web que está sendo servida por um servidor.

## Linguagens de baixo nível

Linguagem de programação de comunicação com os computadores. Os computadores compreendem linguagem binária, ex: 10110101, 11100110, 11000100. Cada elemento é 1 bite e um conjunto de 8 elementos é 1 byte. Quanto mais baixo o nível mais próximo á linguagem binária. Assembly é uma linguagem de mais baixo nível, linguagem utilizada em hardware. Quanto mais baixo o nível, melhor a performance.

## Linguagens de alto nível

Linguagem de alto nível é mais próxima da linguagem humana, ex: print ("Hello Word!") / 10110101. Exemplos de linguagem de alto nível: Java, Pyton. Qunto mais alto o niível mais lenta a sua execução, a sua velocidade não será tão rápida.

## Paradigmas de programação

É como a linguagem de programação é classificada: baixo ou alto nível, orientada a objeto, procedurais, funcionais ou estruturada.
Qual é a classificação de uma linguagem de programação. Orientada a objeto é uma das mais utilizadas no mundo. Uma linguagem de programação pode ter varias classificações.

## Fundamentos de banco de dados

**Dados / informação:**
Dados: roberto 2500 700 (não tem contexto).
Informação: Roberto recebeu 2500 e pagou 700, restando então 1800 (é o dado processado e tem alguma relevância).

**Banco de dados relacionais:**

Banco de dados é um software que armazena dados. Banco de dados relacionais é uma coleção de dados onde esses dados possuem relacionamentos, esses dados são organizados com um conjunto de tabelas, com colunas e linhas, as linhas indicam uma entrada na tabela. As colunas indicam os atributos de uma tabela. Atualmente em banco de dados os limites nas quantidades de dados que guardamos está no espaço em disco de memória. 

Exemplos de bancos de dados relacionais: *MySQL. PostgreSQL.*

**Banco de dados não relacionais:**

Os bancos de dados relacionais são conhecidos como 'Bancos SQL', e o banco de dados não relacional são conhecidos como 'NoSQL', (linguagem de consulta estruturada). É linguagem que usamos para se comunicar com o banco de dados relacionais.

**Banco de dados relacional x Não relacional:**

***Banco de dados relacional***

*Pontos Fortes*
- SGBDRs: Sistemas Gerenciadores de Banco de Dados Relacional, conforme são chamados oferecem aos usuários processos de validação, verificação e garantias de integridade dos dados.
- Além disso, oferecem controle de concorrência, recuperação de falhas e segurança, controle de transações, otimização de consultas, dentre outros.
- 
*Pontos Fracos:* 
- Dificuldade em conciliar o modelo relacional com a demando por escalabilidade cada vez mais frequente.
- Dificuldade em organizar os dados em um sistema distribuído trabalhando com o particionamento de dados.

**Banco de dados não relacional**

Características comuns: como são livres do modelo relacional, promovem alta disponibilidade e maior escalabilidade.

Algumas implementações oferecem:

 - o particionamento e a replicação de dados;
 - sistemas baseados em armazenamento de chave/valor;
 - sistemas orientados a documentos.
 - sistemas orientados a coluna;
 - sistemas baseados em grafos;

Principais ferramentas: MySQL ferramenta de bando de dados relacional, é o servidor > MySQL Workbech, funciona como um cliente. PostgreSQL > pgAdmin. MongoDB é uma ferramenta de banco de dados não relacional.

## Instalação MySQL para Windows:

Pesquisar no Google 'mysql community download' ou [clique aqui.](https://dev.mysql.com/downloads/) Localizar e clicar em >   [MySQL Installer for Windows.](https://dev.mysql.com/downloads/windows/) são duas opções para fazer o dowload, um é web e o outro é local, opte pela instalação local, que é o arquivo maior. Clicar em > *No thanks, just start my download*, e o dowload já vai iniciar.

Para instalar o PostgreSQL: Pesquisar no Google PosgresSQL ou [clique aqui](https://www.postgresql.org/) > clicar em Download > clicar em Windows > localizar [Download the installer](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) e clicar > baixar a versão mais nova.

**Instalação MySQL:**
Após baixar os dois, vai na pasta download e dá um clique duplo no arquivo mysql, dar as permissões necessária, ao abrir a tela do MySQL Installer > selecionar a opção Custon (que é para você customizar o que quer instalar) > selecionar o MySQL Server e o MySQL Workbench.
Na opção Check Requirements > selecionar o produto > clicar em Execute, o próprio instalador vai fazer o download e instalar, clicar em Next até a opção Accounts and Roles, senha: salva no PassUp.

**Instalação PostgeSQL:**

Vai na pasta download e dá um clique duplo no arquivo postgresql > vai clicando em next ate aa tela password, digitar a senha: postgres > next até a instalação. Antes de clicar em Finish > desmarcar a opção Stack Builder: clicar em Tec Connection

**Teste das ferramentas:** 

- *MySQL Workbench:*

Digitar no menu iniciar 'workbench', vai abrir o sistema do MySQL Workbench. Ao lado da descrição 'MySQL Connections' > clicar na ferramenta para fazermos as configurações.
Clique duplo na descrição 'mybd' e renomear. Clica no disquete para salvar e seleciona a pasta. Á partir daí, qualquer alteração feita é só clicar em salvar, pode fechar. Clicar 2x em +Add Diagram (criar um diagrama de banco de dados), é para modelar o banco de dados. Criar uma tabela, clicar no icone e depois clicar no editor (espaço vazio da tela), clique duplo para editar o nome da tabela. Para criar colunas, é só clicar em Colun Name: tipo de dados INT (inteiro), selecionar PK (primary key- chave primaria), NN (not null - não aceita valor nulo), AI (auto incremento). VARCHAR(45) caracteres variados > salvar.

Criar o banco de dados a partir desse modelo que criamos: Menu Database > Forward Engineer > Next > marcar os campos DROP objects before each CREATE object > next até finalizar. Fecha as abas, estando na pagina inicial, dê um clique duplo no banco de dados. Para selecionar o banco de dados é só dar 2 cliques em cima.

    insert into pessoas (nome, email) values ("Angelina Jolie", "angelina@gmail.com"); 
    
    select * from pessoas;

- *pgAdmin:*

Digitar no menu iniciar 'pgadmin' , que é uma ferramenta administrativa do Postgre. Colocar a senha no momento que ele solicita > clicar em servers > botão direito em cima de databases > create > database, colocar o nome e salve; Vai em table > botão direito > create > table, colocar o nome > aba Collumns criar as colunas clicando no + (Data Type - SERIAL = alto incremento/ CHARACTER VARYNG = varchar) > save.

Editor SQL: Menu Tools > Query Tool 

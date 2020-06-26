# Fastfeet

<img src="https://github.com/cleidison1994/Fastfeet/blob/master/.github/gitImage.jpg"/>

## Apresentando a aplicação

Essa aplicação foi desenvolvida usando Nodejs no backend, Reactjs no frontend e React Native para o dispositivo moblie, ressaltando que este fora desenvolvido para android, como desafio final para certificação no curso Gostack da Rocketseat.
As variavéis ambientes precisam ser configuradas siga .env.example nos modúlos.


## Iniciando o Backend

Para iniciar o backend voçe precisará ter o docker instalado em sua máquina criar as imagens do Postgres, Redis 
com as imagens já criadas executar <i>yarn</i> na raiz do arquivo do backend para instalar todas as dependências,
depois execute <i>yarn sequelize db:migrate</i> para criar as tabelas no banco de dados <i>yarn sequelize db:seed:all</i>
para inserir dados na tabela.
Por fim execute <i>yarn dev & yarn queue</i> para iniciar o servidor.

## Iniciando o Frontend

Para iniciar o frontend execute o comando <i>yarn</i> na raiz do arquivo e <i>yarn start</i> a senha para o acesso é 
<ul>
  <li>Email: admin@fastfeet.com</li>
  <li>Senha: 123456</li>
</ul>

## Inicando o Mobile

Por fim o aplicativo mobile foi desenvolvido para android execute <i>yarn</i> para instalar as dependências por fim
execute <i>yarn android</i> para instalar o aplicativo seja em seu celular ou dispositivo virtual para isso baixe o Android
Studio.

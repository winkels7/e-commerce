# Desafio e-commerce
Nesse desafio vamos construir um e-commerce do zero usando apenas um framework, o UIKIT, com eles vamos desenvolver telas e a logica fica com o ExpressJS.

## O Briefing (Atenção)

Seu João vende ingressos para um parque de eventos na cidade do Rio de Janeiro no qual ele concorreu e ganhou uma licitação, os ingressos são: Inteiro para adultos, meio para crianças e adolescentes. Nesses ingressos também consta 3 serviços de turismo ficando o quadro de itens assim:
1. Inteiro
2. Meia-entrada
3. PCDs
4. Tour Histórico
5. Tour Educacional
6. Tour Amanhecer

## Regras de desenvolvimento

Usar [IndexedDB](https://web.dev/indexeddb/) para gravar no banco de dados a lógica de estado no front.

Usar [Classes](https://www.w3schools.com/js/js_classes.asp) para construir a lógica da construção dos objetos.

Usar [UI Kit](https://getuikit.com/docs/introduction) para construir o layout e os componentes do projeto. (Não é para usar CSS puro somente o framework)

### Desejável
Ganha pontos para quem empregar a ortografia brasileira sem errar;




## Branding da marca:

Com base nas informações acima é para criar um layout com a identidade visual da Marca, que Marca? Fica na tua Imaginação.

<aside>
🗣 Nome: Parque das palmeiras
</aside>

<aside>
📌 Cores: Livre escolha;
</aside>

<aside>
🤐 Font-principal: Livre escolha;
</aside>

<aside>
😘 Font-apoio: Livre escolha;
</aside>

## Planejamento do Front-End

Ao definir as telas é preciso fazer um planejamento criando wireframes e depois definindo os layouts. Como todo e-commerce precisamos focar nas telas que podem comprometer o seu funcionamento, são elas:

- Home - Precisa ter os produtos para poder comprar além de elementos gráficos atrativos para engajamento do cliente com o site.
- Carrinho - Ao adicionar um produto no carrinho é preciso que grave no banco local essas informações.
- Checkout - Essa tela é para apresentar o resumo da compra e o botão de pagamento, deve conter o botão de pagar, o metodo de pagamento (cartão, boleto...), deve-se fazer o pagamento nessa etapa.
- Pedidos - Ao fazer a compra deve ter a informação do pedido e o botão de imprimir.
- Login - para realizar a compra deve-se fazer o login em sua conta
- Cadastro - essa é uma tela para fazer o cadastro da pessoa, deve conter: 
  - E-mail
  - Nome
  - Senha
  - CPF (tem que validar)
  - Sexo
  - Celular
- Recuperação de senha - ao esquecer a sua conta deve ter algum lugar para recuperar a senha
- Perfil do usuário
- E-mail de recuperação de senha
- Página de recuperação de senha
- Políticas de privacidade
- Politicas de Cookies
- Institucional - pagina onde será direcionado o conteúdo institucional da empresa como pontos turísticos, restaurantes, museu etc...

## Planejamento do Back-End

Será usado o [ExpressJS](https://expressjs.com/) um framework em nodeJS para criar o back-end, o intuito é criar um API para que o front consuma de acordo com as necessidades. os requesitos são:
1. Usar o postgress como o banco para gravar os dados
2. Criar rotas para o consumo do Front
   - /api/login
   - /api/cadastro
   - /api/getcarrinho
   - /api/setcarrinho
   - /api/getperfilusuario
   - /api/setperfilusuario
   - /api/getpagamento
   - /api/finalizarcompra
   - /api/getpedidos
   - /api/recuperarsenha
   - /api/trocarsenha
3. Usar o [pagseguro](https://dev.pagseguro.uol.com.br/reference/testing-integration) para implementar o pagamento, o SANDBOX é um ambiente de homologação que pode ser usado para simular as compras.

*NodeJs é uma plataforma de desenvolvimento em Javascript, usado em apps, programas, sites e servidores.*

**Para equipes**: Planejar a distribuição de tarefas entre as habilidades de cada pessoa e eleger um líder para fazer as cobranças necessárias de cada um durante todo o projeto.

**Para Espartanos**: Faça o mesmo planejamento e entregue com mais qualidade.

Para garantir a qualidade do desenvolvimento desenvolvimento usaremos o prettier e o eslint para formatar do jeito certo a codificação.

Boa sorte a todos, vocês precisarão!

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

Veja o [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Hot-Reload for Development

```sh
npm run dev
```

### Back-end

```sh
npm run back
```

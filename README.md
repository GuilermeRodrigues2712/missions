Documentação do Projeto: Sistema de Cadastro de Explorações Espaciais
Breve Descrição do Projeto
Este projeto consiste em um backend desenvolvido em TypeScript utilizando o padrão Model-View-Controller (MVC). O sistema é destinado ao gerenciamento de explorações espaciais, permitindo registrar, listar e excluir missões espaciais. Além disso, implementa um sistema de autenticação baseado em tokens JWT para proteger as rotas sensíveis.
Estrutura do Projeto
A estrutura do projeto deve seguir o padrão MVC, organizada nas seguintes pastas:
models/: Contém definições dos modelos de dados.
repositories/: Gerencia a interação com o banco de dados.
controllers/: Contém a lógica de controle das rotas.
routes/: Define as rotas da API.
middlewares/: Implementa a autenticação e outras funções intermediárias.
Passos para Rodar o Projeto Localmente
Clone o repositório.
Instale as dependências.
Configure o banco de dados PostgreSQL no Railway.app ou Render.com.
Inicie o servidor.
Instruções de Uso das Rotas
Rotas de Missões
Listar todas as missões:
Método: GET
Rota: /missoes
Descrição: Retorna todas as missões cadastradas (acesso público).
Adicionar uma nova missão:
Método: POST
Rota: /missoes
Descrição: Adiciona uma nova missão ao sistema (rota protegida por autenticação).
Exemplo de requisição:
json
{
  "nome": "Voyager 1",
  "planetaAlvo": "Marte",
  "duracaoEmAnos": 2.5,
  "quantidadeDeTripulantes": 3,
  "tecnologiasUtilizadas": ["Propulsão iônica", "IA"]
}
Excluir uma missão específica:
Método: DELETE
Rota: /missoes/:id
Descrição: Exclui uma missão pelo seu identificador único (rota protegida por autenticação).
Rotas de Autenticação
Registrar novos usuários:
Método: POST
Rota: /usuarios/registro
Descrição: Registra novos usuários com nome, e-mail e senha.
Login de usuários:
Método: POST
Rota: /usuarios/login
Descrição: Permite login e retorna um token JWT.
Modelo de Dados
Missões
Cada missão deve conter os seguintes atributos:
Atributo	Tipo	Descrição
ID	Inteiro ou UUID	Identificador único da missão
Nome da Missão	String	Nome da missão espacial
Planeta Alvo	String	Planeta para onde a missão foi enviada
Duração em Anos	Float	Tempo estimado da missão
Quantidade de Tripulantes	Inteiro	Número de tripulantes na missão (mínimo: 0)
Tecnologias Utilizadas	Array de Strings	Lista de tecnologias usadas na missão
Usuários
Os usuários devem conter os seguintes atributos:
Atributo	Tipo	Descrição
Nome	String	Nome do usuário
E-mail	String	E-mail do usuário
Senha	String (hash)	Senha armazenada de forma segura
Validação de Dados
Todas as entradas devem ser validadas para garantir que estão completas e corretas. Mensagens de erro claras devem ser retornadas em caso de falhas.
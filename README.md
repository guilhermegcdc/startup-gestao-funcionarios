# 🚀 Sistema de Gestão de Funcionários

Este projeto é um sistema web para gerenciar funcionários de uma startup, permitindo as operações de CRUD (Create, Read, Update, Delete) e a geração de relatórios.

O sistema foi construído utilizando apenas HTML, CSS e JavaScript puro (Vanilla JS), com o ambiente de desenvolvimento totalmente containerizado com Docker e Nginx.

## ✨ Funcionalidades

- [x] **Cadastro e Listagem**: Adicionar e visualizar funcionários em uma tabela.
- [x] **Edição e Exclusão**: Atualizar e remover registros de funcionários.
- [x] **Relatórios com Métodos de Array**:
    - Listar funcionários com salário acima de um valor específico.
    - Calcular a média salarial da equipe.
    - Exibir uma lista de cargos únicos (sem repetição).
    - Gerar uma lista com todos os nomes em letras maiúsculas.

## 🛠️ Tecnologias Utilizadas

- **Front-end**: HTML5, CSS3, JavaScript (ES6+ com Classes e Arrow Functions)
- **Ambiente**: Docker, Nginx

## ⚙️ Como Executar o Projeto

É necessário ter o Git e o Docker instalados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/guilhermegcdc/startup-gestao-funcionarios.git](https://github.com/guilhermegcdc/startup-gestao-funcionarios.git) 
    ```
    *(Lembre-se de usar o seu link aqui se for diferente)*

2.  **Acesse a pasta do projeto:**
    ```bash
    cd startup-gestao-funcionarios
    ```

3.  **Inicie os contêineres com Docker:**
    ```bash
    docker compose up -d
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador no endereço `http://localhost:8080`

---
_Projeto desenvolvido para o Estudo de Caso de Gestão de Funcionários._

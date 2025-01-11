# PlanejaCerto
## 🚀 Sobre o Projeto
PlanejaCerto é uma aplicação web/serviço backend desenvolvido em Node.js, com o objetivo de auxiliar usuários a alcançarem metas financeiras de forma simples e acessível. A aplicação permite que o usuário registre sua renda, defina metas, planeje investimentos e monitore o progresso ao longo do tempo.

# 📋 Funcionalidades
- Cadastro e Login: Autenticação segura com JWT para gerenciamento de usuários.
- Gerenciamento de Metas: Criação, leitura, atualização e exclusão de metas financeiras.
- Cálculo de Plano: Cálculo automatizado de contribuições mensais e sugestões de investimentos.
- Progresso de Metas: Monitoramento do avanço rumo à meta desejada.

# 📦 Tecnologias Utilizadas
- Backend:
    - Node.js
    - Express.js
    - Banco de Dados: PostgreSQL (ou outro banco suportado, conforme necessidade)
- Autenticação:
    - JWT (JSON Web Token)
- Validação:
    - Joi para validação de dados.

# ⚙️ Funcionalidades da API
## 1. Usuário
- POST /registrar: Criação de um novo usuário.
- POST /login: Login do usuário e geração de token.
- GET /perfil: Retorna as informações do perfil do usuário autenticado.
- PUT /perfil: Atualiza dados do perfil (como renda e poupança).
## 2. Metas
- POST /metas: Cria uma nova meta financeira.
- GET /metas: Lista todas as metas associadas ao usuário.
-GET /metas/:id: Detalha uma meta específica.
- PUT /metas/:id: Atualiza uma meta.
- DELETE /metas/:id: Exclui uma meta.
## 3. Planejamento e Cálculo
- POST /calcular-plano: Calcula plano financeiro com base na meta.
- GET /progresso: Monitora o progresso da meta específica.
## 4. Investimentos
- GET /investimentos: Lista opções de investimentos sugeridos (como Tesouro Selic, CDBs).
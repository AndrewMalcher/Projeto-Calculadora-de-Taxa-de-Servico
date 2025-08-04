Calculadora de Taxa de Serviço

Um pequeno projeto front-end que permite calcular a taxa de serviço (gorjeta) de uma conta, bem como exibir:

Taxa de serviço por pessoa

Valor da conta por pessoa (sem taxa)

Total por pessoa (conta + taxa)

O layout é responsivo para dispositivos móveis e utiliza variáveis CSS para facilitar a personalização.

Funcionalidades

Cálculo dinâmico da porcentagem de taxa com base na qualidade do serviço (15%, 10%, 5% ou 1%).

Divisão do valor da conta entre N pessoas, mostrando:

Quanto cada um deve pagar apenas da conta.

Quanto cada um deve pagar de taxa.

Valor total por pessoa (conta + taxa).

Validação de entrada para evitar valores inválidos.

Formatação de valores em R$ usando toLocaleString('pt-BR', ...).

Exibição condicional de “para cada um” quando o número de pessoas for maior que 1.

Tecnologias

HTML5

CSS3 (com variáveis e reset básico)

JavaScript ES6

Estrutura de Pastas

/ (raiz do projeto)
├── index.html        # Página principal
├── style.css         # Estilos globais e variáveis CSS
└── script.js         # Lógica de cálculo e manipulação do DOM

Instalação / Uso

Faça um clone deste repositório:



git clone https://github.com/AndrewMalcher/calculadora-taxa-servico.git

2. Navegue até a pasta do projeto:
   ```bash
cd calculadora-taxa-servico

Abra o arquivo index.html em seu navegador preferido.

Não é necessário instalar dependências — o projeto é estático.

Personalização

As cores principais estão definidas em :root no style.css. Basta editar as variáveis:

:root {
  --primary-color: salmon;
  --secondary-color: brown;
  --tertiary-color: rgb(150, 108, 56);
  --bg-light: whitesmoke;
  --text-dark: rgb(72, 72, 72);
  --header-bg: rgb(187, 187, 187);
  --success-bg: #4CAF50;
}

Ajuste margens, fontes e sombras no mesmo arquivo.

Contribuição

Contribuições são bem-vindas! Siga estes passos:

Fork deste repositório.

Crie uma branch (git checkout -b feature/nova-funcionalidade).

Faça commit das alterações (git commit -m 'Adiciona nova funcionalidade').

Push para a branch (git push origin feature/nova-funcionalidade).

Abra um Pull Request.

Licença

Este projeto está licenciado sob a MIT License — veja o arquivo LICENSE para mais detalhes.

Autor

Andrew Rodrigues Malcher — AndrewMalcher
# 📚 E-Book Interativo

Uma aplicação web interativa e elegante para leitura de e-books com efeito de virar páginas realista, narração de áudio e design responsivo. Construída com React, Vite e Tailwind CSS.

## ✨ Funcionalidades

### 📖 Experiência de Leitura Imersiva
- **Efeito de Virar Páginas**: Interface realista que simula o comportamento de um livro físico ao virar as páginas
- **Múltiplas Páginas**: 19 páginas no total, incluindo capa, páginas de narração e 9 páginas de conteúdo
- **Design Elegante**: Layout com gradiente estilizado e sombras sofisticadas para uma experiência visual premium

### 🔊 Narração de Áudio
- **Narração Sincronizada**: Áudio automático que toca ao navegar para páginas específicas
- **Controle de Reprodução**: Pause automático e troca de áudio ao mudar de página
- **Reprodução Sob Demanda**: Toque com Seta para cima para reproduzir a narração novamente

### ⌨️ Navegação Intuitiva
- **Controle por Teclado**:
  - **Seta Direita** (→): Avança para a próxima página
  - **Seta Esquerda** (←): Volta para a página anterior
  - **Seta Para Cima** (↑): Reproduz a narração da página atual
- **Suporte a Touch**: Gestos de toque total em dispositivos móveis
- **Navegação Responsiva**: Funcionamento perfeito em diferentes tamanhos de tela

### 🎨 Design Responsivo
- **Adaptativo**: A aplicação se ajusta automaticamente ao tamanho da janela
- **Otimizado para Desktop e Mobile**: Experiência consistente em todos os dispositivos
- **Layout Centralizado**: Apresentação elegante em qualquer resolução

### 🖼️ Conteúdo Visual Rico
- **Imagens Integradas**: Cada página de conteúdo contém ilustrações e gráficos relevantes
- **Estrutura Organizada**: Alternância entre páginas de narração e conteúdo para melhor compreensão
- **Temas Diversos**: Cobre tópicos como desenvolvimento de jogos, programação, design thinking e muito mais

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

## 📦 Dependências Principais

- **React 19**: Framework JavaScript para construção da interface
- **Vite**: Construtor moderno e rápido
- **react-pageflip 2.0.3**: Biblioteca para efeito realista de virar páginas
- **Tailwind CSS 4**: Framework CSS utilitário para estilização
- **ESLint**: Análise estática de código

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Análise de qualidade de código
npm run lint

# Prévia do build de produção
npm run preview
```

## 📂 Estrutura do Projeto

```
ebook/
├── src/
│   ├── components/
│   │   └── book/
│   │       ├── FlipPage.jsx              # Componente wrapper para cada página
│   │       ├── PageFrame.jsx             # Moldura de página
│   │       ├── ChapterPageContent.jsx    # Conteúdo de capítulo
│   │       ├── CoverPageContent.jsx      # Conteúdo da capa
│   │       ├── NarrationPageContent.jsx  # Conteúdo de narração
│   │       ├── VisualAccents.jsx         # Elementos visuais decorativos
│   │       └── pages/
│   │           ├── CoverPage.jsx         # Página de capa
│   │           ├── NarrationPage.jsx     # Páginas de narração
│   │           └── ContentPage0X.jsx     # Páginas de conteúdo (9 páginas)
│   ├── assets/                           # Imagens e áudio
│   ├── App.jsx                           # Componente principal
│   ├── main.jsx                          # Ponto de entrada
│   └── index.css                         # Estilos globais
├── public/                               # Arquivos estáticos públicos
├── package.json                          # Configuração do projeto
├── vite.config.js                        # Configuração do Vite
└── eslint.config.js                      # Configuração do ESLint
```

## 🎯 Fluxo de Navegação

1. **Página 1**: Capa do e-book
2. **Páginas Pares (2, 4, 6...)**: Páginas de narração com áudio
3. **Páginas Ímpares (3, 5, 7...)**: Páginas de conteúdo com imagens e texto

## 💡 Como Adicionar Novas Páginas

1. Crie um novo componente em `src/components/book/pages/ContentPageXX.jsx`
2. Importe o componente em `App.jsx`
3. Adicione uma entrada ao array `pageSequence` com a chave e componente
4. Se necessário, adicione narração ao objeto `narrationByPage`

## 🎵 Como Adicionar Narração de Áudio

1. Coloque o arquivo de áudio em `src/assets/`
2. Importe o arquivo em `App.jsx`
3. Adicione uma entrada ao objeto `narrationByPage`:
   ```javascript
   const narrationByPage = {
     pageNumber: importedAudioFile,
   }
   ```

## 🌐 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Navegadores móveis modernos

## 📱 Otimizações para Mobile

- Suporte completo a gestos de toque
- Responsividade em telas pequenas (mínimo 320px)
- Scroll sincronizado com virar de páginas

## 🔒 Performance

- Build otimizado com Vite
- Lazy loading de áudio
- Renderização eficiente com React
- Estilos otimizados com Tailwind CSS

## 📝 Licença

Este projeto está disponível sob a licença MIT.

## 👨‍💻 Desenvolvimento

Para contribuir com melhorias:

1. Crie uma branch para sua feature
2. Faça suas alterações
3. Execute `npm run lint` para verificar a qualidade do código
4. Envie um pull request

---

**Desenvolvido com ❤️ para uma experiência de leitura digital premium**

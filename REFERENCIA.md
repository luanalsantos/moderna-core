# Documentação de Referência - Projeto HTML

## 📋 Informações Importantes

**Este documento deve ser lido sempre que for fazer qualquer alteração no projeto.**

---

## 🎯 Arquivo Principal

- **Apenas `index.html` é necessário para o projeto**
- Todo o código HTML, CSS e JavaScript está contido neste único arquivo
- Não há dependências de frameworks (Next.js, React, etc.)
- O projeto é HTML puro com CSS e JavaScript vanilla

---

## 🧩 Estrutura em Blocos

O site é construído em **blocos independentes**. Cada bloco é uma seção completa e autocontida do site.

### Características dos Blocos:
- Cada bloco é independente e pode ser movido/reutilizado facilmente
- Cada bloco contém seu próprio HTML, CSS e JavaScript
- Blocos são inseridos dentro de `<main class="flex-grow-1" page:holder="main">`
- Blocos são separados por comentários HTML claros

---

## 📐 Padrão de Blocos

Cada bloco deve seguir este padrão exato:

### ⚙️ Largura Máxima do Conteúdo

**IMPORTANTE**: Todos os blocos devem usar a classe `.content-wrapper` para o conteúdo principal, que possui:

- **Largura máxima**: `1200px`
- **Centralização**: `margin: 0 auto`
- **Padding lateral**: `0 24px` (24px em cada lado)
- **Responsivo**: O padding se ajusta automaticamente em telas menores

**CSS obrigatório para `.content-wrapper` em cada bloco:**

```css
.[nome-do-bloco] .content-wrapper {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
}
```

**Exemplo prático:**
```css
.depoimentos .content-wrapper {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
}
```

⚠️ **Nunca ultrapasse 1200px de largura máxima para o conteúdo dos blocos!**

---

### Template de Bloco:

```html
<!-- ============================================ -->
<!-- BLOCO: [NOME DO BLOCO] - INÍCIO -->
<!-- ============================================ -->
<section class="[classe-do-bloco]" id="[id-do-bloco]">
	
	<!-- CSS do Bloco [Nome do Bloco] -->
	<style>
		/* ============================================ */
		/* CSS - BLOCO [NOME DO BLOCO] */
		/* ============================================ */
		
		/* Seus estilos CSS aqui */
		
		/* Media Queries */
		@media (max-width: 767.98px) {
			/* Estilos responsivos */
		}
	</style>
	
	<!-- HTML do Bloco [Nome do Bloco] -->
	<div class="content-wrapper">
		<!-- Seu HTML aqui -->
	</div>
	
	<!-- JavaScript do Bloco [Nome do Bloco] -->
	<script>
		/* ============================================ */
		/* JAVASCRIPT - BLOCO [NOME DO BLOCO] */
		/* ============================================ */
		
		(function() {
			'use strict';
			
			// Aguarda o carregamento completo do DOM
			document.addEventListener('DOMContentLoaded', function() {
				// Inicialização do bloco
				const blocoSection = document.getElementById('[id-do-bloco]');
				
				if (blocoSection) {
					// Seu código JavaScript aqui
					console.log('Bloco [Nome do Bloco] inicializado');
				}
			});
		})();
	</script>
	
</section>
<!-- ============================================ -->
<!-- BLOCO: [NOME DO BLOCO] - FIM -->
<!-- ============================================ -->
```

### Regras Obrigatórias:

1. **Comentários de Início/Fim**: Sempre use comentários HTML para marcar início e fim do bloco
   ```html
   <!-- ============================================ -->
   <!-- BLOCO: NOME - INÍCIO -->
   <!-- ============================================ -->
   ```

2. **Estrutura CSS**: 
   - Tag `<style>` dentro do bloco
   - Comentário CSS indicando qual bloco
   - Todos os estilos relacionados ao bloco devem estar aqui

3. **Estrutura JavaScript**:
   - Tag `<script>` dentro do bloco
   - Comentário JS indicando qual bloco
   - Código envolvido em IIFE (Immediately Invoked Function Expression)
   - Sempre aguardar `DOMContentLoaded`

4. **Nomenclatura**:
   - Classes CSS: usar prefixo relacionado ao bloco (ex: `.jornada-*`, `.footer-*`)
   - IDs: usar snake_case (ex: `jornada_integrada`)
   - Comentários: sempre em maiúsculas para destacar

5. **Uso de Bootstrap**:
   - Os blocos normalmente usam CSS customizado (Flexbox puro)
   - **Quando necessário usar slides/carrosséis ou menus hambúrguer**: Use componentes do Bootstrap para facilitar a responsividade
   - Bootstrap 5.3.3 já está carregado no projeto e disponível para uso
   - Exemplos de componentes Bootstrap úteis:
     - Carrossel: `carousel`, `carousel-item`
     - Menu hambúrguer: `navbar`, `navbar-toggler`, `collapse`
     - Modal: `modal`, `modal-dialog`
     - Dropdown: `dropdown`, `dropdown-menu`

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos:
- Python 3.x instalado

### Passos:

1. **Abra o terminal na pasta do projeto**

2. **Execute o servidor HTTP:**
   ```bash
   python -m http.server 8000
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:8000/index.html
   ```
   ou simplesmente:
   ```
   http://localhost:8000/
   ```

4. **Para parar o servidor:**
   - Pressione `Ctrl+C` no terminal

### Por que usar servidor local?
- Evita problemas com CORS (Cross-Origin Resource Sharing)
- Permite carregar recursos externos corretamente
- Simula ambiente de produção

---

## 📁 Estrutura de Arquivos

### Arquivos Essenciais:
- ✅ `index.html` - **ÚNICO arquivo necessário**
- ✅ `REFERENCIA.md` - Este documento

### Arquivos Opcionais (podem ser removidos):
- ❌ `app/` - Pasta Next.js (não necessária)
- ❌ `components/` - Componentes React (não necessários)
- ❌ `next.config.mjs` - Configuração Next.js
- ❌ `next-env.d.ts` - Tipos TypeScript Next.js
- ❌ `package.json` - Dependências Node.js
- ❌ `package-lock.json` - Lock de dependências
- ❌ `tsconfig.json` - Configuração TypeScript
- ❌ `postcss.config.mjs` - Configuração PostCSS
- ❌ `node_modules/` - Dependências Node.js

### Pastas que podem conter assets úteis:
- ⚠️ `public/` - Verificar se tem imagens/assets necessários
- ⚠️ `img/` - Se existir, verificar se tem imagens necessárias

---

## ✏️ Exemplo Prático: Criando um Novo Bloco

Suponha que você queira criar um bloco chamado "Depoimentos":

```html
<!-- ============================================ -->
<!-- BLOCO: DEPOIMENTOS - INÍCIO -->
<!-- ============================================ -->
<section class="depoimentos" id="depoimentos">
	
	<!-- CSS do Bloco Depoimentos -->
	<style>
		/* ============================================ */
		/* CSS - BLOCO DEPOIMENTOS */
		/* ============================================ */
		
		.depoimentos {
			background-color: #ffffff;
			padding: 60px 0;
		}
		
		/* OBRIGATÓRIO: content-wrapper com largura máxima de 1200px */
		.depoimentos .content-wrapper {
			max-width: 1200px;
			margin: 0 auto;
			padding: 0 24px;
		}
		
		.depoimento-card {
			background-color: #f5f6f8;
			padding: 24px;
			border-radius: 8px;
			margin-bottom: 20px;
		}
		
		/* Media Queries */
		@media (max-width: 767.98px) {
			.depoimentos {
				padding: 40px 0;
			}
		}
	</style>
	
	<!-- HTML do Bloco Depoimentos -->
	<div class="content-wrapper">
		<h2>Depoimentos</h2>
		<div class="depoimento-card">
			<p>"Excelente experiência!"</p>
			<span>- João Silva</span>
		</div>
	</div>
	
	<!-- JavaScript do Bloco Depoimentos -->
	<script>
		/* ============================================ */
		/* JAVASCRIPT - BLOCO DEPOIMENTOS */
		/* ============================================ */
		
		(function() {
			'use strict';
			
			document.addEventListener('DOMContentLoaded', function() {
				const depoimentosSection = document.getElementById('depoimentos');
				
				if (depoimentosSection) {
					// Adicionar funcionalidades aqui
					console.log('Bloco Depoimentos inicializado');
				}
			});
		})();
	</script>
	
</section>
<!-- ============================================ -->
<!-- BLOCO: DEPOIMENTOS - FIM -->
<!-- ============================================ -->
```

---

## 📝 Checklist ao Criar/Modificar Blocos

- [ ] Comentários HTML de início e fim do bloco estão presentes
- [ ] CSS está dentro de tag `<style>` com comentário identificador
- [ ] JavaScript está dentro de tag `<script>` com comentário identificador
- [ ] JavaScript usa IIFE e aguarda `DOMContentLoaded`
- [ ] Classes CSS usam prefixo relacionado ao bloco
- [ ] ID do bloco está em snake_case
- [ ] **`.content-wrapper` tem `max-width: 1200px` (OBRIGATÓRIO)**
- [ ] Media queries estão incluídas quando necessário
- [ ] Bloco está dentro de `<main class="flex-grow-1" page:holder="main">`

---

## 🔍 Localização dos Blocos no HTML

Os blocos devem ser inseridos **dentro** de:

```html
<main class="flex-grow-1" page:holder="main">
	<!-- SEUS BLOCOS AQUI -->
</main>
```

**NÃO** coloque blocos fora desta tag `<main>`.

---

## 🎨 Uso de Bootstrap nos Blocos

### Quando usar Bootstrap:

**Os blocos normalmente usam CSS customizado (Flexbox puro)**, mas:

- ✅ **Use Bootstrap para slides/carrosséis**: Facilita a responsividade e já vem com funcionalidades prontas
- ✅ **Use Bootstrap para menus hambúrguer**: Componentes responsivos já testados e funcionais
- ✅ **Bootstrap 5.3.3 já está carregado** no projeto e disponível para uso

### Componentes Bootstrap úteis:

- **Carrossel/Slides**: `carousel`, `carousel-item`, `carousel-control-prev`, `carousel-control-next`
- **Menu Hambúrguer**: `navbar`, `navbar-toggler`, `navbar-collapse`, `collapse`
- **Modal**: `modal`, `modal-dialog`, `modal-content`
- **Dropdown**: `dropdown`, `dropdown-menu`, `dropdown-toggle`

### Exemplo de uso em um bloco:

```html
<!-- Dentro do HTML do bloco -->
<div class="content-wrapper">
	<!-- Carrossel Bootstrap -->
	<div id="carouselBloco" class="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner">
			<div class="carousel-item active">
				<!-- Conteúdo do slide -->
			</div>
		</div>
	</div>
</div>
```

**Nota**: Mesmo usando componentes Bootstrap, mantenha o padrão de blocos (CSS e JS dentro do bloco).

---

## ⚠️ Lembrete Final

**SEMPRE consulte este documento antes de fazer alterações!**

- Apenas `index.html` importa
- Use o padrão de blocos documentado
- Cada bloco tem seu próprio CSS e JS
- **Largura máxima do conteúdo: 1200px (usar `.content-wrapper`)**
- **Para slides e menus hambúrguer: use Bootstrap para facilitar responsividade**
- Teste sempre com `python -m http.server 8000`


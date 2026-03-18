# Instruções: Tags de Rastreamento e Modal RD Station

## 1. Google Tag Manager (GTM)

### 1.1 Script no `<head>` — cole como **primeira tag** dentro de `<head>`

```html
<!-- Google Tag Manager -->
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-TVBM7SXJ");
</script>
<!-- End Google Tag Manager -->
```

### 1.2 Noscript no `<body>` — cole como **primeira tag** após a abertura de `<body>`

```html
<!-- Google Tag Manager (noscript) -->
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-TVBM7SXJ"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## 2. Google Analytics (GA4)

> **Instalar via Tag Manager é o recomendado.** O código abaixo é a instalação direta como fallback, caso o GTM não seja usado.

Cole no `<head>`, após o bloco do GTM:

```html
<!-- Google Analytics (GA4) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-61G568L64R"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-61G568L64R");
</script>
```

- **ID da propriedade:** `G-61G568L64R`

---

## 3. RD Station — Loader

> **Instalar via Tag Manager é o recomendado.** O código abaixo é a instalação direta.

Cole no `<head>`, após o bloco do GA4:

```html
<!-- RD Station -->
<script
  type="text/javascript"
  async
  src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/797df9fa-fd7a-49e3-b996-b0e2839fdd1a-loader.js"
></script>
```

---

## 4. Modal "Seja uma Escola Parceira" (RD Station Forms)

O modal é um componente reutilizável com backdrop blur que carrega o formulário RD Station.

### 4.1 Formulário embutido no modal

O formulário usa o container e script abaixo, que devem aparecer **uma única vez por página**:

```html
<div role="main" id="pop-up-do-hotsite-95275bbf6952c5fafcbd"></div>

<script
  type="text/javascript"
  src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
></script>
<script type="text/javascript">
  new RDStationForms(
    "pop-up-do-hotsite-95275bbf6952c5fafcbd",
    "null",
  ).createForm();
</script>
```

### 4.2 HTML do modal — cole antes de `</body>`

```html
<!-- MODAL: SEJA UMA ESCOLA PARCEIRA -->
<style>
  .modal-parceira-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
    opacity: 0;
    transition: opacity 260ms ease;
    pointer-events: none;
  }
  .modal-parceira-overlay.is-open {
    opacity: 1;
    pointer-events: auto;
  }
  .modal-parceira-box {
    position: relative;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 24px 64px rgba(31, 76, 89, 0.18);
    padding: 48px 40px 40px;
    max-width: 560px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    transform: translateY(24px) scale(0.97);
    transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .modal-parceira-overlay.is-open .modal-parceira-box {
    transform: translateY(0) scale(1);
  }
  .modal-parceira-close {
    position: absolute;
    top: 14px;
    right: 18px;
    background: none;
    border: none;
    font-size: 2rem;
    line-height: 1;
    color: #5a6a72;
    cursor: pointer;
    padding: 0 4px;
  }
  .modal-parceira-close:hover {
    color: #1f4c59;
  }
  @media (max-width: 575px) {
    .modal-parceira-box {
      padding: 44px 20px 28px;
    }
  }
</style>

<div
  id="modal-parceira"
  class="modal-parceira-overlay"
  role="dialog"
  aria-modal="true"
  aria-label="Seja uma escola parceira"
>
  <div class="modal-parceira-box">
    <button class="modal-parceira-close" aria-label="Fechar modal">
      &times;
    </button>
    <div role="main" id="pop-up-do-hotsite-95275bbf6952c5fafcbd"></div>
  </div>
</div>

<script
  type="text/javascript"
  src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
></script>
<script type="text/javascript">
  new RDStationForms(
    "pop-up-do-hotsite-95275bbf6952c5fafcbd",
    "null",
  ).createForm();
</script>

<script>
  (function () {
    var overlay = document.getElementById("modal-parceira");
    var closeBtn = overlay.querySelector(".modal-parceira-close");

    function openModalParceira() {
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeModalParceira() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModalParceira);

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModalParceira();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModalParceira();
    });

    window.openModalParceira = openModalParceira;
  })();
</script>
```

### 4.3 Botões que abrem o modal

Qualquer botão ou link na página pode abrir o modal adicionando `onclick`:

```html
<a href="#" onclick="event.preventDefault(); openModalParceira();">
  SEJA UMA ESCOLA PARCEIRA
</a>
```

### 4.4 Comportamentos do modal

| Ação                               | Resultado                                                 |
| ---------------------------------- | --------------------------------------------------------- |
| Clique no botão ✕                  | Fecha o modal                                             |
| Clique fora da caixa (no backdrop) | Fecha o modal                                             |
| Tecla `Escape`                     | Fecha o modal                                             |
| Modal aberto                       | `body` com `overflow: hidden` (bloqueia scroll da página) |

---

## 5. Checklist para novas páginas

- [ ] GTM `<script>` como primeira tag do `<head>`
- [ ] GTM `<noscript>` como primeira tag após `<body>`
- [ ] GA4 no `<head>` (ou configurado via GTM)
- [ ] RD Station loader no `<head>` (ou configurado via GTM)
- [ ] HTML do modal colado antes de `</body>`
- [ ] Todos os botões "SEJA UMA ESCOLA PARCEIRA" com `onclick="event.preventDefault(); openModalParceira();"`

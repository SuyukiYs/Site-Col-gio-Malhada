/* ==========================================================
   COMPORTAMENTO DO SITE  Colégio Colônia Malhada
   Este arquivo só cuida do que o site FAZ:
     1. Ano do rodapé
     2. Abrir e fechar o menu no celular
     3. Formulário de contato
   O conteúdo fica nos arquivos .html e a aparência no css/estilo.css.
   ========================================================== */


/* ---------- 1. ANO DO RODAPÉ (muda sozinho) ---------- */
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();


/* ---------- 2. MENU NO CELULAR ---------- */
const nav = document.getElementById('nav');
const botaoMenu = nav.querySelector('.botao-menu');

function fecharMenu() {
  nav.classList.remove('aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
}

botaoMenu.addEventListener('click', () => {
  const abrir = !nav.classList.contains('aberto');
  nav.classList.toggle('aberto', abrir);
  botaoMenu.setAttribute('aria-expanded', abrir);
});
document.addEventListener('click', e => { if (!nav.contains(e.target)) fecharMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharMenu(); });


/* ---------- 3. FORMULÁRIO DE CONTATO ----------
   Por enquanto só mostra um aviso (ainda não envia e-mail). */
const form = document.querySelector('.form-contato');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelector('.aviso').hidden = false;
  });
}

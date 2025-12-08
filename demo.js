document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Elementos
const viewer = document.getElementById('viewer');
const container = document.getElementById('mockup-container');
const titleLabel = document.getElementById('site-title');
const urlBar = document.getElementById('url-bar');
const browserBar = document.getElementById('browser-bar');
const balloons = document.querySelectorAll('.site-balloon');
const btnDesktop = document.getElementById('btn-desktop');
const btnMobile = document.getElementById('btn-mobile');

// URLs Fictícias
const fakeDomains = {
    'sites/hamburgueria.html': 'https://bravus-burguer.delivery',
    'sites/estetica.html': 'https://lumiere-clinica.com.br',
    'sites/moda.html': 'https://aura-store.com'
};

// Função para Carregar Site
function loadDemo(url, title, element) {
    // Efeito de carregamento rápido
    container.style.opacity = '0.9';
    setTimeout(() => container.style.opacity = '1', 200);

    // Atualiza Iframe
    viewer.src = url;
    
    // Atualiza Textos
    titleLabel.innerText = title;
    urlBar.innerText = fakeDomains[url] || 'https://devsites.demo';

    // Atualiza Classes dos Balões
    balloons.forEach(b => b.classList.remove('active'));
    if(element) {
        element.classList.add('active');
    }
}

// Função para Trocar Dispositivo
function changeView(mode) {
    if (mode === 'mobile') {
        container.classList.remove('browser-mockup');
        container.classList.add('phone-mockup');
        browserBar.style.display = 'none';

        // Atualiza Botões
        btnMobile.classList.replace('bg-white', 'bg-black');
        btnMobile.classList.replace('text-black', 'text-[#D4FF00]');
        btnDesktop.classList.replace('bg-black', 'bg-white');
        btnDesktop.classList.replace('text-[#D4FF00]', 'text-black');
    } else {
        container.classList.remove('phone-mockup');
        container.classList.add('browser-mockup');
        browserBar.style.display = 'flex';

        // Atualiza Botões
        btnDesktop.classList.replace('bg-white', 'bg-black');
        btnDesktop.classList.replace('text-black', 'text-[#D4FF00]');
        btnMobile.classList.replace('bg-black', 'bg-white');
        btnMobile.classList.replace('text-[#D4FF00]', 'text-black');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Menu
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconX = document.getElementById('icon-x');

    // 1. Scroll Effect (Barra branca desce)
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Mobile Menu (Abre e fecha com ícones alternando)
    const toggleMenu = () => {
        if (!mobileMenu) return; // Proteção caso o menu não exista
        const isClosed = mobileMenu.classList.contains('hidden');
        
        if (isClosed) {
            // Abrir
            mobileMenu.classList.remove('hidden');
            // Pequeno delay para a opacidade animar
            setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
            
            if(iconMenu) iconMenu.classList.add('hidden');
            if(iconX) iconX.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Trava scroll
        } else {
            // Fechar
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            
            if(iconMenu) iconMenu.classList.remove('hidden');
            if(iconX) iconX.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Destrava scroll
        }
    };
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMenu);
    }

    // Fechar menu ao clicar em links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

/* --- LÓGICA DE REDIRECIONAMENTO WHATSAPP (FUNCIONA P/ BOTÃO E FORMULÁRIO) --- */

// Número Configurado (Conforme imagem enviada: +55 31 8274-8728)
const NUMERO_ZAP = "553182748728";

// 1. Caso esteja usando o BOTÃO DIRETO (chamarNoZap)
function chamarNoZap() {
    const mensagem = "Olá! Vim pelo site e gostaria de um orçamento para meu negócio.";
    abrirWhatsApp(mensagem);
}

// 2. Caso esteja usando o FORMULÁRIO (enviarParaWhatsApp)
// Isso previne que a página recarregue se você ainda estiver usando o HTML antigo
function enviarParaWhatsApp(event) {
    if(event) event.preventDefault(); // Impede recarregamento da página

    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const mensagemInput = document.getElementById('mensagem');

    let texto = "";

    // Se os campos existirem, pega os dados. Se não, usa mensagem padrão.
    if (nomeInput && telefoneInput && mensagemInput) {
        texto = `*NOVO CLIENTE NO SITE!* 🚀%0A` +
                `--------------------------------%0A` +
                `👤 *Nome:* ${nomeInput.value}%0A` +
                `📱 *Zap:* ${telefoneInput.value}%0A` +
                `💬 *Ideia:* ${mensagemInput.value}`;
    } else {
        texto = "Olá! Vim pelo site e gostaria de um orçamento.";
    }

    abrirWhatsApp(texto);
}

// 3. Função Auxiliar para abrir o link
function abrirWhatsApp(texto) {
    // Usa api.whatsapp.com que as vezes é mais compatível que wa.me em alguns navegadores
    const url = `https://api.whatsapp.com/send?phone=${NUMERO_ZAP}&text=${texto}`; // Já codificado se necessário, ou usar encodeURIComponent na chamada
    window.open(url, '_blank');
}

// 4. Máscara de Telefone (Caso esteja usando o formulário)
function mascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);
    if (valor.length > 2) valor = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
    if (valor.length > 10) valor = `${valor.substring(0, 10)}-${valor.substring(10)}`;
    input.value = valor;
}
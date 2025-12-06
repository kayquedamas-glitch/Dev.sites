document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconX = document.getElementById('icon-x');
    const contactForm = document.getElementById('form-contato');

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
        const isClosed = mobileMenu.classList.contains('hidden');
        
        if (isClosed) {
            // Abrir
            mobileMenu.classList.remove('hidden');
            // Pequeno delay para a opacidade animar
            setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
            
            iconMenu.classList.add('hidden');
            iconX.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Trava scroll
        } else {
            // Fechar
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            
            iconMenu.classList.remove('hidden');
            iconX.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Destrava scroll
        }
    };
    
    mobileMenuToggle.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // 3. Simulação de Formulário - REMOVIDO CONFORME SOLICITADO
    // O formulário agora funcionará com o comportamento padrão do HTML
});
document.addEventListener("DOMContentLoaded", function() {
    // Configurações do Intersection Observer
    const observerOptions = {
        threshold: 0.1, // Dispara quando 10% do elemento está visível
        rootMargin: "0px 0px -50px 0px" // Margem inferior para antecipar um pouco a animação
    };

    // Callback executado quando o elemento entra na tela
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que torna o elemento visível
                entry.target.classList.add('visible');
                // Para de observar o elemento após animar (otimização)
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleciona todos os elementos com a classe .fade-up
    const animatedElements = document.querySelectorAll('.fade-up');
    
    // Inicia a observação para cada elemento
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
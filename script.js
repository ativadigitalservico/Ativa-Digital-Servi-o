document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links da navegação que apontam para seções internas
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');

    // Adiciona um 'listener' de evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Verifica se o link é uma âncora interna (começa com #)
            // E se estamos na página inicial (index.html) para aplicar o smooth scroll
            const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
            if (this.hash !== "" && isHomePage) {
                event.preventDefault(); // Previne o comportamento padrão do clique (salto brusco)

                // Obtém o elemento de destino usando o hash do link
                const targetId = this.hash;
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Rola suavemente até o elemento de destino
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Adiciona classe 'scrolled' ao header quando o usuário rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Se rolou mais de 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
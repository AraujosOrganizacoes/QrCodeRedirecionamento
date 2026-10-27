document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-card');
    const body = document.body;
    const bigIcons = document.querySelectorAll('.big-icon');

    links.forEach(link => {
        // Obter o ID do ícone correspondente a este link
        const iconId = `icon-${link.getAttribute('data-icon')}`;
        const targetIcon = document.getElementById(iconId);

        // --- MOUSE OVER: ATIVA EFEITOS ---
        link.addEventListener('mouseover', () => {
            // 1. Mudar o Fundo do Body
            const socialClass = `hover-${link.getAttribute('data-icon')}`;
            body.classList.remove('default-bg', 'dark-bg'); // Remove padrão
            body.classList.add(socialClass); // Adiciona cor da rede

            // 2. Mostrar o Ícone Grande Correspondente
            if (targetIcon) {
                targetIcon.classList.add('active');
            }
        });

        // --- MOUSE OUT: DESATIVA EFEITOS ---
        link.addEventListener('mouseout', () => {
            // 1. Voltar o Fundo para o Padrão da Empresa (Dourado)
            const socialClass = `hover-${link.getAttribute('data-icon')}`;
            body.classList.remove(socialClass);
            body.classList.add('default-bg'); // Volta para o dourado

            // 2. Esconder o Ícone Grande
            if (targetIcon) {
                targetIcon.classList.remove('active');
            }
        });
    });
});
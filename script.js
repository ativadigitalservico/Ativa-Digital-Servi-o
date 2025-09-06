document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Modo Claro/Escuro (unificada) ---
    const themeToggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggleButton) {
                themeToggleButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
            }
        } else {
            body.classList.remove('dark-mode');
            if (themeToggleButton) {
                themeToggleButton.querySelector('i').classList.replace('fa-sun', 'fa-moon');
            }
        }
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function() {
            if (body.classList.contains('dark-mode')) {
                applyTheme('light');
            } else {
                applyTheme('dark');
            }
        });
    }

    // --- Lógica da Modal de Serviços (para index.html) ---
    const servicosInfo = {
        'modal-documentos': {
            title: 'Criação e Correção de Documentos',
            desc: 'Nossa equipe é especializada na elaboração e revisão de uma ampla gama de documentos, desde contratos e propostas comerciais até relatórios e planilhas. Garantimos precisão, clareza e formatação profissional para que você tenha a tranquilidade de apresentar documentos impecáveis.'
        },
        'modal-curriculos': {
            title: 'Currículos Profissionais',
            desc: 'Elaboramos currículos profissionais que destacam suas melhores qualidades, experiências e habilidades. Ajudamos você a se apresentar da melhor forma possível para o mercado de trabalho, aumentando suas chances de sucesso.'
        },
        'modal-design': {
            title: 'Design Gráfico para Mídias Sociais',
            desc: 'Criamos artes visuais impactantes e estratégicas para suas mídias sociais. De posts a stories, nosso design é pensado para fortalecer sua marca, engajar seu público e gerar mais interações e vendas.'
        },
        'modal-digitalizacao': {
            title: 'Digitalização e Organização de Arquivos',
            desc: 'Transformamos seus documentos físicos em arquivos digitais de alta qualidade. Nosso serviço de organização garante que seus arquivos sejam fáceis de encontrar, acessar e gerenciar, poupando seu tempo e espaço.'
        },
        'modal-apresentacoes': {
            title: 'Criação de Apresentações Profissionais',
            desc: 'Desenvolvemos apresentações profissionais e impactantes, seja para um projeto, uma reunião de negócios ou um pitch de vendas. Criamos slides visualmente atrativos e com mensagens claras, para que você possa impressionar sua audiência.'
        },
        'modal-gestao-redes': {
            title: 'Gestão de Redes Sociais (Básica)',
            desc: 'Cuidamos da sua presença online, garantindo que suas redes sociais estejam sempre ativas e com conteúdo relevante. Oferecemos um serviço de gestão básica para manter seu engajamento e a visibilidade da sua marca.'
        },
        'modal-infoprodutos': {
            title: 'Elaboração de Infoprodutos',
            desc: 'Transforme seu conhecimento em produtos digitais de sucesso. Auxiliamos na estruturação, redação e design de ebooks, cursos online, e-mail marketing e outros infoprodutos, prontos para serem lançados e monetizados.'
        },
        'modal-conversao': {
            title: 'Conversão e Otimização de Arquivos',
            desc: 'Serviço de conversão de arquivos para diferentes formatos (Ex: PDF, Word, Excel). Também otimizamos arquivos para reduzir o tamanho sem perder a qualidade, ideal para sites e envios por e-mail.'
        },
        'modal-consultoria': {
            title: 'Consultoria Digital Rápida',
            desc: 'Sessões curtas e diretas para você tirar dúvidas específicas sobre seu negócio digital. Receba orientações valiosas para resolver problemas ou tomar decisões estratégicas rapidamente.'
        },
        'modal-copywriter': {
            title: 'Copywriter',
            desc: 'Criamos textos persuasivos e estratégicos que convencem seu público a tomar uma atitude, seja ela comprar um produto, se inscrever em uma newsletter ou agendar uma reunião.'
        },
        'modal-social-media': {
            title: 'Social Media',
            desc: 'Gerenciamento completo das suas redes sociais, com planejamento, criação de conteúdo e análise de performance. Nosso objetivo é construir uma comunidade engajada e gerar resultados para sua marca.'
        },
        'modal-redator': {
            title: 'Redator',
            desc: 'Produção de artigos e posts para o seu blog, garantindo qualidade e engajamento.'
        },
        'modal-assistente': {
            title: 'Assistente Virtual',
            desc: 'Oferecemos suporte administrativo remoto para a sua empresa. Delegue tarefas rotineiras, como agendamento de reuniões, gestão de e-mails e organização de documentos, para focar no que realmente importa.'
        },
        'modal-gerente': {
            title: 'Gerente de Operações',
            desc: 'Organizamos e supervisionamos os processos operacionais do seu negócio para garantir a eficiência e a otimização de recursos. Ajudamos a criar fluxos de trabalho que impulsionam o crescimento da sua empresa.'
        },
        'modal-vendedor': {
            title: 'Vendedor',
            desc: 'Profissionais dedicados a prospectar clientes, negociar e fechar vendas para o seu negócio. Nossa equipe atua de forma estratégica para impulsionar a sua receita.'
        },
        'modal-suporte': {
            title: 'Suporte',
            desc: 'Atendimento ao cliente e resolução de problemas técnicos ou dúvidas, através de diversos canais. Nosso objetivo é garantir a satisfação e a fidelidade dos seus clientes.'
        },
        'modal-analista': {
            title: 'Analista de Dados',
            desc: 'Coleta, organização e análise de dados para extrair insights valiosos e embasar suas decisões.'
        },
        'modal-desenvolvedor': {
            title: 'Desenvolvedor',
            desc: 'Criação de soluções de software e websites, para o crescimento e a inovação de sua empresa.'
        }
    };
    
    const servicoItems = document.querySelectorAll('.servico-item');
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');
    const closeBtn = document.querySelector('.close-btn');
    const whatsappNumber = '5534991829416';

    if (servicoItems.length > 0) {
        servicoItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const info = servicosInfo[modalId];
                if (info) {
                    modalTitle.textContent = info.title;
                    modalDesc.textContent = info.desc;
                    modalWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de saber mais sobre ' + info.title + '.')}`;
                    modal.style.display = 'flex';
                }
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.style.display = 'none');
        }

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- Lógica dos Botões de Contratar (para precos.html e contratar.html) ---
    const contratarButtons = document.querySelectorAll('.contratar-btn, .contratar-btn-avulso');
    if (contratarButtons.length > 0) {
        contratarButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                const servicoNome = this.getAttribute('data-servico');
                let mensagem;
                if (this.classList.contains('contratar-btn-avulso')) {
                    mensagem = `Olá, gostaria de contratar o serviço avulso de ${servicoNome}.`;
                } else {
                    mensagem = `Olá, gostaria de contratar o plano ${servicoNome}.`;
                }
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
                window.open(whatsappUrl, '_blank');
            });
        });
    }

    // --- Lógica do botão "Fale Conosco" na section cta-final (em todas as páginas) ---
    const ctaFinalButton = document.getElementById('contratar-agora-btn');
    if (ctaFinalButton) {
        ctaFinalButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            const mensagem = `Olá, gostaria de contratar um serviço.`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // --- Lógica Específica para a Página de Contratação (Formulário) ---
    const contratarForm = document.getElementById('contratarForm');
    const enviarWhatsappBtn = document.getElementById('enviarWhatsapp');

    if (enviarWhatsappBtn && contratarForm) {
        enviarWhatsappBtn.addEventListener('click', function() {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const detalhes = document.getElementById('detalhes').value;

            // Validação simples
            if (!nome || !email || !servico || !detalhes) {
                alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Serviço e Detalhes).');
                return;
            }

            // Constrói a mensagem para o WhatsApp
            let message = `Olá! Meu nome é ${nome}`;
            if (email) message += `, meu e-mail é ${email}`;
            if (telefone) message += ` e meu telefone é ${telefone}`;
            message += `.\n\nGostaria de solicitar um orçamento para o serviço de *${servico}*.`;
            message += `\n\nDetalhes da minha necessidade: ${detalhes}`;
            message += `\n\nPor favor, entre em contato para mais informações.`;

            // Codifica a mensagem para uso na URL
            const encodedMessage = encodeURIComponent(message);

            // Cria o link do WhatsApp
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Abre o link em uma nova aba
            window.open(whatsappLink, '_blank');

            // Opcional: Limpar o formulário após o envio
            contratarForm.reset();
        });
    }
    
    // --- Lógica de Animações (mantida) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Mudança de estilo do header ao rolar a página
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Tratamento especial para os cards da grade (animação em cascata)
    const servicosGrid = document.querySelector('.servicos-grid');
    const depoimentosGrid = document.querySelector('.depoimentos-grid');

    const gridObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.servico-item, .depoimento-item');
                items.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('is-visible');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (servicosGrid) gridObserver.observe(servicosGrid);
    if (depoimentosGrid) gridObserver.observe(depoimentosGrid);
});

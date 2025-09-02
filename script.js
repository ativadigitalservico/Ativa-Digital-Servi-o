document.addEventListener('DOMContentLoaded', function() {
    // Objeto com a informação de todos os serviços para os modais
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
            desc: 'Produção de textos de alta qualidade para o seu blog, site ou e-mail marketing. Escrevemos artigos, posts e roteiros que educam e engajam sua audiência, fortalecendo a autoridade da sua marca.'
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
            desc: 'Coleta, organização e análise de dados para extrair insights valiosos e embasar suas decisões de negócios. Transformamos dados brutos em conhecimento estratégico para o seu crescimento.'
        }
    };

    // Lógica para Modais
    const servicoItems = document.querySelectorAll('.servico-item');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');
    
    servicoItems.forEach(item => {
        item.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            const info = servicosInfo[modalId];

            if (modal && info) {
                modal.querySelector('h3').textContent = info.title;
                modal.querySelector('p').textContent = info.desc;
                modal.style.display = 'flex';
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                this.style.display = 'none';
            }
        });
    });

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
});
document.addEventListener('DOMContentLoaded', function() {
    // Declarações do modal
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescriptionContent = document.getElementById("modalDescriptionContent");
    const closeBtn = document.getElementById("closeBtn");

    // Informações completas dos serviços
    const servicosInfo = {
        documentos: {
            title: "Criação e Correção de Documentos",
            desc: "Definição: Serviço especializado em elaboração, formatação e revisão de textos e documentos diversos, garantindo profissionalismo, clareza e correção gramatical.<br><br>Benefício: Economize tempo e evite erros que podem comprometer a credibilidade. Tenha documentos impecáveis, prontos para uso em contextos profissionais ou pessoais.<br><br>Aplicabilidade: Ideal para empresas, estudantes e profissionais liberais que precisam de documentos formais com alto padrão de qualidade.<br><br>Exemplos práticos: Contratos comerciais, propostas, relatórios, cartas formais e declarações."
        },
        curriculos: {
            title: "Currículos Profissionais",
            desc: "Definição: Criação e formatação de currículos atraentes e estratégicos que destacam suas qualificações e experiência para as vagas desejadas.<br><br>Benefício: Aumenta suas chances de ser notado por recrutadores, apresentando um perfil profissional de forma clara e objetiva.<br><br>Aplicabilidade: Essencial para quem busca recolocação no mercado de trabalho ou deseja atualizar sua apresentação profissional.<br><br>Exemplos práticos: Currículos para diferentes áreas (TI, Vendas, Marketing), currículos vitae e currículos focados em projetos."
        },
        design: {
            title: "Design Gráfico para Mídias Sociais",
            desc: "Definição: Desenvolvimento de artes visuais e posts criativos para plataformas como Instagram, Facebook e LinkedIn, seguindo a identidade visual da sua marca.<br><br>Benefício: Fortalece a presença online, atrai a atenção do público e aumenta o engajamento através de conteúdos visuais de alta qualidade.<br><br>Aplicabilidade: Perfeito para empreendedores, pequenas empresas e influenciadores que querem se destacar no ambiente digital.<br><br>Exemplos práticos: Posts para feed, stories interativos, banners para anúncios e templates personalizados."
        },
        digitalizacao: {
            title: "Digitalização e Organização de Arquivos",
            desc: "Definição: Conversão de documentos físicos para o formato digital, com organização em pastas e subpastas para fácil acesso e busca.<br><br>Benefício: Reduz a necessidade de espaço físico, facilita o acesso remoto aos documentos e aumenta a segurança contra perdas ou danos.<br><br>Aplicabilidade: Empresas com grande volume de papelada, escritórios de advocacia, consultórios e qualquer profissional que busca um ambiente de trabalho mais digital.<br><br>Exemplos práticos: Digitalização de notas fiscais, contratos antigos, prontuários de pacientes e acervo pessoal."
        },
        apresentacoes: {
            title: "Criação de Apresentações Profissionais",
            desc: "Definição: Elaboração de slides visualmente atraentes e com conteúdo estruturado para palestras, reuniões ou propostas comerciais.<br><br>Benefício: Causa uma impressão profissional, torna a comunicação mais clara e cativante e aumenta o impacto da mensagem.<br><br>Aplicabilidade: Para executivos, palestrantes, consultores e estudantes que precisam de apresentações de alto nível.<br><br>Exemplos práticos: Pitch de vendas, apresentações para investidores, aulas e webinars."
        },
        gestao_redes: { // Chave alterada para um formato válido
            title: "Gestão de Redes Sociais (Básica)",
            desc: "Definição: Gerenciamento básico de perfis sociais, incluindo agendamento de posts e interações com o público, para manter a consistência da marca.<br><br>Benefício: Mantém sua marca relevante e visível nas redes sociais, sem a necessidade de um gestor de tempo integral.<br><br>Aplicabilidade: Ideal para pequenas empresas e profissionais que precisam de uma presença digital constante, mas não têm tempo para gerenciar o dia a dia das redes.<br><br>Exemplos práticos: Agendamento de posts semanais, monitoramento de comentários e respostas simples."
        },
        infoprodutos: {
            title: "Elaboração de Infoprodutos",
            desc: "Definição: Criação de materiais digitais como eBooks, manuais, checklists e guias, prontos para serem comercializados ou distribuídos.<br><br>Benefício: Permite que você monetize seu conhecimento e alcance um público maior, com um produto de baixo custo de produção.<br><br>Aplicabilidade: Especialistas, coaches, professores e criadores de conteúdo que desejam transformar seu conhecimento em um produto escalável.<br><br>Exemplos práticos: eBook sobre culinária vegana, guia de exercícios físicos, manual de finanças pessoais e checklist para viagens."
        },
        otimizacao: {
            title: "Conversão e Otimização de Arquivos",
            desc: "Definição: Serviço de conversão de arquivos de um formato para outro (ex: PDF para Word, vídeo para áudio) e otimização para reduzir o tamanho sem perder a qualidade.<br><br>Benefício: Garante a compatibilidade entre diferentes plataformas e dispositivos, além de economizar espaço de armazenamento e facilitar o compartilhamento.<br><br>Aplicabilidade: Para qualquer pessoa que lide com diferentes tipos de arquivos e precise de flexibilidade no uso.<br><br>Exemplos práticos: Conversão de PDF para formato editável, compactação de fotos para sites, conversão de vídeos para web."
        },
        consultoria: {
            title: "Consultoria Digital Rápida",
            desc: "Definição: Sessões de consultoria de 30 minutos para solucionar dúvidas específicas sobre marketing digital, redes sociais, produtividade ou gestão de negócios online.<br><br>Benefício: Receba orientação profissional, personalizada e focada, economizando tempo e dinheiro com soluções rápidas.<br><br>Aplicabilidade: Empreendedores, freelancers e profissionais que precisam de um direcionamento claro para um problema ou projeto específico.<br><br>Exemplos práticos: Orientação para montar uma campanha de e-mail marketing, dicas para otimizar um perfil no Instagram, conselhos sobre ferramentas de automação."
        },
        copywriter: {
            title: "Copywriter",
            desc: "Definição: Criação de textos persuasivos e estratégicos com o objetivo de motivar o leitor a realizar uma ação (comprar, clicar, se inscrever, etc.).<br><br>Benefício: Aumenta a taxa de conversão, gera mais vendas e constrói uma conexão emocional mais forte com seu público-alvo.<br><br>Aplicabilidade: Empresas de e-commerce, criadores de infoprodutos, agências de marketing e qualquer negócio que precise vender com palavras.<br><br>Exemplos práticos: Anúncios para redes sociais, e-mail marketing, roteiros de vídeos de venda e descrições de produtos."
        },
        social_media: { // Chave alterada para um formato válido
            title: "Social Media",
            desc: "Definição: Planejamento, criação e gestão completa de conteúdo para as redes sociais, incluindo estratégia, calendário editorial e análise de métricas.<br><br>Benefício: Constrói uma presença digital forte e consistente, aumenta o reconhecimento da marca e gera leads qualificados.<br><br>Aplicabilidade: Para marcas e empresas que buscam um crescimento sólido nas redes sociais e uma comunicação estratégica.<br><br>Exemplos práticos: Estratégia de conteúdo para Instagram, gestão de campanhas no Facebook, criação de calendário de posts para LinkedIn."
        },
        redator: {
            title: "Redator",
            desc: "Definição: Produção de conteúdo escrito com qualidade e relevância para blogs, sites, roteiros e outros materiais, com foco em SEO.<br><br>Benefício: Atrai tráfego orgânico para o seu site, posiciona sua marca como autoridade no nicho e educa o público-alvo.<br><br>Aplicabilidade: Blogs corporativos, agências de marketing, empresas que precisam de artigos para sites e produtores de conteúdo.<br><br>Exemplos práticos: Artigos para blog, roteiros para vídeos, textos para landing pages e white papers."
        },
        assistente_virtual: { // Chave alterada para um formato válido
            title: "Assistente Virtual",
            desc: "Definição: Suporte remoto para tarefas administrativas, organização de agenda, gerenciamento de e-mails, pesquisa e outras atividades operacionais.<br><br>Benefício: Permite que você foque nas atividades estratégicas do seu negócio, delegando as tarefas repetitivas e otimizando sua produtividade.<br><br>Aplicabilidade: Empreendedores, CEOs, profissionais liberais e freelancers que precisam de uma mão extra para gerenciar o dia a dia.<br><br>Exemplos práticos: Organização de agenda, agendamento de reuniões, gestão de caixa de entrada de e-mails, pesquisa de fornecedores."
        },
        gerente_operacoes: { // Chave alterada para um formato válido
            title: "Gerente de Operações",
            desc: "Definição: Supervisão e otimização dos processos internos de uma empresa, garantindo que as atividades diárias ocorram de forma eficiente e alinhada aos objetivos.<br><br>Benefício: Aumenta a produtividade, reduz custos e melhora a qualidade do serviço ou produto, através de uma gestão estratégica.<br><br>Aplicabilidade: Startups, pequenas e médias empresas que buscam estruturar e profissionalizar seus processos operacionais.<br><br>Exemplos práticos: Mapeamento de processos, implementação de ferramentas de gestão, otimização de fluxos de trabalho."
        },
        vendedor: {
            title: "Vendedor",
            desc: "Definição: Execução de atividades de vendas, desde a prospecção de leads até o fechamento de negócios, utilizando técnicas de negociação e persuasão.<br><br>Benefício: Aumenta o faturamento do seu negócio, expande sua base de clientes e constrói relacionamentos duradouros com o público.<br><br>Aplicabilidade: Empresas que precisam de um reforço no time comercial, mas não podem contratar um funcionário em tempo integral.<br><br>Exemplos práticos: Prospecção de novos clientes, negociação de propostas, follow-up de leads, fechamento de vendas."
        },
        desenvolvedor: {
            title: "Desenvolvedor",
            desc: "Definição: Criação e manutenção de websites, landing pages e soluções digitais, utilizando linguagens de programação e as melhores práticas de desenvolvimento.<br><br>Benefício: Garante uma presença digital profissional e funcional, com um site rápido, seguro e otimizado para os mecanismos de busca.<br><br>Aplicabilidade: Startups, empreendedores e empresas que precisam de uma plataforma digital para divulgar seus serviços e produtos.<br><br>Exemplos práticos: Desenvolvimento de sites institucionais, e-commerces, blogs personalizados e páginas de vendas (landing pages)."
        },
        suporte: {
            title: "Suporte",
            desc: "Definição: Atendimento ao cliente e resolução de problemas técnicos ou dúvidas, através de diferentes canais de comunicação.<br><br>Benefício: Aumenta a satisfação do cliente, fortalece a reputação da marca e fideliza o público através de um atendimento de qualidade.<br><br>Aplicabilidade: E-commerces, empresas de tecnologia, negócios com alta demanda de atendimento ao cliente e qualquer negócio que valorize a experiência do usuário.<br><br>Exemplos práticos: Atendimento via chat online, suporte por e-mail, resolução de problemas técnicos e acompanhamento de pedidos."
        },
        analista_dados: {
            title: "Analista de Dados",
            desc: "Definição: Coleta, organização e análise de dados para extrair insights valiosos e guiar decisões estratégicas de negócio.<br><br>Benefício: Permite uma tomada de decisão mais inteligente e baseada em fatos, otimizando investimentos e identificando novas oportunidades de crescimento.<br><br>Aplicabilidade: E-commerces, agências de marketing, grandes empresas e negócios que buscam entender o comportamento do cliente e o desempenho de suas ações.<br><br>Exemplos práticos: Análise de dados de vendas, interpretação de métricas de marketing, criação de dashboards e relatórios de desempenho."
        }
    };

    // Função de rolagem suave e mudança de estilo do header
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
            if (this.hash !== "" && isHomePage) {
                event.preventDefault();
                const targetElement = document.querySelector(this.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Funções do Modal
    document.querySelectorAll(".servico-item").forEach(item => {
        item.addEventListener("click", () => {
            const servico = item.getAttribute("data-servico");
            // Substitui o traço por underline para compatibilidade
            const servicoKey = servico.replace(/-/g, '_');
            
            if (servicosInfo[servicoKey]) {
                modalTitle.textContent = servicosInfo[servicoKey].title;
                modalDescriptionContent.innerHTML = servicosInfo[servicoKey].desc;
                modal.style.display = "flex";
            }
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; }
});
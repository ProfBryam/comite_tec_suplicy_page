const infos = [
    {
        curso: "Marketing",
        description: "Visando capacitar o aluno a planejar e executar estratégias de comunicação e vendas para produtos e serviços, pesquisando mercados e analisando o comportamento do consumidor. O profissional formado encontra um mercado de trabalho dinâmico, com vagas em agências de publicidade, departamentos de marketing de empresas e no setor de varejo, atuando com mídias sociais, organização de eventos e pesquisa de mercado!",
        info_1: "Pesquisa de Mercado", info_2: "Gestão de Mídias Sociais", info_3: "Planejamento de Marketing", info_4: "Comunicação e Vendas",
    },
    {
        curso: "Sistemas",
        description: "Com o objetivo de formar profissionais capazes de analisar, projetar, desenvolver e manter sistemas computacionais, utilizando linguagens de programação e bancos de dados. Ao concluir o curso, encontrara um mercado de trabalho aquecido, com oportunidades em empresas de tecnologia, startups, e no setor público, podendo atuar como programador, desenvolvedor de software ou em áreas correlatas, além de estar preparado para prosseguir os estudos em nível superior!",
        info_1: "Codificação de Sites", info_2: "Lógica de Programação", info_3: "Análise de Projetos", info_4: "Desenvolvimento de APPs",
    },
    {
        curso: "Eletromecânica",
        description: "Com o objetivo de formar profissionais para atuar no projeto, execução e manutenção de sistemas que integram mecânica, elétrica e automação industrial. O mercado de trabalho para este técnico é amplo e aquecido, com oportunidades em indústrias de diversos setores, como metalúrgico, automobilístico e de alimentos, atuando na manutenção de máquinas, na automação de processos e na instalação de equipamentos industriais!",
        info_1: "Manutenção Industrial", info_2: "Automação Industrial", info_3: "Leitura e Interpretação de Desenho Técnico", info_4: "Usinagem e Processos de Fabricação",
    },
];

function updateCourseText(selected_info) {
    document.querySelectorAll(".course_name").forEach(el => {
        escreverComEfeito(el, selected_info.curso)
    });
    document.querySelectorAll(".course_description").forEach(el => {
        escreverComEfeito(el, selected_info.description)
    });
    document.querySelectorAll(".course_info_1").forEach(el => {
        escreverComEfeito(el, selected_info.info_1)
    });
    document.querySelectorAll(".course_info_2").forEach(el => {
        escreverComEfeito(el, selected_info.info_2)
    });
    document.querySelectorAll(".course_info_3").forEach(el => {
        escreverComEfeito(el, selected_info.info_3)
    });
    document.querySelectorAll(".course_info_4").forEach(el => {
        escreverComEfeito(el, selected_info.info_4)
    });
}

function switchcourse(id_course) {
    let botoesDosCursos = [
        document.querySelector('.marketing_button'),
        document.querySelector('.eletro_button'),
        document.querySelector('.system_button'),
    ]
    const selected_info = infos[id_course];

    updateCourseText(selected_info);
    botoesDosCursos.forEach((botao, index) => {
        if (index === id_course) {
            botao.style.visibility = 'visible';
            botao.style.opacity = '1';
        } else {
            botao.style.visibility = 'hidden';
            botao.style.opacity = '0';
        }
    });
}

window.onload = () => {
    switchcourse(0);
};



/**
 * Cria uma pausa na execução.
 * @param {number} ms - Duração da pausa em milissegundos.
 */
const delay = (ms) => new Promise(res => setTimeout(res, ms));

/**
 * Anima a reescrita de um texto em um elemento HTML com um efeito de "scramble".
 * @param {HTMLElement} elemento - O elemento DOM onde o texto será escrito.
 * @param {string} textoFinal - O texto que deve ser exibido ao final da animação.
 */
async function escreverComEfeito(elemento, textoFinal) {
    // --- Configurações da Animação ---
    const letrasParaSortear = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*&%$#@!?<>[]{}';
    const duracaoSorteioMs = 5; // Velocidade do "embaralhamento" de cada letra (em milissegundos)
    const iteracoesPorLetra = 3; // Quantas vezes cada letra é sorteada antes de acertar a correta

    let textoAtual = '';

    // Limpa o texto antigo antes de começar
    elemento.innerText = '';

    // Loop principal: percorre cada letra do texto final
    for (let i = 0; i < textoFinal.length; i++) {
        const letraCorreta = textoFinal[i];

        // Se a letra for um espaço, apenas adiciona e pula a animação
        if (letraCorreta === ' ') {
            textoAtual += ' ';
            elemento.innerText = textoAtual;
            continue;
        }

        // Loop de "embaralhamento" para a letra atual
        for (let j = 0; j < iteracoesPorLetra; j++) {
            // Pega uma letra aleatória do nosso conjunto
            const letraAleatoria = letrasParaSortear.charAt(Math.floor(Math.random() * letrasParaSortear.length));

            // Atualiza o texto na tela com a parte já correta + a letra aleatória
            elemento.innerText = textoAtual + letraAleatoria;

            // Espera um pouco antes da próxima iteração
            await delay(duracaoSorteioMs);
        }

        // Após o sorteio, define a letra correta
        textoAtual += letraCorreta;
        elemento.innerText = textoAtual;
    }
}
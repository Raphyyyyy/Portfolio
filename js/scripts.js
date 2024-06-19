
// Muda o texto para uma versão resumida de sobre mim quando estiver no mobile
function updateText() {
    const pElement = document.getElementById('sobre2-texto');
    if (window.innerWidth <= 768) {
        pElement.innerHTML  = 'Sou um entusiasta da programação com forte aptidão para resolver problemas complexos e implementar soluções inovadoras, destacando-me pela confiabilidade, boa comunicação e iderança colaborativa. Embora minha formação seja em Engenharia Civil, adquiri habilidades em programação e design de forma autodidata. Valorizo o trabalho em equipe e contribuo para a organização, fluidez de processos e otimização de atividades no desenvolvimento de software. Adaptável e comprometido com o prendizado contínuo, busco oportunidades para aplicar minhas habilidades e me destacar como programador front end';
    } else {
        pElement.innerHTML  = 'Me chamo Rafael Nunes e sou um entusiasta da programação em busca de oportunidades para contribuir com minha paixão pela organização, fluidez de processos e otimização de atividades no desenvolvimento de software. Reconhecido por minha confiabilidade e boa comunicação, tenho  habilidades sólidas em resolver problemas complexos e implementar soluções inovadoras, graças à        minha criatividade e capacidade de liderança.<br><br>Com uma forte aptidão para trabalho em equipe, valorizo as contribuições dos colegas e lidero de forma colaborativa em projetos desafiadores, buscando  soluções eficazes e escaláveis. Sou adaptável a diferentes ambientes e situações, comprometido em        aprender continuamente e me atualizar com as últimas tecnologias e práticas de programação.        <br><br>Embora minha formação seja em Engenharia Civil, desenvolvi habilidades em programação e design de forma autodidata e estou determinado a destacar-me como programador profissional.';
    }
}

// Chama a função ao carregar a página
window.onload = updateText;

// Adiciona um evento de redimensionamento para atualizar o texto quando a janela for redimensionada
window.onresize = updateText;
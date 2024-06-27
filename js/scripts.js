// Função para mudar o texto para uma versão resumida de sobre mim quando estiver no mobile
function updateText() {
    const pElement = document.getElementById('sobre2-texto');
    if (window.innerWidth <= 768) {
        pElement.innerHTML = 'Sou um entusiasta da programação com forte aptidão para resolver problemas complexos e implementar soluções inovadoras, destacando-me pela confiabilidade, boa comunicação e liderança colaborativa. Adquiri habilidades em programação e design de forma autodidata. Contribuo para a organização, fluidez de processos e otimização de atividades no desenvolvimento de software. Adaptável e comprometido com o aprendizado contínuo, busco oportunidades para aplicar minhas habilidades e me destacar como programador front end';
    } else {
        pElement.innerHTML = 'Me chamo Rafael Nunes e sou um entusiasta da programação em busca de oportunidades para contribuir com minha paixão pela organização, fluidez de processos e otimização de atividades no desenvolvimento de software. Reconhecido por minha confiabilidade e boa comunicação, tenho habilidades sólidas em resolver problemas complexos e implementar soluções inovadoras, graças à minha criatividade e capacidade de liderança.<br><br>Com uma forte aptidão para trabalho em equipe, valorizo as contribuições dos colegas e lidero de forma colaborativa em projetos desafiadores, buscando soluções eficazes e escaláveis. Sou adaptável a diferentes ambientes e situações, comprometido em aprender continuamente e me atualizar com as últimas tecnologias e práticas de programação. <br><br>Embora minha formação seja em Engenharia Civil, desenvolvi habilidades em programação e design de forma autodidata e estou determinado a destacar-me como programador profissional.';
    }
}
        function updateText() {
            const pElement = document.getElementById('sobre2-texto');
            if (window.innerWidth <= 768) {
                pElement.innerHTML = 'Sou um entusiasta da programação com forte aptidão para resolver problemas complexos e implementar soluções inovadoras, destacando-me pela confiabilidade, boa comunicação e liderança colaborativa. Embora minha formação seja em Engenharia Civil, adquiri habilidades em programação e design de forma autodidata. Contribuo para a organização, fluidez de processos e otimização de atividades no desenvolvimento de software. Adaptável e comprometido com o aprendizado contínuo, busco oportunidades para aplicar minhas habilidades e me destacar como programador front end';
            } else {
                pElement.innerHTML = 'Me chamo Rafael Nunes e sou um entusiasta da programação em busca de oportunidades para contribuir com minha paixão pela organização, fluidez de processos e otimização de atividades no desenvolvimento de software. Reconhecido por minha confiabilidade e boa comunicação, tenho habilidades sólidas em resolver problemas complexos e implementar soluções inovadoras, graças à minha criatividade e capacidade de liderança.Com uma forte aptidão para trabalho em equipe, valorizo as contribuições dos colegas e lidero de forma colaborativa em projetos desafiadores, buscando soluções eficazes e escaláveis. Sou adaptável a diferentes ambientes e situações, comprometido em aprender continuamente e me atualizar com as últimas tecnologias e práticas de programação. Embora minha formação seja em Engenharia Civil, desenvolvi habilidades em programação e design de forma autodidata e estou determinado a destacar-me como programador profissional.';
            }
        }

        // Função para escrever o texto letra por letra, respeitando tags HTML
        function typeWriter(element, text, interval) {
            element.innerHTML = ''; // Limpa o conteúdo do elemento
            let i = 0;
            let isTag = false;
            let timer = setInterval(() => {
                if (i < text.length) {
                    if (text.charAt(i) === '<') {
                        isTag = true;
                    }
                    element.innerHTML += text.charAt(i);
                    if (text.charAt(i) === '>') {
                        isTag = false;
                        i++; // Avança para o próximo caractere após a tag
                    }
                    if (!isTag) {
                        i++;
                    } else {
                        // Avança dentro da tag inteira
                        i++;
                        while (i < text.length && text.charAt(i) !== '>') {
                            element.innerHTML += text.charAt(i);
                            i++;
                        }
                        element.innerHTML += text.charAt(i); // Adiciona o '>'
                        i++; // Avança para o próximo caractere após a tag
                    }
                } else {
                    clearInterval(timer);
                }
            }, interval);
        }

        // Função para iniciar a animação quando o elemento estiver visível
        function startTypingAnimation() {
            const pElement = document.getElementById('sobre2-texto');
            if (isElementInViewport(pElement) && !pElement.dataset.animated) {
                pElement.dataset.animated = true; // Marca o elemento como animado
                const text = pElement.getAttribute('data-text'); // Obtém o texto original
                typeWriter(pElement, text, 5); // Inicia a animação de escrita
            }
        }

        // Função para verificar se o elemento está na viewport
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Função para inicializar a animação de digitação
        function initializeTypingAnimation() {
            const pElement = document.getElementById('sobre2-texto');
            updateText(); // Atualiza o texto com base no tamanho da janela
            if (window.innerWidth >= 768) { // Verifica se a largura da janela é maior ou igual a 768px (desktop)
                pElement.setAttribute('data-text', pElement.innerHTML.trim()); // Armazena o texto original (removendo espaços extras)
                pElement.innerHTML = ''; // Limpa o conteúdo inicial
                startTypingAnimation(); // Inicia a animação de digitação

                // Adiciona um evento de redimensionamento para atualizar o texto quando a janela for redimensionada
                window.onresize = function() {
                    if (window.innerWidth >= 768) {
                        updateText(); // Atualiza o texto com base no tamanho da janela
                        pElement.setAttribute('data-text', pElement.innerHTML.trim()); // Atualiza o texto original armazenado
                        pElement.innerHTML = ''; // Limpa o conteúdo para reiniciar a animação
                        pElement.dataset.animated = false; // Reseta a animação
                        startTypingAnimation(); // Reinicia a animação de digitação
                    } else {
                        updateText(); // Atualiza o texto com base no tamanho da janela
                    }
                };

                // Adiciona um evento de rolagem para verificar a visibilidade do elemento
                window.addEventListener('scroll', startTypingAnimation);
            }
        }

        // Chama a função para inicializar a animação de digitação ao carregar a página
        document.addEventListener('DOMContentLoaded', initializeTypingAnimation);

//-----------------------------------------------FUNDO----------------------------------------------------------//
// Script do fundo HTML
let montanha = document.getElementById('montanha');
let pagoda = document.getElementById('pagoda');
let garca = document.getElementById('garca');
let sol = document.getElementById('sol');
let nuvem = document.getElementById('nuvem');
let headTexto = document.getElementById('head-texto');
let sobreTexto = document.getElementById('sobre-texto');
let fundoFotoSobreMim = document.getElementById('fundo-ft-sobre-mim');

// Fundo do sobre mim
let montanhaSobre = document.getElementById('montanha-sobre');

// Função para verificar se o elemento está pelo menos parcialmente no viewport
function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom >= 0
    );
}

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    montanha.style.top = value * 0.5 + 'px';
    pagoda.style.top = value * 0.5 + 'px';

    if (isElementPartiallyInViewport(montanhaSobre)) {
        montanhaSobre.style.transform = `translateY(${value * 0.5}px)`;
    }
});

// Aumenta a pagoda
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let scaleValue = 1 + value * 0.001; // Ajuste o fator de escala conforme necessário
    const maxScale = 2; // Defina o limite máximo de escala

    if (scaleValue > maxScale) {
        scaleValue = maxScale;
    }
    pagoda.style.transform = `scale(${scaleValue})`;
});

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    nuvem.style.left = value * 0.9 + 'px';
});

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    sol.style.left = value * 0.9 + 'px';
    sol.style.top = value * 0.9 + 'px';
});

// Para a animação da garça quando fora da tela
window.addEventListener('scroll', function() {
    if (!isElementInViewport(garca)) {
        garca.style.animationPlayState = 'paused';
    } else {
        garca.style.animationPlayState = 'running';
    }
});

// Força a animação de blur ao carregar a página
window.addEventListener('load', function() {
    headTexto.style.animation = 'blurIn 2s ease-out';
});

// Definir a posição inicial da montanhaSobre ao carregar a página
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    montanhaSobre.style.transform = `translateY(calc(-90% + ${value * 2}px))`;//ela já começa -90 acima do normal
});
//-----------------------------------------------------menu-----------------------------------------------------//

let habilidadesLink = document.getElementById('habilidades-link');

function updateLinkHref() {
    const link = document.getElementById('habilidades-link');
    if (window.innerWidth <= 768) {
        link.setAttribute('href', '#habilidades-mobile');
    } else {
        link.setAttribute('href', '#habilidades-pai');
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', updateLinkHref);

// Adiciona um evento de redimensionamento para atualizar o link quando a janela for redimensionada
window.addEventListener('resize', updateLinkHref);

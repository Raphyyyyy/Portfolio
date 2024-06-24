
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



//-----------------------------------------------FUNDO----------------------------------------------------------//
//script do fundo html
let montanha = document.getElementById('montanha');
let pagoda = document.getElementById('pagoda');
let garca = document.getElementById('garca');
let sol = document.getElementById('sol');
let nuvem = document.getElementById('nuvem');
let headTexto = document.getElementById('head-texto');

//esses objetos ficam estaticos
window.addEventListener('scroll', function(){
    let value = window.scrollY;

    montanha.style.top = value * 0.5 + 'px';
    pagoda.style.top = value * 0.5 + 'px';
    // headTexto.style.top = value * 0.5 + 'px';


});


//aumenta a pagoda
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let scaleValue = 1 + value * 0.001; // Ajuste o fator de escala conforme necessário
    const maxScale = 2; // Defina o limite máximo de escala

    if (scaleValue > maxScale) {
        scaleValue = maxScale;
    }
    pagoda.style.transform = `scale(${scaleValue})`;
});


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    nuvem.style.left = value * 0.9 + 'px';
});

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sol.style.left = value * 0.9 + 'px';
    sol.style.top = value * 0.9 + 'px';
});

//para a animacao da garca quando fora da tela
function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function(){
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

//---------------------------------------SOBRE MIM---------------------------------------//

// Animação de digitação
document.addEventListener("DOMContentLoaded", function() {
    const sobre2Texto = document.querySelector("#sobre2-texto");
    const text = sobre2Texto.innerHTML;
    sobre2Texto.innerHTML = '';

    for (let char of text) {
        let span = document.createElement('span');
        span.innerHTML = char;
        sobre2Texto.appendChild(span);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isElementInViewport(sobre2Texto)) {
            const spans = sobre2Texto.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.animationDelay = `${index * 0.05}s`;
                span.classList.add('typing');
            });
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});


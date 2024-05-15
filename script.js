let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")


function abrirfecharmenu() {
    if (menu.classList.contains("menu-fechado")) {
        // Abrir menu
        menu.classList.remove("menu-fechado")
        // Mostrar icone X
        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"
    }
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Mostrar icone X

        iconeX.style.display = "none"

        // Esconder icone Barras

        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"

}


// Função carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])


const proxSlide = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < (numSlides - 1)) {
        slideAtual++
    }
    else {
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

const slideAnt = () => {
    banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0) {
        slideAtual--
    }
    else {
        slideAtual = numSlides - 1
    }
    banner.classList.add(slides[slideAtual])
}


const selecSlide = (indiceSlide) => {
    slides.forEach(slides => banner.classList.remove(slides))

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}


let listaCases =
[
    {
        img: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação, onde os funcionários devem propor e implementar idéias inovadoras"
    },

    {
        img: "https://unsplash.it/600/400?image=62",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinament"
    },

    {
        img: "https://unsplash.it/600/400?image=28",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },

    {
        img: "https://unsplash.it/600/400?image=41",
        descricao: "Uma empresa que promove o bem dos funcionários através de um desafio de gamificação de condicionamento físico"
    }

]

const renderizarCases = () =>
{
    let elementoLista = document.getElementById("lista-cards")
    
    // Template Strings
    let template = ""

    listaCases.forEach
    ( cardCase => 
        {
            template += `<div class="card">
                        <img src="${cardCase.img}" alt="">
                        <p> ${cardCase.descricao}</p>
                        <button>Ver Mais</button>
                        </div>`
        }    
    )

    elementoLista.innerHTML = template
}
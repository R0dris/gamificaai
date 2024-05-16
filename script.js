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

    ]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Template Strings
    let template = ""

    listaCases.forEach
        (cardCase => {
            template += `<div class="card">
                        <img src="${cardCase.img}" alt="">
                        <p> ${cardCase.descricao}</p>
                        <button>Ver Mais</button>
                        </div>`
        }
        )

    elementoLista.innerHTML = template
}


const carregarCases = () => {
    fetch("http://localhost:3000/cases")
        .then(resposta => resposta.json())
        .then( dados => {listaCases = dados
               renderizarCases() })
}


const solicitarOrcamento = () => 
{
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    console.log (valorNome);
    console.log (valorEmail);
    console.log (valorDescricao);

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisição para API
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dadosForm)  
        }
        )
    .then (resposta => console.log(resposta))
    .catch(erro => console.error(erro))
        // Limpar os campos
        // Mostrar alert com msg de sucesso
        // CASO ERRO - alert com msg erro
     
}
let menu = document.getElementById ("menu")
let iconeBarras = document.getElementById ("icone-barras")
let iconeX = document.querySelector("#icone-x")


function abrirfecharmenu ()
{
    if (menu.classList.contains("menu-fechado"))
    {
        // Abrir menu
        menu.classList.remove("menu-fechado")
        // Mostrar icone X
        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"
    }
    else
    {
        // Fechar o menu
        menu.classList.add("menu-fechado")

                // Mostrar icone X

                iconeX.style.display = "none"
                
                // Esconder icone Barras

                iconeBarras.style.display = "inline"
    }
}

window.onresize = () =>  {
    menu.classList.remove ("menu-fechado")
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


const proxSlide = () =>
{
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < (numSlides - 1))
    {
        slideAtual++
    }
    else{
        slideAtual = 0
    }

    banner.classList.add(slides[slideAtual])
}

const slideAnt = () =>
{
    banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0)
    {
        slideAtual--
    }
    else{
        slideAtual = numSlides - 1
    }
    banner.classList.add(slides[slideAtual])
}

document.addEventListener("DOMContentLoaded", function() {

    const br = document.getElementById("br")
    const en = document.getElementById("en")
    const spanish = document.getElementById("spanish")
    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    const item4 = document.getElementById("item4")
    const landingPageP = document.getElementById("landingPageP")
    const entrar = document.getElementById("entrar")
    const criarConta = document.getElementById("criarConta")
    const acessar = document.getElementById("acessar")

    br.onclick = function() {

        br.classList.toggle("hidden")
        en.classList.toggle("hidden")

        landingPageP.innerText = "Exchange, Language and Culture"
        entrar.innerText = "Login"
        criarConta.innerText ="Sign up"
        acessar.innerText = "Acess"

    }

    en.onclick = function() {

        en.classList.toggle("hidden")
        spanish.classList.toggle("hidden")

        landingPageP.innerText = "Intercambio, Lengua y Cultura"
        entrar.innerText = "Entrar"
        criarConta.innerText ="Crear cuenta"
        acessar.innerText = "Acesso"
        item1.innerText = "Artículo 1"
        item2.innerText = "Artículo 2"
        item3.innerText = "Artículo 3"
        item4.innerText = "Artículo 4"

    }


    spanish.onclick = function() {

        spanish.classList.toggle("hidden")
        br.classList.toggle("hidden")

        landingPageP.innerText = "Intercâmbio, Linguagem e Cultura"
        entrar.innerText = "Entrar"
        criarConta.innerText ="Criar conta"
        acessar.innerText = "Acessar"
        item1.innerText = "Item 1"
        item2.innerText = "Item 2"
        item3.innerText = "Item 3"
        item4.innerText = "Item 4"

    }
    

})
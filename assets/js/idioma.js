document.addEventListener("DOMContentLoaded", function() {

    const br = document.getElementById("br")
    const en = document.getElementById("en")
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
        br.classList.toggle("hidden")

        landingPageP.innerText = "Intercâmbio, Linguagem e Cultura"
        entrar.innerText = "Entrar"
        criarConta.innerText ="Criar conta"
        acessar.innerText = "Acessar"

    }

})
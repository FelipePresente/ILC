document.addEventListener("DOMContentLoaded", function() {

    const br = document.getElementById("br")
    const en = document.getElementById("en")
    const spanish = document.getElementById("spanish")
    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    const item4 = document.getElementById("item4")
    const intercambios = document.getElementById("intercambios")
    const intercambio = document.getElementById("intercambio")
    const africaDoSulH4 = document.getElementById("africaDoSulH4")
    const africaDoSulP = document.getElementById("africaDoSulP")
    const mexicoH4 = document.getElementById("mexicoH4")
    const mexicoP = document.getElementById("mexicoP")
    const inglaterraH4 = document.getElementById("inglaterraH4")
    const inglaterraP = document.getElementById("inglaterraP")
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
        item1.innerText = "About us"
        item2.innerText = "Our programs"
        intercambio.innerText = "Exchanges"
        item4.innerText = "Contact"
        africaDoSulH4.innerText = "South Africa"
        africaDoSulP.innerText = "Learn from african daily life"
        mexicoH4.innerText = "Mexico"
        mexicoP.innerText = "Study Spanish and enrich yourself culturally"
        inglaterraH4.innerText = "England"
        inglaterraP.innerText = "Improve your English with native speakers"
    }

    en.onclick = function() {

        en.classList.toggle("hidden")
        spanish.classList.toggle("hidden")

        landingPageP.innerText = "Intercambio, Lengua y Cultura"
        entrar.innerText = "Entrar"
        criarConta.innerText ="Crear cuenta"
        acessar.innerText = "Acesso"
        item1.innerText = "Sobre nosotros"
        item2.innerText = "Nuestros programas"
        intercambio.innerText = "Intercambios"
        item4.innerText = "Contacto"
        africaDoSulH4.innerText = "Sudáfrica"
        africaDoSulP.innerText = "Aprenda de la vida cotidiana africana"
        mexicoH4.innerText = "México"
        mexicoP.innerText = "Estudia español y enriquécete culturalmente"
        inglaterraH4.innerText = "Inglaterra"
        inglaterraP.innerText = "Mejora tu inglés con hablantes nativos"

    }


    spanish.onclick = function() {

        spanish.classList.toggle("hidden")
        br.classList.toggle("hidden")

        landingPageP.innerText = "Intercâmbio, Linguagem e Cultura"
        entrar.innerText = "Entrar"
        criarConta.innerText ="Criar conta"
        acessar.innerText = "Acessar"
        item1.innerText = "Sobre nós"
        item2.innerText = "Nossos programas"
        intercambio.innerText = "Intercâmbios"
        item4.innerText = "Contato"
        africaDoSulH4.innerText = "África do Sul"
        africaDoSulP.innerText = "Aprenda com o cotidiano africano"
        mexicoH4.innerText = "México"
        mexicoP.innerText = "Estude espanhol e enriqueça-se culturalmente"
        inglaterraH4.innerText = "Inglaterra"
        inglaterraP.innerText = "Aprimore seu inglês com nativos"

    }
    

})
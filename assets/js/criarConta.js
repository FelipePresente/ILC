document.addEventListener("DOMContentLoaded", function () {

    const retornar = document.querySelector("#retornar")
    const criarContaMenu = document.querySelector("#criarContaMenu")
    const criarConta = document.querySelector("#criarConta")
    const body = document.querySelector("body")
    const blackscreen = document.querySelector("#blackscreen")
    const visibility = document.querySelector("#visibility")
    const visibilityOff = document.querySelector("#visibilityOff")
    const passowordInput = document.querySelector("#passwordInput")
    const topo = document.querySelector("#topo")
    const mobileCriarConta = document.querySelector("#mobileCriarConta")
    const menuMobile = document.querySelector("#menuMobile")
    const menuMobileLogo = document.querySelector("#menuMobileLogo")
    const logo = document.querySelector("#logo")

    criarConta.addEventListener("click", function () {
        topo.classList.toggle("hidden")
        criarContaMenu.classList.toggle("-translate-y-full")
        body.classList.toggle("overflow-hidden")
        blackscreen.classList.toggle("bg-black/60")
        blackscreen.classList.toggle("z-0")
    })

    retornar.addEventListener("click", function () {
        topo.classList.toggle("hidden")
        criarContaMenu.classList.toggle("-translate-y-full")
        body.classList.toggle("overflow-hidden")
        blackscreen.classList.toggle("bg-black/60")
        blackscreen.classList.toggle("z-0")
    })

    mobileCriarConta.addEventListener("click", function (){
        menuMobile.classList.toggle("translate-x-full")
        criarContaMenu.classList.toggle("-translate-y-full")
        logo.classList.toggle("-translate-y-200")
        menuMobileLogo.classList.toggle("-translate-y-200")
    })

    visibility.addEventListener("click", function () {
        visibility.classList.toggle("hidden")
        visibilityOff.classList.toggle("hidden")
        passowordInput.type = "text"
    })

    visibilityOff.addEventListener("click", function () {
        visibility.classList.toggle("hidden")
        visibilityOff.classList.toggle("hidden")
        passowordInput.type = "password"
    })

})
document.addEventListener("DOMContentLoaded", function(){

    const retornar = document.querySelector("#retornar")
    const criarContaMenu = document.querySelector("#criarContaMenu")
    const criarConta = document.querySelector("#criarConta")
    const body = document.querySelector("body")
    const blackscreen = document.querySelector("#blackscreen")
    const visibility = document.querySelector("#visibility")
    const visibilityOff = document.querySelector("#visibilityOff")

    retornar.addEventListener("click", function(){
        criarContaMenu.classList.toggle("hidden")
        body.classList.toggle("overflow-hidden")
        blackscreen.classList.toggle("bg-black/60")
        blackscreen.classList.toggle("z-0")
    })

    criarConta.addEventListener("click", function(){
        criarContaMenu.classList.toggle("hidden")
        body.classList.toggle("overflow-hidden")
        blackscreen.classList.toggle("bg-black/60")
        blackscreen.classList.toggle("z-0")
    })

    visibility.addEventListener("click", function(){
        visibility.classList.toggle("hidden")
        visibilityOff.classList.toggle("hidden")
    })

    visibilityOff.addEventListener("click", function(){
        visibility.classList.toggle("hidden")
        visibilityOff.classList.toggle("hidden")
    })

})
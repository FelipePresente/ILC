document.addEventListener("DOMContentLoaded", function () {

    const retornar = document.querySelector("#retornar")
    const criarContaMenu = document.querySelector("#criarContaMenu")
    const criarConta = document.querySelector("#criarConta")
    const body = document.querySelector("body")
    const blackscreen = document.querySelector("#blackscreen")
    const visibility = document.querySelector("#visibility")
    const visibilityOff = document.querySelector("#visibilityOff")
    const passowordInput = document.querySelector("#passwordInput")
    const mobileCriarContaBtn = document.querySelector("#mobileCriarContaBtn")
    const menuMobile = document.querySelector("#menuMobile")
    const menuMobileLogo = document.querySelector("#menuMobileLogo")
    const logo = document.querySelector("#logo")
    const entrarMenu = document.querySelector("#entrarMenu")

    // Função para abrir o modal Criar Conta
    function openCriarContaModal() {
        criarContaMenu.classList.remove("-translate-y-full")
        criarContaMenu.style.visibility = 'visible'
        criarContaMenu.style.pointerEvents = 'auto'
        criarContaMenu.style.transform = ''
        body.classList.add("overflow-hidden")
        blackscreen.classList.add("bg-black/60")
        blackscreen.classList.add("z-0")
        // Garante que entrar está escondido
        if (entrarMenu) {
            entrarMenu.classList.add("-translate-y-full")
            entrarMenu.style.visibility = 'hidden'
            entrarMenu.style.pointerEvents = 'none'
        }
    }

    // Função para fechar o modal Criar Conta
    function closeCriarContaModal() {
        criarContaMenu.classList.add("-translate-y-full")
        body.classList.remove("overflow-hidden")
        blackscreen.classList.remove("bg-black/60")
        blackscreen.classList.remove("z-0")
    }

    criarConta.addEventListener("click", function () {
        openCriarContaModal()
    })

    retornar.addEventListener("click", function () {
        closeCriarContaModal()
    })

    mobileCriarContaBtn.addEventListener("click", function (){
        menuMobile.classList.toggle("translate-x-full")
        logo.classList.toggle("-translate-y-200")
        menuMobileLogo.classList.toggle("-translate-y-200")
        openCriarContaModal()
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
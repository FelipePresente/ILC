document.addEventListener("DOMContentLoaded", function () {

    const entrarBtnHeader = document.querySelector("#entrar")
    const entrarMenu = document.querySelector("#entrarMenu")
    const retornarEntrar = document.querySelector("#retornarEntrar")
    const body = document.querySelector("body")
    const blackscreen = document.querySelector("#blackscreen")
    const entrarVisibility = document.querySelector("#entrarVisibility")
    const entrarVisibilityOff = document.querySelector("#entrarVisibilityOff")
    const entrarPasswordInput = document.querySelector("#entrarPasswordInput")
    const menuMobile = document.querySelector("#menuMobile")
    const menuMobileLogo = document.querySelector("#menuMobileLogo")
    const logo = document.querySelector("#logo")
    const criarContaMenu = document.querySelector("#criarContaMenu")
    const header = document.querySelector("#header")

    // Função para abrir o modal Entrar
    function openEntrarModal() {
        entrarMenu.classList.remove("-translate-y-full")
        entrarMenu.style.visibility = 'visible'
        entrarMenu.style.pointerEvents = 'auto'
        entrarMenu.style.transform = ''
        body.classList.add("overflow-hidden")
        if (blackscreen) {
            blackscreen.classList.add("bg-black/60")
            blackscreen.classList.add("z-0")
        }

        // Ocultar header no mobile
        if (header && window.innerWidth < 1024) {
            header.style.opacity = '0'
            header.style.pointerEvents = 'none'
        }

        // Garante que criar conta está escondido
        if (criarContaMenu) {
            criarContaMenu.classList.add("-translate-y-full")
            criarContaMenu.style.visibility = 'hidden'
            criarContaMenu.style.pointerEvents = 'none'
        }
    }

    // Função para fechar o modal Entrar
    function closeEntrarModal() {
        entrarMenu.classList.add("-translate-y-full")
        body.classList.remove("overflow-hidden")
        if (blackscreen) {
            blackscreen.classList.remove("bg-black/60")
            blackscreen.classList.remove("z-0")
        }

        // Mostrar header novamente
        if (header) {
            header.style.opacity = '1'
            header.style.pointerEvents = 'auto'
        }
    }

    if (entrarBtnHeader && entrarMenu) {
        entrarBtnHeader.addEventListener("click", function () {
            openEntrarModal()
        })
    }

    if (retornarEntrar && entrarMenu) {
        retornarEntrar.addEventListener("click", function () {
            closeEntrarModal()
        })
    }

    // Abre entrar pelo menu mobile
    const entrarFromMobile = document.querySelector("#mobileEntrar")
    if (entrarFromMobile) {
        entrarFromMobile.addEventListener("click", function () {
            if (menuMobile) menuMobile.classList.toggle("translate-x-full")
            if (logo) logo.classList.toggle("-translate-y-200")
            if (menuMobileLogo) menuMobileLogo.classList.toggle("-translate-y-200")
            openEntrarModal()
        })
    }

    if (entrarVisibility && entrarVisibilityOff && entrarPasswordInput) {
        entrarVisibility.addEventListener("click", function () {
            entrarVisibility.classList.toggle("hidden")
            entrarVisibilityOff.classList.toggle("hidden")
            entrarPasswordInput.type = "text"
        })

        entrarVisibilityOff.addEventListener("click", function () {
            entrarVisibility.classList.toggle("hidden")
            entrarVisibilityOff.classList.toggle("hidden")
            entrarPasswordInput.type = "password"
        })
    }

})

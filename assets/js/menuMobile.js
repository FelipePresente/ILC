document.addEventListener("DOMContentLoaded", function () {
    const menuMobile = document.querySelector("#menuMobile")
    const list = document.querySelector("#list")
    const body = document.querySelector("body")
    const logo = document.querySelector("#logo")
    const menuMobileLogo = document.querySelector("#menuMobileLogo")
    const idiomaMobileContainer = document.querySelector("#idiomaMobileContainer")

    list.addEventListener("click", function () {
        menuMobile.classList.toggle("translate-x-full")
        body.classList.toggle("overflow-hidden")
        logo.classList.toggle("-translate-y-200")
        menuMobileLogo.classList.toggle("-translate-y-200")

        if (idiomaMobileContainer) {
            idiomaMobileContainer.classList.toggle("opacity-0")
            idiomaMobileContainer.classList.toggle("pointer-events-none")
        }
    })

    // Fechar menu ao clicar em qualquer link
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuMobile.classList.add("translate-x-full")
            body.classList.remove("overflow-hidden")
            logo.classList.remove("-translate-y-200")
            menuMobileLogo.classList.add("-translate-y-200")

            if (idiomaMobileContainer) {
                idiomaMobileContainer.classList.remove("opacity-0")
                idiomaMobileContainer.classList.remove("pointer-events-none")
            }
        })
    })

})
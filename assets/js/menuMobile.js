document.addEventListener("DOMContentLoaded", function(){
    const menuMobile = document.querySelector("#menuMobile")
    const list = document.querySelector("#list")
    const body = document.querySelector("body")
    const logo = document.querySelector("#logo")
    const menuMobileLogo = document.querySelector("#menuMobileLogo")

    list.addEventListener("click", function(){
        menuMobile.classList.toggle("translate-x-full")
        body.classList.toggle("overflow-hidden")
        logo.classList.toggle("-translate-y-200")
        menuMobileLogo.classList.toggle("-translate-y-200")
    })

})
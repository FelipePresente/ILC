document.addEventListener("DOMContentLoaded", function() {

    const item3 = document.getElementById("item3")
    const intercambios = document.getElementById("intercambios")
    const intercambionsDropdown = document.getElementById("intercambiosDropdown")

    intercambios.onmouseenter = function() {

        intercambionsDropdown.classList.toggle("hidden")

    }

    intercambios.onmouseleave = function() {

        setTimeout(intercambionsDropdown.classList.toggle("hidden"), 1000)

    }

})
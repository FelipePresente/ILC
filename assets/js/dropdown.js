document.addEventListener('DOMContentLoaded', function() {
    const intercambios = document.getElementById('intercambios');
    const intercambiosDropdown = document.getElementById('intercambiosDropdown');
    const item3 = document.getElementById('item3');
    const intercambiosdown = document.getElementById("intercambiosdown")
    const intercambiosup = document.getElementById("intercambiosup")

    let timeoutId;

    if (intercambios && intercambiosDropdown && item3) {
        clearTimeout(timeoutId)
    }

    intercambios.onmouseenter = function() {

        intercambiosDropdown.classList.remove("hidden")
        intercambiosdown.classList.toggle("hidden")
        intercambiosup.classList.toggle("hidden")

    }

    intercambiosDropdown.onmouseenter = function() {
        clearTimeout(timeoutId)
    }

    item3.onmouseleave = function() {

        timeoutId = setTimeout(function() {

            intercambiosDropdown.classList.add("hidden")
            intercambiosdown.classList.toggle("hidden")
            intercambiosup.classList.toggle("hidden")

        }, 500)

    }

});
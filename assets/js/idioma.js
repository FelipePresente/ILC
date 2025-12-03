// Dicionário de tradução
const translations = {
    pt: {
        // Header
        aboutLink: "Sobre nós"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const br = document.getElementById("br")
    const en = document.getElementById("en")
    const spanish = document.getElementById("spanish")
    const brMobile = document.getElementById("brMobile")
    const enMobile = document.getElementById("enMobile")
    const spanishMobile = document.getElementById("spanishMobile")

    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    const item4 = document.getElementById("item4")
    const intercambios = document.getElementById("intercambios")
    const intercambio = document.getElementById("intercambio")
    const landingPageP = document.getElementById("landingPageP")
    const entrar = document.getElementById("entrar")
    const criarConta = document.getElementById("criarConta")
    const acessar = document.getElementById("acessar")
    const sobreNosTitle = document.getElementById("sobreNosTitle")
    const sobreNosDesc = document.getElementById("sobreNosDesc")
    const comIntercambiosTitle = document.getElementById("comIntercambiosTitle")
    const item1Text = document.getElementById("item1Text")
    const item2Text = document.getElementById("item2Text")
    const item3Text = document.getElementById("item3Text")
    const respeitamosText = document.getElementById("respeitamosText")
    const descobraMundosTitle = document.getElementById("descobraMundosTitle")
    const conectandoVoceDesc = document.getElementById("conectandoVoceDesc")
    const criarContaTitle = document.getElementById("criarContaTitle")
    const jaTemConta = document.getElementById("jaTemConta")
    const nomeInput = document.getElementById("nome")
    const sobrenomeInput = document.getElementById("sobrenome")
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("passwordInput")
    const termsLabel = document.getElementById("termsLabel")
    const criarContaBtn = document.getElementById("criarContaBtn")
    const ouRegistreComSpan = document.getElementById("ouRegistreComSpan")

    // carrossel / botão retornar
    const retornarBtn = document.getElementById("retornar")
    const carrosselSubtitle = document.getElementById("carrosselSubtitle")

    // rodapé
    const footerCopyright = document.getElementById("footerCopyright")

    // Menu mobile
    const mobileAboutText = document.getElementById("mobileAboutText")
    const mobileIntercambiosText = document.getElementById("mobileIntercambiosText")
    const mobileSchedulesText = document.getElementById("mobileSchedulesText")
    const mobileContactText = document.getElementById("mobileContactText")
    const mobileCriarContaBtn = document.getElementById("mobileCriarContaBtn")
    const mobileUsuarioText = document.getElementById("mobileUsuarioText")
    const mobileEmailText = document.getElementById("mobileEmailText")

    // cards (1..5) - Ida e Volta
    const card1Title = document.getElementById("card1Title")
    const card1Country = document.getElementById("card1Country")
    const card1From = document.getElementById("card1From")
    const card1Price = document.getElementById("card1Price")
    const card1Install = document.getElementById("card1Install")
    const card2Title = document.getElementById("card2Title")
    const card2Country = document.getElementById("card2Country")
    const card2From = document.getElementById("card2From")
    const card2Price = document.getElementById("card2Price")
    const card2Install = document.getElementById("card2Install")
    const card3Title = document.getElementById("card3Title")
    const card3Country = document.getElementById("card3Country")
    const card3From = document.getElementById("card3From")
    const card3Price = document.getElementById("card3Price")
    const card3Install = document.getElementById("card3Install")
    const card4Title = document.getElementById("card4Title")
    const card4Country = document.getElementById("card4Country")
    const card4From = document.getElementById("card4From")
    const card4Price = document.getElementById("card4Price")
    const card4Install = document.getElementById("card4Install")
    const card5Title = document.getElementById("card5Title")
    const card5Country = document.getElementById("card5Country")
    const card5From = document.getElementById("card5From")
    const card5Price = document.getElementById("card5Price")
    const card5Install = document.getElementById("card5Install")

    // Ida e Volta - all cards
    const card1Ida = document.getElementById("card1Ida")
    const card1Volta = document.getElementById("card1Volta")
    const card2Ida = document.getElementById("card2Ida")
    const card2Volta = document.getElementById("card2Volta")
    const card3Ida = document.getElementById("card3Ida")
    const card3Volta = document.getElementById("card3Volta")
    const card4Ida = document.getElementById("card4Ida")
    const card4Volta = document.getElementById("card4Volta")
    const card5Ida = document.getElementById("card5Ida")
    const card5Volta = document.getElementById("card5Volta")

    function trocarEnglish() {
        br.classList.toggle("hidden")
        en.classList.toggle("hidden")
        brMobile.classList.toggle("hidden")
        enMobile.classList.toggle("hidden")

        item1.textContent = "About us"
        item2.textContent = "Schedules"
        intercambio.textContent = "Exchanges"
        item4.textContent = "Contact"
        entrar.textContent = "Login"
        criarConta.textContent = "Sign up"
        landingPageP.textContent = "Exchange, Language and Culture"
        acessar.textContent = "Access"
        sobreNosTitle.textContent = "About us"
        sobreNosDesc.textContent = "ILC - Exchange, Language and Culture is an agency dedicated to bringing knowledge, experiences and virtues to people around the world through cultural exchanges in Latin America."
        comIntercambiosTitle.textContent = "With our exchanges, you acquire:"
        item1Text.textContent = "international knowledge and experiences"
        item2Text.textContent = "cultural exchanges"
        item3Text.textContent = "ancestral connection"
        respeitamosText.textContent = "We respect all identities and cultures. Our space is safe and welcoming for everyone."
        descobraMundosTitle.textContent = "Discover worlds with ILC"
        conectandoVoceDesc.textContent = "Connecting you to vibrant cultural communities through Exchange, Language and Culture."
        criarContaTitle.textContent = "Create an account"
        jaTemConta.innerHTML = "Already have an account? <a href=\"\" class=\"text-gray-200 underline\">Login</a>"
        nomeInput.placeholder = "Name"
        sobrenomeInput.placeholder = "Last name"
        emailInput.placeholder = "Email"
        passwordInput.placeholder = "Enter your password"
        termsLabel.innerHTML = "I agree to the <a href=\"\" class=\"text-purple-300 underline\">Terms and Conditions</a>"
        criarContaBtn.textContent = "Create account"
        ouRegistreComSpan.textContent = "Or register with"
        if (retornarBtn) retornarBtn.textContent = 'Return to page'
        if (carrosselSubtitle) carrosselSubtitle.textContent = 'Exchange, Language and Culture'
        if (card1Title) card1Title.textContent = 'Quilombas | 15 days'
        if (card1Country) card1Country.textContent = 'Brazil'
        if (card1From) card1From.textContent = 'From:'
        if (card1Install) card1Install.textContent = 'Up to 15x interest-free'
        if (card2Title) card2Title.textContent = 'Andes | 15 days'
        if (card2Country) card2Country.textContent = 'Bolivia'
        if (card2From) card2From.textContent = 'From:'
        if (card2Install) card2Install.textContent = 'Up to 15x interest-free'
        if (card3Title) card3Title.textContent = 'Guajira | 15 days'
        if (card3Country) card3Country.textContent = 'Venezuela'
        if (card3From) card3From.textContent = 'From:'
        if (card3Install) card3Install.textContent = 'Up to 15x interest-free'
        if (card4Title) card4Title.textContent = 'Mapuche | 15 days'
        if (card4Country) card4Country.textContent = 'Chile'
        if (card4From) card4From.textContent = 'From:'
        if (card4Install) card4Install.textContent = 'Up to 15x interest-free'
        if (card5Title) card5Title.textContent = 'Mamacha | 18 days'
        if (card5Country) card5Country.textContent = 'Peru'
        if (card5From) card5From.textContent = 'From:'
        if (card5Install) card5Install.textContent = 'Up to 15x interest-free'
        if (footerCopyright) footerCopyright.textContent = 'Copyright © 2025 ILC - Exchange, Language and Culture'
        if (card1Ida) card1Ida.textContent = 'Departure'
        if (card1Volta) card1Volta.textContent = 'Return'
        if (card2Ida) card2Ida.textContent = 'Departure'
        if (card2Volta) card2Volta.textContent = 'Return'
        if (card3Ida) card3Ida.textContent = 'Departure'
        if (card3Volta) card3Volta.textContent = 'Return'
        if (card4Ida) card4Ida.textContent = 'Departure'
        if (card4Volta) card4Volta.textContent = 'Return'
        if (card5Ida) card5Ida.textContent = 'Departure'
        if (card5Volta) card5Volta.textContent = 'Return'
        if (mobileAboutText) mobileAboutText.textContent = 'About us'
        if (mobileIntercambiosText) mobileIntercambiosText.textContent = 'Exchanges'
        if (mobileSchedulesText) mobileSchedulesText.textContent = 'Schedules'
        if (mobileContactText) mobileContactText.textContent = 'Contact'
        if (mobileCriarContaBtn) mobileCriarContaBtn.textContent = 'Sign up'
        if (mobileUsuarioText) mobileUsuarioText.textContent = 'User without account'
        if (mobileEmailText) mobileEmailText.textContent = 'No email'
    }

    function trocarEspanhol() {
        en.classList.toggle("hidden")
        spanish.classList.toggle("hidden")
        enMobile.classList.toggle("hidden")
        spanishMobile.classList.toggle("hidden")

        item1.textContent = "Sobre nosotros"
        item2.textContent = "Horarios"
        intercambio.textContent = "Intercambios"
        item4.textContent = "Contacto"
        entrar.textContent = "Entrar"
        criarConta.textContent = "Crear cuenta"
        landingPageP.textContent = "Intercambio, Lengua y Cultura"
        acessar.textContent = "Acceso"
        sobreNosTitle.textContent = "Sobre nosotros"
        sobreNosDesc.textContent = "ILC - Intercambio, Lengua y Cultura es una agencia dedicada a llevar conocimiento, experiencias y virtudes a personas alrededor del mundo a través de intercambios culturales en América Latina."
        comIntercambiosTitle.textContent = "Con nuestros intercambios, adquieres:"
        item1Text.textContent = "conocimientos y experiencias internacionales"
        item2Text.textContent = "intercambios culturales"
        item3Text.textContent = "conexión ancestral"
        respeitamosText.textContent = "Respetamos todas las identidades y culturas. Nuestro espacio es seguro y acogedor para todos."
        descobraMundosTitle.textContent = "Descubre mundos con ILC"
        conectandoVoceDesc.textContent = "Conectándote con comunidades culturales vibrantes a través de Intercambio, Lengua y Cultura."
        criarContaTitle.textContent = "Crear una cuenta"
        jaTemConta.innerHTML = "¿Ya tienes una cuenta? <a href=\"\" class=\"text-gray-200 underline\">Entrar</a>"
        nomeInput.placeholder = "Nombre"
        sobrenomeInput.placeholder = "Apellido"
        emailInput.placeholder = "Correo electrónico"
        passwordInput.placeholder = "Ingresa tu contraseña"
        termsLabel.innerHTML = "Acepto los <a href=\"\" class=\"text-purple-300 underline\">Términos y Condiciones</a>"
        criarContaBtn.textContent = "Crear cuenta"
        ouRegistreComSpan.textContent = "O regístrate con"
        if (retornarBtn) retornarBtn.textContent = 'Volver a la página'
        if (carrosselSubtitle) carrosselSubtitle.textContent = 'Intercambio, Lengua y Cultura'
        if (card1Title) card1Title.textContent = 'Quilombas | 15 días'
        if (card1Country) card1Country.textContent = 'Brasil'
        if (card1From) card1From.textContent = 'A partir de:'
        if (card1Install) card1Install.textContent = 'En hasta 15x sin interés'
        if (card2Title) card2Title.textContent = 'Andes | 15 días'
        if (card2Country) card2Country.textContent = 'Bolivia'
        if (card2From) card2From.textContent = 'A partir de:'
        if (card2Install) card2Install.textContent = 'En hasta 15x sin interés'
        if (card3Title) card3Title.textContent = 'Guajira | 15 días'
        if (card3Country) card3Country.textContent = 'Venezuela'
        if (card3From) card3From.textContent = 'A partir de:'
        if (card3Install) card3Install.textContent = 'En hasta 15x sin interés'
        if (card4Title) card4Title.textContent = 'Mapuche | 15 días'
        if (card4Country) card4Country.textContent = 'Chile'
        if (card4From) card4From.textContent = 'A partir de:'
        if (card4Install) card4Install.textContent = 'En hasta 15x sin interés'
        if (card5Title) card5Title.textContent = 'Mamacha | 18 días'
        if (card5Country) card5Country.textContent = 'Perú'
        if (card5From) card5From.textContent = 'A partir de:'
        if (card5Install) card5Install.textContent = 'En hasta 15x sin interés'
        if (footerCopyright) footerCopyright.textContent = 'Copyright © 2025 ILC - Intercambio, Lengua y Cultura'
        if (card1Ida) card1Ida.textContent = 'Salida'
        if (card1Volta) card1Volta.textContent = 'Regreso'
        if (card2Ida) card2Ida.textContent = 'Salida'
        if (card2Volta) card2Volta.textContent = 'Regreso'
        if (card3Ida) card3Ida.textContent = 'Salida'
        if (card3Volta) card3Volta.textContent = 'Regreso'
        if (card4Ida) card4Ida.textContent = 'Salida'
        if (card4Volta) card4Volta.textContent = 'Regreso'
        if (card5Ida) card5Ida.textContent = 'Salida'
        if (card5Volta) card5Volta.textContent = 'Regreso'
        if (mobileAboutText) mobileAboutText.textContent = 'Sobre nosotros'
        if (mobileIntercambiosText) mobileIntercambiosText.textContent = 'Intercambios'
        if (mobileSchedulesText) mobileSchedulesText.textContent = 'Horarios'
        if (mobileContactText) mobileContactText.textContent = 'Contacto'
        if (mobileCriarContaBtn) mobileCriarContaBtn.textContent = 'Crear cuenta'
        if (mobileUsuarioText) mobileUsuarioText.textContent = 'Usuario sin cuenta'
        if (mobileEmailText) mobileEmailText.textContent = 'Sin correo'
    }

    function trocarBr() {
        spanish.classList.toggle("hidden")
        br.classList.toggle("hidden")
        spanishMobile.classList.toggle("hidden")
        brMobile.classList.toggle("hidden")

        item1.textContent = "Sobre nós"
        item2.textContent = "Cronogramas"
        intercambio.textContent = "Intercâmbios"
        item4.textContent = "Contato"
        entrar.textContent = "Entrar"
        criarConta.textContent = "Criar conta"
        landingPageP.textContent = "Intercâmbio, Linguagem e Cultura"
        acessar.textContent = "Acessar"
        sobreNosTitle.textContent = "Sobre nós"
        sobreNosDesc.textContent = "ILC - Intercâmbio, Linguagem e Cultura é uma agência com o objetivo de levar conhecimento, experiências e virtudes para pessoas ao redor do mundo por meio de intercâmbios culturais na América Latina."
        comIntercambiosTitle.textContent = "Com nossos intercâmbios, você adquire:"
        item1Text.textContent = "conhecimento e experiências internacionais"
        item2Text.textContent = "trocas culturais"
        item3Text.textContent = "conexão ancestral"
        respeitamosText.textContent = "Respeitamos todas as identidades e culturas. Nosso espaço é seguro e acolhedor para todas as pessoas."
        descobraMundosTitle.textContent = "Descubra mundos com ILC"
        conectandoVoceDesc.textContent = "Conectando você a comunidades culturais vibrantes através de Intercâmbio, Linguagem e Cultura."
        criarContaTitle.textContent = "Criar uma conta"
        jaTemConta.innerHTML = "Já possui uma conta? <a href=\"\" class=\"text-gray-200 underline\">Entrar</a>"
        nomeInput.placeholder = "Nome"
        sobrenomeInput.placeholder = "Sobrenome"
        emailInput.placeholder = "E-mail"
        passwordInput.placeholder = "Digite sua senha"
        termsLabel.innerHTML = "Eu concordo com os <a href=\"\" class=\"text-purple-300 underline\">Termos e Condições</a>"
        criarContaBtn.textContent = "Criar conta"
        ouRegistreComSpan.textContent = "Ou registre-se com"
        if (retornarBtn) retornarBtn.textContent = 'Retornar à página'
        if (carrosselSubtitle) carrosselSubtitle.textContent = 'Intercâmbio, Linguagem e Cultura'
        if (card1Title) card1Title.textContent = 'Quilombas | 15 dias'
        if (card1Country) card1Country.textContent = 'Brasil'
        if (card1From) card1From.textContent = 'A partir de:'
        if (card1Install) card1Install.textContent = 'Em até 15x sem juros'
        if (card2Title) card2Title.textContent = 'Andes | 15 dias'
        if (card2Country) card2Country.textContent = 'Bolívia'
        if (card2From) card2From.textContent = 'A partir de:'
        if (card2Install) card2Install.textContent = 'Em até 15x sem juros'
        if (card3Title) card3Title.textContent = 'Guajira | 15 dias'
        if (card3Country) card3Country.textContent = 'Venezuela'
        if (card3From) card3From.textContent = 'A partir de:'
        if (card3Install) card3Install.textContent = 'Em até 15x sem juros'
        if (card4Title) card4Title.textContent = 'Mapuche | 15 dias'
        if (card4Country) card4Country.textContent = 'Chile'
        if (card4From) card4From.textContent = 'A partir de:'
        if (card4Install) card4Install.textContent = 'Em até 15x sem juros'
        if (card5Title) card5Title.textContent = 'Mamacha | 18 dias'
        if (card5Country) card5Country.textContent = 'Peru'
        if (card5From) card5From.textContent = 'A partir de:'
        if (card5Install) card5Install.textContent = 'Em até 15x sem juros'
        if (footerCopyright) footerCopyright.textContent = 'Copyright © 2025 ILC - Intercâmbio, Linguagem e Cultura'
        if (card1Ida) card1Ida.textContent = 'Ida'
        if (card1Volta) card1Volta.textContent = 'Volta'
        if (card2Ida) card2Ida.textContent = 'Ida'
        if (card2Volta) card2Volta.textContent = 'Volta'
        if (card3Ida) card3Ida.textContent = 'Ida'
        if (card3Volta) card3Volta.textContent = 'Volta'
        if (card4Ida) card4Ida.textContent = 'Ida'
        if (card4Volta) card4Volta.textContent = 'Volta'
        if (card5Ida) card5Ida.textContent = 'Ida'
        if (card5Volta) card5Volta.textContent = 'Volta'
        if (mobileAboutText) mobileAboutText.textContent = 'Sobre nós'
        if (mobileIntercambiosText) mobileIntercambiosText.textContent = 'Intercâmbios'
        if (mobileSchedulesText) mobileSchedulesText.textContent = 'Cronogramas'
        if (mobileContactText) mobileContactText.textContent = 'Contato'
        if (mobileCriarContaBtn) mobileCriarContaBtn.textContent = 'Criar conta'
        if (mobileUsuarioText) mobileUsuarioText.textContent = 'Usuário sem conta'
        if (mobileEmailText) mobileEmailText.textContent = 'Sem e-mail'
    }

    br.onclick = function() {
        trocarEnglish()
    }

    brMobile.onclick = function () {
        trocarEnglish()
    }

    en.onclick = function () {
        trocarEspanhol()
    }

    enMobile.onclick = function () {
        trocarEspanhol()
    }

    spanish.onclick = function () {
        trocarBr()
    }

    spanishMobile.onclick = function () {
        trocarBr()
    }
});
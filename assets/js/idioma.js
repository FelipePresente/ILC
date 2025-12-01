document.addEventListener("DOMContentLoaded", function () {
    // Elementos de controle de idioma
    const br = document.getElementById("br")
    const en = document.getElementById("en")
    const spanish = document.getElementById("spanish")
    const brMobile = document.getElementById("brMobile")
    const enMobile = document.getElementById("enMobile")
    const spanishMobile = document.getElementById("spanishMobile")
    
    // Navegação
    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    const item4 = document.getElementById("item4")
    const intercambios = document.getElementById("intercambios")
    const intercambio = document.getElementById("intercambio")
    
    // Landing page
    const landingPageP = document.getElementById("landingPageP")
    const acessar = document.getElementById("acessar")
    
    // Botões de autenticação
    const entrar = document.getElementById("entrar")
    const criarConta = document.getElementById("criarConta")
    
    // Objeto com todas as traduções
    const translations = {
        pt: {
            // Navegação
            item1: "Sobre nós",
            item2: "Cronogramas",
            item4: "Contato",
            intercambio: "Intercâmbios",
            
            // Landing page
            landingPageP: "Intercâmbio, Linguagem e Cultura",
            acessar: "Acessar",
            
            // Autenticação
            entrar: "Entrar",
            criarConta: "Criar conta",
            
            // Seção Sobre nós
            sobreNosH2: "Sobre nós",
            sobreNosP: "ILC - Intercâmbio, Linguagem e Cultura é uma agência com o objetivo de levar conhecimento, experiências e virtudes para pessoas ao redor do mundo por meio de intercâmbios culturais na América Latina.",
            
            // Seção benefícios
            beneficiosH2: "Com nossos intercâmbios, você adquire:",
            beneficio1: "conhecimento e experiências internacionais",
            beneficio2: "trocas culturais",
            beneficio3: "conexão ancestral",
            beneficiosFooter: "Respeitamos todas as identidades e culturas. Nosso espaço é seguro e acolhedor para todas as pessoas.",
            
            // Seção de intercâmbios
            descobrirH2: "Descubra mundos com ILC",
            descobrirP: "Conectando você a comunidades culturais vibrantes através de Intercâmbio, Linguagem e Cultura.",
            
            // Cards de viagem
            quilombas: "Quilombas | 15 dias",
            quilombasPais: "Brasil",
            andes: "Andes | 15 dias",
            andesPais: "Bolívia",
            guajira: "Guajira | 15 dias",
            guajiraPais: "Venezuela",
            mapuche: "Mapuche | 15 dias",
            mapuchePais: "Chile",
            mamacha: "Mamacha | 18 dias",
            mamachaPais: "Peru",
            
            // Datas e preços
            aPartirDe: "A partir de:",
            parcelamento: "Em até 15x sem juros",
            ida: "Ida",
            volta: "Volta",
            
            // Footer
            copyright: "Copyright © 2025 ILC - Intercâmbio, Linguagem e Cultura",
            
            // Menu criar conta
            criarContaH2: "Criar uma conta",
            jaTemConta: "Já possui uma conta?",
            entrarLink: "Entrar",
            nome: "Nome",
            sobrenome: "Sobrenome",
            email: "E-mail",
            senha: "Digite sua senha",
            termos: "Eu concordo com os",
            termosLink: "Termos e Condições",
            criarContaBtn: "Criar conta",
            ouRegistre: "Ou registre-se com",
            retornar: "Retornar à página",
            
            // Menu mobile
            usuarioSemConta: "Usuário sem conta",
            semEmail: "Sem e-mail"
        },
        en: {
            // Navegação
            item1: "About us",
            item2: "Schedules",
            item4: "Contact",
            intercambio: "Exchanges",
            
            // Landing page
            landingPageP: "Exchange, Language and Culture",
            acessar: "Access",
            
            // Autenticação
            entrar: "Login",
            criarConta: "Sign up",
            
            // Seção Sobre nós
            sobreNosH2: "About us",
            sobreNosP: "ILC - Exchange, Language and Culture is an agency that aims to bring knowledge, experiences and virtues to people around the world through cultural exchanges in Latin America.",
            
            // Seção benefícios
            beneficiosH2: "With our exchanges, you acquire:",
            beneficio1: "international knowledge and experiences",
            beneficio2: "cultural exchanges",
            beneficio3: "ancestral connection",
            beneficiosFooter: "We respect all identities and cultures. Our space is safe and welcoming for all people.",
            
            // Seção de intercâmbios
            descobrirH2: "Discover worlds with ILC",
            descobrirP: "Connecting you to vibrant cultural communities through Exchange, Language and Culture.",
            
            // Cards de viagem
            quilombas: "Quilombas | 15 days",
            quilombasPais: "Brazil",
            andes: "Andes | 15 days",
            andesPais: "Bolivia",
            guajira: "Guajira | 15 days",
            guajiraPais: "Venezuela",
            mapuche: "Mapuche | 15 days",
            mapuchePais: "Chile",
            mamacha: "Mamacha | 18 days",
            mamachaPais: "Peru",
            
            // Datas e preços
            aPartirDe: "Starting at:",
            parcelamento: "Up to 15x interest-free",
            ida: "Departure",
            volta: "Return",
            
            // Footer
            copyright: "Copyright © 2025 ILC - Exchange, Language and Culture",
            
            // Menu criar conta
            criarContaH2: "Create an account",
            jaTemConta: "Already have an account?",
            entrarLink: "Login",
            nome: "First name",
            sobrenome: "Last name",
            email: "E-mail",
            senha: "Enter your password",
            termos: "I agree to the",
            termosLink: "Terms and Conditions",
            criarContaBtn: "Sign up",
            ouRegistre: "Or sign up with",
            retornar: "Return to page",
            
            // Menu mobile
            usuarioSemConta: "User without account",
            semEmail: "No email"
        },
        es: {
            // Navegação
            item1: "Sobre nosotros",
            item2: "Cronogramas",
            item4: "Contacto",
            intercambio: "Intercambios",
            
            // Landing page
            landingPageP: "Intercambio, Lengua y Cultura",
            acessar: "Acceso",
            
            // Autenticação
            entrar: "Entrar",
            criarConta: "Crear cuenta",
            
            // Seção Sobre nós
            sobreNosH2: "Sobre nosotros",
            sobreNosP: "ILC - Intercambio, Lengua y Cultura es una agencia que tiene como objetivo llevar conocimiento, experiencias y virtudes a personas de todo el mundo a través de intercambios culturales en América Latina.",
            
            // Seção benefícios
            beneficiosH2: "Con nuestros intercambios, adquieres:",
            beneficio1: "conocimiento y experiencias internacionales",
            beneficio2: "intercambios culturales",
            beneficio3: "conexión ancestral",
            beneficiosFooter: "Respetamos todas las identidades y culturas. Nuestro espacio es seguro y acogedor para todas las personas.",
            
            // Seção de intercâmbios
            descobrirH2: "Descubre mundos con ILC",
            descobrirP: "Conectándote con comunidades culturales vibrantes a través de Intercambio, Lengua y Cultura.",
            
            // Cards de viagem
            quilombas: "Quilombas | 15 días",
            quilombasPais: "Brasil",
            andes: "Andes | 15 días",
            andesPais: "Bolivia",
            guajira: "Guajira | 15 días",
            guajiraPais: "Venezuela",
            mapuche: "Mapuche | 15 días",
            mapuchePais: "Chile",
            mamacha: "Mamacha | 18 días",
            mamachaPais: "Perú",
            
            // Datas e preços
            aPartirDe: "A partir de:",
            parcelamento: "Hasta 15x sin intereses",
            ida: "Salida",
            volta: "Regreso",
            
            // Footer
            copyright: "Copyright © 2025 ILC - Intercambio, Lengua y Cultura",
            
            // Menu criar conta
            criarContaH2: "Crear una cuenta",
            jaTemConta: "¿Ya tienes una cuenta?",
            entrarLink: "Entrar",
            nome: "Nombre",
            sobrenome: "Apellido",
            email: "Correo electrónico",
            senha: "Ingresa tu contraseña",
            termos: "Estoy de acuerdo con los",
            termosLink: "Términos y Condiciones",
            criarContaBtn: "Crear cuenta",
            ouRegistre: "O regístrate con",
            retornar: "Volver a la página",
            
            // Menu mobile
            usuarioSemConta: "Usuario sin cuenta",
            semEmail: "Sin correo"
        }
    }

    let currentLang = 'pt'

    function updateContent(lang) {
        const t = translations[lang]
        
        // Navegação
        if (item1) item1.innerHTML = `<a href="#about">${t.item1}</a>`
        if (item2) item2.textContent = t.item2
        if (item4) item4.textContent = t.item4
        if (intercambio) intercambio.innerHTML = `<a id="intercambio" href="#inter">${t.intercambio}</a>`
        
        // Landing page
        if (landingPageP) landingPageP.textContent = t.landingPageP
        if (acessar) acessar.textContent = t.acessar
        
        // Autenticação
        if (entrar) entrar.textContent = t.entrar
        if (criarConta) criarConta.textContent = t.criarConta
        
        // Seção Sobre nós
        const sobreNosH2 = document.querySelector('#about h2')
        const sobreNosP = document.querySelector('#about p')
        if (sobreNosH2) sobreNosH2.textContent = t.sobreNosH2
        if (sobreNosP) sobreNosP.textContent = t.sobreNosP
        
        // Seção benefícios
        const beneficiosSection = document.querySelector('.bg-\\[\\#96969c\\]')
        if (beneficiosSection) {
            const beneficiosH2 = beneficiosSection.querySelector('h2')
            const beneficiosP = beneficiosSection.querySelectorAll('p')
            
            if (beneficiosH2) beneficiosH2.textContent = t.beneficiosH2
            
            // Textos dos cards de benefícios
            const beneficioCards = beneficiosSection.querySelectorAll('.grid > div > p')
            if (beneficioCards[0]) beneficioCards[0].textContent = t.beneficio1
            if (beneficioCards[1]) beneficioCards[1].textContent = t.beneficio2
            if (beneficioCards[2]) beneficioCards[2].textContent = t.beneficio3
            
            // Texto do rodapé da seção
            if (beneficiosP[beneficiosP.length - 1]) {
                beneficiosP[beneficiosP.length - 1].textContent = t.beneficiosFooter
            }
        }
        
        // Seção descobrir mundos
        const descobrirSection = document.querySelector('#inter')
        if (descobrirSection) {
            const descobrirH2 = descobrirSection.querySelector('h2')
            const descobrirP = descobrirSection.querySelector('.text-gray-500')
            
            if (descobrirH2) descobrirH2.textContent = t.descobrirH2
            if (descobrirP) descobrirP.textContent = t.descobrirP
        }
        
        // Cards de viagem
        const travelCards = document.querySelectorAll('#scroll > div')
        const travelData = [
            { h2: t.quilombas, pais: t.quilombasPais },
            { h2: t.andes, pais: t.andesPais },
            { h2: t.guajira, pais: t.guajiraPais },
            { h2: t.mapuche, pais: t.mapuchePais },
            { h2: t.mamacha, pais: t.mamachaPais }
        ]
        
        travelCards.forEach((card, index) => {
            const h2 = card.querySelector('h2')
            const paisP = card.querySelectorAll('p')[1]
            const aPartirP = card.querySelectorAll('p')[4]
            const parcelamentoP = card.querySelectorAll('p')[6]
            const idaP = card.querySelectorAll('p')[2]
            const voltaP = card.querySelectorAll('p')[3]
            
            if (h2 && travelData[index]) h2.textContent = travelData[index].h2
            if (paisP && travelData[index]) paisP.textContent = travelData[index].pais
            if (aPartirP) aPartirP.textContent = t.aPartirDe
            if (parcelamentoP) parcelamentoP.textContent = t.parcelamento
            
            // Atualizar textos "Ida" e "Volta" mantendo as datas
            if (idaP) {
                const data = idaP.textContent.split(' ').slice(-1)[0]
                idaP.textContent = `${t.ida} ${data}`
            }
            if (voltaP) {
                const data = voltaP.textContent.split(' ').slice(-1)[0]
                voltaP.textContent = `${t.volta} ${data}`
            }
        })
        
        // Footer
        const footerP = document.querySelector('footer p')
        if (footerP) footerP.textContent = t.copyright
        
        // Menu criar conta
        const criarContaH2El = document.querySelector('#criarContaMenu h2')
        const jaTemContaP = document.querySelector('#criarContaMenu form > p')
        const nomeInput = document.getElementById('nome')
        const sobrenomeInput = document.getElementById('sobrenome')
        const emailInput = document.getElementById('email')
        const senhaInput = document.getElementById('passwordInput')
        const termosLabel = document.querySelector('label[for="terms"]')
        const criarContaBtn = document.querySelector('#criarContaMenu button[type="button"]') || document.querySelector('#criarContaMenu form > button')
        const ouRegistreSpan = document.querySelector('#criarContaMenu .inline-flex span')
        const retornarBtn = document.getElementById('retornar')
        const carrosselP = document.querySelector('#carrosselmenu > p')
        
        if (criarContaH2El) criarContaH2El.textContent = t.criarContaH2
        if (jaTemContaP) jaTemContaP.innerHTML = `${t.jaTemConta} <a href="" class="text-gray-200 underline">${t.entrarLink}</a>`
        if (nomeInput) nomeInput.placeholder = t.nome
        if (sobrenomeInput) sobrenomeInput.placeholder = t.sobrenome
        if (emailInput) emailInput.placeholder = t.email
        if (senhaInput) senhaInput.placeholder = t.senha
        if (termosLabel) termosLabel.innerHTML = `${t.termos} <a href="" class="text-purple-300 underline">${t.termosLink}</a>`
        if (criarContaBtn) criarContaBtn.textContent = t.criarContaBtn
        if (ouRegistreSpan) ouRegistreSpan.textContent = t.ouRegistre
        if (retornarBtn) retornarBtn.textContent = t.retornar
        if (carrosselP) carrosselP.textContent = t.landingPageP
        
        // Menu mobile
        const menuMobileLis = document.querySelectorAll('#menuMobile ul li')
        if (menuMobileLis[0]) menuMobileLis[0].innerHTML = `<img src="img/about.svg"> ${t.item1}`
        if (menuMobileLis[1]) menuMobileLis[1].innerHTML = `<img src="img/flight.svg"> ${t.intercambio}`
        if (menuMobileLis[2]) menuMobileLis[2].innerHTML = `<img src="img/date.svg"> ${t.item2}`
        if (menuMobileLis[3]) menuMobileLis[3].innerHTML = `<img src="img/contact.svg"> ${t.item4}`
        
        const usuarioH3 = document.querySelector('#menuMobile h3')
        const usuarioP = document.querySelector('#menuMobile .text-\\[10px\\]')
        const mobileCriarContaBtn = document.getElementById('mobileCriarConta')
        
        if (usuarioH3) usuarioH3.textContent = t.usuarioSemConta
        if (usuarioP) usuarioP.textContent = t.semEmail
        if (mobileCriarContaBtn) mobileCriarContaBtn.textContent = t.criarConta
    }

    function trocarParaIngles() {
        br.classList.add("hidden")
        en.classList.remove("hidden")
        brMobile.classList.add("hidden")
        enMobile.classList.remove("hidden")
        currentLang = 'en'
        updateContent('en')
    }

    function trocarParaEspanhol() {
        en.classList.add("hidden")
        spanish.classList.remove("hidden")
        enMobile.classList.add("hidden")
        spanishMobile.classList.remove("hidden")
        currentLang = 'es'
        updateContent('es')
    }

    function trocarParaPortugues() {
        spanish.classList.add("hidden")
        br.classList.remove("hidden")
        spanishMobile.classList.add("hidden")
        brMobile.classList.remove("hidden")
        currentLang = 'pt'
        updateContent('pt')
    }

    // Event listeners
    if (br) br.onclick = trocarParaIngles
    if (brMobile) brMobile.onclick = trocarParaIngles
    if (en) en.onclick = trocarParaEspanhol
    if (enMobile) enMobile.onclick = trocarParaEspanhol
    if (spanish) spanish.onclick = trocarParaPortugues
    if (spanishMobile) spanishMobile.onclick = trocarParaPortugues
})
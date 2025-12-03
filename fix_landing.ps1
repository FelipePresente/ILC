# Script para corrigir a landing page quebrada no index.html
$file = "c:\Users\felip\Desktop\ILC\index.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Corrigir a landing page quebrada
$brokenLanding = @'
        <!-- landing page -->
        <section
            class="w-full h-screen bg-[url('img/landingPage.png')] bg-cover bg-center flex justify-center items-center">


            Acessar

            </button>
            </a>

            </div>

        </section>
'@

$fixedLanding = @'
        <!-- landing page -->
        <section
            class="w-full h-screen bg-[url('img/landingPage.png')] bg-cover bg-center flex justify-center items-center">

            <!-- container -->
            <div class="flex flex-col justify-center items-center">

                <h1 class="text-7xl text-center md:text-9xl tracking-widest">ILC</h1>

                <p class="text-center p-4 text-xl md:text-3xl" id="landingPageP">Intercâmbio, Linguagem e Cultura</p>

                <a href="#about">
                    <button
                        class="mt-4 py-3 px-5 w-35 bg-black/70 text-white rounded-xl md:text-xl cursor-pointer hover:bg-black"
                        id="acessar">

                        Acessar

                    </button>
                </a>

            </div>

        </section>
'@

$content = $content.Replace($brokenLanding, $fixedLanding)

$content | Set-Content $file -Encoding UTF8
Write-Host "Landing page corrigida!"

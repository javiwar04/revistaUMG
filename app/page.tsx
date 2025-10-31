"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
// Button removed (export PDF feature removed)
import IndexPill from '@/components/ui/index-pill'
import Link from 'next/link'
import { votos as votosData } from '@/components/principles/votosData'
import useActiveSection from '@/hooks/useActiveSection'
import EditorCard from '@/components/editors/EditorCard'
import {
  PrincipioComunicacion,
  PrincipioEmpatia,
  PrincipioJusticia,
  PrincipioCritica,
  PrincipioPerdon,
  PrincipioFe,
  Integridad,
  Perseverancia,
  Humildad,
  Responsabilidad,
  Respeto,
  Colaboracion,
  Gratitud,
  VotosExitoBook,
  // VotosAplicacion will show actionable steps after the book
  VotosAplicacion,
} from '@/components/principles'
// useRef removed (no longer needed)

export default function RevistaUMG() {
  // Observe main section ids to highlight the active index pill while scrolling
  const activeSection = useActiveSection([
    'editores',
    'comunicacion',
    'empatia',
    'justicia',
    'critica',
    'perdon',
    'confiar-en-dios',
    'competencias',
    'votos-exito',
  ])

  return (
    <main className="min-h-screen bg-background">
      {/* Exportar PDF button removed per user request */}

  <div>

        {/* Ética en Red - Portada estilo revista */}
        <section className="py-8 px-4 bg-gradient-to-b from-background/80 to-muted/60">
          <div className="max-w-7xl mx-auto">
            {/* Portada / Hero de revista (rediseñada) */}
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <div className="absolute inset-0">
                <Image src="/umgentire.jpeg" alt="Portada fondo" fill className="object-cover" priority />
              </div>
              <div className="absolute inset-0 bg-indigo-700/60" />
              <div className="absolute -right-40 -top-24 w-[420px] h-[420px] bg-white/8 rounded-full blur-3xl" />
              <div className="relative z-10 flex items-center justify-center px-6 md:px-12 py-12 md:py-20 h-auto md:h-[520px]">
                <div className="text-white max-w-2xl mx-auto text-center">
                  <Badge className="bg-white/10 text-white">Grupo No.1</Badge>


                  <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mt-6">Ética en Red</h1>

                  <p className="italic text-lg md:text-2xl mt-4 text-white/90">La red más importante: la de nuestros valores.</p>

                  <blockquote className="mt-4 text-sm md:text-base text-white/80 italic">
                    “Actúa con justicia, ama la misericordia y camina humildemente con tu Dios.”
                    <span className="block text-xs text-white/70 mt-2">— Miqueas 6:8</span>
                  </blockquote>

                  <p className="mt-6 text-sm md:text-base text-white/80">Principios, historias y reflexiones que sostienen nuestra labor. Un número dedicado a comunicar con empatía y responsabilidad.</p>

                  <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    <a href="#comunicacion" className="px-5 py-3 bg-white text-indigo-700 rounded-full font-semibold shadow">Leer artículos</a>
                    <button
                      onClick={() => {
                        const el = document.getElementById('competencias')
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }}
                      className="px-5 py-3 border border-white/30 text-white rounded-full font-medium"
                    >
                      Ir a Competencias
                    </button>
                  </div>
                </div>

                {/* portada background image set above; side image removed per request */}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg ring-1 ring-border">
              <div className="text-center">
                {/* Portada ya contiene el título y lema; se omite aquí para evitar duplicados */}
                <nav aria-label="Índice de la sección ética" className="mb-8 index-container">
                  <h2 className="sr-only">Índice</h2>
                  <div className="w-full max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                      {/* Unified pills rendered via IndexPill; activeSection highlights the current one */}
                      <IndexPill href="#editores" active={activeSection === 'editores'}>Editores</IndexPill>
                      <IndexPill href="#comunicacion" active={activeSection === 'comunicacion'}>Comunicación</IndexPill>
                      <IndexPill href="#empatia" active={activeSection === 'empatia'}>Empatía</IndexPill>
                      <IndexPill href="#justicia" active={activeSection === 'justicia'}>Justicia</IndexPill>
                      <IndexPill href="#critica" active={activeSection === 'critica'}>Crítica</IndexPill>
                      <IndexPill href="#perdon" active={activeSection === 'perdon'}>Perdón</IndexPill>
                      <IndexPill href="#confiar-en-dios" active={activeSection === 'confiar-en-dios'}>Fe</IndexPill>
                      <IndexPill href="#votos-exito" active={activeSection === 'votos-exito'}>7 votos</IndexPill>
                      <IndexPill href="#competencias" active={activeSection === 'competencias'}>Competencias</IndexPill>
                    </div>
                  </div>
                </nav>

                {/* Índice completo: enlaces detallados a cada principio y voto */}
                <div className="max-w-5xl mx-auto mb-6">
                  <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Índice completo</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { href: '#editores', title: 'Sobre nuestros editores', desc: 'Quiénes hacen esta revista' },
                        { href: '#comunicacion', title: 'Principio: Comunicación', desc: 'Cómo transmitimos ideas con claridad' },
                        { href: '#empatia', title: 'Principio: Empatía', desc: 'Escucha y posicionamiento desde el otro' },
                        { href: '#justicia', title: 'Principio: Justicia', desc: 'Equidad y reparación en la práctica' },
                        { href: '#critica', title: 'Principio: Crítica', desc: 'Pensar con rigor y responsabilidad' },
                        { href: '#perdon', title: 'Principio: Perdón', desc: 'Reconciliación y aprendizaje' },
                        { href: '#confiar-en-dios', title: 'Principio: Fe', desc: 'Creencias que orientan la acción' },
                        { href: '#votos-exito', title: 'Los 7 votos del éxito', desc: 'Un conjunto de actitudes y prácticas' },
                        { href: '#competencias', title: 'Competencias UMG', desc: 'Nuestro proyecto en robótica 2025' },
                      ].map((item) => (
                        <a key={item.href} href={item.href} className="group block p-4 rounded-lg bg-background/50 hover:bg-white/5 transition-shadow shadow-sm hover:shadow-md">
                          <h4 className="text-lg font-semibold mb-1 group-hover:text-primary">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                <div className="keep-with-next">
                <div id="editores" className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Sobre nuestros editores</h3>
                <p className="text-sm text-muted-foreground mb-6">Equipo editorial</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <EditorCard
                    name="Javier Alfonso Guerra Vásquez"
                    imgSrc="/javier.jpeg"
                    alt="Javier Alfonso Guerra Vásquez"
                    bio={"Nacido el 8 de agosto de 2004, Javier Guerra es un joven apasionado por la tecnología, la innovación y el desarrollo de soluciones que conecten el ingenio humano con el progreso social. Más que un simple usuario de herramientas digitales, Javier ve en la tecnología un medio para transformar la realidad y mejorar la vida de las personas. Desde temprana edad, su curiosidad lo llevó a explorar el mundo de la programación, la robótica y el diseño de sistemas, descubriendo en cada proyecto una oportunidad para aprender, crear y aportar algo positivo. Cree firmemente que la verdadera grandeza de la tecnología no reside solo en su poder, sino en cómo se usa para construir un futuro más humano, justo y empático. A través de su participación en iniciativas académicas, proyectos y publicaciones como esta revista, Javier busca inspirar a otros a combinar la ética, la empatía y la creatividad como motores del cambio, recordando que el propósito más noble de la innovación es servir a las personas."}
                  />

                  <EditorCard
                    name="Víctor Alejandro Ochoa Jacinto"
                    imgSrc="/Victor8a.png"
                    alt="Víctor Alejandro Ochoa Jacinto"
                    role="Editor de investigación"
                    bio={"Nacido el 10 de mayo de 2003 en San Benito, Petén, Víctor Ochoa cursa la carrera de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala. Actualmente combina sus estudios con el trabajo, demostrando responsabilidad y compromiso en cada ámbito. Su interés por la informática y la innovación tecnológica lo motiva a seguir aprendiendo sobre desarrollo de software y redes. Aspira a crear soluciones tecnológicas que impulsen la eficiencia y el crecimiento de empresas locales, aplicando siempre valores de ética, esfuerzo y superación personal."}
                  />

                  <EditorCard
                    name="Hugo Yondani Corado Hernández"
                    imgSrc="/hugo.jpeg"
                    alt="Hugo Yondani Corado Hernández"
                    bio={"Nacido el 29 de agosto de 2001, Hugo Corado no solo es un entusiasta de la tecnología y los videojuegos; es un creador apasionado por desarrollar soluciones que mejoren la vida de las personas. Desde su perspectiva, la tecnología alcanza su verdadero potencial cuando se utiliza para generar un impacto positivo en la sociedad. Hugo sueña con un mundo donde la innovación sea una herramienta accesible para todos y donde cada avance tecnológico contribuya al bienestar común. A través de su trabajo en esta revista, busca inspirar a otros a combinar la ética, la empatía y la creatividad para construir un futuro más justo e inclusivo."}
                  />
                  
                  <EditorCard
                    name="Susan Elizabeth Ixcamparij Ixchop"
                    imgSrc="/susan.png"
                    alt="Susan Elizabeth Ixcamparij Ixchop"
                    bio={"Nacida el 10 de noviembre de 2003 en Santa Elena, Flores, Petén, Susan Ixcamparij estudia Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala y trabaja como asistente en una tienda de plásticos. Su interés por la tecnología nació desde pequeña, y con dedicación ha construido una base técnica sólida. Sueña con desarrollar sistemas informáticos que optimicen la administración en la empresa familiar y futuros negocios, integrando utilidad, ética y propósito en cada proyecto."}
                  />
                </div>
              </div>

              {/* Principios ampliados: cada uno como módulo completo */}
              <div className="mt-8 divide-y divide-border">
                <PrincipioComunicacion />
                <PrincipioEmpatia />
                <PrincipioJusticia />
                <PrincipioCritica />
                <PrincipioPerdon />
                <PrincipioFe />

                <VotosExitoBook />
                <VotosAplicacion />
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
  <section id="competencias" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background/70 to-background/80" />
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WLOJyqq5Hu6aOU0zXR0dyX9A9jrMQ4.png"
              alt="Arena de combate"
              fill
              className="object-cover opacity-40"
            />
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universidad-mariano-galvez-de-guatemala-logo-removebg-preview-YU0Pqd2C8A0nNaTMx11xndqdCOoESZ.png"
              alt="Universidad Mariano Gálvez"
              width={180}
              height={180}
              className="mx-auto mb-8"
            />

            <Badge className="mb-6 text-lg px-6 py-2 bg-primary text-primary-foreground">3er Lugar 🏆</Badge>

            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-balance">
              Competencias UMG
              <span className="block text-primary">2025</span>
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 text-balance">
              La historia de <span className="text-accent font-bold">Giammattei</span>
            </p>

            <div className="flex gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Robótica de Combate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Universidad Mariano Gálvez</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl font-bold mb-8 text-center">Un día para recordar...</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-12" />
            <p className="text-xl text-muted-foreground leading-relaxed text-center text-balance">
              En las Competencias UMG 2025, nuestro equipo alcanzó el tercer lugar con{" "}
              <span className="text-primary font-semibold">Giammattei</span>, un robot de combate diseñado y construido
              con dedicación, innovación y trabajo en equipo. Esta es la historia de nuestro viaje desde el concepto
              hasta la arena de batalla.
            </p>
          </div>
        </section>

        {/* El Proceso - Grid de Imágenes */}
        <section className="py-24 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold mb-4 text-center">El Proceso de Construcción</h2>
            <p className="text-xl text-muted-foreground mb-16 text-center">
              Desde los primeros bocetos hasta los ajustes finales
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="overflow-hidden group">
                <div className="relative h-96 grid grid-cols-2 gap-2 p-2 bg-card">
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GMfGWIA7xu9nKAytvn6EPdTOSWvKBX.png"
                      alt="Equipo trabajando en el robot"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 rounded"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WHNyOZCCeMdW4siKb4TzqAInIt7EBD.png"
                      alt="Soldando el robot"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 rounded"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Planificación Inicial</h3>
                  <p className="text-muted-foreground">
                    El equipo reunido discutiendo estrategias, diseñando prototipos y soldando componentes clave.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V7klFGh9T2rQsUc0iTV1cmJGf8ZAcf.png"
                    alt="Ajustes del robot"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Ensamblaje y Cableado</h3>
                  <p className="text-muted-foreground">
                    Trabajo detallado en la electrónica y conexiones del sistema de control.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3K3Rq2jRpt73n3GkrzyCT2OvSNqDXR.png"
                    alt="Ajustes finales"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Ajustes Técnicos</h3>
                  <p className="text-muted-foreground">
                    Calibración precisa de los sistemas mecánicos y eléctricos del robot.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%207.19.27%20PM%20%281%29-3HaECj3TmZxD4E6bPnRyzmagehAEdY.jpeg"
                    alt="Robot en pruebas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Pruebas Finales</h3>
                  <p className="text-muted-foreground">
                    Últimos ajustes antes de la competencia, asegurando el rendimiento óptimo.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Giammattei - El Robot */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground">El Guerrero</Badge>
                <h2 className="font-display text-6xl font-bold mb-6">Giammattei</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Nuestro robot de combate, equipado con una poderosa sierra circular como arma principal. Diseñado con
                  un chasis robusto en colores naranja y negro, Giammattei combina potencia, agilidad y resistencia para
                  enfrentar a cualquier oponente en la arena.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-primary mb-1">3er</div>
                    <div className="text-sm text-muted-foreground">Lugar Final</div>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-3xl font-bold text-accent mb-1">2025</div>
                    <div className="text-sm text-muted-foreground">Competencia UMG</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Arma Principal</h4>
                      <p className="text-sm text-muted-foreground">
                        Sierra circular de alta velocidad para máximo daño
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Diseño Robusto</h4>
                      <p className="text-sm text-muted-foreground">Chasis reforzado para resistir impactos severos</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Control Preciso</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema de control avanzado para maniobras tácticas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <Card className="relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0wZ0OlTvY10wGbCtxusfEvhEXf5nI8.png"
                    alt="Robot Giammattei"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Más imágenes del robot */}
        <section className="py-24 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold mb-16 text-center">Giammattei en Acción</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden group">
                <div className="relative h-80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-fVYgFKkHzKYpvSjQJiMU50ZaIpIa5A.jpeg"
                    alt="Robot en el campo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden group md:col-span-2">
                <div className="relative h-80">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%207.19.27%20PM%20%281%29-3HaECj3TmZxD4E6bPnRyzmagehAEdY.jpeg"
                    alt="Robot preparándose"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold mb-4 text-center">En la Arena de Combate</h2>
            <p className="text-xl text-muted-foreground mb-16 text-center">
              Giammattei enfrentando a sus rivales con potencia y estrategia
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pE5MkDy8Fg2IGTdjogIHaGiQgPNfAW.png"
                    alt="Robots en la arena"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Preparados para la Batalla</h3>
                  <p className="text-muted-foreground">
                    Los robots se posicionan en la arena, listos para el enfrentamiento.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7OlSkmlzRtOKKEScrSsFIwm8ID0uxL.png"
                    alt="Combate intenso"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Acción Explosiva</h3>
                  <p className="text-muted-foreground">
                    Momentos de alta intensidad durante los combates más emocionantes.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OJcyRSRKdCOHwGVlpU22hfAVg3Vsyj.png"
                    alt="Giammattei en combate"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Giammattei en Acción</h3>
                  <p className="text-muted-foreground">Nuestro robot demostrando su poder y resistencia en la arena.</p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xfO4ECpThBqrmMJsVop5hWrR9vmvhG.png"
                    alt="Momento decisivo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Momentos Decisivos</h3>
                  <p className="text-muted-foreground">Cada segundo cuenta en la batalla por la victoria.</p>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <div className="relative h-[500px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ek6aM9sHYkhYmuK8ww0c371cqBzrC5.png"
                  alt="Vista general de la arena"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 bg-card">
                <h3 className="text-3xl font-bold mb-4">La Arena de Batalla</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Con el público expectante, cada combate fue una demostración de ingeniería, estrategia y
                  determinación. La energía en la arena era palpable mientras Giammattei luchaba por alcanzar el podio.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* El Equipo */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold mb-4 text-center">El Equipo Ganador</h2>
            <p className="text-xl text-muted-foreground mb-16 text-center">La fuerza detrás de Giammattei</p>

            <Card className="overflow-hidden">
              <div className="relative h-[600px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-25%20at%207.19.27%20PM-BFuv5o5tfDUP0oirhvo11K4H4nF0nA.jpeg"
                  alt="Equipo UMG con sus diplomas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 bg-card">
                <h3 className="text-3xl font-bold mb-4">Tercer Lugar - Competencias UMG 2025</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Nuestro equipo de la Universidad Mariano Gálvez celebrando el logro del tercer lugar en las
                  competencias de robótica. Días de trabajo duro, dedicación y colaboración culminaron en este momento
                  de satisfacción. Cada miembro del equipo aportó sus habilidades únicas para hacer realidad
                  este proyecto.
                </p>

                <div className="border-t border-border pt-8">
                  <h4 className="text-xl font-bold mb-6 text-center">Integrantes del Equipo</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Rudy Jaser Samuel Castellanos Lopez</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Hugo Yondani Corado Hernández</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Juan Marcos Castro Tolentino</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Evelyn Antonia Cardenas Borjas</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Victor Gabriel Madrid Barrios</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Victor Alejandro Ochoa Jacinto</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Javier Alfonso Guerra Vasquez</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm">Jose Fernando Esteban Aguirre Garcia</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-24 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 text-center border-t-4 border-primary">
                <div className="text-5xl font-bold text-primary mb-2">3°</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Lugar Final</div>
              </Card>

              <Card className="p-8 text-center border-t-4 border-primary">
                <div className="text-5xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Espíritu de Equipo</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold mb-8">Una Experiencia Inolvidable</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-12" />
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Las Competencias UMG 2025 fueron más que una competencia: fueron una oportunidad para aprender, crecer y
              demostrar que con trabajo en equipo y dedicación, los límites son solo el comienzo. Giammattei no es solo
              un robot, es el símbolo de nuestro esfuerzo y pasión por la ingeniería.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/57-578520_nombre-de-la-universidad-mariano-galvez-hd-png-fjXsMmVgOBiPL069FmmD7f104Id3c0.png"
              alt="Universidad Mariano Gálvez"
              width={200}
              height={60}
              className="mx-auto mb-6 opacity-50"
            />
            <p className="text-muted-foreground">Universidad Mariano Gálvez - Revista UMG 2025</p>
            <p className="text-sm text-muted-foreground mt-2">GRUPO NO.1</p>
          </div>
        </footer>
      </div>
    </main>
  )
}

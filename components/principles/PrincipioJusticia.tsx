import Image from 'next/image'

export default function PrincipioJusticia() {
  return (
    <article id="justicia" className="px-6 py-8 bg-white/3 rounded-xl shadow-sm">
      <h4 className="text-2xl font-bold mb-4">Principio de la justicia</h4>

      <div className="space-y-6 mb-6 text-sm text-muted-foreground">
        <p>
          La justicia es uno de los pilares fundamentales de la convivencia humana. Desde la infancia aprendemos que ser
          justos significa dar a cada quien lo que merece, pero su verdadero sentido va mucho más allá de las reglas o
          las leyes: la justicia nace del corazón, de la capacidad de reconocer el valor de los demás y actuar con
          imparcialidad.
        </p>

        <p>
          El principio de la justicia nos invita a vivir con equidad, respeto y conciencia moral, comprendiendo que
          todas las personas, sin importar sus diferencias, tienen los mismos derechos y dignidad. Practicar este
          principio no es solo cumplir con normas externas, sino cultivar una actitud interna de honestidad, empatía y
          compromiso con el bien común.
        </p>

        {/* Mostrar imágenes como los demás principios: grid dentro del flujo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-48 md:h-52 rounded-lg overflow-hidden">
            <Image src="/justicia.jpg" alt="Justicia" fill className="object-cover" priority />
          </div>
          <div className="relative w-full h-48 md:h-52 rounded-lg overflow-hidden">
            <Image src="/justice.jpg" alt="Justice" fill className="object-cover" priority />
          </div>
        </div>

        <p>
          El principio de la justicia implica actuar de manera recta y equilibrada en todas las decisiones que tomamos.
          Ser justo no consiste en tratar a todos igual, sino en dar a cada uno lo que necesita o merece según su
          situación, reconociendo sus esfuerzos, circunstancias y derechos.
        </p>

        <p>
          Una persona justa escucha antes de juzgar, busca soluciones sin favoritismos y defiende la verdad, aunque
          resulte incómodo. Practicar la justicia requiere valentía moral y coherencia entre lo que pensamos y lo que
          hacemos.
        </p>

        <h5 className="font-semibold mt-2">Reflexión Final</h5>
        <p>
          Practicar la justicia es un acto de humanidad. Es reconocer que cada persona tiene un valor único y que nuestras
          acciones tienen el poder de contribuir a una sociedad más equitativa.
        </p>
      </div>
    </article>
  )
}

import Image from 'next/image'

export default function PrincipioPerdon() {
  return (
    <article id="perdon" className="px-6 py-8 bg-white/3 rounded-xl shadow-sm">
      <h4 className="text-2xl font-bold mb-4">Principio del perdón</h4>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 text-sm text-muted-foreground space-y-4">
          <p>
            El perdón es uno de los actos más difíciles y, al mismo tiempo, más poderosos del ser humano. No se trata
            de olvidar lo sucedido ni de justificar lo injustificable, sino de liberar el alma del peso del rencor y
            permitir que la paz vuelva a habitar en nosotros. El principio del perdón nos enseña que todos, en algún
            momento, cometemos errores o herimos sin intención, y que la verdadera fortaleza no está en guardar
            resentimiento, sino en tener la valentía de soltar, comprender y sanar.
          </p>

          <p>
            Perdonar no significa debilidad; al contrario, es un signo de madurez emocional, empatía y amor propio.
            A través del perdón, las personas recuperan su equilibrio interior y abren el camino hacia relaciones más
            honestas y humanas.
          </p>

          <h5 className="font-semibold">Desarrollo</h5>
          <p>
            El principio del perdón implica reconocer el dolor, pero decidir no quedarse en él. Quien perdona elige
            la libertad sobre el rencor, la paz sobre el orgullo y la esperanza sobre la herida. Es un proceso interno
            que requiere tiempo, humildad y, sobre todo, comprensión hacia uno mismo y hacia los demás.
          </p>

          <p>
            En su dimensión ética, el perdón va más allá del acto personal: representa un compromiso con la convivencia y
            la reconciliación. Perdonar no solo beneficia al otro, sino también a quien lo otorga, pues al liberar el
            resentimiento, se libera el corazón.
          </p>

          <p>
            Practicar el perdón también significa aprender a pedir disculpas. Reconocer los propios errores con
            sinceridad y reparar el daño causado demuestra grandeza de espíritu. A nivel humano, el perdón reconstruye
            puentes rotos; a nivel moral, reafirma nuestros valores y nuestra capacidad de amar incluso en medio del dolor.
          </p>

          <p>
            La práctica del perdón nos recuerda que no somos perfectos, pero sí capaces de cambiar. Nos enseña que cada
            conflicto puede convertirse en una oportunidad para crecer, y que el perdón es el primer paso hacia la
            reconciliación con los demás y con nosotros mismos.
          </p>

          <h5 className="font-semibold">Reflexión Final</h5>
          <p>
            Perdonar no borra el pasado, pero transforma la manera en que lo recordamos. Al aplicar este principio,
            dejamos de ser prisioneros del dolor y nos convertimos en constructores de paz.
          </p>

          <p>
            El perdón nos invita a mirar con compasión, a soltar lo que nos lastima y a permitir que la empatía sustituya
            al resentimiento. Es un acto de amor, no hacia quien nos hirió, sino hacia nosotros mismos, porque nos concede
            la libertad de avanzar sin cargas.
          </p>

          <p>
            En un mundo donde muchas veces se busca venganza o se guarda silencio por orgullo, practicar el perdón es un
            acto profundamente valiente. Recordemos que quien perdona no olvida, aprende; y quien aprende, crece. El
            perdón, en su esencia más pura, no cambia lo que pasó, pero sí cambia lo que somos después de ello.
          </p>
        </div>

        <aside className="space-y-4 md:col-span-1">
          <div className="relative w-full h-96 md:h-[520px] rounded-lg overflow-hidden shadow-md border border-gray-100 bg-white">
            <Image src="/perdon.webp" alt="Perdón" fill className="object-cover" priority />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white">
              <Image src="/perdon2.jpg" alt="Perdón 2" fill className="object-contain" priority />
            </div>
            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white">
              <Image src="/perdon3.jpg" alt="Perdón 3" fill className="object-contain" priority />
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

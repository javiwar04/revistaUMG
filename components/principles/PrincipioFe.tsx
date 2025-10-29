import Image from "next/image"

export default function PrincipioFe() {
  return (
    <article id="confiar-en-dios" className="px-6 py-8 bg-white/3 rounded-xl shadow-sm">
      <h4 className="text-2xl font-bold mb-2">Principio de la fe (Confiar en Dios)</h4>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 text-sm text-muted-foreground space-y-4">
          <p>
            La fe es mucho más que una creencia; es una forma de vivir y de mirar el mundo con esperanza. El
            principio de la fe nos enseña a confiar en Dios incluso cuando el camino parece incierto,
            recordándonos que no todo depende de nuestra fuerza, sino también de nuestra capacidad para creer.
          </p>

          <p>
            Tener fe es reconocer que Dios actúa en los momentos más difíciles, que cada desafío tiene un propósito
            y que, aunque no siempre entendamos los planes, cada paso forma parte de un diseño más grande.
          </p>

          <p>
            La fe da sentido a la vida, ilumina los días grises y fortalece el corazón cansado. A través de ella
            aprendemos a soltar el miedo, a mantener la calma y a continuar con la certeza de que no estamos solos.
          </p>

          <p>
            El principio de la fe nos invita a confiar en Dios con humildad y perseverancia. No significa esperar que
            todo sea fácil, sino creer que, con Su ayuda, todo es posible. La fe auténtica no depende de las
            circunstancias; se sostiene incluso en medio de la incertidumbre.
          </p>

          <p>
            Confiar en Dios implica aceptar que Su tiempo es perfecto, aunque no coincida con el nuestro. Es mantener
            la esperanza cuando las fuerzas parecen agotarse y encontrar paz en la oración, sabiendo que cada petición
            sincera es escuchada.
          </p>

          <p>
            En la vida cotidiana, la fe se refleja en nuestras acciones: en cómo enfrentamos los problemas, en cómo
            tratamos a los demás y en cómo seguimos adelante con confianza. Practicar este principio nos ayuda a ser
            más fuertes, más pacientes y más agradecidos.
          </p>

          <p>
            La fe también nos invita a ver la mano de Dios en los pequeños detalles, en las personas que nos ayudan, en
            los logros alcanzados y en las oportunidades inesperadas. A través de ella, aprendemos que incluso los
            tropiezos pueden ser bendiciones disfrazadas, y que cada prueba nos forma, nos enseña y nos acerca más al
            propósito divino.
          </p>

          <h5 className="font-semibold">Reflexión Final</h5>

          <p>
            Vivir con fe es caminar con el corazón tranquilo, confiando en que Dios nunca abandona a quien cree. Este
            principio nos recuerda que la fe no elimina las dificultades, pero sí nos da la fuerza para superarlas con
            serenidad y esperanza.
          </p>

          <p>
            Confiar en Dios es entregar nuestras preocupaciones y permitir que Su voluntad guíe nuestros pasos. Es
            comprender que, aunque no podamos ver el futuro, podemos avanzar con la certeza de que Él ya está allí.
          </p>

          <p>
            Cuando vivimos según este principio, dejamos de temer al mañana y comenzamos a agradecer el presente. La
            fe nos transforma, nos eleva y nos llena de propósito. En cada momento de duda, recordemos:
          </p>

          <p className="italic font-semibold">La fe no consiste en ver para creer, sino en creer para ver.</p>
        </div>

        <aside className="space-y-4 md:col-span-1">
          <div className="relative w-full h-96 md:h-[520px] rounded-lg overflow-hidden shadow-md border border-gray-100 bg-white">
            <Image src="/fe.jpg" alt="Fe" fill className="object-cover" priority />
          </div>
        </aside>
      </div>
    </article>
  )
}

import Image from 'next/image'

export default function PrincipioComunicacion() {
  return (
    <article id="comunicacion" className="px-6 py-8 bg-white/3 rounded-xl shadow-sm">
      <h4 className="text-2xl font-bold mb-4">Principio de la comunicación</h4>

      <div className="space-y-6 mb-6">
        <p className="text-sm text-muted-foreground mb-4">
          La comunicación es una de las capacidades más profundas y humanas que poseemos. A través de ella
          compartimos ideas, emociones, valores y experiencias que dan sentido a nuestra convivencia. Sin
          comunicación, no hay entendimiento; y sin entendimiento, difícilmente puede existir armonía. Por ello,
          el principio de la comunicación no solo se basa en el intercambio de palabras, sino en la conexión
          auténtica entre las personas, donde el respeto, la empatía y la escucha son pilares fundamentales.
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          En una sociedad donde la prisa y la tecnología muchas veces reemplazan el diálogo, este principio nos
          recuerda la importancia de comunicar con conciencia, de hablar desde la verdad y escuchar desde el
          corazón.
        </p>

        {/* Imágenes: se muestran en bloque y responden bien en móvil y escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-48 md:h-40 lg:h-52 rounded-lg overflow-hidden">
            <Image src="/colab.jpg" alt="Colaboración 1" fill loading="eager" className="object-cover" />
          </div>
          <div className="relative w-full h-48 md:h-40 lg:h-52 rounded-lg overflow-hidden">
            <Image src="/colab2.jpeg" alt="Colaboración 2" fill loading="eager" className="object-cover" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          El principio de la comunicación tiene su esencia en la intención de comprender y ser comprendido.
          Comunicar no se limita a transmitir información; es una forma de construir relaciones humanas basadas
          en la confianza y la sinceridad. Cada palabra, cada gesto y cada silencio tienen el poder de influir en
          el otro, por lo que comunicar también implica una responsabilidad moral.
        </p>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Cuando una persona se comunica de manera ética, demuestra coherencia entre lo que piensa, siente y expresa.
        Escucha sin juzgar, responde con respeto y reconoce la dignidad del otro. Este principio, aplicado a la vida
        cotidiana, permite resolver conflictos, fortalecer vínculos y crear entornos más humanos y solidarios.
      </p>

      <p className="text-sm text-muted-foreground mb-4">
        La comunicación ética también requiere autenticidad y humildad. Autenticidad para expresar lo que realmente
        se piensa, y humildad para aceptar diferentes puntos de vista. De esta manera, la comunicación deja de ser un
        medio para imponer, y se convierte en una herramienta para construir puentes de entendimiento y paz.
      </p>

      <h5 className="font-semibold mt-4">Reflexión Final</h5>
      <p className="text-sm text-muted-foreground mt-2">
        El verdadero valor de la comunicación no está en hablar mucho, sino en comunicar con sentido. Practicar este
        principio nos invita a ser conscientes del poder de nuestras palabras y del impacto que tienen en los demás.
        Cada vez que hablamos, tenemos la oportunidad de inspirar, motivar o consolar; pero también podemos herir o
        dividir.
      </p>

      <p className="text-sm text-muted-foreground mt-3">
        Por eso, comunicar con ética es un acto de amor y respeto hacia los demás. Implica pensar antes de hablar,
        escuchar antes de responder y comprender antes de juzgar. Al hacerlo, cultivamos relaciones más humanas,
        fortalecemos la convivencia y contribuimos a un mundo donde la comunicación sea realmente un puente, y no una
        barrera.
      </p>
    </article>
  )
}

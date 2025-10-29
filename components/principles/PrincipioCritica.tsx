import Image from 'next/image'

export default function PrincipioCritica() {
  return (
    <article id="critica" className="px-6 py-8 bg-white/3 rounded-xl shadow-sm">
      <h4 className="text-2xl font-bold mb-4">Principio de la crítica</h4>

      <div className="space-y-6 mb-6 text-sm text-muted-foreground">
        <p>
          El principio de la crítica nos enseña que no toda opinión es destrucción, ni todo juicio es rechazo. En la
          vida personal, académica y profesional, la crítica es una herramienta que puede ayudar a mejorar, reflexionar
          y crecer, siempre que se ejerza con respeto, empatía y sentido constructivo.
        </p>

        <p>
          Criticar de forma ética no significa señalar errores con superioridad, sino ofrecer una mirada que aporte al
          desarrollo del otro. En un mundo donde abundan los juicios rápidos y las opiniones sin fundamento, este
          principio nos recuerda que la verdadera crítica nace del compromiso con la verdad, la mejora continua y el
          bienestar común.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-48 md:h-52 rounded-lg overflow-hidden">
            <Image src="/critica.jpg" alt="Crítica" fill className="object-cover" priority />
          </div>
          <div className="relative w-full h-48 md:h-52 rounded-lg overflow-hidden">
            <Image src="/critica2.jpg" alt="Crítica ejemplo" fill className="object-cover" priority />
          </div>
        </div>

        <p>
          El principio de la crítica se basa en la responsabilidad de opinar con respeto y propósito. Ser críticos no es
          atacar ni imponer nuestra visión, sino analizar con objetividad, reconocer los aciertos y señalar con prudencia
          aquello que puede perfeccionarse. La crítica ética tiene dos componentes esenciales: la honestidad y la
          empatía.
        </p>

        <p>
          Una crítica honesta busca la verdad, no la humillación; y una crítica empática considera los sentimientos y el
          esfuerzo de quien recibe el comentario. Ambas dimensiones se complementan para transformar la crítica en una
          oportunidad de aprendizaje mutuo.
        </p>

        <h5 className="font-semibold mt-2">Reflexión Final</h5>
        <p>
          El principio de la crítica nos invita a usar la palabra como instrumento de crecimiento, no de herida. Nos
          recuerda que todos tenemos el poder de influir en los demás con lo que decimos, y que la forma en que señalamos
          los errores puede marcar la diferencia entre el resentimiento y la mejora.
        </p>
      </div>
    </article>
  )
}

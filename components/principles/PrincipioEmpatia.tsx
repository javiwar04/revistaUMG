import Image from "next/image"

export default function PrincipioEmpatia() {
  return (
    <article id="empatia" className="px-6 py-8 bg-white/3 rounded-xl shadow-sm">
      <h4 className="text-2xl font-bold mb-4">Principio de la empatía</h4>

      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">
          El principio de la empatía parte de una idea sencilla pero profunda: ponerse en el lugar del otro. En una
          sociedad cada vez más acelerada y competitiva, la empatía se vuelve una cualidad esencial para mantener la
          humanidad en nuestras relaciones. Ser empático no significa solo entender lo que alguien siente, sino sentir
          con el otro, comprender su realidad sin prejuicios y ofrecer comprensión en lugar de juicio.
        </p>

        <p className="text-sm text-muted-foreground">
          La empatía es un valor que transforma las relaciones humanas porque nos enseña a mirar más allá de las
          apariencias. Nos invita a reconocer que cada persona tiene una historia, una lucha y un motivo detrás de sus
          acciones. Desde esta perspectiva, practicar la empatía es un acto ético que fortalece la convivencia y el
          respeto mutuo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-48 md:h-40 lg:h-52 rounded-lg overflow-hidden">
            <Image src="/desarrollar-empatia.jpg" alt="Desarrollar empatía" fill loading="eager" className="object-cover" />
          </div>
          <div className="relative w-full h-48 md:h-40 lg:h-52 rounded-lg overflow-hidden">
            <Image src="/empatia.webp" alt="Empatía" fill loading="eager" className="object-cover" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          El principio de la empatía se basa en la capacidad de conectarnos emocionalmente con los demás, entendiendo
          sus pensamientos y sentimientos desde su propio punto de vista. Es una habilidad que requiere sensibilidad,
          apertura y disposición para escuchar sin interrumpir, sin corregir y sin imponer.
        </p>

        <p className="text-sm text-muted-foreground">
          Una persona empática no busca tener la razón, sino entender las razones del otro. Este principio, aplicado en
          la vida diaria, nos ayuda a ser más tolerantes, solidarios y conscientes del impacto de nuestras palabras y
          acciones. En los entornos familiares, laborales o académicos, la empatía permite crear espacios donde todos se
          sienten valorados y escuchados.
        </p>

        <p className="text-sm text-muted-foreground">
          La empatía también implica autoconocimiento. Quien comprende sus propias emociones es capaz de reconocer las
          de los demás. Ser empático no es cargar con los problemas ajenos, sino acompañar con respeto, brindar apoyo y
          ofrecer comprensión. En un mundo donde muchas veces se prioriza lo individual, la empatía nos recuerda que
          nadie crece solo: evolucionamos a través del encuentro con los demás.
        </p>

        <h5 className="text-lg font-semibold">Reflexión Final</h5>
        <p className="text-sm text-muted-foreground">
          Practicar la empatía es abrir el corazón al entendimiento y la compasión. Es mirar al otro con ojos humanos,
          sin etiquetas ni comparaciones. Este principio nos enseña que detrás de cada persona hay una historia que
          merece ser escuchada, y que todos, en algún momento, necesitamos ser comprendidos.
        </p>

        <p className="text-sm text-muted-foreground">
          En definitiva, el principio de la empatía nos invita a vivir con más sensibilidad y menos indiferencia,
          recordándonos que comprender al otro es también una forma de construir paz.
        </p>
      </div>
    </article>
  )
}

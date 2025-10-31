import React from 'react'
import { votos } from './votosData'

export default function VotosAplicacion() {
  return (
    <section id="votos-aplicar" className="mt-12 max-w-5xl mx-auto px-4">
      <div className="bg-card p-6 md:p-10 rounded-2xl shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Cómo aplicar los 7 votos</h3>

        <p className="text-muted-foreground mb-6">A continuación encontrarás ideas prácticas para llevar cada voto a la vida diaria, tanto en lo personal como en el trabajo o la comunidad.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {votos.map((v) => (
            <article key={v.slug} className="p-4 rounded-lg bg-background/50 border border-border">
              <div className="flex items-start gap-3">
                <div className="text-primary/90 p-2 rounded-md bg-primary/10">{v.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold">{v.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{v.short}</p>

                  <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
                    <li>{`Integra pequeñas prácticas diarias que reflejen ${v.title.toLowerCase().replace('voto ', '')}.`}</li>
                    <li>{`Comparte la intención con alguien de confianza y pídele retroalimentación.`}</li>
                    <li>{`Diseña un objetivo concreto para la semana que permita practicar este voto (por ejemplo: una acción concreta o un hábito).`}</li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t pt-6">
          <h4 className="text-xl font-semibold mb-2">Reflexión general</h4>
          <p className="text-muted-foreground">Los 7 votos no son metas aisladas sino un conjunto integrado de actitudes que, practicadas con constancia, transforman relaciones e instituciones. Aplicarlos requiere voluntad, paciencia y comunidad: cuando cada persona asume pequeñas responsabilidades coherentes con estos votos, el impacto colectivo crece de forma sostenida. Sea desde el hogar, la universidad o el lugar de trabajo, invierte tiempo en practicar, medir avances y ajustar las formas para que la ética deje de ser idea y se convierta en hábito.</p>
        </div>
      </div>
    </section>
  )
}

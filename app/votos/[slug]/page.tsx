// app/votos/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { votos as votosData } from '@/components/principles/votosData'
// import Image from 'next/image' // ← No se usa; puedes borrarlo

export const dynamicParams = false        // 🔒 solo slugs generados en build
export const revalidate = false           // 🔐 export puro (sin ISR)

type Props = { params: { slug: string } }

// 🧭 Genera TODAS las rutas dinámicas en el build
export async function generateStaticParams() {
  return votosData.map(v => ({ slug: v.slug }))
}

// (Opcional) SEO por página
export async function generateMetadata({ params }: Props) {
  const voto = votosData.find(v => v.slug === params.slug)
  if (!voto) return {}
  return {
    title: `Votos – ${voto.title}`,
    description: voto.short,
  }
}

export default function VotoPage({ params }: Props) {
  const voto = votosData.find(v => v.slug === params.slug)
  if (!voto) notFound()                  // ← Llama, no lo "returnees"

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-card rounded-2xl shadow-lg p-10">
        <div className="flex items-start gap-6">
          <div className="text-primary/90 p-3 rounded-md bg-primary/10">{voto.icon}</div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{voto.title}</h1>
            <p className="text-muted-foreground mb-6">{voto.short}</p>
            <div className="prose max-w-none text-muted-foreground">
              <p>{voto.long}</p>
              <p>
                Este voto puede desarrollarse en prácticas concretas: reflexionar antes de actuar,
                acompañar a quienes nos rodean, y construir instituciones que favorezcan la justicia
                y la solidaridad.
              </p>
            </div>
            <div className="mt-8">
              <a href="/" className="text-sm text-primary hover:underline">← Volver al índice</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

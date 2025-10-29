import React from 'react'

export type Voto = {
  slug: string
  title: string
  short: string
  long: string
  icon: React.ReactElement
}

export const votos: Voto[] = [
  {
    slug: 'honestidad',
    title: 'Voto de la honestidad',
    short: 'Actuar con transparencia y verdad en cada decisión.',
    long:
      'La honestidad es la base de toda relación de confianza. Firmes en la verdad, evitamos la doblez y actuamos con transparencia en nuestras acciones y comunicaciones. Ser honestos implica admitir errores, corregirlos y construir prácticas que reflejen autenticidad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'generosidad',
    title: 'Voto de la generosidad',
    short: 'Compartir tiempo, recursos y atención con los demás.',
    long:
      'La generosidad transforma comunidades. No se limita a lo material: donar tiempo, escucha y apoyo crea redes de solidaridad. Practicar la generosidad es reconocer la dignidad del otro y actuar para amplificar el bien común.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s-6-4.35-9-7a5 5 0 019-6 5 5 0 019 6c-3 2.65-9 7-9 7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'trabajo-duro',
    title: 'Voto del trabajo duro',
    short: 'Perseverar y esforzarse para alcanzar metas con disciplina.',
    long:
      'El trabajo duro es disciplina, constancia y amor por el oficio. No es solo esfuerzo físico, sino también voluntad para aprender, planear y mejorar. Este voto nos recuerda que el talento se forja con práctica y dedicación.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'sabiduria',
    title: 'Voto de la sabiduria',
    short: 'Buscar conocimiento y discernimiento antes de actuar.',
    long:
      'La sabiduría combina conocimiento y juicio. Implica escuchar, reflexionar y decidir con prudencia. Fomentar la sabiduría es invertir en educación, diálogo y en la humildad para aprender de la experiencia.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'liderazgo',
    title: 'Voto del liderazgo',
    short: 'Servir con ejemplo y responsabilidad, guiando con integridad.',
    long:
      'El liderazgo verdadero es servicio. Guiar con integridad, asumir responsabilidad y empoderar a los demás para actuar por el bien común. Este voto nos recuerda que dirigir implica dar el ejemplo y crear espacios para que otros crezcan.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'amor-y-fe',
    title: 'Voto del amor y fe',
    short: 'Mantener la esperanza y el afecto como motor de acción.',
    long:
      'El amor y la fe sostienen el ánimo en tiempos difíciles. Este voto celebra la compasión, la confianza y la esperanza como fuerzas que motivan actos de servicio y perseverancia. La fe nos recuerda que no estamos solos en la construcción del bien.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s-6-4.35-9-7a5 5 0 019-6 5 5 0 019 6c-3 2.65-9 7-9 7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: 'servicio',
    title: 'Voto del servicio',
    short: 'Poner las habilidades al servicio del bien común.',
    long:
      'Servir implica reconocer necesidades ajenas y actuar para aliviar, apoyar y dignificar. El voto del servicio nos invita a compartir competencias y esfuerzos con quienes más lo necesitan, haciendo del bien común nuestra prioridad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 7V5a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default votos

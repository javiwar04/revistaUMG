"use client"

import React, { useEffect, useRef, useState } from 'react'
import { votos as votosData } from './votosData'

export default function VotosExitoBook() {
  // We'll show two votos por página (left/right) to simulate páginas de libro
  const perPage = 2
  const pages = Math.ceil(votosData.length / perPage)
  const [page, setPage] = useState(0)
  const [flipping, setFlipping] = useState(false)
  const [flipDir, setFlipDir] = useState<'left' | 'right'>('right')
  const autoplayRef = useRef<number | null>(null)

  // pointer/swipe tracking
  const startXRef = useRef<number | null>(null)
  const movedRef = useRef(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') flipTo(Math.min(page + 1, pages - 1), 'right')
      if (e.key === 'ArrowLeft') flipTo(Math.max(page - 1, 0), 'left')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [pages, page])

  // autoplay
  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [page])

  function startAutoplay() {
    stopAutoplay()
    // advance every 6s
    // @ts-ignore
    autoplayRef.current = window.setInterval(() => goNext(), 6000)
  }

  function stopAutoplay() {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  function goNext() {
    const next = (page + 1) % pages
    flipTo(next, 'right')
  }

  function goPrev() {
    const prev = (page - 1 + pages) % pages
    flipTo(prev, 'left')
  }

  function flipTo(nextPage: number, dir: 'left' | 'right') {
    if (flipping || nextPage === page) return
    setFlipDir(dir)
    setFlipping(true)
    // length of animation must match CSS (600ms)
    setTimeout(() => {
      setPage(nextPage)
      setFlipping(false)
    }, 600)
  }

  const start = page * perPage
  const pageVotos = votosData.slice(start, start + perPage)

  // pointer handlers for swipe
  function onPointerDown(e: React.PointerEvent) {
    startXRef.current = e.clientX
    movedRef.current = false
    // stop autoplay while interacting
    stopAutoplay();
    // capture pointer
    (e.target as Element).setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent) {
    if (startXRef.current == null) return
    const dx = e.clientX - startXRef.current
    if (Math.abs(dx) > 30) movedRef.current = true
  }

  function onPointerUp(e: React.PointerEvent) {
    if (startXRef.current == null) return
    const dx = e.clientX - startXRef.current
    startXRef.current = null
    // release pointer capture
    try { (e.target as Element).releasePointerCapture(e.pointerId) } catch {}
    if (!movedRef.current) {
      startAutoplay()
      return
    }
    if (dx < -60) {
      goNext()
    } else if (dx > 60) {
      goPrev()
    }
    startAutoplay()
  }

  return (
    <section id="votos-exito" className="mt-8 py-12">
      <div className="max-w-5xl mx-auto">
        <h4 className="text-3xl font-serif font-bold mb-6 text-center text-[#4b2e1e]">Los 7 votos del éxito</h4>

        <div className="relative rounded-2xl shadow-xl overflow-hidden" style={{ background: '#f7f3ec' }}>
          {/* Spine (paper/binding color) */}
          <div className="absolute left-1/2 top-6 bottom-6 w-2 -translate-x-1/2 z-10" style={{ background: '#d4b99b' }} aria-hidden />

          {/* Navigation controls */}
          <button
            aria-label="Anterior"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 transition"
            style={{ background: 'rgba(255,255,255,0.6)', color: '#7a4a2b' }}
          >
            ‹
          </button>

          <button
            aria-label="Siguiente"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 transition"
            style={{ background: 'rgba(255,255,255,0.6)', color: '#7a4a2b' }}
          >
            ›
          </button>

          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onMouseEnter={() => stopAutoplay()}
            onMouseLeave={() => startAutoplay()}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {Array.from({ length: 2 }).map((_, i) => {
              const voto = pageVotos[i]
              return (
                <div key={i} className="p-8 flex flex-col justify-start items-start md:items-start min-h-[220px]">
                  {voto ? (
                    <article
                      className="group w-full p-6 rounded-lg transition-transform"
                      style={{
                        background: '#fffaf3',
                        border: '1px solid #efe0cf',
                        transition: 'transform 600ms ease, opacity 600ms ease',
                        transform: flipping ? (flipDir === 'right' ? 'rotateY(-10deg) scale(0.985)' : 'rotateY(10deg) scale(0.985)') : 'none',
                        opacity: flipping ? 0.85 : 1,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-md" style={{ background: '#efe0cf', color: '#7a4a2b' }}>
                          {voto.icon}
                        </div>
                        <h5 className="text-2xl font-serif font-semibold" style={{ color: '#4b2e1e' }}>{voto.title}</h5>
                      </div>

                      <p className="text-sm mt-3" style={{ color: '#6b4f3d' }}>{voto.short}</p>
                    </article>
                  ) : (
                    <div className="p-4 text-sm text-muted-foreground">&nbsp;</div>
                  )}
                </div>
              )
            })}
          </div>

          {/* footer + page indicator */}
          <div className="flex items-center justify-between px-8 py-4 border-t" style={{ borderColor: '#efe0cf' }}>
            <div className="text-sm" style={{ color: '#6b4f3d' }}>Edición ética • 2025</div>
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => flipTo(i, i > page ? 'right' : 'left')}
                  aria-current={i === page}
                  className={`w-2 h-2 rounded-full transition`}
                  style={{ background: i === page ? '#7a4a2b' : '#e0d4c8' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

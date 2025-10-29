import { useEffect, useState } from "react"

// Hook: observe a list of section IDs and return the currently visible/active one.
export default function useActiveSection(ids: string[], rootMargin = "0px 0px -60% 0px") {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!ids || ids.length === 0) return

    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { root: null, rootMargin, threshold: [0.25, 0.5, 0.75] }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [ids.join(","), rootMargin])

  return active
}

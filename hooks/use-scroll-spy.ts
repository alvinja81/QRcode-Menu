"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return null

          const rect = element.getBoundingClientRect()
          return {
            id,
            top: rect.top + window.scrollY - offset,
            bottom: rect.bottom + window.scrollY - offset,
          }
        })
        .filter((section): section is NonNullable<typeof section> => section !== null)

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}


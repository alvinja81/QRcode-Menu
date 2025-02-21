"use client"

import type React from "react"

import type { Category } from "../types/menu"
import { cn } from "@/lib/utils"
import { useRef, useState, useEffect } from "react"

interface CategorySelectorProps {
  categories: Category[]
  activeCategory: string
  onSelectCategory: (categoryId: string) => void
}

export function CategorySelector({ categories, activeCategory, onSelectCategory }: CategorySelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    const activeButton = container?.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement

    if (container && activeButton) {
      const containerRect = container.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()

      const scrollPosition = buttonRect.left - containerRect.left - containerRect.width / 2 + buttonRect.width / 2

      container.scrollTo({
        left: container.scrollLeft + scrollPosition,
        behavior: "smooth",
      })
    }
  }, [activeCategory])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("button")) {
      setIsDragging(true)
      setStartX(e.pageX - scrollContainerRef.current!.offsetLeft)
      setScrollLeft(scrollContainerRef.current!.scrollLeft)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const x = e.pageX - scrollContainerRef.current!.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleCategoryClick = (categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onSelectCategory(categoryId)
  }

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "bg-[#2d4941] rounded-full p-2 overflow-x-auto flex gap-2 no-scrollbar -mx-4 px-6",
        "cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory",
        isDragging && "select-none",
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {categories.map((category) => (
        <button
          key={category.id}
          data-category={category.id}
          onClick={(e) => handleCategoryClick(category.id, e)}
          className={cn(
            "px-4 py-1.5 rounded-full whitespace-nowrap text-sm transition-colors shrink-0",
            "snap-center focus:outline-none focus:ring-2 focus:ring-white/20",
            activeCategory === category.id
              ? "bg-[#1a3831] text-white font-medium"
              : "text-white/60 hover:text-white hover:bg-[#1a3831]/50",
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}


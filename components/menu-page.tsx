"use client"

import { useState, useEffect, useRef } from "react"
import { CategorySelector } from "./category-selector"
import { CategorySection } from "./category-section"
import { OrderNote } from "./order-note"
import { categories } from "../data/categories"
import { menuItems } from "../data/menu-items"
import { useScrollSpy } from "../hooks/use-scroll-spy"
import { Header } from "./header"
import type { MenuItem } from "../types/menu"

interface MenuPageProps {
  selectedCategory: string
  selectedMenuItem: MenuItem | null
  onBack: () => void
}

export function MenuPage({ selectedCategory, selectedMenuItem, onBack }: MenuPageProps) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const initialScrollRef = useRef(false)

  const spiedCategory = useScrollSpy(
    categories.map((c) => c.id),
    80,
  )

  useEffect(() => {
    if (spiedCategory) {
      setActiveCategory(spiedCategory)
    }
  }, [spiedCategory])

  useEffect(() => {
    if (!initialScrollRef.current) {
      initialScrollRef.current = true
      if (selectedMenuItem) {
        scrollToElement(selectedMenuItem.category, selectedMenuItem.id)
      } else {
        scrollToElement(selectedCategory)
      }
    }
  }, [selectedCategory, selectedMenuItem])

  const scrollToElement = (categoryId: string, itemId?: string) => {
    const element = document.getElementById(itemId || categoryId)
    if (element) {
      const header = document.querySelector("header")
      const categoryNav = document.querySelector(".category-nav")
      const headerHeight = (header?.offsetHeight || 0) + (categoryNav?.offsetHeight || 0)

      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerHeight - 20

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        if (itemId) {
          setSelectedItem(itemId)
          setTimeout(() => setSelectedItem(null), 2000)
        }
      }, 100)
    }
  }

  const handleSearchItemSelect = (item: MenuItem) => {
    scrollToElement(item.category, item.id)
    setActiveCategory(item.category)
  }

  return (
    <div className="min-h-screen bg-[#1a3831] flex flex-col">
      <Header onSelectSearchItem={handleSearchItemSelect} onBackToCategories={onBack} isInCategoryView={true} />

      <div className="sticky top-[72px] z-40 px-4 py-2 bg-white category-nav">
        <CategorySelector
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(id) => scrollToElement(id)}
        />
      </div>

      <main ref={mainRef} className="flex-1 px-4 pb-24 pt-4 overflow-y-auto scroll-smooth">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            items={menuItems.filter((item) => item.category === category.id)}
            selectedItem={selectedItem}
          />
        ))}
      </main>

      <OrderNote />
    </div>
  )
}


"use client"

import { useState } from "react"
import { Header } from "../components/header"
import { CategoryCard } from "../components/category-card"
import { categories } from "../data/categories"
import { MenuPage } from "../components/menu-page"
import type { MenuItem } from "../types/menu"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null)

  const handleSearchItemSelect = (item: MenuItem) => {
    setSelectedMenuItem(item)
    setSelectedCategory(item.category)
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedMenuItem(null)
  }

  if (selectedCategory) {
    return (
      <MenuPage
        selectedCategory={selectedCategory}
        selectedMenuItem={selectedMenuItem}
        onBack={() => {
          setSelectedCategory(null)
          setSelectedMenuItem(null)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-slate-900">
      <Header onSelectSearchItem={handleSearchItemSelect} />

      <main className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} onClick={() => handleCategorySelect(category.id)} />
          ))}
        </div>
      </main>
    </div>
  )
}


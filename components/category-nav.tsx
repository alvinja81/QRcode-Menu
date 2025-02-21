"use client"

import { Button } from "@/components/ui/button"
import type { Category } from "../types/menu"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (categoryId: string) => void
}

export function CategoryNav({ categories, selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => onSelectCategory("all")}
        className={cn("whitespace-nowrap", selectedCategory === "all" && "bg-primary text-primary-foreground")}
      >
        All Items
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onSelectCategory(category.id)}
          className={cn("whitespace-nowrap", selectedCategory === category.id && "bg-primary text-primary-foreground")}
        >
          {category.name}
        </Button>
      ))}
    </nav>
  )
}


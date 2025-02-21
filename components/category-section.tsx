import type { Category, MenuItem } from "../types/menu"
import { MenuItemCard } from "./menu-item"

interface CategorySectionProps {
  category: Category
  items: MenuItem[]
  selectedItem?: string | null
}

export function CategorySection({ category, items, selectedItem }: CategorySectionProps) {
  if (items.length === 0) return null

  return (
    <section id={category.id} className="pt-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">{category.name}</h2>
        <p className="text-sm text-white/70 mt-1">{getCategoryDescription(category.id)}</p>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} isHighlighted={selectedItem === item.id} />
        ))}
      </div>
    </section>
  )
}

function getCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    pasta: "Fresh pasta dishes made to order",
    grill: "Premium meats grilled to perfection",
    appetizers: "Perfect starters to share",
    burgers: "Handcrafted gourmet burgers",
    salads: "Fresh and healthy options",
    pizza: "Wood-fired artisanal pizzas",
    breakfast: "Start your day right",
    beverages: "Refreshing drinks and cocktails",
  }
  return descriptions[categoryId] || ""
}


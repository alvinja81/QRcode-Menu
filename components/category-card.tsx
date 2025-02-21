import { Card } from "@/components/ui/card"
import { IceCreamBowlIcon as Bowl, Beef, UtensilsCrossed, Sandwich, Salad, Pizza, Coffee, Beer } from "lucide-react"
import type { Category } from "../types/menu"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  category: Category
  onClick: () => void
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  const iconMap = {
    Bowl: Bowl,
    Beef: Beef,
    UtensilsCrossed: UtensilsCrossed,
    Sandwich: Sandwich,
    Salad: Salad,
    Pizza: Pizza,
    Coffee: Coffee,
    Beer: Beer,
  }

  const IconComponent = iconMap[category.icon as keyof typeof iconMap]

  return (
    <Card
      className={cn(
        "aspect-square flex flex-col items-center justify-center p-4",
        "bg-black/10 backdrop-blur-sm hover:bg-black/20 transition-all cursor-pointer border-0",
        "group relative overflow-hidden",
      )}
      onClick={onClick}
    >
      <div className="rounded-full bg-gradient-to-br from-teal-500/20 to-teal-500/10 p-4 mb-3 group-hover:scale-110 transition-transform">
        {IconComponent && <IconComponent className="w-8 h-8 text-teal-500" />}
      </div>
      <span className="text-sm text-center text-white/90 group-hover:text-white transition-colors">
        {category.name}
      </span>
    </Card>
  )
}


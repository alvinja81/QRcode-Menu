import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { MenuItem } from "../types/menu"

interface FoodCardProps {
  item: MenuItem
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all hover:scale-105">
      <div className="relative aspect-square">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground text-sm">{item.description}</p>
      </CardContent>
    </Card>
  )
}


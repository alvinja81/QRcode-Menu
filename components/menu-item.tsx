"use client"

import type React from "react"

import { useState, useRef } from "react"
import type { MenuItem } from "../types/menu"
import { X } from "lucide-react"
import { useOrderStore } from "../store/order-store"
import { cn } from "@/lib/utils"

interface MenuItemProps {
  item: MenuItem
  isHighlighted?: boolean
}

export function MenuItemCard({ item, isHighlighted }: MenuItemProps) {
  const [isDragging, setIsDragging] = useState(false)
  const touchStartX = useRef<number>(0)
  const { items, addItem, removeItem } = useOrderStore()
  const orderItem = items.find((i) => i.id === item.id)

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0].clientX - touchStartX.current < -50) {
      setIsDragging(true)
    }
  }

  const handleTouchEnd = () => {
    if (isDragging) {
      addItem(item)
      setIsDragging(false)
    }
  }

  return (
    <div
      id={item.id}
      className={cn(
        "bg-[#2d4941]/80 rounded-2xl p-4 relative transition-all duration-300",
        orderItem && "ring-2 ring-[#dbc1b3]",
        isHighlighted && "ring-2 ring-white",
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {orderItem && (
        <div className="absolute -top-2 -left-2 flex items-center gap-1">
          <button
            onClick={() => removeItem(item.id)}
            className="bg-[#dbc1b3] text-[#1a3831] rounded-full w-6 h-6 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="bg-[#dbc1b3] text-[#1a3831] rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {orderItem.quantity}
          </span>
        </div>
      )}
      <button className="w-full text-left" onClick={() => !orderItem && addItem(item)}>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-white">{item.name}</h3>
          <p className="text-sm text-white/70">{item.description}</p>
          <div className="text-white">{formatPrice(item.price)}</div>
        </div>
      </button>
    </div>
  )
}


"use client"

import { Search, Grid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { menuItems } from "../data/menu-items"
import type { MenuItem } from "../types/menu"
import { cn } from "@/lib/utils"

interface HeaderProps {
  onSelectSearchItem?: (item: MenuItem) => void
  onBackToCategories?: () => void
  isInCategoryView?: boolean
}

export function Header({ onSelectSearchItem, onBackToCategories, isInCategoryView }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<MenuItem[]>([])

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchResults([])
      return
    }

    const results = menuItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    )
    setSearchResults(results)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        isInCategoryView ? "bg-white shadow-sm" : "bg-gradient-to-b from-black/50 to-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {onBackToCategories && (
              <Button
                variant="ghost"
                size="icon"
                className={cn("", isInCategoryView ? "text-[#1a3831]" : "text-white")}
                onClick={onBackToCategories}
              >
                <Grid className="w-5 h-5" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className={cn("", isInCategoryView ? "text-[#1a3831]" : "text-white")}
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-right">
              <h1 className={cn("text-xl font-bold", isInCategoryView ? "text-[#1a3831]" : "text-white")}>Fast Food</h1>
              <p className={cn("text-sm", isInCategoryView ? "text-[#1a3831]/80" : "text-white/80")}>
                Restaurant & Cafe
              </p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-[#2d4941] to-[#1a3831] border-0">
          <div className="grid gap-4">
            <Input
              placeholder="Finding Nemo..."
              className="bg-white/10 border-0 text-white placeholder:text-white/50"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="max-h-[300px] overflow-y-auto">
              {searchResults.map((item) => (
                <button
                  key={item.id}
                  className="w-full text-left p-3 hover:bg-white/10 rounded-md text-white"
                  onClick={() => {
                    if (onSelectSearchItem) {
                      onSelectSearchItem(item)
                    }
                    setIsSearchOpen(false)
                  }}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-white/70">{item.description}</div>
                  <div className="text-sm font-medium mt-1">${item.price}</div>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}


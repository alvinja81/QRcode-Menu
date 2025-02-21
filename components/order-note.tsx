import { X, Minus, Plus, ClipboardList } from "lucide-react"
import { useOrderStore } from "../store/order-store"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function OrderNote() {
  const { items, total, isOrderNoteOpen, toggleOrderNote, incrementItem, decrementItem, removeItem } = useOrderStore()

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <Sheet open={isOrderNoteOpen} onOpenChange={toggleOrderNote}>
      <SheetTrigger asChild>
        <button className="fixed bottom-4 right-4 z-50 bg-[#dbc1b3] rounded-full p-3">
          {isOrderNoteOpen ? <X className="w-6 h-6" /> : <ClipboardList className="w-6 h-6" />}
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-[#1a3831] text-white p-6 rounded-t-3xl border-0">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex-1">
                <h3>{item.name}</h3>
                <p className="text-sm text-white/70">{formatPrice(item.price * item.quantity)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => (item.quantity > 1 ? decrementItem(item.id) : removeItem(item.id))}
                  className="text-white/70"
                >
                  {item.quantity > 1 ? <Minus className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementItem(item.id)}>
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex justify-between items-center">
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}


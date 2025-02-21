import { create } from "zustand"
import type { OrderItem, MenuItem } from "../types/menu"

interface OrderStore {
  items: OrderItem[]
  isOrderNoteOpen: boolean
  addItem: (item: MenuItem) => void
  removeItem: (itemId: string) => void
  incrementItem: (itemId: string) => void
  decrementItem: (itemId: string) => void
  toggleOrderNote: () => void
  total: number
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  items: [],
  isOrderNoteOpen: false,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id)
      if (existingItem) {
        return {
          items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
          total: state.total + item.price,
        }
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        total: state.total + item.price,
      }
    }),
  removeItem: (itemId) =>
    set((state) => {
      const item = state.items.find((i) => i.id === itemId)
      if (!item) return state
      return {
        items: state.items.filter((i) => i.id !== itemId),
        total: state.total - item.price * item.quantity,
      }
    }),
  incrementItem: (itemId) =>
    set((state) => {
      const item = state.items.find((i) => i.id === itemId)
      if (!item) return state
      return {
        items: state.items.map((i) => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i)),
        total: state.total + item.price,
      }
    }),
  decrementItem: (itemId) =>
    set((state) => {
      const item = state.items.find((i) => i.id === itemId)
      if (!item) return state
      if (item.quantity === 1) {
        return {
          items: state.items.filter((i) => i.id !== itemId),
          total: state.total - item.price,
        }
      }
      return {
        items: state.items.map((i) => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i)),
        total: state.total - item.price,
      }
    }),
  toggleOrderNote: () => set((state) => ({ isOrderNoteOpen: !state.isOrderNoteOpen })),
  total: 0,
}))


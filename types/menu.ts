export interface Category {
  id: string
  name: string
  icon: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export interface OrderItem extends MenuItem {
  quantity: number
}

export interface Order {
  items: OrderItem[]
  total: number
}


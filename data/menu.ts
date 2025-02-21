import type { MenuItem, Category } from "../types/menu"

export const categories: Category[] = [
  { id: "burgers", name: "Burgers" },
  { id: "pizzas", name: "Pizzas" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
]

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "burgers",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil on our signature crust",
    price: 14.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "pizzas",
  },
  // Add more items as needed
]


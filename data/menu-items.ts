import type { MenuItem } from "../types/menu"

export const menuItems: MenuItem[] = [
  // Pasta & Noodles
  {
    id: "pasta-1",
    name: "Classic Fettuccine Alfredo",
    description: "Creamy fettuccine pasta tossed with parmesan cheese and garlic butter sauce",
    price: 10,
    category: "pasta",
  },
  {
    id: "pasta-2",
    name: "Spicy Shrimp Scampi",
    description: "Linguine pasta with garlic butter shrimp, red pepper flakes, and fresh herbs",
    price: 10,
    category: "pasta",
  },
  {
    id: "pasta-3",
    name: "Mushroom Truffle Ravioli",
    description: "Handmade ravioli stuffed with wild mushrooms and finished with truffle oil",
    price: 10,
    category: "pasta",
  },
  {
    id: "pasta-4",
    name: "Classic Spaghetti Bolognese",
    description: "Al dente spaghetti with rich meat sauce and fresh basil",
    price: 10,
    category: "pasta",
  },
  {
    id: "pasta-5",
    name: "Seafood Linguine",
    description: "Mixed seafood in white wine sauce with cherry tomatoes",
    price: 10,
    category: "pasta",
  },
  // Grilled Items
  {
    id: "grill-1",
    name: "Premium Ribeye Steak",
    description: "Grilled to perfection with herb butter and roasted garlic",
    price: 10,
    category: "grill",
  },
  {
    id: "grill-2",
    name: "Grilled Salmon Fillet",
    description: "Fresh Atlantic salmon with lemon herb sauce",
    price: 10,
    category: "grill",
  },
  {
    id: "grill-3",
    name: "BBQ Chicken Skewers",
    description: "Marinated chicken with bell peppers and onions",
    price: 10,
    category: "grill",
  },
  {
    id: "grill-4",
    name: "Lamb Chops",
    description: "Herb-crusted lamb chops with mint sauce",
    price: 10,
    category: "grill",
  },
  {
    id: "grill-5",
    name: "Mixed Grill Platter",
    description: "Assortment of grilled meats with seasonal vegetables",
    price: 10,
    category: "grill",
  },
  // Appetizers
  {
    id: "appetizers-1",
    name: "Crispy Calamari",
    description: "Lightly breaded calamari with marinara sauce",
    price: 10,
    category: "appetizers",
  },
  {
    id: "appetizers-2",
    name: "Spinach Artichoke Dip",
    description: "Creamy dip served with tortilla chips",
    price: 10,
    category: "appetizers",
  },
  {
    id: "appetizers-3",
    name: "Buffalo Wings",
    description: "Spicy chicken wings with blue cheese dip",
    price: 10,
    category: "appetizers",
  },
  {
    id: "appetizers-4",
    name: "Bruschetta",
    description: "Toasted bread with tomatoes, garlic, and basil",
    price: 10,
    category: "appetizers",
  },
  {
    id: "appetizers-5",
    name: "Shrimp Cocktail",
    description: "Chilled shrimp with cocktail sauce",
    price: 10,
    category: "appetizers",
  },
  // Burgers
  {
    id: "burger-1",
    name: "Classic Cheeseburger",
    description: "Angus beef patty with cheddar, lettuce, tomato, and special sauce",
    price: 10,
    category: "burgers",
  },
  {
    id: "burger-2",
    name: "Bacon Avocado Burger",
    description: "Topped with crispy bacon, fresh avocado, and chipotle mayo",
    price: 10,
    category: "burgers",
  },
  {
    id: "burger-3",
    name: "Mushroom Swiss Burger",
    description: "Sautéed mushrooms and melted Swiss cheese",
    price: 10,
    category: "burgers",
  },
  {
    id: "burger-4",
    name: "Spicy Jalapeño Burger",
    description: "With pepper jack cheese and fresh jalapeños",
    price: 10,
    category: "burgers",
  },
  {
    id: "burger-5",
    name: "BBQ Ranch Burger",
    description: "Onion rings, BBQ sauce, and ranch dressing",
    price: 10,
    category: "burgers",
  },
  // Salads
  {
    id: "salad-1",
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons, and Caesar dressing",
    price: 10,
    category: "salads",
  },
  {
    id: "salad-2",
    name: "Greek Salad",
    description: "Mixed greens, feta, olives, and red wine vinaigrette",
    price: 10,
    category: "salads",
  },
  {
    id: "salad-3",
    name: "Cobb Salad",
    description: "Chicken, bacon, egg, avocado, and blue cheese",
    price: 10,
    category: "salads",
  },
  {
    id: "salad-4",
    name: "Quinoa Bowl",
    description: "Quinoa, roasted vegetables, and tahini dressing",
    price: 10,
    category: "salads",
  },
  {
    id: "salad-5",
    name: "Asian Chicken Salad",
    description: "Grilled chicken, mandarin oranges, and sesame dressing",
    price: 10,
    category: "salads",
  },
  // Pizza
  {
    id: "pizza-1",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil",
    price: 10,
    category: "pizza",
  },
  {
    id: "pizza-2",
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni and Italian herbs",
    price: 10,
    category: "pizza",
  },
  {
    id: "pizza-3",
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, red onions, and BBQ sauce",
    price: 10,
    category: "pizza",
  },
  {
    id: "pizza-4",
    name: "Vegetarian Pizza",
    description: "Assorted vegetables and pesto sauce",
    price: 10,
    category: "pizza",
  },
  {
    id: "pizza-5",
    name: "Mediterranean Pizza",
    description: "Olives, feta, spinach, and sun-dried tomatoes",
    price: 10,
    category: "pizza",
  },
  // Breakfast
  {
    id: "breakfast-1",
    name: "Classic American Breakfast",
    description: "Eggs, bacon, hash browns, and toast",
    price: 10,
    category: "breakfast",
  },
  {
    id: "breakfast-2",
    name: "Belgian Waffles",
    description: "With fresh berries and maple syrup",
    price: 10,
    category: "breakfast",
  },
  {
    id: "breakfast-3",
    name: "Eggs Benedict",
    description: "Poached eggs with hollandaise sauce",
    price: 10,
    category: "breakfast",
  },
  {
    id: "breakfast-4",
    name: "Breakfast Burrito",
    description: "Scrambled eggs, cheese, and potatoes",
    price: 10,
    category: "breakfast",
  },
  {
    id: "breakfast-5",
    name: "Avocado Toast",
    description: "Smashed avocado with poached egg",
    price: 10,
    category: "breakfast",
  },
  // Beverages
  {
    id: "beverage-1",
    name: "Fresh Lemonade",
    description: "House-made with fresh lemons",
    price: 10,
    category: "beverages",
  },
  {
    id: "beverage-2",
    name: "Iced Tea",
    description: "Classic black tea over ice",
    price: 10,
    category: "beverages",
  },
  {
    id: "beverage-3",
    name: "Smoothie",
    description: "Mixed berries and yogurt",
    price: 10,
    category: "beverages",
  },
  {
    id: "beverage-4",
    name: "Italian Soda",
    description: "Sparkling water with flavored syrup",
    price: 10,
    category: "beverages",
  },
  {
    id: "beverage-5",
    name: "Cold Brew Coffee",
    description: "Smooth and rich cold-steeped coffee",
    price: 10,
    category: "beverages",
  },
]


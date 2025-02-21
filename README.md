# Modern Restaurant Menu App

A sleek digital menu application built with Next.js 14 and TypeScript, featuring real-time search, smooth navigation, and an intuitive ordering system.

![Menu App Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qD6EVwxLOVVebKKOlzjMcZVsNLcnXG.png)

## Features

- 🎨 Modern UI with dark theme and teal accents
- 🔍 Real-time search functionality
- 📱 Fully responsive design
- 🛒 Interactive cart system
- 🔄 Smooth transitions and animations
- 📑 Category-based navigation
- 🎯 Scroll spy for active menu sections
- 💫 Drag-to-scroll category bar

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide Icons
- Shadcn/ui Components
- Zustand (State Management)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/restaurant-menu.git
cd restaurant-menu
```
2. Install dependencies:


```shellscript
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:


```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Project Structure

```plaintext
restaurant-menu/
├── app/                   # Next.js app directory
├── components/            # React components
├── data/                 # Menu and category data
├── hooks/               # Custom React hooks
├── store/              # Zustand store
├── styles/            # Global styles
└── types/            # TypeScript types
```

## Key Components

- `CategoryCard`: Grid-style category selection cards
- `MenuPage`: Main menu view with scrollable sections
- `OrderNote`: Shopping cart interface
- `CategorySelector`: Horizontal scrollable category navigation
- `SearchBar`: Real-time menu item search


## Customization

### Adding Menu Items

Edit `data/menu-items.ts` to add or modify menu items:

```typescript
export const menuItems: MenuItem[] = [
  {
    id: 'item-1',
    name: 'Item Name',
    description: 'Item description',
    price: 10,
    category: 'category-id'
  },
  // Add more items...
];
```

### Modifying Categories

Edit `data/categories.ts` to update categories:

```typescript
export const categories: Category[] = [
  {
    id: 'category-id',
    name: 'Category Name',
    icon: 'IconName'
  },
  // Add more categories...
];
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- UI Components by [shadcn/ui](https://ui.shadcn.com)
- Built with [Next.js](https://nextjs.org)


## Contact

Your Name - [Gmail](mailto:amiirjahanshahi@gmail.com)

Project Link: [https://github.com/yourusername/restaurant-menu](https://github.com/yourusername/restaurant-menu)

import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 1, category: "Automotive - Car Parts", name: "Automotive - Car Parts" },
    { id: 2, category: "Automotive - Cleaning Kits (Brush)", name: "Automotive - Cleaning Kits (Brush)" },
    { id: 3, category: "Automotive - Accessories (Seat Covers)", name: "Automotive - Accessories (Seat Covers)" },
    { id: 4, category: "Baby Safety - Guards", name: "Baby Safety - Guards" },
    { id: 5, category: "Electronic Accessories (Electronics)", name: "Electronic Accessories (Electronics)" },
    { id: 6, category: "Large Appliances - Accessories", name: "Large Appliances - Accessories" },
  ],

  addCategory: (newCategory) => set((state) => ({
    categories: [...state.categories, { id: Date.now(), ...newCategory }]
  })),

  removeCategory: (id) => set((state) => ({
    categories: state.categories.filter((category) => category.id !== id)
  })),
}));

export default useCategoryStore;

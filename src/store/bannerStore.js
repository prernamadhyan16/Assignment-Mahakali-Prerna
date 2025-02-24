import { create } from "zustand";

const useBannerStore = create((set) => ({
  banners: [
    { id: 1, bannerName: "Diwali", redirectPage: "Automotive - Car Parts" },
    { id: 2, bannerName: "Holi", redirectPage: "Automotive - Cleaning Kits (Brush)" },
  ],

  addBanner: (banner) =>
    set((state) => ({
      banners: [...state.banners, { id: Date.now(), ...banner }],
    })),

  deleteBanner: (id) =>
    set((state) => ({
      banners: state.banners.filter((banner) => banner.id !== id),
    })),
}));

export default useBannerStore;

import { create } from "zustand";

const useSaleBannerStore = create((set) => ({
  saleBanners: [
    { id: 1, bannerName: "Sale 50%", redirectPage: "Automotive - Car Parts" },
  ],

  addSaleBanner: (banner) =>
    set((state) => ({
      saleBanners: [...state.saleBanners, { id: Date.now(), ...banner }],
    })),

  deleteSaleBanner: (id) =>
    set((state) => ({
      saleBanners: state.saleBanners.filter((banner) => banner.id !== id),
    })),
}));

export default useSaleBannerStore;

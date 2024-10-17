import { create } from "zustand";

export const useStore = create((set) => ({
    cart: 0,
    addToCart: () => set((state) => ({ cart: state.cart + 1 })),
    removeFromCart: () => set((state) => ({ cart: state.cart > 0 ? state.cart - 1 : 0 })),
    emptyCart: () => set({ cart: 0 })
}))
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;

        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        });
      },

      increaseQty: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        });
      },

      decreaseQty: (id) => {
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearQty: () => {
        set({ cart: [] });
      },

      getTotalItem: () =>
        get().cart.reduce(
          (total, item) => total + item.quantity * item.price,
          0,
        ),
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useCartStore;

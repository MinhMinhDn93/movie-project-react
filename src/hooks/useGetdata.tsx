import { create } from "zustand";

import axios from "axios";

const apiUrl =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

interface FakeProducts {
  products: Product[];
  isLoading: boolean;
  error: string;
  fetchProducts: () => void;
  // filterProducts: (id: number) => void;
}

const useGetdata = create<FakeProducts>((set) => ({
  products: [],
  isLoading: false,
  error: "", // Trạng thái lưu trữ thông báo lỗi

  fetchProducts: async () => {
    try {
      set({ isLoading: true, error: "" });
      const response = await axios.get(`${apiUrl}`);
      set({ products: response.data.results, isLoading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ isLoading: false, error: "Error fetching products" });
    }
  },
}));

export default useGetdata;

import { create } from "zustand";

interface Data {
  search: string;
  onchange: (newData: string) => void;
}

const useSearch = create<Data>((set) => ({
  search: "",
  onchange: (newData) => set({ search: newData }),
}));
export default useSearch;

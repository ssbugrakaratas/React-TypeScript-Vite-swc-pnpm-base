import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  username: string;
  role: "admin" | "guest";
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (username: string, password: string) => {
        // Burada gerçek bir API çağrısı yapılabilir
        // Şimdilik basit bir kontrol yapıyoruz
        if (username === "admin" && password === "admin") {
          set({
            user: { username, role: "admin" },
            isAuthenticated: true,
          });
          return true;
        } else if (username === "guest" && password === "guest") {
          set({
            user: { username, role: "guest" },
            isAuthenticated: true,
          });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);

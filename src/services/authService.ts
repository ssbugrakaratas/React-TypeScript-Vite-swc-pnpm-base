import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<{ role: string } | null>({
    role: "admin", // Varsayılan olarak admin, backend'den gelmesi gerekiyor
  });

  return {
    isAuthenticated: !!user,
    user: user || { role: "guest" },
    login: (role: string) => setUser({ role }),
    logout: () => setUser(null),
  };
}

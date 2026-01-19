"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Apply dark mode by default before hydration completes
    const stored = localStorage.getItem("permis-theme");
    if (!stored || stored === "dark") {
      document.documentElement.classList.add("dark");
    }
    setMounted(true);
  }, []);

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {children}
      </div>
    );
  }

  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}

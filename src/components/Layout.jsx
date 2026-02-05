import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const html = document.documentElement;
    
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <Navbar darkMode={isDark} toggleTheme={toggleTheme} />
      {/* Adjusted padding for 5 navigation items */}
<main className="pt-0"> {/* NO padding here */}
  {children}
</main>
    </div>
  );
}
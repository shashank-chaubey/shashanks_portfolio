"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const ThemeControls = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme: Theme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;

    const syncTheme = () => {
      const current = document.documentElement.dataset.theme;
      if (current === "light" || current === "dark") setTheme(current);
    };
    const syncStorage = (event: StorageEvent) => {
      if (event.key === "portfolio-theme" && (event.newValue === "light" || event.newValue === "dark")) {
        document.documentElement.dataset.theme = event.newValue;
        setTheme(event.newValue);
      }
    };

    window.addEventListener("portfolio-theme-change", syncTheme);
    window.addEventListener("storage", syncStorage);
    return () => {
      window.removeEventListener("portfolio-theme-change", syncTheme);
      window.removeEventListener("storage", syncStorage);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  return (
    <div className="theme-controls" aria-label="Appearance">
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === "dark"} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
        <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
          {theme === "dark" ? (
            <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>
          ) : (
            <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
          )}
        </svg>
      </button>
    </div>
  );
};

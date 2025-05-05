
// Function to set the theme based on user preference
export const setTheme = (isDark: boolean) => {
  // Update localStorage
  localStorage.setItem("darkMode", String(isDark));
  
  // Update document class with smooth transition
  if (isDark) {
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.add("dark");
    
    // Remove transition class after transition completes to avoid affecting other transitions
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  } else {
    document.documentElement.classList.add("theme-transition");
    document.documentElement.classList.remove("dark");
    
    // Remove transition class after transition completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  }
};

// Function to get the current theme preference
export const getThemePreference = (): boolean => {
  // Check localStorage
  const savedPreference = localStorage.getItem("darkMode");
  
  if (savedPreference !== null) {
    return savedPreference === "true";
  }
  
  // Check system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Function to initialize theme based on user preferences
export const initializeTheme = (): boolean => {
  const isDarkMode = getThemePreference();
  setTheme(isDarkMode);
  return isDarkMode;
};

// Function to toggle theme
export const toggleTheme = (): boolean => {
  const currentTheme = getThemePreference();
  const newTheme = !currentTheme;
  setTheme(newTheme);
  return newTheme;
};

// Function to listen for system theme changes
export const listenForThemeChanges = (callback: (isDark: boolean) => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if user hasn't set a preference
    if (localStorage.getItem("darkMode") === null) {
      const newTheme = e.matches;
      setTheme(newTheme);
      callback(newTheme);
    }
  };
  
  // Modern browsers
  try {
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  } catch (err) {
    // Fallback for Safari < 14
    try {
      // @ts-ignore - Safari fallback
      mediaQuery.addListener(handleChange);
      return () => {
        // @ts-ignore - Safari fallback
        mediaQuery.removeListener(handleChange);
      };
    } catch (err2) {
      console.error("Could not listen for theme changes:", err2);
      return () => {};
    }
  }
};

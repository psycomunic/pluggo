
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


// Function to set the theme based on user preference
export const setTheme = (isDark: boolean) => {
  // Update localStorage
  localStorage.setItem("darkMode", String(isDark));
  
  // Update document class
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
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

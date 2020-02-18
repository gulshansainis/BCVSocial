import React, { useState, useEffect } from "react";

const ToogleTheme = () => {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    theme = theme ? theme : "light";
    document.body.setAttribute("data-theme", theme);
    return theme;
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  });

  function toggle() {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }

  return (
    <button className="toggleTheme" onClick={toggle}>
      {theme === "light" ? "🌙 dark" : "🌞 light"}
    </button>
  );
};

export default ToogleTheme;

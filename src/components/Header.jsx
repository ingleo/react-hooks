import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {
    theme,
    setTheme,
    suma,
    resultadoSumita,
    concatenacion,
    stringResultante,
  } = useContext(ThemeContext);

  const handleClick = (e) => {
    setTheme(!darkMode);
    setDarkMode(!darkMode);
    suma(4, 5);
    concatenacion("uno", "dos", "tres");
  };

  const HeaderClass = theme ? "red" : "blue";

  return (
    <div className="Header">
      <h1 style={{ color: HeaderClass }}>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
      <button
        type="button"
        onClick={() => {
          setDarkMode(!darkMode);
          setTheme(!darkMode);
          suma(3, 2);
          concatenacion("cuatro", "cinco", "seis");
        }}
      >
        {darkMode ? "DarkMode2" : "LightMode2"}
      </button>
      <br />
      <label>{resultadoSumita}</label>
      <br />
      <label>{stringResultante}</label>
    </div>
  );
};

export default Header;

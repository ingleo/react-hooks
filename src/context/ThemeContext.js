import React, { useState } from "react";

const ThemeContext = React.createContext({});

let resultadoSumita = 0;
let stringResultante = "";

const sumita = (num1, num2) => {
  resultadoSumita = num1 + num2;
};

const concatena = (str1, str2, str3) => {
  stringResultante = `${str1} ${str2} ${str3}`;
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const payload = {
    theme,
    setTheme,
    suma: sumita,
    resultadoSumita,
    concatenacion: concatena,
    stringResultante,
  };

  return (
    <ThemeContext.Provider value={payload}>{children}</ThemeContext.Provider>
  );
}
export default ThemeContext;

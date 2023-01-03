import { React, createContext, useState, useEffect } from "react";
// import { getCurrentCoords } from "../utils/helpers";

export const CurrContext = createContext();

const CurrProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const currencies = ["USD", "GBP", "CAD", "EUR", "AUD"];

  useEffect(async () => {
    const API_KEY = "BC0LW0It7dFkywbGI26os1qHM53XTQyt";

    if (localStorage.getItem("rates")) {
      const rates = JSON.parse(localStorage.getItem("rates"));
      setExchangeRate(rates[currency]);

      return;
    }

    try {
      const response = await fetch(
        `https://api.apilayer.com/exchangerates_data/latest?access_key=${API_KEY}&base=USD&symbols=${currencies.join(
          ","
        )}}`,
        {
          headers: {
            apiKey: API_KEY,
          },
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("couldn't get exchange rates data.");

      const data = await response.json();
      localStorage.setItem("rates", JSON.stringify(data.rates));
      setExchangeRate(data.rates[currency]);
    } catch (e) {
      console.error(e.message);
    }
  }, [currency]);

  const value = {
    currency,
    setCurrency,
    exchangeRate,
  };

  return <CurrContext.Provider value={value}>{children}</CurrContext.Provider>;
};

export default CurrProvider;

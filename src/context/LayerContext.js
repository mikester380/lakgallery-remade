import React, { createContext, useState } from "react";

export const LayerContext = createContext();

export const LayerProvider = function ({ children }) {
  const [showLayer, setShowLayer] = useState(false);

  const value = {
    showLayer,
    setShowLayer,
  };

  return (
    <LayerContext.Provider value={value}>{children}</LayerContext.Provider>
  );
};

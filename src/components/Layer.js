import React, { useContext } from "react";
import { LayerContext } from "../context/LayerContext";

const Layer = function () {
  const { showLayer } = useContext(LayerContext);
  return (
    <div className={!showLayer ? "overlay" : "overlay overlay--active"}></div>
  );
};

export default Layer;

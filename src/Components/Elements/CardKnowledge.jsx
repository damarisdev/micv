import React from "react";

import "./../../Styles/Elements/CardKnowledge.css";

export const CardKnowledge = ({ Texto, Nivel }) => {
  var ClaseColor = "color-1";

  switch (Nivel) {
    case "1":
      ClaseColor = "color-2";
      break;

    default:
      break;
  }

  return (
    <div className={"CardKnowledge " + ClaseColor}>
      <p>{Texto} </p>
    </div>
  );
};

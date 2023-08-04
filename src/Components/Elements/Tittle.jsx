import React from "react";

import "./../../Styles/Elements/Tittle.css";

export const Tittle = ({ Titulo, SeparatorVisible = true }) => {
  return (
    <div className="containerTittle">
      <h2>{Titulo}</h2>
      {SeparatorVisible && <div className="separator"></div>}
    </div>
  );
};

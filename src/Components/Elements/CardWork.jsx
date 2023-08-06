import React from "react";

import "./../../Styles/Elements/CardWork.css";

export const CardWork = ({ rutaImagen, Titulo, Texto, Color }) => {
  const Style = "cardWorks " + Color;
  return (
    <div className={Style}>
      <div>
        <img
          src={rutaImagen}
          alt="Damaris Barbosa Programadora experta en contabilidad"
        />
      </div>
      <div>
        <h3>{Titulo} </h3>
        <p>{Texto}</p>
      </div>
    </div>
  );
};

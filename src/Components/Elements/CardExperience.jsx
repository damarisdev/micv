import React from "react";

import "./../../Styles/Elements/CardExperience.css";

export const CardExperience = ({
  rutaImagen,
  Titulo,
  Empresa,
  Texto,
  Color,
  Fecha,
}) => {
  const Style = "cardWork " + Color;
  return (
    <div className={Style}>
      <div className="container-date">
        <h5>{Empresa} </h5>
        <p>{Fecha}</p>
      </div>
      <div className="container-info">
        <div>
          <img
            src={rutaImagen}
            alt="Damaris Barbosa Programadora experta en contabilidad"
          />
        </div>
        <div cl>
          <h3>{Titulo} </h3>
          <p>{Texto}</p>
        </div>
      </div>
    </div>
  );
};

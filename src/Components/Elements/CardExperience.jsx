import React from "react";

import "./../../Styles/Elements/CardExperience.css";

export const CardExperience = ({
  rutaImagen,
  Titulo,
  Empresa,
  Texto,
  Color,
  Fecha,
  Auxiliar,
  TituloAuxiliar,
  Auxiliar2,
  TituloAuxiliar2,
  Auxiliar3,
  TituloAuxiliar3,
  Auxiliar4,
  TituloAuxiliar4,
  Auxiliar5,
  TituloAuxiliar5,
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

          {Auxiliar && TituloAuxiliar && (
            <div className="container-auxiliar">
              <p>
                <b>{TituloAuxiliar}</b>
              </p>{" "}
              <p>{Auxiliar}</p>
            </div>
          )}

          {Auxiliar2 && TituloAuxiliar2 && (
            <div className="container-auxiliar">
              <p>
                <b>{TituloAuxiliar2}</b>
              </p>{" "}
              <p>{Auxiliar2}</p>
            </div>
          )}

          {Auxiliar3 && TituloAuxiliar3 && (
            <div className="container-auxiliar">
              <p>
                <b>{TituloAuxiliar3}</b>
              </p>{" "}
              <p>{Auxiliar3}</p>
            </div>
          )}

          {Auxiliar4 && TituloAuxiliar4 && (
            <div className="container-auxiliar">
              <p>
                <b>{TituloAuxiliar4}</b>
              </p>{" "}
              <p>{Auxiliar4}</p>
            </div>
          )}

          {Auxiliar5 && TituloAuxiliar5 && (
            <div className="container-auxiliar">
              <p>
                <b>{TituloAuxiliar5}</b>
              </p>{" "}
              <p>{Auxiliar5}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

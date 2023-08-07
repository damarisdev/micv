import React from "react";
import Swal from "sweetalert2";
import "./../../Styles/Elements/CardCertificate.css";

import img from "./../../Images/Certificates/comodarfeedback.jpg";

export const CardCertificate = ({
  Curso,
  Fecha,
  RutaImg,
  Plataforma,
  UrlPlataforma,
}) => {
  const muestraDiploma = () => {
    Swal.fire({
      title: Curso,
      width: 950,
      height: 850,
      text: Fecha,
      imageUrl: RutaImg,
      imageWidth: 750,
      imageHeight: 500,
      imageAlt: Curso,
      confirmButtonText: "¡Genial!",
    });
  };

  return (
    <div className="card shadow CardCertificate">
      <div>
        <p className="curso">Curso de:</p>
        <h3 className="titulo">{Curso}</h3>
        <h5 className="propiedades">
          Fecha: <b>{Fecha}</b>
        </h5>
        {UrlPlataforma === "" ? (
          <h5 className="propiedades">
            Plataforma: {"  "} <b> {Plataforma}</b>
          </h5>
        ) : (
          <h5 className="propiedades">
            Plataforma:{"  "}
            <b>
              <a target="_blank" href={UrlPlataforma}>
                {Plataforma}
              </a>
            </b>
          </h5>
        )}
      </div>
      <div className="containerDiploma">
        <a className="linkDiploma" onClick={() => muestraDiploma()}>
          Ver diploma
        </a>
      </div>
    </div>
  );
};

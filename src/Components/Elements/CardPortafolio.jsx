import React from "react";
import "./../../Styles/Elements/CardPortafolio.css";

import imgGithub from "./../../Images/Icons/github.png";

export const CardPortafolio = ({
  Titulo,
  Lenguajes = ["hola", "Halo"],
  Descripcion,
  urlImagen,
  urlProyecto,
}) => {
  return (
    <div className="card shadow containerCardPortafolio">
      <img src={urlImagen} />
      <h3>{Titulo}</h3>
      <label>Lenguajes:</label>
      <div className="containerTags">
        {Lenguajes.map((item) => (
          <div className="tag">{item} </div>
        ))}
      </div>
      <div className="containerDescription">
        <label>Descripción del proyecto:</label>
        <p>{Descripcion}</p>
      </div>

      <div className="containerButton">
        <img src={imgGithub} />
        <a
          className="buttonVisitPage"
          href={urlProyecto}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar en mi github pages
        </a>
      </div>
    </div>
  );
};

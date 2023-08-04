import React from "react";
import { Tittle } from "./Elements/Tittle";
import { CardCertificate } from "./Elements/CardCertificate";
import "./../Styles/Certificates.css";

import MisCertificados from "./../Utils/Certificados.json";

export const Certificate = () => {
  return (
    <div className="container-certificate">
      <Tittle Titulo="Mis Certificados" />

      <h3>
        Me gusta "Nunca parar de aprender", así que espero que encuentres muchos
        certificados en esta sección.
      </h3>

      <div className="containerCardCertificate">
        {MisCertificados.map((elemento, indice) => (
          <CardCertificate
            key={indice}
            Curso={elemento.Curso}
            Fecha={elemento.Fecha}
            RutaImg={elemento.RutaImg}
            Plataforma={elemento.Plataforma}
            UrlPlataforma={elemento.UrlPlataforma}
          />
        ))}
      </div>
    </div>
  );
};

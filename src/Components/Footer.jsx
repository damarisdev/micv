import React, { useState } from "react";
import "./../Styles/Footer.css";
import corazon from "./../Images/Icons/heart.png";

export const Footer = () => {
  const [Dedicatoria, setDedicatoria] = useState(false);

  return (
    <div className="divFooter">
      <div className="containerFooter">
        <h5>Página creada con mucho </h5>
        <img
          src={corazon}
          onClick={() => setDedicatoria(true)}
          alt="Te lo dedico a ti, mi hermosa Dámaris, por que se que serás la mejor en todo lo que te propongas. Por que iluminas mi mundo y has creado de mi vida un lugar muy hermoso para virvir. Y sencillamente por que Te Amo."
          title="Te lo dedico a ti, mi hermosa Dámaris, por que se que serás la mejor en todo lo que te propongas. Por que iluminas mi mundo y has creado de mi vida un lugar muy hermoso para virvir. Y sencillamente por que Te Amo."
        />
      </div>

      {Dedicatoria && (
        <p>
          Te lo dedico a ti, mi hermosa Dámaris, por que se que serás la mejor
          en todo lo que te propongas. Por que iluminas mi mundo y has creado de
          mi vida un lugar muy hermoso para virvir. Y sencillamente por que Te
          Amo.
        </p>
      )}
    </div>
  );
};

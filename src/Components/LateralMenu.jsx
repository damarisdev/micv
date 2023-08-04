import React from "react";
import "./../Styles/LateralMenu.css";
import { Icon } from "semantic-ui-react";

import ImageDamaris from "./../Images/avatar.jpg";
import IconMailBlue from "./../Images/Icons/mailBlue.png";
import IconLocation from "./../Images/Icons/location.png";
import IconCalendar from "./../Images/Icons/calendar.png";
import IconIn from "./../Images/Icons/inBlue.png";

export const LateralMenu = () => {
  return (
    <div className="card shadow lateralMenu">
      <div className="div-containerPhoto">
        <div className="containerPhoto">
          <img src={ImageDamaris} className="shadow" />
        </div>
      </div>

      <div className="containerInfo">
        <h1>Dámaris Barbosa</h1>
        <h2>Programadora experta en contabilidad</h2>

        <div className="containerSocialMedia">
          <div className="itemMedia">
            <a
              href="https://www.linkedin.com/in/damaris-barbosa-moreno-4707b3229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconIn} />
            </a>
          </div>
        </div>
        <div className="info">
          <div className="item">
            <div className="containerIcon shadow">
              <img src={IconMailBlue} className="imgMail" />
            </div>
            <div className="containerLabel">
              <p className="itemLabel">Correo</p>
              <p className="itemValue">dami181010@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="containerIcon shadow">
              <img src={IconLocation} className="imgMail" />
            </div>
            <div className="containerLabel">
              <p className="itemLabel">Ubicación</p>
              <p className="itemValue">México</p>
            </div>
          </div>
          <div className="item">
            <div className="containerIcon shadow">
              <img src={IconCalendar} className="imgMail" />
            </div>
            <div className="containerLabel">
              <p className="itemLabel">Año de Nacimiento</p>
              <p className="itemValue">1986</p>
            </div>
          </div>
        </div>

        <button className="btnDownload">
          Descarga mi CV
          <Icon className="btnIcon" name="download" />
        </button>
        <div className="containerPunto">
          <p className="textoPunto">
            Buscando un buen empleo Home Office | Híbrido
          </p>
          <div className="punto"></div>
        </div>
      </div>
    </div>
  );
};

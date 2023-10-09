import React from "react";
import "./../Styles/LateralMenu.css";
import { Icon } from "semantic-ui-react";

import ImageDamaris from "./../Images/avatar.jpg";
import IconMailBlue from "./../Images/Icons/mailBlue.png";
import IconLocation from "./../Images/Icons/location.png";
import IconCalendar from "./../Images/Icons/calendar.png";
import IconIn from "./../Images/Icons/inBlue.png";

export const LateralMenu = () => {
  const Descargando = () => {
    // URL del PDF que deseas descargar
    const pdfURL =
      "https://damarisprogramadoraycontadora.com/cv/Damaris%20CV.pdf";

    // Crea un enlace temporal para descargar el PDF
    const link = document.createElement("a");
    link.href = pdfURL;
    link.target = "_blank"; // Abre en una nueva ventana/tab
    link.download = "nombre-del-archivo.pdf"; // Nombre que se le dará al archivo descargado

    // Dispara el evento de clic en el enlace para iniciar la descarga
    link.click();

    // Limpia el enlace temporal
    link.remove();
  };

  return (
    <div className="card shadow lateralMenu">
      <div className="div-containerPhoto">
        <div className="containerPhoto">
          <img
            src={ImageDamaris}
            alt="Damaris Barbosa Programadora con conocimientos en contabilidad"
            className="shadow"
          />
        </div>
      </div>

      <div className="containerInfo">
        <h2>Dámaris Barbosa</h2>
        <h1>Programadora con conocimientos en contabilidad</h1>

        <div className="containerSocialMedia">
          <div className="itemMedia">
            <a
              href="https://www.linkedin.com/in/damaris-b-4707b3229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={IconIn}
                alt="Damaris Barbosa Programadora con conocimientos en contabilidad"
              />
            </a>
          </div>
        </div>
        <div className="info">
          <div className="item">
            <div className="containerIcon shadow">
              <img
                src={IconMailBlue}
                alt="Damaris Barbosa Programadora con conocimientos en contabilidad"
                className="imgMail"
              />
            </div>
            <div className="containerLabel">
              <p className="itemLabel">Correo</p>
              <p className="itemValue">damarisbarbosadev@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="containerIcon shadow">
              <img
                src={IconLocation}
                alt="Damaris Barbosa Programadora con conocimientos en contabilidad"
                className="imgMail"
              />
            </div>
            <div className="containerLabel">
              <p className="itemLabel">Ubicación</p>
              <p className="itemValue">México</p>
            </div>
          </div>
          <div className="item">
            <div className="containerIcon shadow">
              <img
                src={IconCalendar}
                alt="Damaris Barbosa Programadora con conocimientos en contabilidad"
                className="imgMail"
              />
            </div>
            <div className="containerLabel">
              <p className="itemLabel">Pasión por:</p>
              <p className="itemValue">La programación y la contabilidad </p>
            </div>
          </div>
        </div>

        <button className="btnDownload" onClick={() => Descargando()}>
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

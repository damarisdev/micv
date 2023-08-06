import React, { useEffect, useState } from "react";

import "./../Styles/Navigator.css";

import women from "./../Images/Icons/women.png";
import contact from "./../Images/Icons/contact.png";
import work from "./../Images/Icons/work.png";
import page from "./../Images/Icons/page.png";
import certificate from "./../Images/Icons/certificado.png";
import women_w from "./../Images/Icons/women_w.png";
import contact_w from "./../Images/Icons/contact_w.png";
import work_w from "./../Images/Icons/work_w.png";
import page_w from "./../Images/Icons/page_w.png";
import certificate_w from "./../Images/Icons/certificado_w.png";

export const Navigator = ({ pagina, setPagina }) => {
  console.log("La pagina es: ", pagina);

  const [imgWomen, setImgWomen] = useState(women_w);
  const [imgContact, setImgContact] = useState(contact);
  const [imgWork, setImgWork] = useState(work);
  const [imgPage, setImgPage] = useState(page);
  const [imgCertificate, setimgCertificate] = useState(certificate);

  const styleItem = "item";
  const styleItemPink = "item acentoPink";
  const Reestablece = () => {
    setImgContact(contact);
    setImgWomen(women);
    setImgPage(page);
    setImgWork(work);
    setimgCertificate(certificate);
  };

  useEffect(() => {
    // Código a ejecutar después de que el componente se haya montado
    Reestablece();
    switch (pagina) {
      case 1:
        setImgWomen(women_w);
        break;
      case 2:
        setImgPage(page_w);
        break;
      case 3:
        setImgWork(work_w);
        break;
      case 4:
        setImgContact(contact_w);
        break;
      case 5:
        setimgCertificate(certificate_w);
        break;
    }
    console.log("UseEffect, La pagina es: ", pagina);
  }, [pagina]);

  const ElijePagina = (valor) => {
    setPagina(valor);
  };

  return (
    <div className="ContainerTopMenu shadow">
      <a onClick={() => ElijePagina(1)}>
        <div className={pagina === 1 ? styleItemPink : styleItem}>
          <img
            src={imgWomen}
            alt="Damaris Barbosa Programadora experta en contabilidad"
          />
          <p className={pagina === 1 ? "c-white" : ""}>Dámaris</p>
        </div>
      </a>

      <a onClick={() => ElijePagina(2)}>
        <div className={pagina === 2 ? styleItemPink : styleItem}>
          <img
            src={imgPage}
            alt="Damaris Barbosa Programadora experta en contabilidad"
          />
          <p className={pagina === 2 ? "c-white" : ""}>Experiencia</p>
        </div>
      </a>
      <a onClick={() => ElijePagina(3)}>
        <div className={pagina === 3 ? styleItemPink : styleItem}>
          <img
            src={imgWork}
            alt="Damaris Barbosa Programadora experta en contabilidad"
          />
          <p className={pagina === 3 ? "c-white" : ""}>Portafolio</p>
        </div>
      </a>
      <a onClick={() => ElijePagina(5)}>
        <div className={pagina === 5 ? styleItemPink : styleItem}>
          <img
            src={imgCertificate}
            alt="Damaris Barbosa Programadora experta en contabilidad"
          />
          <p className={pagina === 5 ? "c-white" : ""}>Certificados</p>
        </div>
      </a>
      <a onClick={() => ElijePagina(4)}>
        <div className={pagina === 4 ? styleItemPink : styleItem}>
          <img
            src={imgContact}
            alt="Damaris Barbosa Programadora experta en contabilidad"
          />
          <p className={pagina === 4 ? "c-white" : ""}>Contacto</p>
        </div>
      </a>
    </div>
  );
};

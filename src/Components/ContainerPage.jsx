import React, { useState } from "react";
import { LateralMenu } from "./LateralMenu";
import { Navigator } from "./Navigator";
import { About } from "./About";

import "./../Styles/ContainerPage.css";
import { Resume } from "./Resume";
import { Works } from "./Works";
import { Contact } from "./Contact";
import { Certificate } from "./Certificate";

import menu from "./../Images/Icons/menu.png";
import { Footer } from "./Footer";

export const ContainerPage = () => {
  const [pagina, setPagina] = useState(1);
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <div>
      <div className="containerPage">
        <div className="divMenu">
          <img src={menu} onClick={() => setVisibleMenu(!visibleMenu)} />
        </div>
        {visibleMenu && (
          <div className="divLateralMenuMin">
            <LateralMenu />
          </div>
        )}

        <div className="divLateralMenuPrincipal">
          <LateralMenu />
        </div>
        <div className="containerData">
          <Navigator pagina={pagina} setPagina={setPagina} />
          <div className="containerHero shadow">
            {pagina == 1 ? (
              <About />
            ) : pagina == 2 ? (
              <Resume />
            ) : pagina == 3 ? (
              <Works />
            ) : pagina == 5 ? (
              <Certificate />
            ) : (
              <Contact />
            )}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

import React from "react";
import { CardPortafolio } from "./Elements/CardPortafolio";
import URL from "./../Images/Certificates/pagina.jpg";

import MisProyectos from "./../Utils/Proyectos.json";
import { Tittle } from "./Elements/Tittle";

export const Works = () => {
  return (
    <div className="containerWorks">
      <Tittle Titulo="Mis proyectos de github" SeparatorVisible={true} />
      <div className="containerCards">
        {MisProyectos.map((item) => (
          <CardPortafolio
            Descripcion={item.Descripcion}
            Titulo={item.Titulo}
            urlProyecto={item.urlProyecto}
            urlImagen={URL}
            Lenguajes={item.Lenguajes}
          />
        ))}
      </div>
    </div>
  );
};

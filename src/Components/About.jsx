import React, { useState } from "react";
import { Tittle } from "./Elements/Tittle";

import "./../Styles/About.css";
import { CardWork } from "./Elements/CardWork";

import imagen_aprender from "./../Images/Icons/aprender.png";
import imagen_automatizacion from "./../Images/Icons/automatizacion.png";
import imagen_creatividad from "./../Images/Icons/creatividad.png";
import imagen_desarrollo from "./../Images/Icons/desarrollo.png";
import imagen_equipo from "./../Images/Icons/equipo.png";
import imagen_reporte from "./../Images/Icons/reporte.png";
import imagen_contabilidad from "./../Images/Icons/contabilidad.png";
import imagen_tareas from "./../Images/Icons/tareas.png";

export const About = () => {
  const [mostrandoTexto, setMostrandoTexto] = useState(0);

  return (
    <div className="containerAbout">
      <Tittle Titulo="Acerca de mi" />
      {mostrandoTexto === 0 ? (
        <div>
          <div>
            <p>
              Con alrededor de 2 años de experiencia en programación,
              habilidades en SQL y conocimientos en marketing, he tenido el
              privilegio de aplicar mis capacidades en una startup dedicada al
              comercio en línea, a la vez que me gustaría resaltar una amplia
              experiencia en el campo de la contabilidad con mis poco más de 10
              años laborando en esta área.
            </p>
            <p>
              Durante mi tiempo en la startup como becaria, pude poner en
              práctica mis habilidades de programación, trabajando en los
              proyectos de la misma. Utilicé tecnologías como JavaScript,
              HTML/CSS, consumo de APIs, SQL, herramientas ETL (KNIME) para
              apoyar en el desarrollo de soluciones innovadoras que
              contribuyeron al crecimiento de la empresa. Además, con mi
              conocimiento de SQL me permitió manejar y analizar datos con
              eficacia, proporcionando{" "}
              <a
                onClick={() => {
                  setMostrandoTexto(1);
                }}
              >
                {" "}
                Ver más...
              </a>
            </p>
          </div>
          <div>
            <b>
              <p>
                Me emociona continuar mi trayectoria como programadora, y espero
                seguir ampliando mis conocimientos y experiencia. Creo
                firmemente que mi combinación de habilidades en programación,
                SQL, marketing y contabilidad me convierte en una candidata
                valiosa y versátil, lista para contribuir y prosperar en su
                empresa.
              </p>
              <p>
                ¡Espero con entusiasmo la oportunidad de ser parte de su equipo
                y continuar aportando mi pasión y dedicación en el mundo de la
                tecnología!
              </p>
            </b>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>
              Con alrededor de 2 años de experiencia en programación,
              habilidades en SQL y conocimientos en marketing, he tenido el
              privilegio de aplicar mis capacidades en una startup dedicada al
              comercio en línea, a la vez que me gustaría resaltar una amplia
              experiencia en el campo de la contabilidad con mis poco más de 10
              años laborando en esta área.
            </p>
            <p>
              Durante mi tiempo en la startup como becaria, pude poner en
              práctica mis habilidades de programación, trabajando en los
              proyectos de la misma. Utilicé tecnologías como JavaScript,
              HTML/CSS, consumo de APIs, SQL, herramientas ETL (KNIME) para
              apoyar en el desarrollo de soluciones innovadoras que
              contribuyeron al crecimiento de la empresa. Además, con mi
              conocimiento de SQL me permitió manejar y analizar datos con
              eficacia, proporcionando información valiosa en herramientas como
              Power BI o Tableau, que ayudaron a la toma de decisiones
              estratégicas.
            </p>
            <p>
              Al mismo tiempo, mi gran experiencia en contabilidad fue un
              recurso valioso para la startup, ya que contribuí en el análisis
              financiero, la gestión de cuentas por pagar y la elaboración de
              informes detallados para los inversionistas. Mi capacidad para
              aplicar principios contables sólidos fue importante para realizar
              los pagos, depurar cuentas, presentar impuestos y llevar a cabo
              cierres mensuales.
            </p>

            <p>
              Además de mi rol en programación y contabilidad, colaboré
              activamente en iniciativas de marketing, contribuyendo a la
              promoción de la marca y trabajando en la presencia en línea de la
              empresa.
            </p>

            <p>
              A lo largo de mi tiempo en la startup, demostré mi capacidad para
              adaptarme rápidamente, aprender nuevas habilidades y enfrentar
              desafíos con determinación. Mi pasión por la programación y la
              contabilidad, junto con mi entusiasmo por el aprendizaje continuo,
              me impulsan a seguir creciendo y mejorando en ambos campos.
            </p>
          </div>
          <div>
            <b>
              <p>
                Me emociona continuar mi trayectoria como programadora, y espero
                seguir ampliando mis conocimientos y experiencia. Creo
                firmemente que mi combinación de habilidades en programación,
                SQL, marketing y contabilidad me convierte en una candidata
                valiosa y versátil, lista para contribuir y prosperar en su
                empresa.
              </p>
              <p>
                ¡Espero con entusiasmo la oportunidad de ser parte de su equipo
                y continuar aportando mi pasión y dedicación en el mundo de la
                tecnología!
              </p>
            </b>
          </div>
        </div>
      )}

      <Tittle
        Titulo="¿Cómo puedo ayudar a tu equipo?"
        SeparatorVisible={false}
      />

      <div className="containerCardWork">
        <CardWork
          rutaImagen={imagen_desarrollo}
          Titulo="Desarrollo de aplicaciones web"
          Texto="Utilizando tecnologías como JavaScript, HTML y CSS para crear interfaces interactivas y atractivas."
          Color="bgColor_1"
        />
        <CardWork
          rutaImagen={imagen_reporte}
          Titulo="Análisis de datos y manejo de bases de datos"
          Texto="Utilizando SQL para acceder, manipular y gestionar la información de manera eficiente."
          Color="bgColor_2"
        />
        <CardWork
          rutaImagen={imagen_creatividad}
          Titulo="Soluciones Creativas y Prácticas"
          Texto="Aportaré soluciones innovadoras y prácticas para enfrentar desafíos empresariales, aprovechando mi habilidad para pensar de manera creativa y analítica."
          Color="bgColor_3"
        />
        <CardWork
          rutaImagen={imagen_equipo}
          Titulo="Colaboración y Comunicación"
          Texto="Mi experiencia trabajando en equipo y mi capacidad para comunicar de manera efectiva serán un recurso para fomentar un ambiente colaborativo y productivo."
          Color="bgColor_4"
        />
        <CardWork
          rutaImagen={imagen_aprender}
          Titulo="Mejora Continua"
          Texto="Me comprometeré a mantenerme actualizada en las últimas tendencias y tecnologías, buscando constantemente oportunidades para mejorar procesos y resultados."
          Color="bgColor_5"
        />
        <CardWork
          rutaImagen={imagen_automatizacion}
          Titulo="Automatización con herramientas ETL"
          Texto="Buscar los procesos internos en los que se gastan muchas horas para automatizarlos de manera rapida con KNIME."
          Color="bgColor_6"
        />
        <CardWork
          rutaImagen={imagen_contabilidad}
          Titulo="Conocimiento en Contabilidad"
          Texto="Puedo ayudar con aportaciones cuando se deban tratar temas o procesos contables. Puedo guiar al equipo en estos casos."
          Color="bgColor_1"
        />
        <CardWork
          rutaImagen={imagen_tareas}
          Titulo="Apoyo en metodologías ágiles"
          Texto="Con mi experiencia podría ayudar a gestionar los proyectos del equipo mediante DEVOPS / ASSANA y ayudar con las tareas."
          Color="bgColor_2"
        />
      </div>
    </div>
  );
};

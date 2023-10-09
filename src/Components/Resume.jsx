import React from "react";
import { Tittle } from "./Elements/Tittle";
import { CardExperience } from "./Elements/CardExperience";

import "./../Styles/Resume.css";

import ImageFroebel from "./../Images/Companies/froebel_v.png";
import ImagePLM from "./../Images/Companies/plm_v.png";
import ImageFair from "./../Images/Companies/fairplay_v.png";
import ImagePanam from "./../Images/Companies/panam_v.png";
import ImageEnacrgo from "./../Images/Companies/tuEncargo.png";
import { CardKnowledge } from "./Elements/CardKnowledge";

export const Resume = () => {
  return (
    <div className="containerResume">
      <Tittle Titulo="Mi Experiencia" />

      <CardExperience
        Titulo="Programadora Jr *"
        Color="bgColor_4"
        Fecha="Enero 2020 - Marzo 2022"
        Empresa="Tu Encargo (StartUp)"
        rutaImagen={ImageEnacrgo}
        Texto="Resalto esta experiencia, ya que estuve involucrada no solo en la programación, sino en cada una de las áreas que requiere un Startup. Durante mi experiencia en 'Tu Encargo', una aplicación destinada a ayudar a pequeños negocios a establecer su presencia en línea, tuve la oportunidad de colaborar con un programador emprendedor que estaba construyendo esta plataforma innovadora. A pesar de tener un conocimiento básico en tecnologías como React, React Native y Node.js, decidí ayudar en este proyecto emocionante y estuve dispuesta a aprender y ayudar en lo que fuera necesario."
        TituloAuxiliar2="Desarrollo en React, React Native y Node.js:"
        Auxiliar2="A pesar de mi limitada experiencia en Node.js y React Native, me comprometí a ayudar en el desarrollo de la aplicación. Trabajé junto al programador líder en tareas como la resolución de problemas, la identificación de errores y la implementación de nuevas características. A medida que avanzaba el proyecto, mi comprensión y habilidades en estas tecnologías mejoraron un poco, lo que me permitió contribuir cada vez más agilmente."
        TituloAuxiliar3="Colaboración con Métricas y Marketing:"
        Auxiliar3="Quise que rol en 'Tu Encargo' no se limitara solo al desarrollo técnico. También estuve involucrada en revisar las métricas de crecimiento, el compromiso del usuario y el marketing. Aunque mi conocimiento en estas áreas no es mi fuerte, tuve la oportunidad de aprender y adquirir nociones valiosas. Participé en la identificación de áreas de mejora y en la implementación de estrategias para aumentar la visibilidad y la participación de los usuarios."
        TituloAuxiliar4="Desafíos Durante la Pandemia:"
        Auxiliar4="Uno de los mayores desafíos que enfrentamos fue la pandemia, que impactó fuertemente en la aplicación y sus usuarios. La necesidad de adaptarse rápidamente a un entorno económico en constante cambio fue un desafío constante. Siempre estábamos en modo de solución de problemas (Todo urgía), respondiendo a desafíos urgentes y asegurando que la plataforma pudiera seguir brindando un servicio valioso a los negocios locales y los usuarios."
      />

      <CardExperience
        Titulo="Desarrollador Fullstack"
        Color="bgColor_2"
        Fecha="Julio 2022 - Mayo 2023"
        Empresa="Panamericano"
        rutaImagen={ImagePanam}
        Texto="Durante mi tiempo en Panamericano, tuve la oportunidad de desempeñar un papel importante en la automatización de procesos que habían sido, hasta ese momento, principalmente procesos muy manuales. Mi enfoque estaba en mejorar la eficiencia operativa de los departamentos, y para lograrlo, me sumergí en varias tareas nuevas tecnologías."
        TituloAuxiliar2="Automatización de Procesos con KNIME:"
        Auxiliar2="Uno de mis logros más destacados durante mi tiempo en Panamericano fue la implementación de soluciones de automatización utilizando la herramienta KNIME. Esta herramienta poderosa y versátil me permitió diseñar flujos de trabajo personalizados que transformaron procesos previamente manuales en flujos de trabajo automatizados y eficientes. Desde la gestión de datos hasta la generación de informes, KNIME se convirtió en una parte integral de mi conjunto de herramientas para impulsar la eficiencia operativa."
        TituloAuxiliar3="Soporte a Usuarios y Consultas a la Base de Datos:"
        Auxiliar3="Otra parte importante de mi rol implicaba el soporte a los usuarios de la organización. Los usuarios generaban tickets y solicitudes que requerían acceso a datos específicos almacenados en la base de datos. Como parte de mi responsabilidad, llevé a cabo consultas en la base de datos para recuperar la información necesaria y proporcionar reportes a las solicitudes de los usuarios. Esta interacción con los usuarios me permitió comprender sus dolores y adaptar mis soluciones de manera efectiva."
        TituloAuxiliar4="Trabajo con el Sistema Windows Forms:"
        Auxiliar4="Panamericano utilizaba un sistema basado en Windows Forms para diversas operaciones y procesos internos. Durante mi tiempo en la empresa, tuve la oportunidad de trabajar de cerca con este sistema, lo que me permitió contribuir al desarrollo, la mejora y la personalización de las aplicaciones según las necesidades específicas del negocio. Mi experiencia en el trabajo con Windows Forms amplió mis habilidades en el desarrollo de aplicaciones de escritorio y me permitió brindar soluciones eficaces."
        TituloAuxiliar5="Colaboración con el Equipo de Contabilidad y Uso de Tableau:"
        Auxiliar5="Colaboré estrechamente con el equipo de contabilidad, entendiendo sus requisitos y necesidades de informes financieros y de rendimiento. Aproveché mis habilidades en la generación de informes y visualizaciones de datos con Tableau para proporcionar soluciones integrales que permitieran a los equipos de contabilidad acceder y analizar datos críticos de manera más eficiente. Esta colaboración resultó en un flujo de trabajo más fluido y la entrega de informes financieros más precisos y útiles."
      />

      <CardExperience
        Titulo="Programador Web"
        Color="bgColor_3"
        Fecha="Enero 2022 - Abril 2022"
        Empresa="Fair Play (StartUp)"
        rutaImagen={ImageFair}
        Texto="Trabajar en la startup 'Fair Play' durante 3 meses fue una experiencia verdaderamente enriquecedora y emocionante. Mi pasión por la programación se vio reforzada por el hecho de su cultura, la tecnología principal que utilizaba la empresa era REACT y eso me gustaba, ya que este Framework me agrada mucho. Durante mi breve pero intensa estadía, pude trabajar con fantasticas personas que marcaron una diferencia real. Aquí hay una descripción de mi corto tiempo en 'Fair Play' y algunos de los módulos en los que tuve la oportunidad de trabajar:"
        TituloAuxiliar2="Experiencia en React:"
        Auxiliar2="Desde el primer día, me sentí como en casa trabajando con React. Mi experiencia previa en esta tecnología me permitió sumergirme directamente en el desarrollo de proyectos emocionantes. Me emocionaba aplicar y expandir mis conocimientos en React para crear soluciones que ayudarían a impulsar el éxito de la empresa."
        TituloAuxiliar3="Módulo de Gestión de Usuarios:"
        Auxiliar3="Uno de los módulos en los que trabajé fue el 'Módulo de Gestión de Usuarios'. Este componente era esencial para la aplicación, ya que permitía a los usuarios registrarse, iniciar sesión y gestionar sus perfiles. Contribuí al desarrollo de características clave, como la autenticación de usuarios y la gestión de roles. También colaboré con el equipo de diseño para crear una interfaz de usuario intuitiva y atractiva."
        TituloAuxiliar4="Módulo de Análisis de Datos en Tiempo Real:"
        Auxiliar4="Otra tarea en la que tuve la oportunidad de participar fue el 'Módulo de Análisis de Datos en Tiempo Real'. Este módulo permitía a los usuarios obtener información en tiempo real sobre el rendimiento de la aplicación y los patrones de uso. Mi contribución se centró en la visualización de datos, utilizando bibliotecas de gráficos de React para presentar información de manera efectiva. "
        TituloAuxiliar5="Cultura de Colaboración:"
        Auxiliar5="Durante mi tiempo en 'Fair Play', también experimenté una cultura de colaboración excepcional. Colaboré estrechamente con colegas de diferentes disciplinas, incluyendo diseñadores, desarrolladores front-end y back-end. Esta colaboración cruzada no solo me permitió aprender y crecer, sino que también dio como resultado soluciones más sólidas y cohesivas."
      />

      <CardExperience
        Titulo="Programador Jr - (Front / Back)"
        Color="bgColor_4"
        Fecha="Marzo 2015 - Diciembre 2021"
        Empresa="PLM México S.A. DE CV."
        rutaImagen={ImagePLM}
        Texto="Durante estos años, he experimentado un crecimiento significativo en mi carrera como programadora. He tenido la oportunidad de liderar pequeños proyectos, asumir más responsabilidades y compartir mi conocimiento con mi equipo. Además, he participado en capacitaciones y cursos para mantenerme actualizado en las últimas tecnologías y tendencias de desarrollo de software."
        Auxiliar="Comencé como un Programadora Jr, colaborando en el desarrollo de aplicaciones de escritorio utilizando la tecnología .NET y un poco de VB. A lo largo del tiempo, participe activamente en el ciclo completo de desarrollo de software, desde la conceptualización y diseño (dando ideas) hasta la implementación y la entrega exitosa del proyecto."
        TituloAuxiliar="Desarrollo de Aplicaciones de Escritorio: "
        TituloAuxiliar2="Manejo de SQL:"
        Auxiliar2="Mi experiencia en el manejo de bases de datos SQL se fortaleció considerablemente. Fui una de las responsables de la gestión y mantenimiento de bases de datos, la creación de consultas optimizadas."
        TituloAuxiliar3="Reporteo con Tableau: "
        Auxiliar3="A lo largo de mi carrera, he adquirido habilidades sólidas en la generación de informes y visualizaciones de datos, en estos años tuve la oportunidad de utilizar Tableau. Contribuí a la toma de decisiones informadas al proporcionar informes claros a los equipos de liderazgo y otros departamentos."
        TituloAuxiliar4="Integración de Sistemas y API REST:"
        Auxiliar4="Colaboré en la integración de funciones de terceros a nuestros sistemas y aplicaciones a través de API REST. Esto me permitió un mayor entendimiento en API's"
        TituloAuxiliar5="Resolución de Problemas y Colaboración en Equipo:"
        Auxiliar5="Como miembro del equipo de desarrollo, trabaje en estrecha colaboración con mis colegas para identificar y resolver problemas técnicos y de software. La comunicación efectiva y el trabajo en equipo han sido fundamentales y siempre mostré un gran trabajo en equipo."
      />

      <CardExperience
        Titulo="Becaria en Programación"
        Texto="Durante mi período como becaria, tuve la oportunidad de trabajar en la creación y mantenimiento de una página web para una escuela, además de gestionar sus publicaciones en redes sociales. Mi trabajo consistía en:"
        Color="bgColor_5"
        Fecha="Octubre 2009 - Febrero 2015"
        Empresa="GRUPO ESCOLAR FEDERICO FROEBEL S.C."
        rutaImagen={ImageFroebel}
        TituloAuxiliar2="Creación de la Página Web:"
        Auxiliar2="Diseñé y desarrollé una página web para la escuela desde cero. Utilicé tecnologías web modernas para crear un sitio atractivo y funcional que reflejara la identidad y los valores de la escuela. Esto incluyó la creación de páginas informativas, formularios de contacto y la integración de contenido relevante."
        TituloAuxiliar3="Mantenimiento Continuo: "
        Auxiliar3="Mantuve la página web actualizada, asegurándome de que la información, como eventos, noticias y anuncios, estuviera al día. Realicé regularmente actualizaciones técnicas y solucioné cualquier problema técnico que surgiera para garantizar un rendimiento óptimo del sitio."
        TituloAuxiliar4="Publicaciones en Redes Sociales:"
        Auxiliar4="Gestioné las cuentas de redes sociales de la escuela, creando y programando publicaciones para mantener a la comunidad informada sobre eventos, logros y noticias relevantes. Utilicé estrategias de contenido para aumentar la participación de los seguidores y la visibilidad en línea."
      />

      <div className="container-skills">
        <Tittle Titulo="Conocimientos" />
        <div className="container-knowledges">
          <div className="container-budget">
            <div>
              <h5>Mis SKILLS como Programadora</h5>
            </div>
            <div className="items">
              <CardKnowledge Nivel="0" Texto="HTML / CSS / JAVASCRIPT" />
              <CardKnowledge Nivel="0" Texto="REACT" />
              <CardKnowledge
                Nivel="0"
                Texto="Análisis de datos y manejo de bases de datos SQL"
              />
              <CardKnowledge
                Nivel="0"
                Texto="Uso de APIs para integrar funcionalidades y datos"
              />
              <CardKnowledge
                Nivel="0"
                Texto="Análisis de datos e interpretación con (PBI o Tableau)"
              />
              <CardKnowledge
                Nivel="0"
                Texto="Conocimientos en herramientas ETL como KNIME"
              />
              <CardKnowledge
                Nivel="0"
                Texto="Resolución de problemas y debugging de código"
              />
              <CardKnowledge
                Nivel="0"
                Texto="Metodologías ágiles SCRUM ( DEVOPS, ASSANA)"
              />
              <CardKnowledge
                Nivel="0"
                Texto="Mantenimiento de aplicaciones WEB"
              />
              <CardKnowledge Nivel="0" Texto="C# .NET" />

              <CardKnowledge
                Nivel="1"
                Texto="Diseño responsivo y adaptación móvil"
              />
              <CardKnowledge
                Nivel="1"
                Texto="Diseño de interfaces de usuario (UI)"
              />
              <CardKnowledge Nivel="1" Texto="Aprendizaje rápido" />
              <CardKnowledge
                Nivel="1"
                Texto="Manejo de Javascript (Alto nivel)"
              />
              <CardKnowledge Nivel="1" Texto="Uso de AJAX y Fetch API" />
              <CardKnowledge
                Nivel="1"
                Texto="Uso de control de versiones (Git)"
              />
              <CardKnowledge
                Nivel="1"
                Texto="Organización, Puntualidad y Responsabilidad"
              />
              <CardKnowledge Nivel="1" Texto="Manipulación del DOM" />
              <CardKnowledge
                Nivel="1"
                Texto="Colaboración y trabajo en equipo en proyectos de desarrollo"
              />
              <CardKnowledge
                Nivel="1"
                Texto="Actualización constante de conocimientos"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

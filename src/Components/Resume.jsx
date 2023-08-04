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
        Titulo="Programadora Jr"
        Color="bgColor_4"
        Fecha="Enero 2020 - Marzo 2022"
        Empresa="Tu Encargo (StartUp)"
        rutaImagen={ImageEnacrgo}
        Texto="Durante mi etapa en la startup, contribuí en la mejora de la página web, manipulé la BD SQL. Realicé análisis utilizando Tableau y Power BI. Participé en estrategias de marketing y gestioné publicaciones en redes sociales y automaticé algunos procesos con KNIME."
      />

      <CardExperience
        Titulo=" Analista de Contabilidad SR"
        Color="bgColor_2"
        Fecha="Julio 2022 - Mayo 2023"
        Empresa="Panamericano"
        rutaImagen={ImagePanam}
        Texto="Analizar información de facturación de diferentes lineas de negocio, así como, realizar una provisión de venta y entregar está información ya en detalle, con cada gerente de sucursal, además, analizar el incremento o disminución de venta por cliente, linea de negocio, estado y sucursal."
      />

      <CardExperience
        Titulo="Analista de Cuentas por Pagar y Facturación"
        Color="bgColor_3"
        Fecha="Enero 2022 - Abril 2022"
        Empresa="Fair Play (StartUp)"
        rutaImagen={ImageFair}
        Texto="Encargada en cuentas por pagar, subir la contabilidad de las facturas de los proveedores y acreedores, llevar la facturación de los clientes,conciliaciones bancarias, integraciones, analizar la información de los proveedores para encontrar mejores opciones."
      />

      <CardExperience
        Titulo=" Analista de Cuentas por Pagar y Facturación"
        Color="bgColor_4"
        Fecha="Marzo 2015 - Diciembre 2021"
        Empresa="PLM México S.A. DE CV."
        rutaImagen={ImagePLM}
        Texto="Responsable de la contabilidad, en el área de cuentas por pagar, realizando registros de ingresos, gastos, provisiones, realizando los pagos desde la orden de compra hasta el pago a realizar. Analizando toda la información para dar informes detallados a los inversionistas. Aplicando pagos, depurando cuentas, realizando flujo de efectivo, presupuestos anuales, determinación y presentación de impuestos, elaboración y revisión de cierres mensuales, elaboración de papeles de trabajo para auditoria,presentado la DIOT, al final realice nómina, tanto como el cálculo de nómina y finiquitos."
      />

      <CardExperience
        Titulo="Contador"
        Texto="Estaba a cargo de la “caja de pagos” donde llevaba el control de los ingresos de la escuela, llevando la contabilidad. Realizaba presentaciones electrónicas para dar a conocer a la escuela. Llevaba el control de la agenda de visitas y juntas de administrativos, así como la planeación de horarios al comienzo de cada año escolar."
        Color="bgColor_5"
        Fecha="Octubre 2009 - Febrero 2015"
        Empresa="GRUPO ESCOLAR FEDERICO FROEBEL S.C."
        rutaImagen={ImageFroebel}
      />

      <div className="container-skills">
        <Tittle Titulo="Conocimientos" />
        <div className="container-knowledges">
          <div className="container-budget">
            <div>
              <h5>Programador</h5>
            </div>
            <div className="items">
              <CardKnowledge Nivel="0" Texto="HTML / CSS / JAVASCRIPT" />
              <CardKnowledge Nivel="0" Texto="Animaciones con CSS" />
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
              <CardKnowledge
                Nivel="0"
                Texto="Actualización constante de conocimientos"
              />
            </div>
          </div>
          <div className="container-acento">
            <div className="acento"></div>
          </div>
          <div className="container-budget">
            <div>
              <h5>Contabilidad</h5>
            </div>
            <div className="items">
              <CardKnowledge
                Nivel="1"
                Texto="Análisis financiero y elaboración de informes "
              />
              <CardKnowledge
                Nivel="1"
                Texto="Gestión de cuentas por pagar y por cobrar"
              />
              <CardKnowledge Nivel="1" Texto="Conciliaciones bancarias" />
              <CardKnowledge Nivel="1" Texto="Declaraciones de impuestos" />
              <CardKnowledge
                Nivel="1"
                Texto="Elaboración y análisis de presupuestos anuales"
              />
              <CardKnowledge Nivel="1" Texto="Manejo de registros contables" />
              <CardKnowledge
                Nivel="1"
                Texto="Participación en cierres mensuales"
              />
              <CardKnowledge
                Nivel="1"
                Texto="Colaboración en auditorías internas "
              />
              <CardKnowledge
                Nivel="1"
                Texto="Conocimiento de nómina y finiquitos"
              />
              <CardKnowledge Nivel="1" Texto="(Contpaqi, Aspel COI, ODDO )" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Tittle } from "./Elements/Tittle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import emailjs from "@emailjs/browser";
import "./../Styles/Contact.css";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState({ mensaje: "", estatus: false });

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (error.estatus) {
      Swal.fire({
        title: error.mensaje,
        showDenyButton: false,
        showCancelButton: false,
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "#FA5252",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          setError({ mensaje: "", estatus: false });
        }
      });
    }
  }, [error]);

  const validarCorreo = (correo) => {
    // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
      setError({ mensaje: "Todos los campos son obligatorios", estatus: true });
      return;
    }

    if (!validarCorreo(correo)) {
      setError({
        mensaje: "Ingrese un correo electrónico válido",
        estatus: true,
      });
      return;
    }

    // Aquí puedes agregar el código para enviar el correo electrónico a patito@gmail.com
    enviacorreo();
    // Reiniciar los campos del formulario después de enviar el correo
    setNombre("");
    setCorreo("");
    setMensaje("");
    setError("");
  };

  const enviacorreo = () => {
    emailjs.init("E3caXb8pnFwEcpzyQ");
    emailjs
      .send("service_203pngm", "template_fyssj8i", {
        from_name: { nombre },
        to_name: "Damaris",
        message: `Hola Dámaris, \n \n   ${nombre} con  Correo: ${correo} te ha enviado el siguiente mensaje desde la página de tu portafolio:  \n\n Mensaje:\n \n${mensaje}`,
        reply_to: "bombosch7@gmail.com",
      })
      .then(
        (result) => {
          MySwal.fire({
            title: <strong>¡Muchas gracias!</strong>,
            html: <i>Pronto estare en contácto. Que tengas un lindo día.</i>,
            icon: "success",
          });
        },
        (error) => {
          setError({
            mensaje:
              "Oh, lo siento. Al parecer hubo algún error con el envió de tu mensaje. ¿Podrías contactarme desde mi perfil de LinkedIn? Muchas gracias y yo invito el cafe :)",
            estatus: true,
          });
        }
      );
  };

  return (
    <div>
      <Tittle Titulo="Contáctame" />
      <div className="container-contact">
        <form onSubmit={handleSubmit}>
          <h3>
            Siempre estoy dispuesta a discutir posibles propuestas de trabajo,
            estoy segura que puedo aportar mucho al equipo.
          </h3>
          <div>
            <label htmlFor="nombre">Nombre*</label>
            <input
              type="text"
              className="input-formulario"
              id="nombre"
              autoComplete="off"
              placeholder="Por favor escribe tu Nombre*"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="correo">Correo Electrónico*</label>
            <input
              type="text"
              id="correo"
              placeholder="Por favor escribe tu correo*"
              className="input-formulario"
              autoComplete="off"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje*</label>
            <textarea
              id="mensaje"
              placeholder="Por favor escribe tu mensaje"
              className="input-formulario"
              autoComplete="off"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          {error && <p>{error.mensaje}</p>}
          <button className="backgroundGradientPink shadow btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

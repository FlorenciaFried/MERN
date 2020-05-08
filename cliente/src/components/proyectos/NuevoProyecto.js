import React, { Fragment, useState, useContext } from "react";

const NuevoProyecto = () => {
  // State para Proyectos
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  // Extraer de Proyeecto
  const { nombre } = proyecto;

  // Al completar el formulario
  const onChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Al presionar submit en el formulario
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar el proyecto

    // Agregar al State

    // Reiniciar el formulario
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChange}
        />

        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;

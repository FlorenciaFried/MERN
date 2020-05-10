import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // Extrar proyectos de state inicial
  const { proyecto, eliminarProyecto } = useContext(proyectoContext);

  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasproyecto = [
    { nombre: "Elegir Platarforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Platarforma de Pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  // Elimino el proyecto
  const onClick = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar" onClick={onClick}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;

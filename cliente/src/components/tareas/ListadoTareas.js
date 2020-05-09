import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasproyecto = [
    { nombre: "Elegir Platarforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Platarforma de Pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda virtual</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;

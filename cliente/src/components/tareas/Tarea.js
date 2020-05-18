import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Extraer el proyecto activo
  const { proyecto } = useContext(proyectoContext);

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Obtener la funcion del context de tareas
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = useContext(tareaContext);

  // Funcion que se ejecuta cuando se presiona eliminar tarea
  const onClickEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  // Funcion que modifica el estado de las tareas
  const onClickEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }

    cambiarEstadoTarea(tarea);
  };

  // Dice cual es la tarea actual cuando el usuario pulsa editar
  const onClickEditar = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre} </p>

      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => onClickEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => onClickEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => onClickEditar(tarea)}
        >
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => onClickEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;

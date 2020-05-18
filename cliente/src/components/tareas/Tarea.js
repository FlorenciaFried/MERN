import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  // Extraer el proyecto activo
  const { proyecto } = useContext(proyectoContext);

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Obtener la funcion del context de tareas
  const { eliminarTarea, obtenerTareas } = useContext(tareaContext);

  // Funcion que se ejecuta cuando se presiona eliminar tarea
  const onClickEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre} </p>

      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
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

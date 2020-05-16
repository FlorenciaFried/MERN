import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {
  // Obtener el state del formulario
  const { proyectoActual } = useContext(proyectoContext);

  // Obtener la funcion del context de tareas
  const { obtenerTareas } = useContext(tareasContext);

  // Funcion para agregar al proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id); //Fijar un proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de click
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;

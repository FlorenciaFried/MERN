import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // State del formulario
  const [tarea, setTarea] = useState({
    nombre: "",
  });

  // Obtener la funcion del context de tareas
  const {
    tarea_seleccionada,
    error_tarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = useContext(tareaContext);

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tarea_seleccionada !== null) {
      setTarea(tarea_seleccionada);
    } else {
      setTarea({
        nombre: "",
      });
    }
  }, [tarea_seleccionada]);

  // Extraer el proyecto activo
  const { proyecto } = useContext(proyectoContext);

  // Extraer el nombre del proyecto
  const { nombre } = tarea;

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario manda la tarea
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Es edicion o nueva tarea?
    if (tarea_seleccionada === null) {
      // Agregar la nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      // Actualizar tarea existente
      actualizarTarea(tarea);

      // Elimina la tarea seleccionada del state
      limpiarTarea();
    }

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

    // Reiniciar el formulario
    setTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tarea_seleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>

      {error_tarea ? (
        <p className="mensaje error">El nombe de la trea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;

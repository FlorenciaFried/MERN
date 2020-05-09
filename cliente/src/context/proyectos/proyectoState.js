import React, { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  PROYECTO_ERROR,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
    mensaje: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {};

  // Obtener los proyectos
  const obtenerProyectos = async () => {};

  // Agregar nuevo proyecto
  const agregarProyecto = async (proyecto) => {};

  // Valida el formulario por errores
  const mostrarError = () => {};

  // Selecciona el Proyecto que el usuario dio click
  const proyectoActual = (proyectoId) => {};

  // Elimina un proyecto
  const eliminarProyecto = async (proyectoId) => {};

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;

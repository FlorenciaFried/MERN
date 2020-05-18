import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareas_proyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };

    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        error_tarea: false,
      };

    case VALIDAR_TAREA:
      return {
        ...state,
        error_tarea: true,
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };

    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas_proyecto.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };

    default:
      return state;
  }
};

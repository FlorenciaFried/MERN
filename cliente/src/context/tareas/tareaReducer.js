import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

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
        tareas: [...state.tareas, action.payload],
        error_tarea: false,
      };

    case VALIDAR_TAREA:
      return {
        ...state,
        error_tarea: true,
      };

    default:
      return state;
  }
};

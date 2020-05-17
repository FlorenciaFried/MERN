import { TAREAS_PROYECTO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareas_proyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };

    default:
      return state;
  }
};

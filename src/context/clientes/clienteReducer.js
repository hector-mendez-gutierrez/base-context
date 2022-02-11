import {
  ABRIR_MODAL,
  CERRAR_MODAL,
  REGISTRAR_CLIENTE,
  LISTAR_CLIENTE,
  ELIMINAR_CLIENTE,
} from "../../types";

export default function clienteReducer(state, action) {
  switch (action.type) {
    case ABRIR_MODAL:
      return {
        ...state,
        modal: true,
      };
    case CERRAR_MODAL:
      return {
        ...state,
        modal: false,
      };
    case REGISTRAR_CLIENTE:
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
        modal: false,
      };
    case LISTAR_CLIENTE:
      return {
        ...state,
        clientes: action.payload,
      };
    case ELIMINAR_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.filter(
          (cliente) => cliente.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

import { useReducer } from "react";
import clienteReducer from "./clienteReducer";
import clienteContext from "./clienteContext";

import {
  ABRIR_MODAL,
  CERRAR_MODAL,
  REGISTRAR_CLIENTE,
  LISTAR_CLIENTE,
  ELIMINAR_CLIENTE,
} from "../../types";

const ClienteState = ({ children }) => {
  const initialState = {
    modal: false,
    clientes: [],
  };

  const clientes = [
    { id: 1, email: "correo1@correo.cl" },
    { id: 2, email: "correo2@correo.cl" },
    { id: 3, email: "correo3@correo.cl" },
    { id: 4, email: "correo4@correo.cl" },
  ];

  const [state, dispatch] = useReducer(clienteReducer, initialState);

  //Modal
  const openModal = () => {
    dispatch({
      type: ABRIR_MODAL,
    });
  };
  const closeModal = () => {
    dispatch({
      type: CERRAR_MODAL,
    });
  };
  //Crud
  const registrarCliente = (cliente) => {
    dispatch({
      type: REGISTRAR_CLIENTE,
      payload: cliente,
    });
  };
  const listarCliente = () => {
    dispatch({
      type: LISTAR_CLIENTE,
      payload: clientes,
    });
  };
  const eliminarCliente = (clienteId) => {
    dispatch({
      type: ELIMINAR_CLIENTE,
      payload: clienteId,
    });
  };

  return (
    <clienteContext.Provider
      value={{
        modal: state.modal,
        clientes: state.clientes,
        openModal,
        closeModal,
        registrarCliente,
        listarCliente,
        eliminarCliente
      }}
    >
      {children}
    </clienteContext.Provider>
  );
};

export default ClienteState;

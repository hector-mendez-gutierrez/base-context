import React, { useContext } from "react";
import clienteContext from "../context/clientes/clienteContext";
import ModalApp from "../components/ModalApp";
import Listado from "../components/clientes/Listado";

export default function Home() {
  const context = useContext(clienteContext);

  const { modal, openModal } = context;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="mb-3">
            {modal ? <ModalApp /> : null}
            <button
              className="btn btn-success"
              onClick={() => {
                openModal();
              }}
            >
              Nuevo
            </button>
          </div>
          <div className="col-12">
            <Listado />
          </div>
        </div>
      </div>
    </>
  );
}

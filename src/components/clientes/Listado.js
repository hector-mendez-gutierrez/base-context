import React, { useContext, useEffect } from "react";
import clienteContext from "../../context/clientes/clienteContext";

export default function Listado() {
  const context = useContext(clienteContext);
  const { clientes, listarCliente, eliminarCliente } = context;

  useEffect(() => {
    listarCliente();
  }, []);

  return (
    <>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{cliente.email}</th>
              <th>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    eliminarCliente(cliente.id);
                  }}
                >
                  Eliminar
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

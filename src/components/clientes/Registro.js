import React, { useState, useContext } from "react";
import clienteContext from "../../context/clientes/clienteContext";

export default function Registro() {
  const context = useContext(clienteContext);
  const { registrarCliente } = context;

  //State
  const [cliente, guardarCliente] = useState({
    emai: "",
    password: "",
  });

  const handlerChange = (e) => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    //Validar Campos
    //Guardar info en Base datos
    registrarCliente(cliente);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                name="email"
                onChange={handlerChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={handlerChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg col-12 ">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

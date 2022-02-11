import React from "react";
import Login from "./views/Login";
import Home from "./views/Home";

import ClienteState from "./context/clientes/clienteState";

export default function App() {
  return (
    <ClienteState>
      <Home />
    </ClienteState>
  );
}

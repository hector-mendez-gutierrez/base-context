import React, { useContext } from "react";
import clienteContext from "../context/clientes/clienteContext";
import { Modal } from "react-bootstrap";

import Registro from "../components/clientes/Registro";

export default function ModalApp() {
  const context = useContext(clienteContext);
  const { modal, closeModal } = context;
  const handleClose = () => {
    closeModal(false);
  };
  return (
    <Modal show={modal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Registro />
      </Modal.Body>
    </Modal>
  );
}

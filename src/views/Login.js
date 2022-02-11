import React from "react";

export default function Login() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h3>Login</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg col-12 ">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

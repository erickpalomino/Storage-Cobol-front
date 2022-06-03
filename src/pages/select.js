import React from "react";
export const SelectPage = () => {
  return (
    <>
      <div class="input-group my-3 ">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre del Producto"
          aria-label="Nombre de Producto"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2">
            Buscar
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6" style={{backgroundColor:"white"}}>
          <div className="d-flex justify-content-center my-4">
              <h3>Identificador: </h3>
            </div>
            <table class="table table-hover table-bordered table-light">
              <tbody>
                <tr>
                  <th>Nombre</th>
                  <td>Ejemplo</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-6" style={{backgroundColor:"white"}}>
            <div className="d-flex justify-content-center my-4">
              <button className="btn btn-secondary">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </div>
            <div>
              <img className="img-fluid" src="https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import { InsertPage } from "./pages/insert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SelectPage } from "./pages/select";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">
        Storage
      </a>
    </nav>
    <div class="container" style={{ height: "100%" }}>
      <div class="row" style={{ height: "100%" }}>
        <div class="col-8 offset-2 d-flex flex-column my-5">
          <div class="d-flex justify-content-around">
            <a name="" id="" class="btn btn-primary" href="/find" role="button">
              Buscar Producto
            </a>
            <a name="" id="" class="btn btn-primary" href="/create" role="button">
              Insertar Producto
            </a>
          </div>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<SelectPage />} />
              <Route path="/create" element={<InsertPage />} />
              <Route path="/find" element={<SelectPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();

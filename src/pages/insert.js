import React, { useState } from "react";
import axios from "axios";

export const InsertPage = () => {
  const [imgFile, setimgFile] = useState(null);
  const [imgSrc, setimgSrc] = useState("");
  let [product, setproduct] = useState({});
  const upload_url = "https://api.cloudinary.com/v1_1/dziaapbmr/image/upload";
  const formData = new FormData();
  const handeImageChange = (e) => {
    setimgFile(e.target.files[0]);
    console.log("seleciconando imagen" + imgFile);
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    product={...product, [name]: value }
    setproduct(product);
    console.log(product);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage();
  };

  let  uploadImage=function upload(){
    formData.append("file", imgFile);
    formData.append("upload_preset", "cobolupload");
    const options = {
      body: formData,
    };
    axios
      .post(upload_url, formData, options)
      .then((result) => {
        setimgSrc(result.data.secure_url);
        product={...product,["img_url"]:result.data.secure_url};
        setproduct(product);
      })
      .catch((exc) => {
        console.log(exc);
      })
      .finally(()=>{
        axios.post("",product).then(console.log("Enviado"))
      });
    
  }


  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nombre del Producto</label>
          <input
            onChange={handleInputChange}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nombre del producto..."
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Stock del Producto</label>
          <input
            onChange={handleInputChange}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Stock del producto..."
            name="stock"
          />
        </div>
        <div class="input-group mb-3">
          <div class="custom-file">
            <input
              onChange={handeImageChange}
              type="file"
              class="custom-file-input"
              id="inputGroupFile02"
            />
            <label
              class="custom-file-label"
              for="inputGroupFile02"
              aria-describedby="inputGroupFileAddon02"
            >
              Escoger Imagen
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          class="btn btn-primary btn-lg btn-block"
        >
          Registrar Producto
        </button>
      </form>
      <img src={imgSrc} alt="Imagen" />
    </>
  );
};

import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { toast } from "react-toastify";


const AlumnosForm = (props) => {

  const initialStateValues = {
    nombre: "",
    apellido: "",
    nota1: "",
    nota2: "",
    nota3: "",
    nota4: "",
    nota5: "",
    //promedio: "",
  };




  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addOrEditAlumno(values); 
    setValues({ ...initialStateValues });
  };

  const getAlumnoById = async (id) => {
    const doc = await db.collection("Alumnos").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      //https://stackoverflow.com/questions/56059127/how-to-fix-this-error-function-collectionreference-doc
      if (props.currentId !== null && props.currentId !== undefined) {
        getAlumnoById(props.currentId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">contact_page</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese nombre"
          value={values.nombre}
          name="nombre"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">contact_page</i>
        </div>
        <input
          type="text"
          value={values.apellido}
          name="apellido"
          placeholder="Ingrese apellido"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="text"
          value={values.nota1}
          name="nota1"
          placeholder="Ingrese Nota1"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="text"
          value={values.nota2}
          name="nota2"
          placeholder="Ingrese Nota2"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="text"
          value={values.nota3}
          name="nota3"
          placeholder="Ingrese Nota3"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="text"
          value={values.nota4}
          name="nota4"
          placeholder="Ingrese Nota4"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">exposure</i>
        </div>
        <input
          type="text"
          value={values.nota5}
          name="nota5"
          placeholder="Ingrese Nota5"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Actualizar"}
      </button>
    </form>
    
  );
};

   
  
export default AlumnosForm;

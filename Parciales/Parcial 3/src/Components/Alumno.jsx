import React, { useEffect, useState,useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
import AlumnosForm from "./AlumnosForm";
import { Router, Link } from "@reach/router";

import { db } from "../firebase.js";
import { toast } from "react-toastify";

const Alumnos = () => {
  const user = useContext(UserContext);

  const { photoURL, displayName, email } = user;
  console.log(" Usuario ProfilePage : " + displayName + " - " + email);

  const signOut = () => {
    auth.signOut();  
  };
  const [Alumnos, setAlumnos] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getAlumnos = async () => {
    db.collection("Alumnos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAlumnos(docs);
    });
  };

  const onDeleteAlumnos = async (id) => {
    if (window.confirm("Seguro de eliminar Alumno?")) {
      await db.collection("Alumnos").doc(id).delete();
      toast("Se elimino un Alumno", {
        type: "error",
        //autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  const addOrEditAlumno = async (AlumnoObject) => {
    try {
      if (currentId === "") {
        await db.collection("Alumnos").doc().set(AlumnoObject); //aqui es 
        toast("Se agrego un Alumno", {
          type: "success",
        });
      } else {
        await db.collection("Alumnos").doc(currentId).update(AlumnoObject);
        toast("Se actualizo un Alumno", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

return (
  <>   
  <div>
  <nav className="navbar navbar-inverse">
        
     <div className="container-fluid">
       
       <div className="navbar-header">
         <a className="navbar-brand" href="/">Notas</a>
       </div>
       <ul className="nav navbar-nav">
         <li className="active"><Link to="">Inicio</Link></li>
         <button className="btn btn-danger" onClick={() => { signOut() }}>
           Cerrar Sesion</button>
       </ul>
     </div>
   </nav>
</div>
   <div className="container">
     <div className="row">
       <div className="col-md-12">
         
       <div className="col-md-4 p-2">
     <AlumnosForm {...{ addOrEditAlumno, currentId, Alumnos }} />
   </div>


    <div className="col-md-8 p-2">
      <div class="container">
        <h2>Lista Alumnos y Notas</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Nota 4</th>
              <th>Nota 5</th>
              <th>Promedio</th>
              <th>Aciones</th>
            </tr>
          </thead>
          <tbody>
            {Alumnos.map((Alumno) => (
              <tr key={Alumno.id}>
                <td>{Alumno.nombre}</td>
                <td>{Alumno.apellido}</td>
                <td>{Alumno.nota1}</td>
                <td>{Alumno.nota2}</td>
                <td>{Alumno.nota3}</td>
                <td>{Alumno.nota4}</td>
                <td>{Alumno.nota5}</td>
                <td>{Alumno.promedio}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => setCurrentId(Alumno.id)}>Editar</button>
                  &nbsp;
                  &nbsp;
                  <button className="btn btn-danger" onClick={() => onDeleteAlumnos(Alumno.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
    </div>
  </>
    
  );
};

   
  
export default Alumnos;

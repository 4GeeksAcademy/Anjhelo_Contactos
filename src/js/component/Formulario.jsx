import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Formulario = () => {

    const {store, actions} = useContext(Context);

    const ObtenerDatos = (event) =>
    {

        
        const nuevoContacto = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            address: event.target.address.value
        };

        actions.agregarContacto(nuevoContacto);
        console.log(nuevoContacto)
    }
    

    return(
    <div>
        <h1 className="text-center">Add a new contact</h1>
    <form className="row g-3" onSubmit={ObtenerDatos}>
        <div className="col-12">
            <label for="inputAddress" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="inputAddress" name="name" placeholder="Full Name" />
        </div>
        <div className="col-12">
            <label for="inputAddress2" className="form-label">Email</label>
            <input type="text" className="form-control" id="inputAddress2" name="email" placeholder="Enter email" />
        </div>
        <div className="col-12">
            <label for="inputAddress2" className="form-label">Phone</label>
            <input type="text" className="form-control" id="inputAddress2" name="phone" placeholder="Enter phone" />
        </div>
        <div className="col-12">
            <label for="inputAddress2" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress2" name="address" placeholder="Enter address" />
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary container-fluid">Save</button>
        <Link to="/">
            <a>or get back to contacts</a>
        </Link>
        </div>
    </form>
    </div>

    );
}
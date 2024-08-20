import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Contact } from "../component/Contact.jsx";


export const Home = () => {
	
	const {store, actions} = useContext(Context)
	const [eliminarContact, setEliminarContact] = useState(null);
	const [editarContact, setEditarContact] = useState(null);
	
	useEffect(() => {
		actions.obtenerInformacion();
	}, [])

	const eliminar = () => {
        console.log(eliminarContact); 
        actions.eliminarContacto(eliminarContact);
        setEliminarContact(null);
    };

	const editar = (event) => {
		console.log(editarContact, event);
		actions.editarContacto(editarContact, event);
		setEditarContact(null);
	}


	return (
        <div>
            {store.contacts.map((contacto) => (
                <Contact
                    name={contacto.name}
                    direccion={contacto.address}
                    numero={contacto.phone}
                    correo={contacto.email}
                    key={contacto.id}
                    id={contacto.id}
                    setEliminarContact={setEliminarContact} 
                    eliminar={eliminar}
					setEditarContact={setEditarContact}
					editar={editar}
                />
            ))}
        </div>
    );
};

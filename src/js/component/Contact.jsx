import React from "react";

export const Contact = (props) => {
    return (
        <div className="card mb-0" style={{maxwidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-3 d-flex justify-content-center align-items-center my-3">
            <img src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/06/samuel-l-jackson-star-wars-canva.jpg" className="img-fluid rounded-circle" alt="..." style={{ width: "200px", height: "200px", objectFit: "cover" }}/>
            </div>
            <div className="col-md-7">
            <div className="card-body">
                <h4 className="card-title my-3">{props.name}</h4>
                <p className="mb-2 text-secondary"><i class="fa-solid fa-location-dot me-2"></i> {props.direccion}</p>
                <p className="mb-2 text-secondary"><i class="fa-solid fa-phone me-2"></i> {props.numero}</p>
                <p className="mb-2 text-secondary"><i class="fa-solid fa-envelope me-2"></i> {props.correo}</p>
            </div>
            </div>
            <div className="col-md-2 d-flex justify-content-evenly p-4">

                    {/* Boton Editar */}

                    <i type="button" className="fa-solid fa-pencil" data-bs-toggle="modal" data-bs-target="#editarModal" onClick={() => props.setEditarContact(props.id)}></i>

                    <div className="modal fade" id="editarModal" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="editarModalLabel">Editar Contacto</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form className="row g-3" onSubmit={props.editar}>
                                        <div className="col-12">
                                            <label htmlFor="inputAddress" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="inputAddress" name="name" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputAddress2" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="inputAddress2" name="email" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputAddress2" className="form-label">Phone</label>
                                            <input type="text" className="form-control" id="inputAddress2" name="phone" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputAddress2" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="inputAddress2" name="address" />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary container-fluid">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Boton Eliminar */}
                    <i
                        type="button"
                        className="fa-solid fa-trash-can"
                        data-bs-toggle="modal"
                        data-bs-target="#eliminarModal"
                        onClick={() => props.setEliminarContact(props.id)}
                    ></i>
 
                    <div className="modal fade" id="eliminarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmación</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h3>¿Estás seguro?</h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Mejor no</button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={() => props.eliminar()} // Elimina el contacto cuando se confirma
                                    >
                                        Sii!!!!!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
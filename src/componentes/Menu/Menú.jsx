import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/FBconfig";

const Menú = ({ productos }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => [...prevCarrito, { ...producto, cantidad: 1 }]);
    };

    useEffect(() => {
        if (carrito.length > 0) {
            const ultimoProductoAgregado = carrito[carrito.length - 1];
            addDoc(collection(db, "carrito"), ultimoProductoAgregado)
                .then((docRef) => {
                    console.log("Producto agregado al carrito con ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error al agregar producto al carrito: ", error);
                });
        }
    }, [carrito]);

    return (
        <main>
            <section className="py-2 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12" id='titulo'>
                            <h1 className="display-4">MENÚ DE LA CAFETERÍA</h1>
                            <p className="lead text-muted">Contiene cafés y postres.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        {productos.map((producto, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4">
                                <div className="card mb-4">
                                    <img src={producto.imagen} alt={`Producto${index + 1}`} className="card-img-top"></img>
                                    <div className="card-body">
                                        <h6 className="card-text">{producto.nombre}</h6>
                                        <p>{producto.descripcion}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-outline-success" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                                            </div>
                                            <small className="text-muted">Precio: ${producto.precio.toFixed(2)}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Menú;

import React, { useState, useEffect } from "react";
import { consultarCarrito, borrar } from "../../firebase/crud";

const Carrito = () => {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [idProductoEliminar, setIdProductoEliminar] = useState("");

    useEffect(() => {
        const obtenerProductosCarrito = async () => {
            const productos = await consultarCarrito();
            setProductosCarrito(productos);
        };
        obtenerProductosCarrito();
    }, []);

    const limpiarCarrito = async () => {
        await borrarTodosProductos();
        setProductosCarrito([]);
    };

    const handleEliminarProducto = async () => {
        if (idProductoEliminar) {
            await borrar(idProductoEliminar);
            const productos = await consultarCarrito();
            setProductosCarrito(productos);
            setIdProductoEliminar("");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col py-5 text-center">
                    <h2>Carrito de compras</h2>
                    <p className="lead">Los productos seleccionados aparecerán aquí.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-3"></div>

                <div className="col-6 mb-3">
                    <h4 className="mb-3 d-flex justify-content-between align-items-center">
                        <span className="text-muted">Tu carrito</span>
                        <span className="badge bg-secondary rounded-pill">{productosCarrito.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {productosCarrito.map((producto, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                <div>
                                    <h6 className="my-0">{producto.nombre}</h6>
                                    <small className="text-muted">{producto.descripcion}</small>
                                </div>
                                <span className="text-muted">${producto.precio.toFixed(2)}</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={idProductoEliminar}
                                onChange={(e) => setIdProductoEliminar(e.target.value)}
                                placeholder="ID del producto a eliminar"
                            />
                            <button
                                className="btn btn-outline-danger"
                                type="button"
                                onClick={handleEliminarProducto}
                            >
                                Eliminar
                            </button>
                        </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>${productosCarrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2)}</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Carrito;

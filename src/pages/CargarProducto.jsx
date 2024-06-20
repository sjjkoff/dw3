import { useState } from 'react';

const CargarProducto = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        // if (nombre === "" || precio === "" || descripcion === "") {
        //     setError('Deberás completar todos los campos');
        //     return;
        // }
        event.preventDefault();
        
        const nuevoProducto = {
            name: nombre,
            precio: precio,
            descripcion: descripcion
        };

        fetch('https://66466b6551e227f23aaee287.mockapi.io/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        })
        .then(response => {
            if (response.ok) {
                console.log('Producto agregado correctamente');
                setNombre('');
                setPrecio('');
                setDescripcion('');
                setError('');
            } else {
                console.error('Error al agregar el producto');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
    };

    return (
        <div className="container">
            <h1 className="text-center mt-3">Cargar Productos</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nombre" 
                        value={nombre} 
                        onChange={(event) => setNombre(event.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="precio" 
                        value={precio} 
                        onChange={(event) => setPrecio(event.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción:</label>
                    <textarea 
                        className="form-control" 
                        id="descripcion" 
                        value={descripcion} 
                        onChange={(event) => setDescripcion(event.target.value)} 
                        required 
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary">Agregar Producto</button>
            </form>
        </div>
    );
};

export default CargarProducto;

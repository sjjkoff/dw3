import { useState, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../context/ProductosContext'
const Home = () => {
    const { productos, loading, handleDelete } = useContext(ProductosContext);
    // const [data, setData] = useState([])
    // const [loading,setLoading] = useState(true)
    // useEffect(()=>{
    //   fetch('https://66466b6551e227f23aaee287.mockapi.io/productos')
    //   .then(res => res.json())
    //   .then(res => {
    //     setData(res)
    //     setLoading(false)
    //   })
    //   .catch(err => console.log(err))
    // },[])
  
    // const handleDelete = (productId) => {
    //     fetch(`https://66466b6551e227f23aaee287.mockapi.io/productos/${productId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             console.log('Producto eliminado correctamente');
    //             // Aquí puedes hacer algo después de que el producto se haya eliminado
    
    //             // Después de eliminar el producto, actualizamos los datos
    //             fetch('https://66466b6551e227f23aaee287.mockapi.io/productos')
    //                 .then(res => res.json())
    //                 .then(res => setData(res))
    //                 .catch(error => console.error('Error al actualizar los datos:', error));
    //         } else {
    //             console.error('Error al eliminar el producto');
    //             // Aquí puedes manejar el error de alguna manera
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error en la solicitud:', error);
    //     });
    // };
    
    
    return (
        <div>
        {loading ? (
            <h1>Cargando...</h1>
        ) : (
            <>
                <h1 className="text-center mt-4">Listado de productos</h1>
                <table className="container table table-striped mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos?.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.name}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td className="d-flex gap-2">
                                    <Link
                                        to={`/editarProducto/${producto.id}`}
                                        className="btn btn-warning"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        className="btn btn-danger me-2"
                                        onClick={() => handleDelete(producto.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )}
    </div>
    )
}

export default Home

import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const ProductosContext = createContext();

// Creamos un proveedor para el contexto
export const ProductosProvider = ({ children }) => {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para cargar los productos
  const cargarProductos = () => {
    setLoading(true);
    fetch('https://66466b6551e227f23aaee287.mockapi.io/productos')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(error => console.error('Error al cargar productos:', error));
  };

  // Cargamos los productos al montar el componente
  useEffect(() => {
    cargarProductos();
  }, []);

  const handleDelete = (productId) => {
    fetch(`https://66466b6551e227f23aaee287.mockapi.io/productos/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Producto eliminado correctamente');
            // Aquí puedes hacer algo después de que el producto se haya eliminado

            // Después de eliminar el producto, actualizamos los datos
            fetch('https://66466b6551e227f23aaee287.mockapi.io/productos')
                .then(res => res.json())
                .then(res => setProductos(res))
                .catch(error => console.error('Error al actualizar los datos:', error));
        } else {
            console.error('Error al eliminar el producto');
            // Aquí puedes manejar el error de alguna manera
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
};

  return (
    // Proporcionamos el estado de los productos y la función para cargarlos a través del contexto
    <ProductosContext.Provider value={{ productos, loading, cargarProductos, handleDelete }}>
      {children}
    </ProductosContext.Provider>
  );
};

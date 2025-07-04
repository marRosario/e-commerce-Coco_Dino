// src/assets/requests.js
export const agregarProducto = async (producto) => {
   const url = "https://6812a70d129f6313e20f2c0a.mockapi.io/productos"; 
  try {
    console.log("enviando producto a la Api",producto)
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });

    if (!respuesta.ok) {
      throw new Error(`Error al agregar el producto: ${respuesta.statusText}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error("Error en agregarProducto:", error.message);
    throw error; // Lanza el error para que sea capturado por el catch del componente
  }
};

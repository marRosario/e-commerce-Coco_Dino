import React, {  useState } from 'react';
// Crear el contexto
import { CarritoContext } from './CarritoContexts';

// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const agregarAlCarrito = (producto) => {
        setProductosCarrito((prevCarrito)=>{

            const productoExistente=prevCarrito.find((p)=>p.id=== producto.id);
            if(productoExistente){
              return prevCarrito.map((p)=>p.id===producto.id? {...p, cantidad:p.cantidad +1}:p
          )
          }else{

          return[...prevCarrito,{...producto,cantidad:1}];
          }
          })
        };
     
const actualizarCantidad= (productoId, cantidad)=>{
setProductosCarrito((prevCarrito)=> prevCarrito.map((p)=> p.id===productoId ? {...p,cantidad:Math.max(p.cantidad + cantidad, 0)}:p
).filter((p)=>p.cantidad >0)
)

        }


function borrarProductoCarrito(id){
  setProductosCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
}

function vaciarCarrito(){
  setProductosCarrito([]);
}

const cantidadTotalCarrito=productosCarrito.reduce((total,producto)=>total+producto.cantidad,0)

   
    return (
        <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito,actualizarCantidad, borrarProductoCarrito, vaciarCarrito,cantidadTotalCarrito, }}>
            {children}
        </CarritoContext.Provider>
    );
}
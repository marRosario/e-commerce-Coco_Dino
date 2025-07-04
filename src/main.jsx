import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CarritoProvider } from './contexts/CarritoProvider.jsx'
import { AuthProvider } from './contexts/Datos.jsx'
import App from './App.jsx'
import { ProductosProvider } from './contexts/ProductosProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BusquedaProvider } from './contexts/BusquedaContext.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <BusquedaProvider>
   <AuthProvider> 
   <CarritoProvider>
    <ProductosProvider>
    <App />
    </ProductosProvider>
   </CarritoProvider>
 </AuthProvider>
  </BusquedaProvider>
  </HelmetProvider>
  </StrictMode>,
   
)



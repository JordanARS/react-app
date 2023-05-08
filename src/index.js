import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './componentes/Dashboard';
import Perfil from './componentes/Perfil';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/login',
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/contenido',
    element: <Dashboard />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: '/perfil',
    element: <Perfil />,
    errorElement: <h1>Error</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

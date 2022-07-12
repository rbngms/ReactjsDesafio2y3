import React from 'react';
import './styles.css';
import Button from '../Button';
import CartWidget from '../CartWidget';

export default function NavBar({temperatura, opcionAdicional, children}) {
    
   /// const {temperatura, opcionAdicional}=props;
    console.log(temperatura)
    //Props es un objeto que recibe ciertas propiedades

    console.log(children)
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">Calzado Deportivo</a></li>
            <li><a href="#contact">Ropa Deportiva</a></li>
            <li><a href="#about">Accesorios Deportivos</a></li>
            <li><a href={`#${opcionAdicional}`}>{opcionAdicional}</a></li>
            <CartWidget/>
        </ul>

    )
}
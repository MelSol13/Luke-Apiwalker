import React from 'react';
import notFound from '../img/notFound.jpeg'

const NotFound = () => {
    return (
        <div className='noEncontrado'>
            <p>Estos no son los droides que estás buscando...</p>
            <img className='w-100' alt="imagen Obi Wan Kenobi" src={notFound}/>
        </div>
    );
}

export default NotFound;
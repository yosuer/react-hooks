import React, { useState, useEffect } from 'react';

const Form = (props) => {
    const [ name, setName ] = useState('Carlo');
    const [ surname, setSurname ] = useState('Magno');

    useEffect(() => {
        console.log('name: ', name);
    }, [name]);

    useEffect(() => {
        console.log('surname: ', surname);
    }, [surname]);

    return (
        <div>
            <h1>{ props.title }</h1>
            <span>Nombre: </span>
            <input defaultValue={ name } onChange={ e => setName(e.target.value)} />
            <span>Apellido: </span>
            <input defaultValue={ surname } onChange={ e => setSurname(e.target.value)}/>
        </div>
    )
}

export default Form;

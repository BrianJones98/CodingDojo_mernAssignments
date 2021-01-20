import React from 'react';
import axios from 'axios';

const DeleteButton = props =>{
    const {id, successCallback} = props;

    const deleteProduct = event =>{
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                successCallback();
            })
    }

    return (
        <button onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton;
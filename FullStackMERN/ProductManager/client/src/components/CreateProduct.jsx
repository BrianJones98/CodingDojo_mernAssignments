import React from 'react';
import axios from 'axios';
import styles from './Style.module.css';

const CreateProduct = () =>{
    const handleSubmit = event =>{
        axios.post("http://localhost:8000/api/products/create", {
            title: event.target.title.value,
            price: event.target.price.value,
            description: event.target.desc.value
        }, [])
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    
    return(
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Please enter a product</h1>
                
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"/>
                </p>
                <p>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price"/>
                </p>
                <p>
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="desc" id="desc"/>
                </p>
                
                <button>Create</button>
            </form>
        </>
    );
}

export default CreateProduct;
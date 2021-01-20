import React, {useState, useEffect} from 'react';

//Dependency imports
import styles from './Style.module.css';
import axios from 'axios';
import {navigate} from '@reach/router';

const Update = props =>{
    const {id} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            }).catch(err => console.log(err));
    }, [id]);

    const submitUpdate = event =>{
        event.preventDefault();
        console.log(event.target.title.value);
        axios.put('http://localhost:8000/api/products/' + id, {
            title: event.target.title.value,
            price: event.target.price.value,
            description: event.target.desc.value
        })
            .then(() => navigate("/products/" + id))
            .catch(err => console.log(err));
    }
    
    return (
        <div className={styles.update}>
            <h1>Edit {title}</h1>
            <form onSubmit={submitUpdate}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        name="price" 
                        id="price" 
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="desc">Description</label>
                    <input 
                        type="text" 
                        name="desc" 
                        id="desc" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update;
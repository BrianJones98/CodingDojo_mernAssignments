import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import styles from './Style.module.css';
import axios from 'axios';

const ProductInfo = props => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {removeFromDOM} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                navigate("/");
            });
    }, [props]);

    const deleteProduct = id =>{
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(_res => {
                setLoaded(false);
                removeFromDOM(props.id);
                navigate("/");
            });
    }
    
    return (
        <div className={styles.ProductInfo}>
            {loaded ?  
            <>
                <h2>{product.product.title}</h2>
                <p>${product.product.price}</p>
                <p>{product.product.description}</p>
                <Link to={`/products/${props.id}/edit`}>Edit</Link>
                <button onClick={_e => deleteProduct(props.id)}>Delete</button>
            </>
            : 
            <h1>Loading...</h1>
            }
        </div>
    )
}

export default ProductInfo;
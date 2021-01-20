import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import styles from './Style.module.css';
import axios from 'axios';
import DeleteButton from './DeleteButton.jsx';

const ProductInfo = props => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {removeFromDOM} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>{
                setProduct(res.data.product);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
                navigate("/");
            });
    }, [props]);
    
    return (
        <div className={styles.ProductInfo}>
            {loaded ?  
            <>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <Link to={`/products/${props.id}/edit`}>Edit</Link>
                <DeleteButton id={product._id} successCallback={() => removeFromDOM(product._id)}/>
            </>
            : 
            <h1>Loading...</h1>
            }
        </div>
    )
}

export default ProductInfo;
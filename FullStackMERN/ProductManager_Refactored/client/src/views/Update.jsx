import React, {useState, useEffect} from 'react';

//Component imports
import Form from "../components/Form.jsx";

//Dependency imports
import axios from 'axios';
import {navigate} from '@reach/router';

const Update = props =>{
    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            }).catch(err => console.log(err));
    }, [id]);

    const updateProduct = product =>{
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => navigate("/products/" + id));
    }
    
    return (
        <div>
            {loaded && (
                <Form 
                    defaultTitle = {product.title}
                    defaultPrice = {product.price}
                    defaultDescription = {product.description}
                    onSubmitProp = {updateProduct}
                    formHead = {`Update ${product.title}`}
                />
            )}
        </div>
    )
}

export default Update;
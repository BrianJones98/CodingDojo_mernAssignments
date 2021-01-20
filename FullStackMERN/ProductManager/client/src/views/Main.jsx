import React, {useState, useEffect} from 'react';

//Component imports
import CreateProduct from "../components/CreateProduct.jsx";
import ProductList from "../components/ProductList.jsx";
import Default from "../components/Default.jsx";
import ProductInfo from "../components/ProductInfo.jsx";

//Dependency imports
import {Router} from '@reach/router';
import axios from 'axios';

const Main = props =>{
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [changed, setChanged] = useState(false)

    useEffect(() => {
    axios.get("http://localhost:8000/api/products")
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, [changed]);

    const removeFromDOM = id =>{
        setLoaded(false);
        setProducts(products.allProducts.filter(product => product._id !== id));
        setChanged(!changed);
    }

    return (
        <>
            <CreateProduct />
            <div className="ProductContainer">
                {
                loaded ? 
                <ProductList products={products}/> 
                : 
                <h1>Loading...</h1>
                }
                <Router className="Product">
                    <ProductInfo path="/products/:id" removeFromDOM={removeFromDOM}/>
                    <Default default/>
                </Router>
            </div>
        </>
    );
}

export default Main;
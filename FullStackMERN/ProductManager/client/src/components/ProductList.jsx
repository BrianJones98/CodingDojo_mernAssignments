import React from 'react';
import styles from './Style.module.css';

const ProductList = props =>{
    return(
        <div className={styles.ProductList}>
            {
                props.products.allProducts.map((product, index) =>{
                    return <a key={index} href={`/products/${product._id}`}>{product.title}</a>
                })
            }
        </div>
    );
}

export default ProductList;
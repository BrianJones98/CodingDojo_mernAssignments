import React from 'react';
import styles from './Style.module.css';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductList = props =>{
    const {products, removeFromDOM} = props;
    
    return(
        <div className={styles.ProductList}>
            {
                products.map((product, index) =>{
                    return (
                        <p key={index}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            |
                            <Link to={`/products/${product._id}/edit`}>Edit</Link>
                            |
                            <DeleteButton id={product._id} successCallback={() => removeFromDOM(product._id)}/>
                        </p>
                    )
                })
            }
        </div>
    );
}

export default ProductList;
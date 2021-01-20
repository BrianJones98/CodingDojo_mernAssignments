import React, {useState} from 'react';
import styles from './Style.module.css';

const Form = props => {
    const {defaultTitle, defaultPrice, defaultDescription, onSubmitProp, formHead} = props;
    const [title, setTitle] = useState(defaultTitle);
    const [price, setPrice] = useState(defaultPrice);
    const [description, setDescription] = useState(defaultDescription);

    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.form}>
            <h1>{formHead}</h1>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input 
                    type="number" 
                    name="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;
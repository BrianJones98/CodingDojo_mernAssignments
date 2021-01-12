import React, {useState} from 'react';
import './style.css';
import styles from './BoxGenerator.module.css';

const BoxGenerator = props => {
    const [box, setBox] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBoxArray = box.slice();
        newBoxArray.push({
            background: e.target.color.value,
            height: parseInt(e.target.height.value),
            width: parseInt(e.target.width.value)
        });

        setBox(newBoxArray);
        e.target.color.value = "";
        e.target.height.value = "";
        e.target.width.value = "";
    }
    
    return(
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Enter box color and dimensions</h2>
                <input type="text" name="color" id="color" placeholder="Color"/>
                <input type="number" name="height" id="height" placeholder="Height"/>
                <input type="number" name="width" id="width" placeholder="Width"/>
                <button>Add</button>
            </form>
            <div className={styles.boxContainer}>
                {
                    box.map( (current, index) =>
                        <div 
                            key={index} 
                            className={styles.box}
                            style={{...current}}
                        />
                    )
                }
            </div>
        </>
    )
}

export default BoxGenerator;
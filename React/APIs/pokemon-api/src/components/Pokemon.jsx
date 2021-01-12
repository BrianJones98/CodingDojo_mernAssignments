import React, {useState, useEffect} from 'react';
import styles from './Pokemon.module.css';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=808')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, [])
    
    return (
        <div className={styles.list}>
            <p>
                {
                    pokemon.map((current, index) => {
                        return (<span key={index}>{current.name} </span>)
                    })
                }
            </p>
        </div>
    )
}

export default Pokemon;
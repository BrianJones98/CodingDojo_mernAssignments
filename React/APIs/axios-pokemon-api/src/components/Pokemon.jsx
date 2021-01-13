import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Pokemon.module.css';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect( () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=808')
            .then(response => setPokemon(response.data.results))
    }, []);
    
    return (
        <div className={styles.list}>
            <p>
                {
                    pokemon.map( (current, index) => {
                        return <span key={index}>{current.name} </span>
                    })
                }
            </p>
        </div>
    )
}

export default Pokemon;
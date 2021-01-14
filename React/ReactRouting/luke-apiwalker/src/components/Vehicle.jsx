import {useState, useEffect} from 'react';
import axios from 'axios';
import kenobi from './obiwan.jpg';
import styles from './Result.module.css';

const Vehicle = props =>{
    const [vehicle, setVehicle] = useState(null);

    useEffect( () => {
        axios.get(`https://swapi.dev/api/vehicles/${props.id}`)
            .then(response => setVehicle(response.data))
            .catch(setVehicle(null))
    }, [props])
    
    return (
        <>
            {
                vehicle === null ?
                <div className={styles.result}>
                    <h1>These are not the droids you are looking for!</h1>
                    <img src={kenobi} alt="Obi-Wan"/>
                </div>
                :
                <div className={styles.result}>
                    <h1>{vehicle.name}</h1>
                    <ul>
                        <li><strong>Manufacturer:</strong> {vehicle.manufacturer}</li>
                        <li><strong>Cargo Capacity:</strong> {isNaN(vehicle.cargo_capacity) ? vehicle.cargo_capacity : Number(vehicle.cargo_capacity).toLocaleString()}</li>
                        <li><strong>Cost:</strong> {isNaN(vehicle.cost_in_credits) ? vehicle.cost_in_credits : Number(vehicle.cost_in_credits).toLocaleString() + " Credits"}</li>
                        <li><strong>Class:</strong> {vehicle.vehicle_class}</li>
                    </ul>
                </div>
            }
        </>
    );
}

export default Vehicle;
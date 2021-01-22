//Dependency imports
import React, {useEffect, useState} from 'react';
import {Router, Redirect, navigate} from '@reach/router';
import axios from 'axios';
import {Paper, Button} from '@material-ui/core';
import styles from './style.module.css';

//Component imports
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';

const ManagePlayers = props => {
    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                setPlayers(response.data);
            }).catch(error => console.log("There was an error:", error));
    }, []);

    const createPlayer = event => {
        event.preventDefault();
        const {name, preferredPosition} = event.target;
        const player = {
            name: name.value, 
            preferredPosition: preferredPosition.value
        }
        axios.post("http://localhost:8000/api/players/new", player)
            .then(res => {
                setPlayers([...players, res.data]);
                navigate("/players/list");
            }).catch(err => {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for(const key in errResponse){
                    errArr.push(errResponse[key].message);
                }
                setErrors(errArr);
            });
    }

    const deletePlayer = id => {
        axios.delete("http://localhost:8000/api/players/delete/" + id)
            .then(setPlayers(players.filter(player => player._id !== id)))
            .catch(err => console.log(err));
    }
    
    return (
        <Paper elevation={10} className={styles.viewWrapper}>
            <nav>
                <Button
                    variant="contained"
                    color="primary"
                    href="list"
                >Player List</Button>
                <Button
                    variant="contained"
                    color="primary"
                    href="new"
                >Add Player</Button>
            </nav>
            
            <Router>
                <Redirect noThrow from="*/" to="/players/list"/>
                <PlayerList path="/list" players={players} handleDelete={deletePlayer}/>
                <PlayerForm path="/new" handleSubmit={createPlayer} errors={errors}/>
            </Router>
        </Paper>
    );
}

export default ManagePlayers;
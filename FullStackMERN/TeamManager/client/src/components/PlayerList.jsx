//Dependency imports
import React from 'react';
import {Button, Card} from '@material-ui/core';
import styles from './style.module.css';

const PlayerList = props => {
    const {players, handleDelete} = props;

    return (
        <Card className={styles.tableCard}>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.preferredPosition}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => handleDelete(player._id)}
                                        >Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </Card>
    );
}

export default PlayerList;
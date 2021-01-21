//Dependency imports
import React from 'react';
import {Card, Button} from "@material-ui/core";
import styles from "./style.module.css";

const AuthorList = props => {
    const {authors, deleteHandler} = props;

    return (
        <Card elevation={5} className={styles.tableCard}>
            <h3>We have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            href={`/edit/${author._id}`}
                                        >Edit</Button>
                                        <Button 
                                            onClick={() => deleteHandler(author._id)}
                                            variant="contained"
                                            color="secondary"
                                        >Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </Card>
    )
}

export default AuthorList;
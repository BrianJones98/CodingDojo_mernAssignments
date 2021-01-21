//Dependency imports
import { 
    Card, FormControl, InputLabel, 
    Input, FormHelperText, Button 
} from '@material-ui/core';
import React, {useState} from 'react';
import styles from './style.module.css';

const AuthorForm = props => {
    const {handleSubmit, initialName, headerText, errors} = props;
    const [name, setName] = useState(initialName);
    
    return (
        <Card elevation={5} className={styles.formCard}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h3>{headerText}</h3>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        id="name"
                        aria-describedby="helper-text"
                    />
                    <FormHelperText id="helper-text">Minimum of 3 characters</FormHelperText>
                </FormControl>

                <div className={styles.buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Submit</Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/"
                    >Cancel</Button>
                </div>
            </form>
        </Card>
    )
}

export default AuthorForm;
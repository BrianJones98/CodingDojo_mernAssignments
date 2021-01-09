import React from 'react';
import styles from './HookForm.module.css';

const HookForm = props => {
    const {inputs, setInputs} = props;
    
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    const createUser = e =>{
        e.preventDefault();
        console.log("User created!");
    }

    return (
        <>
            <form onSubmit={createUser} className={styles.form}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="firstName">First Name:</label></td>
                            <td><input type="text" name="firstName" id="firstName" onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lastName">Last Name:</label></td>
                            <td><input type="text" name="lastName" id="lastName" onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email Address:</label></td>
                            <td><input type="email" name="email" id="email" onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password:</label></td>
                            <td><input type="password" name="password" id="password" onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="passConfirmation">Confirm Password:</label></td>
                            <td><input type="password" name="passConfirmation" id="passConfirmation" onChange={onChange}/></td>
                        </tr>
                    </tbody>
                </table>
                
                <button>Submit</button>
            </form>
            <br/>
            
        </>
    );
}

export default HookForm;
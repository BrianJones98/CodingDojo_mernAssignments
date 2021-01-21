//Dependency imports
import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Component imports
import AuthorForm from './AuthorForm.jsx';

const EditForm = props => {
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);

    const {id, errors, handleUpdate} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                setName(response.data.name);
                setLoaded(true);
            })
            .catch(err => console.log("There was an error:", err));
    }, [id]);

    const updateHandler = event =>{
        event.preventDefault();
        const author = event.target.name.value;
        console.log(author);
        handleUpdate(id, author);
    }
    
    return (
        <>
            {loaded && (
            <AuthorForm
                handleSubmit={updateHandler}
                initialName={name}
                headerText={`Edit ${name}`}
                errors={errors}
            />
            )}
        </>
    );
}

export default EditForm;
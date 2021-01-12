import React, {useState} from 'react';
import styles from './TodoList.module.css';

const TodoList = props => {
    const [tasks, setTasks] = useState([]);

    const addItem = (event) => { 
        event.preventDefault();
        const temp = tasks.slice();
        temp.push({
            description: event.target.item.value,
            isChecked: false
        });

        setTasks(temp);
        event.target.item.value = ""
    }

    const changeCheck = (index) => {
        const temp = tasks.slice();
        temp[index].isChecked = !temp[index].isChecked;
        setTasks(temp);
    }

    const handleDelete = (index) => {
        const temp = tasks.slice();
        temp.splice(index, 1);
        setTasks(temp);
    }
    
    return (
        <>
            <form onSubmit={addItem} className={styles.form}>
                <input type="text" name="item" id="item" placeholder="Enter a task"/>
                <button>Add</button>
            </form>
            <div className={styles.list}>
                <h1>Your Todo List</h1>
                <table cellSpacing="0">
                    <tbody>
                        {
                            tasks.map((task, index) =>
                                <tr key={index} className={task.isChecked ? styles.checked : styles.unchecked}>
                                    <td><input type="checkbox" checked={task.isChecked} onChange={() => changeCheck(index)}/></td>
                                    <td>{task.description}</td>
                                    <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TodoList;
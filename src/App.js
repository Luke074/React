import "./App.css"
import { useState, Fragment } from "react";

function ToDoList() {

    const [taskList, setTaskList] = useState([]);

    const handleInsert = (description) => {
        const newID = taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1;

        const task = {
            id: newID,
            description,
        };

        setTaskList([...taskList, task]);
    };

    const [inputTask, setInputTask] = useState({ id: "", description: "" });

    const handleRemove = (id) => {
        setTaskList(taskList.filter(task => task.id !== id));
    };

    const handleEdit = (task) => {
        setInputTask(task);
    };

    const handleSaveEdit = () => {
        setTaskList(taskList.map((task) => (task.id === inputTask.id ? inputTask : task)))
    };

    return (
        <div className="container">
            <Form
                insert={handleInsert}
                newTask={inputTask}
                setNewTask={setInputTask}
                edit={handleSaveEdit}
            />
            <hr />
            <List
                list={taskList}
                remove={handleRemove}
                edit={handleEdit}
            />
        </div>
    )
}
function Form({ insert, newTask, setNewTask, edit }) {

    const handleNewTask = (e) => {
        setNewTask({ ...newTask, description: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTask.id === "") {
            insert(newTask.description);
        } else {
            edit(edit);
        }


        setNewTask({ id: "", description: "" });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={newTask.description} onChange={handleNewTask} required />
            <button>OK!</button>
        </form>
    )
}
function List({ list, remove, edit }) {

    return (
        <section>
            {list.length === 0 && "Você não tem tarefas"}
            {list.map((item, index) => (
                <Item
                    key={item.id}
                    task={item}
                    index={index}
                    remove={remove}
                    edit={edit}
                />
            ))}
        </section>
    )
}
function Item({ task, remove, edit, index }) {

    return (
        <article className="item">
            <p>
                {index + 1} - {task.description}
            </p>
            <span onClick={() => remove(task.id)}>&times;</span>
            <span onClick={() => edit(task)}>&#9998;</span>
        </article>
    )
}

function App() {
    return (
        <>
            <ToDoList />
        </>
    );
}

export default App;
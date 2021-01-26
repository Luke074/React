import "./App.css"
import { useState, Fragment } from "react";

function ToDoList() {

    const [taskList, setTaskList] = useState([
        {
            id: 1,
            description: "Estudar Inlgês",
        },
        {
            id: 2,
            description: "Jogar LoL",
        },
    ]);

    return (
        <div className="container">
            <Form />
            <hr />
            <List list={taskList} />
        </div>
    )
}
function Form() {

    return (
        <form className="form">
            <input type="text" />
            <button>OK!</button>
        </form>
    )
}
function List({ list }) {

    return (
        <section>
            {list.map((item) => (
                <Item task={item} />
            ))}
        </section>
    )
}
function Item({task}) {

    return (
        <article className="item">
            <p>
                {task.id} - {task.description}
            </p>
            <span>&times;</span>
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
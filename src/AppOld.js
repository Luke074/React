import "./App.css"
import { useState, Fragment } from "react";

function Header(props) {
    return (
        <header className="header">
            <p>Hello World Sennaier {props.name}</p>
            <button onClick={props.click}>Trocar Usuário</button>
            {props.children}
            <hr />
        </header>
    );
}

function Form() {

    const [nome, setNome] = useState("");

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Digite seu nome" 
                value={nome}
                onChange={handleNome} 
                maxLength="20"
            />
            <p>{nome}</p>
        </>
    )
}

function App() {

    const [user, setUser] = useState("Fulano");

    const handleClick = () => {
        if (user === "Fulano")
            setUser("Ciclano");
        else
            setUser("Fulano");
    }

    return (
        <div>
            <Header name="Fulano de tal" click={handleClick}>
                <p>Eu sou filho do Header</p>
                <p>Eu sou outro filho do Header</p>
                <p>Eu sou mais outro filho do Header</p>
            </Header>
            <p>My React app</p>
            <p>Nome do Usuário: {user}</p>

            <Form />
        </div>
    );
}

export default App;
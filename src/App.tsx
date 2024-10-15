import { useState } from 'react';
import Todo from './components/Todo';
import './App.css';
import AddTodo from "./components/AddTodo.tsx";
import {Container} from "@mui/material";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (name: string, text: string) => {
        setTodos([...todos, { name, text, status: false }]);
    };

    const deleteTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <AddTodo onAdd={addTodo} />

            {todos.map((todo, index) => (
                <Todo key={index} name={todo.name} text={todo.text} status={todo.status} onDelete={() => deleteTodo(index)}/>
            ))}
        </Container>
    );
}

export default App;
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddTodoProps {
    onAdd: (name: string, text: string) => void;
}

function AddTodo({ onAdd }: AddTodoProps) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && text) {
            onAdd(name, text);
            setName('');
            setText('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: '20px' }}>
            <TextField
                label="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Описание"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                Добавить таск
            </Button>
        </Box>
    );
}

export default AddTodo;
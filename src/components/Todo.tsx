import { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface TodoProps {
    name: string;
    text: string;
    status: boolean;
    onDelete: () => () => void;
}

function Todo({ name = '', text = '', status = false, onDelete }: TodoProps) {
    const [nameState, setName] = useState(name);
    const [textState, setText] = useState(text);
    const [statusState, setStatus] = useState(status);

    return (
        <Card sx={{ margin: '10px 0', padding: '10px', boxShadow: 1 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {nameState}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {textState}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <Button
                        variant="contained"
                        color={!statusState ? "primary" : "success"}
                        onClick={() => setStatus(!statusState)}
                    >
                        {statusState ? "Выполнено" : "Не выполнено"}
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={onDelete}
                    >
                        Удалить
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Todo;
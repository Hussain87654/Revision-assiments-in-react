import React, { useState } from 'react';
// MUI Components
import { 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  IconButton, 
  Checkbox, 
  Paper, 
  Typography, 
  Box,
  Divider,
  Chip
} from '@mui/material';
// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AssignmentIcon from '@mui/icons-material/Assignment';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  // Requirement: Add a task + Bonus: Prevent empty submission
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form reload
    if (taskInput.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: taskInput,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTaskInput('');
  };

  // Requirement: Delete a task
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Requirement: Mark task as completed
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Requirement: Show total tasks and completed tasks
  const totalTasks = todos.length;
  const completedTasks = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
      <Paper elevation={3} className="w-full max-w-md p-6 rounded-lg bg-gray-800">
        
        {/* Header */}
        <Box className="flex items-center gap-2 mb-6 text-indigo-700">
          <AssignmentIcon fontSize="large" />
          <Typography variant="h5" component="h1" fontWeight="bold">
            Task Master
          </Typography>
        </Box>

        {/* Input Form */}
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <TextField
            fullWidth
            variant="filled"
            size="small"
            label="What needs to be done?"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="bg-white"
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={!taskInput.trim()} 
            startIcon={<AddTaskIcon />}
            className="whitespace-nowrap"
          >
            Add
          </Button>
        </form>

        {/* Statistics Chips */}
        <Box className="flex justify-between mb-4">
          <Chip label={`Total: ${totalTasks}`} variant="outlined" color="default" />
          <Chip label={`Done: ${completedTasks}`} variant="filled" color="success" />
        </Box>

        <Divider />

        {/* Todo List */}
        <List className="mt-2 max-h-72 overflow-auto">
          {todos.length === 0 ? (
            <Typography variant="body2" className="text-center text-gray-400 mt-4 italic">
              No tasks yet. Start by adding one!
            </Typography>
          ) : (
            todos.map((todo) => (
              <ListItem
                key={todo.id}
                dense
                className={`rounded-lg mb-2 transition-colors ${
                  todo.completed ? 'bg-green-50' : 'hover:bg-gray-50'
                }`}
                secondaryAction={
                  <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    color="error"
                    onClick={() => deleteTask(todo.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    color="success"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={todo.text}
                  sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'text.secondary' : 'text.primary',
                  }}
                />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </div>
  );
};

export default TodoApp;
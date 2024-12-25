const express = require('express');
const db = require('../db/connection');
const router = express.Router();

// Get all todos
router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add new todo
router.post('/', (req, res) => {
    const { title, completed } = req.body;
    db.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, completed], (err) => {
        if (err) throw err;
        res.status(201).send('Todo added');
    });
});

// Delete a todo
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.send('Todo deleted');
    });
});

module.exports = router;

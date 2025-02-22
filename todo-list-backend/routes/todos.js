const express = require('express');
const db = require('../db/connection'); // Koneksi DB
const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM todos');
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving todos');
    }
});

// Add new todo
router.post('/', async (req, res) => {
    const { title, completed } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO todos (title, completed) VALUES (?, ?)', 
            [title, completed]
        );
        const newTodo = { id: result.insertId, title, completed }; // Include generated ID
        res.status(201).json(newTodo); // Return the created todo object
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding todo');
    }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM todos WHERE id = ?', [id]);
        res.send('Todo deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting todo');
    }
});

module.exports = router;

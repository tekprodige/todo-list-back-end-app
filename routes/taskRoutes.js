const express = require('express');
const prisma = require('../prisma');

// Create an Express router instance
const router = express.Router();

/**
 * @route   GET /tasks
 * @desc    Fetch all tasks from the database
 * @access  Public
 */
router.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

/**
 * @route   POST /tasks
 * @desc    Create a new task
 * @access  Public
 */
router.post('/tasks', async (req, res) => {
    const { title, color } = req.body;
    const task = await prisma.task.create({
        data: { title, color },
    });
    res.json(task);
});


/**
 * @route   PUT /tasks/:id
 * @desc    Update an existing task by ID
 * @access  Public
 */
router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title, color, completed },
    });
    res.json(task);
});

/**
 * @route   DELETE /tasks/:id
 * @desc    Delete a task by ID
 * @access  Public
 */
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
});

module.exports = router;
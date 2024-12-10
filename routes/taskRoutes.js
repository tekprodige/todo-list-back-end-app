const express = require('express');
const router = express.Router();
const prisma = require('../prisma');

//Route to get tasks
router.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

//Route to create new tasks
router.post('/tasks', async (req, res) => {
    const { title, color } = req.body;
    const task = await prisma.task.create({
        data: { title, color },
    });
    res.json(task);
});


//Route to update tasks
router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { title, color, completed },
    });
    res.json(task);
});

//Router to delete tasks
router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.task.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
});

module.exports = router;
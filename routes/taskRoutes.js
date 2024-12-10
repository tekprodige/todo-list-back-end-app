const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

/**
 * @route GET /tasks
 * @desc Fetch all tasks
 */
router.get('/tasks', async (req, res) => {
  console.log('Fetching all tasks');
  try {
    const tasks = await prisma.task.findMany();
    console.log('Tasks fetched:', tasks);
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @route GET /tasks/:id
 * @desc Fetch a single task by ID
 */
router.get('/tasks/:id', async (req, res) => {
  console.log(`Fetching task with ID: ${req.params.id}`);
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      console.log('Task not found');
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * @route POST /tasks
 * @desc Create a new task
 */
router.post('/tasks', async (req, res) => {
  const { title, color } = req.body;
  try {
    const task = await prisma.task.create({
      data: { title, color },
    });
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

/**
 * @route PUT /tasks/:id
 * @desc Update a task by ID
 */
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id },
      data: { title, color, completed },
    });
    res.json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task' });
  }
});

/**
 * @route DELETE /tasks/:id
 * @desc Delete a task by ID
 */
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id }, 
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;

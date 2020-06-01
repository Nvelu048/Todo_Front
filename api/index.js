const { getInstance } = require('../lib/NetworkClient');

const api = require('express').Router();
api.post('/saveTodo', async (req, res) => {
  try {
    const result = await getInstance().post('/createTodo', {
      todoData: req.body,
    });
    res.send(result.data);
  } catch (err) {
    res.status(400).json({
      message: 'unable to save ',
      err: err,
    });
  }
});

api.get('/getTodos', async (req, res) => {
  try {
    const result = await getInstance().get('/fetchTodos', {
      params: {
        userId: req.query.userId,
      },
    });
    res.send(result.data);
  } catch (err) {
    res.status(400).json({
      message: 'unable to fetch ',
      err: err,
    });
  }
});

api.delete('/deleteTodo', async (req, res) => {
  try {
    const result = await getInstance().delete('/deleteTodo', {
      params: {
        todoId: req.query.todoId,
      },
    });
    res.send(result.data);
  } catch (err) {
    res.status(400).json({
      message: 'unable to fetch ',
      err: err,
    });
  }
});

api.post('/filterTodos', async (req, res) => {
  try {
    const result = await getInstance().post('/filterTodos', {
      filterCondition: req.body.filterCondition,
    });
    res.send(result.data);
  } catch (err) {
    res.status(400).json({
      message: 'unable to filter ',
      err: err,
    });
  }
});

api.post('/updateTodo', async (req, res) => {
  try {
    const result = await getInstance().post('/updateTodo', {
      todoId: req.body.todoId,
      updateObject: req.body.updateObject,
    });
    res.send(result.data);
  } catch (err) {
    res.status(400).json({
      message: 'unable to filter ',
      err: err,
    });
  }
});

module.exports = api;

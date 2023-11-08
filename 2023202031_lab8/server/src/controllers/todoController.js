import TodoModel from '../models/TodoSchema.js';

const insertTodo = async (req, res) => {
  const { title, description, date, Status } = req.body;

  if (!req.session.user) {
    res.status(401).json({ message: 'Please login first to access the page' });
    return;
  }

  try {
    await TodoModel.create({title, description, dueDate: date, Status});
    res.status(200).json({ message: 'To-Do successfully created' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'To-Do could not be created' });
  }
};

const getCompleteTodo = async (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'Please login first to access the page' });
    return;
  }

  try {
    const compTodoList = await TodoModel.find({ Status: true });
    res.status(200).json({ message: 'Complete To-Dos fetched.', data: compTodoList});
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Could not get To-Do list.' });   
  }
};

const getPendingTodo = async (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'Please login first to access the page' });
    return;
  }

  try {
    const pendTodoList = await TodoModel.find({ Status: false });
    res.status(200).json({ message: 'Pending To-Dos fetched.', data: pendTodoList});
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Could not get To-Do list.' });   
  }
};

const updateTodo = async (req, res) => {
  const {title} = req.body;

  await TodoModel.findOneAndUpdate({ title }, { Status: true });

  res.status(200).json({ message: 'To-Do successfully completed.' });
};

const deleteTodo = async (req, res) => {
  const {title} = req.body;

  await TodoModel.deleteOne({ title });

  res.status(200).json({ message: 'To-Do successfully deleted.' });
};

export { insertTodo, getCompleteTodo, getPendingTodo, updateTodo, deleteTodo };

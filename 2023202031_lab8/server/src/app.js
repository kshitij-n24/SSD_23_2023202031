import express from 'express';
import { loginUser, registerUser, logoutUser } from './controllers/userController.js';
import { insertTodo, getCompleteTodo, getPendingTodo, updateTodo, deleteTodo } from './controllers/todoController.js';
import buildMiddleware from './middleware/buildMiddleware.js';
import sessionMiddleware from './middleware/sessionMiddleware.js';
import corsMiddleware from './middleware/corsMiddleware.js';

const makeApp = async () => {
  const app = express();

  app.use(express.json());

  sessionMiddleware(app);

  app.post('/user/login', loginUser);
  
  app.post('/user/register', registerUser);

  app.get('/user/logout', logoutUser);

  app.post('/todo/insert', insertTodo);

  app.get('/todo/get/complete', getCompleteTodo);

  app.get('/todo/get/pending', getPendingTodo);

  app.put('/todo/update', updateTodo);

  app.delete('/todo/delete', deleteTodo);

  buildMiddleware(app);
  // corsMiddleware(app);

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke');
    next();
  });

  return app;
}

export default makeApp;


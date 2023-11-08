import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import createTodoAPI from '../api/createTodoAPI.js';
import UserContext from '../context/UserContext.jsx';
import Navbar from './Navbar.jsx';

export default function CreateTodo() {
  const {userName} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userName === '') {
      navigate('/');
    }
  }, [userName, navigate]);

  const currDate = new Date();
  const dateStr = currDate.toISOString().split('T')[0];
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todoDate, setTodoDate] = useState(dateStr);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await createTodoAPI({ title, description: desc, date: todoDate, Status: false });

    if (response.statusCode === 200) {
      // Show on alert
      alert(title + '; ' + desc + '; ' + todoDate);
    } else {
      // Show error
      alert('Error!');
    }
  }

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
          <div className="form-container">
            <form method="POST" onSubmit={handleSubmit}>
              <h1>Todo Page</h1>
              <div className="row mb-3">
                <label htmlFor="title" className="col-sm-10 col-form-label">
                  Title 
                  <div class="col-sm-10">
                    <input type="text" name="title" id="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                  </div>
                </label>
              </div>
              <div className="row mb-3">
                <label htmlFor="desc" className="col-sm-10 col-form-label" >
                  Description 
                  <div class="col-sm-10">
                    <input type="text" name="desc" id="desc" className="form-control" onChange={(e) => setDesc(e.target.value)}/>
                  </div>
                </label>
              </div>

              <div className="row mb-3">
                <label htmlFor="compdate" className="col-sm-10 col-form-label" >
                  Completion Date 
                  <div class="col-sm-10">
                    <input type="date" name="todoDate" id="compdate" value={todoDate} min={dateStr} className="form-control" onChange={(e) => setTodoDate(e.target.value)}/>
                  </div>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Create To-Do</button>
            </form>
          </div>
      </div>
    </div>
  )
};

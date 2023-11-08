import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext.jsx';
import loginAPI from '../api/loginAPI.js';

export default function Login() {
  const {userName, setUserName} = useContext(UserContext);
  const [passWord, setPassWord] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginAPI({ username: userName, password: passWord });

    if (response.statusCode === 200) {
      navigate('/createTodo');
    } else {
      setUserName('');
      navigate('/');
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="form-container">
          <form method="POST" onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div className="row mb-3">
              <label htmlFor="usrname" className="col-sm-10 col-form-label">
                Username 
                <div class="col-sm-10">
                  <input type="text" name="username" id="usrname" className="form-control" onChange={(e) => setUserName(e.target.value)} />
                </div>
              </label>
            </div>
            <div className="row mb-3">
              Password 
              <label htmlFor="passwrd" className="col-sm-10 col-form-label" >
                <div className="col-sm-10">
                  <input type="password" name="pass" id="passwrd" className="form-control" onChange={(e) => setPassWord(e.target.value)}/>
                </div>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
    </div>
  )
};

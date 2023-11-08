import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerAPI from '../api/registerAPI.js';


export default function Register() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isMatch, setIsMatch] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setIsMatch(null);
  }, []);

  useEffect(() => {
    if (passWord === confirmPass) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  }, [passWord, confirmPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await registerAPI({ username: userName, password: passWord });

    if (response.statusCode === 200) {
      navigate('/');
    } else {
      navigate('/register');
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="form-container">
          <form method="POST" onSubmit={handleSubmit}>
            <h1>Register Page</h1>
            {isMatch === false ? (<div className="error-msg">The passwords donot match</div>) : ''}
            <div className="row mb-3">
              Username 
              <label htmlFor="usrname" className="col-sm-10 col-form-label">
                <div class="col-sm-10">
                  <input type="text" name="username" id="usrname" className="form-control" onChange={(e) => setUserName(e.target.value)} />
                </div>
              </label>
            </div>
            <div className="row mb-3">
              <label htmlFor="passwrd" className="col-sm-10 col-form-label" >
                Password 
                <div class="col-sm-10">
                  <input type="password" name="pass" id="passwrd" className="form-control" onChange={(e) => setPassWord(e.target.value)}/>
                </div>
              </label>
            </div>
            <div className="row mb-3">
              <label htmlFor="cnfpass" className="col-sm-10 col-form-label" >
                Confirm Password 
                <div class="col-sm-10">
                  <input type="password" name="cnfrmpass" id="cnfpass" className="form-control" onChange={(e) => setConfirmPass(e.target.value)}/>
                </div>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up!</button>
          </form>
        </div>
    </div>
  )
}

import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import logoutAPI from '../api/logoutAPI.js';

export default function Navbar() {
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleLogout = async (e) => {
    e.preventDefault();

    await logoutAPI();
    setUserName('');
    navigate('/');
  };

  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">To Do App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/createTodo" className="nav-link active" aria-current="page">Create To-Do</Link>
              </li>
              <li className="nav-item">
                <Link to="/completeTodo" className="nav-link">Complete To-Do</Link>
              </li>
              <li className="nav-item">
                <Link to="/pendingTodo" className="nav-link">Pending To-Do</Link>
              </li>
              <form className="d-flex">
                <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </form>
            </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

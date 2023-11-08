import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import UserContext from '../context/UserContext.jsx';
import getPendTodoAPI from '../api/getPendTodoAPI.js';
import updatePendTodoAPI from '../api/updatePendAPI.js';
import deleteTodoAPI from '../api/deleteTodoAPI.js';
import Navbar from './Navbar.jsx';

export default function PendingTodo() {
    const {userName} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
      if (userName === '') {
        navigate('/');
      }
    }, [userName, navigate]);
  
    const [todoData, setTodoData] = useState('');
    const [dataChanged, setDataChanged] = useState(false);
    // const [title, setTitle] = useState('');
    // const [desc, setDesc] = useState('');
    // const [todoDate, setTodoDate] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await getPendTodoAPI();
        if (response.statusCode === 200) {
          // setTitle(response.data.title);
          // setDesc(response.data.desc);
          // setTodoDate(response.data.date);
  
          setTodoData(response.data.data);
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      };
      fetchData();
    }, [dataChanged]);

    const handleDone = async (e, element) => {
        
        const response = await updatePendTodoAPI({title: element.title});
        if (response.statusCode === 200) {
            setDataChanged(true);
        }
    };

    const handleDelete = async (e, element) => {
        const response = await deleteTodoAPI(element);
        if (response.statusCode === 200) {
            setDataChanged(true);
        }
    };

    return (
    <div>
        <Navbar />
      <div style={{ margin: '4em' }}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {isSuccess ? todoData.map((element) => { return <tr><td>{element.title}</td><td>{element.desc}</td><td>{element.date}</td><td><button type="button" className="btn btn-success" onClick={(e) => handleDone(e, element)}>Done</button><button type="button" className="btn btn-danger" onClick={(e) => handleDelete(e, element)}>Delete</button></td></tr> }) : ''}
          </tbody>
        </table>
      </div>
    </div>
  )
}

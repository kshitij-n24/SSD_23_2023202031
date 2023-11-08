import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import UserContext from '../context/UserContext.jsx';
import getCompTodoAPI from '../api/getCompTodoAPI.js';
import Navbar from './Navbar.jsx';

export default function CompleteTodo() {
    const {userName} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
      if (userName === '') {
        navigate('/');
      }
    }, [userName, navigate]);
  
    const [todoData, setTodoData] = useState('');
    // const [title, setTitle] = useState('');
    // const [desc, setDesc] = useState('');
    // const [todoDate, setTodoDate] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await getCompTodoAPI();
        if (response.statusCode === 200) {
          // setTitle(response.data.title);
          // setDesc(response.data.desc);
          // setTodoDate(response.data.date);
  
          setTodoData(response.data.data);
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      }
      fetchData();
    }, []);

    console.log(todoData);

    return (
      <div>
        <Navbar />
        <div style={{ margin: '4em' }}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {isSuccess? todoData.map((element) => { return <tr><td>{element.title}</td><td>{element.desc}</td><td>{element.date}</td></tr> }) : ''}
          </tbody>
        </table>
        </div>
    </div>
  );
}

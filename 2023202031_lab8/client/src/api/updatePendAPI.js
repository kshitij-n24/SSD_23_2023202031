import axios from 'axios';

const updatePendTodoAPI = async (todoData) => {
    let res;
  const config = {
    method: 'put',
    url: 'http://localhost:8080/todo/update',
    headers: {
      'Content-Type': 'application/json',
    },
    data: todoData,
  };
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.error('Could not get response from server.', err);
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default updatePendTodoAPI;


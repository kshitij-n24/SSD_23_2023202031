import axios from 'axios';

const getCompTodoAPI = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/todo/get/complete',
    headers: {
      'content-type': 'application/json',
    },
  };

  let res;
  try {
    res = await axios(config);
    return { statusCode: res.status, data: res.data };
  } catch (err) {
    console.error('Could not get data from server.');
    return { statusCode: err.response.status, data: err.response.data };
  }
};

export default getCompTodoAPI;
import axios from 'axios';

const logoutAPI = async () => {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/user/logout',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await axios(config);
  } catch (err) {
    console.error('Could not get response from server.', err);
  }
};

export default logoutAPI;

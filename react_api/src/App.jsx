// src/App.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // GET request
    axios.get('http://127.0.0.1:8000/api/example')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

    // POST request
    axios.post('http://http://127.0.0.1:8000//api/data', { key: 'value' })
      .then(response => {
        setPostData(response.data.received);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>GET request message: {message}</h1>
      <h2>POST request data: {JSON.stringify(postData)}</h2>
    </div>
  );
};

export default App;

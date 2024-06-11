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
    axios.post('http://127.0.0.1:8000/api/data', { key: 'value' })
      .then(response => {
        setPostData(response.data.received);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  //****************Submit Form*****************//
  
  const [formData, setFormData] = useState({
    text: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/data', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };


  return (
    <div>
      <h1>GET request message: {message}</h1>
      <h2>POST request data: {JSON.stringify(postData)}</h2>
      <div>
        <form onSubmit={handleSubmit} className='p-4'>
          <input type="text" name="text"
          value={formData.text}
          onChange={handleChange}
          className='form-control'/>
          <button type='submit' className='btn btn-success m-4'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;

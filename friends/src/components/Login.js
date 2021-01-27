import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
  username: '',
  password: ''
};

export default function Login(props) {
  const [credentials, setcredentials] = useState(initialValues);

  const handleChange = (e) => {
    setcredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  // console.log(credentials);

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        // console.log(res.data.payload);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        // props.history.push('/friends');
        // window.location.href = 'http://localhost:3000/friend';
        window.location = 'http://localhost:3000/friend';
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

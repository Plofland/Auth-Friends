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

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        // props.history.push('/friends'); also works as a redirect
        // window.location.href = 'http://localhost:3000/friend'; also works as a redirect
        window.location = 'http://localhost:3000/friends';
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
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

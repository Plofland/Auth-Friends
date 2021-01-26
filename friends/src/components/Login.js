import React, { useState } from 'react';
// import axios from 'axios';

const initialValues = {
  username: '',
  password: ''
};

export default function Login() {
  const [credentials, setCredentials] = useState(initialValues);

  const handleChange = (e) => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  console.log(credentials);

  const login = (e) => {
    // axios
    //   .get('http://localhost:5000')
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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

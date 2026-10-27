import { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="card">
      <h2>Registration Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="preview">
        <h3>Live Preview</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default UserForm;

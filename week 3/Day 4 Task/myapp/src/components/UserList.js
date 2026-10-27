import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users. Please try again.');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <h2>User List</h2>
        <div className="status">
          <span className="spinner"></span>
          <p>Fetching users...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <h2>User List</h2>
        <p className="error-message">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>User List</h2>
      <p className="section-description">
        User details fetched from a public API.
      </p>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>

            <h3>{user.name}</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserList;

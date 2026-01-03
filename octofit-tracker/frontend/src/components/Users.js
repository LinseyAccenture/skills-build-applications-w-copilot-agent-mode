import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Fetched users:', results);
        setUsers(results);
      });
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-primary">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
              <th>Superhero</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id || idx}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.team}</td>
                <td>{user.is_superhero ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;

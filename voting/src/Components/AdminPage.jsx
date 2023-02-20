import React from "react";
import { Users } from '../user';
import './AdminPage.css';

export function AdminPage({ onLogout }) {
  return (
    <div className="AdminPage">
      <h1>Welcome to AdminPage</h1>
      <div className="AdminPage-users">
        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Voted</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td>{user.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

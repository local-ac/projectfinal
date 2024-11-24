import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import { Link, useNavigate } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Adding password to the user interface for updating
  phone: string
}

function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users from API
  async function fetchUsers() {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Function to delete a user
  async function handleDelete(userId: number) {
    try {
      await axios.delete(`/api/users/${userId}`);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  // Function to update user data, including the password
  async function handleUpdate(user: User) {
    try {
      await axios.put(`/api/users/${user.id}`, {
        username: user.username,
        email: user.email,
        password: user.password, // Include password in update
        phone: user.phone,
      });
      setEditingUser(null); // Clear editing state after update
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
  

  return (
    <div>
      <Link to="/" className="go-to-login">Logout</Link>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            
            <th>Username</th>
            <th>Email</th>
            <th>Password</th> {/* New Password Column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              {editingUser && editingUser.id === user.id ? (
                <>
                  
                  <td>
                    <input
                      value={editingUser.username}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, username: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, email: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      value={editingUser.password || ''} // Add password input
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, password: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(editingUser)}>Save</button>
                    <button onClick={() => setEditingUser(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>********</td> {/* Hidden password display */}
                  <td>
                    <button onClick={() => setEditingUser(user)} className="edit">Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="delete">Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;

import React from "react";
import { Link } from "react-router-dom";
 const Liste_users= ()=>{


  return (
    <div>
      <table className="table table-striped ">
        <thead >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to='#'>
                  <button className="btn btn-primary mx-3">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <Link to="/add-user">
          <button className="btn btn-primary">Add User</button>
        </Link>
      </p>
    </div>
    
  );
}
export default  Liste_users;

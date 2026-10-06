import React from "react";
import { UserRound,Mail,MapPin } from "lucide-react";
import"./Pagination.css"

export default function UserTable({ users }) {
    console.log(users);
    
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => {
               return(
                 <tr key={user.id}>
                    <td>
                        <span className="user-id-badge"> {user.id}</span>
                    </td>
                    <td>
                        <div className="table-user">
                            <div className="table-avatar">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <strong>{user.name}</strong>
                                <small>
                                    <UserRound size={12}/> User
                                </small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="table-info">
                            <Mail size={12}/>
                            {user.email}
                        </div>
                    </td>

                    <td>
                        <span className="age-badge">
                            {user.age}

                        </span>
                    </td>

                    <td>
                        <div className="table-info">
                            <MapPin size={12}/>
                            {user.city}

                        </div>
                    </td>

                </tr>
               )
            })}
        </tbody>
      </table>
    </div>
  );
}

import "./UserList.css";
function UserList() {
  // List Rendering Data
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      age: 24,
      city: "Coimbatore",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      age: 25,
      city: "Chennai",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Rahul Raj",
      email: "rahul@gmail.com",
      age: 26,
      city: "Bangalore",
      role: "Backend Developer",
    },
    {
      id: 4,
      name: "Sneha Devi",
      email: "sneha@gmail.com",
      age: 23,
      city: "Madurai",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      name: "Karthik S",
      email: "karthik@gmail.com",
      age: 27,
      city: "Trichy",
      role: "Software Engineer",
    },
  ];
  return (
    <div className="user-list">
      <div className="list-header">
        <p>LIST RENDERING</p>
        <h2>User Directory</h2>
        <span>{users.length} users rendered dynamically using map()</span>
      </div>
      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-top">
              <div className="user-avatar">{user.name.charAt(0)}</div>
              <div>
                <h3>{user.name}</h3>
                <p>{user.role}</p>
              </div>
            </div>
            <div className="user-info">
              <div>
                <small>Email</small>
                <strong>{user.email}</strong>
              </div>
              <div>
                <small>Age</small>
                <strong>{user.age} years</strong>
              </div>
              <div>
                <small>City</small>
                <strong>{user.city}</strong>
              </div>
              <div>
                <small>Role</small>
                <strong>{user.role}</strong>
              </div>
            </div>
            <div className="user-footer">
              <span>User ID</span>
              <strong>#{String(user.id).padStart(3, "0")}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserList;

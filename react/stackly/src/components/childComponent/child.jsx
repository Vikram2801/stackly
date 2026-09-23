import "./child.css";

function Child({ user }) {
  return (
    <div className="user-card">

      <div className="user-header">

        <div className="avatar">
          {user.name.charAt(0)}
        </div>

        <div>
          <h2>{user.name}</h2>
          <p>User #{user.id}</p>
        </div>

      </div>

      <div className="user-details">

        <div className="detail-item">

          <div>
            <small>City</small>
            <strong>{user.city}</strong>
          </div>
        </div>

        <div className="detail-item">
          
          <div>
            <small>Age</small>
            <strong>{user.age} Years</strong>
          </div>
        </div>

        <div className="detail-item">
          <div>
            <small>Email</small>
            <strong>{user.email}</strong>
          </div>
        </div>

        <div className="detail-item">
          <div>
            <small>Phone</small>
            <strong>{user.phone}</strong>
          </div>
        </div>

      </div>

      <div className="card-footer">
        <span>USER PROFILE</span>

        <span className="active">
          ● Active
        </span>
      </div>

    </div>
  );
}

export default Child;

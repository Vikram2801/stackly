import React from "react";
import UseAxios from "../../customHook/UseAxios";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import"./AxiosUser.css"

export default function AxiosUser() {
  const { data, loading, error } = UseAxios(
    "https://jsonplaceholder.typicode.com/users",
  );


  if (loading) {
    return (
      <div className="axios-users-page">
        <div className="axios-message">
          <div className="axios-loader"></div>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="axios-users-page">
        <div className="axios-message error-state">
          <div className="error-icon">!</div>
          <h2>unable to load users</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }
   return (
    <div className="axios-users-page">
      <div className="axios-users-grid">
        {data.map((user) => (
          <div className="axios-user-card" key={user.id}>
            <div className="axios-user-header">
              <div className="axios-avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <span className="axios-user-id">
                  USER #{user.id}
                </span>

                <h2>{user.name}</h2>

                <p>@{user.username}</p>
              </div>
            </div>

            <div className="axios-user-details">
              <div className="axios-detail">
                <Mail size={16} />

                <div>
                  <span>Email</span>
                  <strong>{user.email}</strong>
                </div>
              </div>

              <div className="axios-detail">
                <Phone size={16} />

                <div>
                  <span>Phone</span>
                  <strong>{user.phone}</strong>
                </div>
              </div>

              <div className="axios-detail">
                <Globe size={16} />

                <div>
                  <span>Website</span>
                  <strong>{user.website}</strong>
                </div>
              </div>

              <div className="axios-detail">
                <MapPin size={16} />

                <div>
                  <span>City</span>
                  <strong>{user.address.city}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

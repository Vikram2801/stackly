import {
  UserRound,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import { Link } from 'react-router-dom';
import "./Usercard.css";

export default function Usercard({users}) {
  return (
     <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-card-header">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>

              <div>
                <span className="user-id">
                  ID #{user.id}
                </span>

                <h2>{user.name}</h2>
              </div>
            </div>

            <div className="user-details">
              <div className="user-detail">
                <UserRound size={16} />
                <div>
                  <span>Username</span>
                  <strong>@{user.username}</strong>
                </div>
              </div>

              <div className="user-detail">
                <Mail size={16} />
                <div>
                  <span>Email</span>
                  <strong>{user.email}</strong>
                </div>
              </div>

              <div className="user-detail">
                <Phone size={16} />
                <div>
                  <span>Phone</span>
                  <strong>{user.phone}</strong>
                </div>
              </div>

              <div className="user-detail">
                <Globe size={16} />
                <div>
                  <span>Website</span>
                  <strong>{user.website}</strong>
                </div>
              </div>

              <div className="user-detail">
                <MapPin size={16} />
                <div>
                  <span>City</span>
                  <strong>{user.address.city}</strong>
                </div>
              </div>
            </div>

            <Link
              to={`/users/${user.id}`}
              className="view-user-button"
            >
              View Details
            </Link>
          </div>
        ))}
        </div>
  )
}

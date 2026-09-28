import { useEffect, useRef, useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  RefreshCw,
  Users,
  Mail,
  Phone,
  Globe,
  User,
  AlertCircle,
} from "lucide-react";
import "./Task6.css";

function Task6() {
  // API users state
  const [users, setUsers] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Image preview state
  const [imagePreview, setImagePreview] = useState("");

  // useRef for file input
  const fileInputRef = useRef(null);

  // Fetch users when component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Open hidden file input
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };

  return (
    <div className="task6">
      {/* Header */}
      <div className="task6-header">
        <div>
          <p className="task6-label">TASK 06</p>

          <h2>useEffect & useRef Hooks</h2>

          <p className="task6-description">
            API integration with useEffect and image upload using useRef
          </p>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="upload-card">
        <div className="upload-heading">
          <div className="upload-icon">
            <ImageIcon size={22} />
          </div>

          <div>
            <p>USE REF</p>
            <h3>Image Upload</h3>
            <span>Select an image and preview it instantly.</span>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden-file-input"
        />

        <div className="upload-content">
          {/* Preview */}
          <div className="image-preview">
            {imagePreview ? (
              <img src={imagePreview} alt="Selected preview" />
            ) : (
              <div className="empty-preview">
                <ImageIcon size={45} />
                <p>No image selected</p>
                <span>Choose an image to see the preview</span>
              </div>
            )}
          </div>

          {/* Upload Info */}
          <div className="upload-info">
            <h4>{imagePreview ? "Image Selected" : "Upload Your Image"}</h4>

            <p>
              {imagePreview
                ? "You can change the image anytime."
                : "Supported formats: JPG, PNG, GIF, WEBP"}
            </p>

            <button className="upload-button" onClick={handleUploadClick}>
              {imagePreview ? (
                <>
                  <RefreshCw size={17} />
                  Change Image
                </>
              ) : (
                <>
                  <Upload size={17} />
                  Upload Image
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* API Section */}
      <div className="api-section">
        <div className="api-header">
          <div>
            <p>USE EFFECT</p>
            <h3>Users API</h3>
            <span>Data fetched from JSONPlaceholder using useEffect</span>
          </div>

          <div className="user-count">
            <Users size={17} />
            {users.length} Users
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="api-message loading-message">
            <RefreshCw size={22} className="loading-icon" />
            <p>Loading users...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="api-message error-message">
            <AlertCircle size={22} />
            <div>
              <strong>Something went wrong</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Users */}
        {!loading && !error && (
          <div className="users-table-wrapper">
            <table className="users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <span className="user-id">
                        #{String(user.id).padStart(2, "0")}
                      </span>
                    </td>

                    <td>
                      <div className="user-cell">
                        <div className="user-avatar">
                          <User size={17} />
                        </div>

                        <div>
                          <strong>{user.name}</strong>
                          <small>@{user.username}</small>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="table-detail">
                        <Mail size={14} />
                        {user.email}
                      </div>
                    </td>

                    <td>
                      <div className="table-detail">
                        <Phone size={14} />
                        {user.phone}
                      </div>
                    </td>

                    <td>
                      <div className="table-detail">
                        <Globe size={14} />
                        {user.website}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Task6;

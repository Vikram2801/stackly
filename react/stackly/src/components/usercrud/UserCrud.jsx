
import React, { useEffect, useState } from "react";
import {
  Edit,
  Trash2,
  Plus,
  X,
  Save,
  UserRound,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import "./UserCrud.css";
import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialForm = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  city: "",
};

export default function UsersCRUD() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialForm);

  const [editingUserId, setEditingUserId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);

      console.log("GET response:", response.data);

      setUsers(response.data);
    } catch (error) {
      console.log("GET error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch users"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialForm);
    setEditingUserId(null);
    setShowForm(false);
    setError("");
  };


  const handleAddUser = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const newUser = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        address: {
          city: formData.city,
        },
      };

      const response = await axios.post(API_URL, newUser);

      console.log("POST response:", response.data);

      const createdUser = {
        ...response.data,
        address: {
          ...response.data.address,
          city: formData.city,
        },
      };

      setUsers((previousUsers) => [
        ...previousUsers,
        createdUser,
      ]);

      setSuccess("User created successfully.");

      setFormData(initialForm);
      setShowForm(false);
    } catch (error) {
      console.log("POST error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to create user"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user.id);

    setFormData({
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
      phone: user.phone || "",
      website: user.website || "",
      city: user.address?.city || "",
    });

    setShowForm(true);
    setError("");
    setSuccess("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleUpdateUser = async (event) => {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const updatedUser = {
        id: editingUserId,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        address: {
          city: formData.city,
        },
      };

      const response = await axios.put(
        `${API_URL}/${editingUserId}`,
        updatedUser
      );

      console.log("PUT response:", response.data);

      const updatedData = {
        ...response.data,
        address: {
          ...response.data.address,
          city: formData.city,
        },
      };

      setUsers((previousUsers) =>
        previousUsers.map((user) =>
          user.id === editingUserId
            ? {
                ...user,
                ...updatedData,
              }
            : user
        )
      );

      setSuccess("User updated successfully.");

      setFormData(initialForm);
      setEditingUserId(null);
      setShowForm(false);
    } catch (error) {
      console.log("PUT error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to update user"
      );
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async (userId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccess("");

      await axios.delete(`${API_URL}/${userId}`);

      console.log("DELETE successful:", userId);

      setUsers((previousUsers) =>
        previousUsers.filter(
          (user) => user.id !== userId
        )
      );

      setSuccess("User deleted successfully.");
    } catch (error) {
      console.log("DELETE error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete user"
      );
    }
  };
  return (
    <div className="crud-page">

      {/* Header */}

      <div className="crud-header">
        <div>
          <p className="crud-label">
            AXIOS • CRUD
          </p>

          <h1>User Management</h1>

          <p className="crud-description">
            Manage users using GET, POST, PUT and DELETE.
          </p>
        </div>

        <button
          className="add-user-btn"
          onClick={() => {
            setFormData(initialForm);
            setEditingUserId(null);
            setShowForm(true);
            setError("");
            setSuccess("");
          }}
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Success */}

      {success && (
        <div className="success-message">
          {success}
        </div>
      )}

      {/* Error */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Form */}

      {showForm && (
        <div className="crud-form-card">

          <div className="form-header">
            <div>
              <span className="crud-label">
                {editingUserId
                  ? "UPDATE USER"
                  : "CREATE USER"}
              </span>

              <h2>
                {editingUserId
                  ? "Edit User"
                  : "Add New User"}
              </h2>
            </div>

            <button
              type="button"
              className="close-btn"
              onClick={resetForm}
            >
              <X size={18} />
            </button>
          </div>

          <form
            onSubmit={
              editingUserId
                ? handleUpdateUser
                : handleAddUser
            }
          >
            <div className="form-grid">

              <div className="form-group">
                <label>
                  <UserRound size={14} />
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <UserRound size={14} />
                  Username *
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Mail size={14} />
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Phone size={14} />
                  Phone *
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Globe size={14} />
                  Website
                </label>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="example.com"
                />
              </div>

              <div className="form-group">
                <label>
                  <MapPin size={14} />
                  City *
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />
              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-btn"
                disabled={saving}
              >
                <Save size={16} />

                {saving
                  ? "Saving..."
                  : editingUserId
                  ? "Update User"
                  : "Create User"}
              </button>

            </div>
          </form>
        </div>
      )}

      {/* Loading */}

      {loading ? (
        <div className="crud-message">
          <div className="crud-loader"></div>

          <h2>Loading Users...</h2>

          <p>
            Fetching users using Axios.
          </p>
        </div>
      ) : (
        <div className="crud-table-card">

          <div className="table-header">
            <div>
              <h2>Users</h2>

              <p>
                {users.length} users available
              </p>
            </div>
          </div>

          <div className="table-wrapper">

            <table className="crud-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="empty-table"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id}>

                      <td>
                        <span className="id-badge">
                          #{user.id}
                        </span>
                      </td>

                      <td>
                        <div className="user-name">
                          <div className="user-avatar">
                            {user.name
                              ?.charAt(0)
                              .toUpperCase()}
                          </div>

                          <strong>
                            {user.name}
                          </strong>
                        </div>
                      </td>

                      <td>
                        @{user.username}
                      </td>

                      <td>
                        {user.email}
                      </td>

                      <td>
                        {user.phone}
                      </td>

                      <td>
                        {user.website}
                      </td>

                      <td>
                        {user.address?.city}
                      </td>

                      <td>
                        <div className="action-buttons">

                          <button
                            className="edit-btn"
                            onClick={() =>
                              handleEdit(user)
                            }
                          >
                            <Edit size={15} />
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(user.id)
                            }
                          >
                            <Trash2 size={15} />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>
        </div>
      )}
    </div>
  )
}

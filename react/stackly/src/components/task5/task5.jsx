import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  MapPin,
  Home,
  Lock,
  Send,
  RotateCcw,
  CheckCircle,
} from "lucide-react";
import "./Task5.css";

function Task5() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    address: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, age, gender, city, address, password } =
      formData;

    if (!name ||!email || !phone ||!age ||!gender ||!city ||!address ||!password) {
      setError("Please fill in all the required fields.");
      return;
    }

    setSubmittedData({ ...formData });
    setError("");
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setSubmittedData(null);
    setError("");
  };

  return (
    <div className="task5">
      {/* Header */}
      <div className="task5-header">
        <div>
          <p className="task5-label">TASK05</p>

          <h2>Form Handling</h2>

          <p className="task5-description">
            Manage multiple form fields using React useState
          </p>
        </div>

        <div className="use-state-badge">
          <CheckCircle size={17} />
          Controlled Form
        </div>
      </div>

      {/* Form */}
      <div className="task5-card">
        <div className="form-heading">
          <div className="form-icon">
            <User size={22} />
          </div>

          <div>
            <h3>User Registration</h3>
            <p>Enter your details and submit the form.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                <User size={15} />
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                <Mail size={15} />
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                <Phone size={15} />
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            {/* Age */}
            <div className="form-group">
              <label htmlFor="age">
                <Calendar size={15} />
                Age
              </label>

              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                min="1"
                max="100"
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">
                <Users size={15} />
                Gender
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>

                <option value="Male">Male</option>

                <option value="Female">Female</option>

                <option value="Other">Other</option>
              </select>
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city">
                <MapPin size={15} />
                City
              </label>

              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>

            {/* Address */}
            <div className="form-group full-width">
              <label htmlFor="address">
                <Home size={15} />
                Address
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="4"
              />
            </div>

            {/* Password */}
            <div className="form-group full-width">
              <label htmlFor="password">
                <Lock size={15} />
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Error */}
          {error && <div className="form-error">{error}</div>}

          {/* Buttons */}
          <div className="form-actions">
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              <RotateCcw size={16} />
              Reset
            </button>

            <button type="submit" className="submit-button">
              <Send size={16} />
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Current State */}
      <div className="state-card">
        <div className="state-header">
          <div>
            <p>LIVE STATE</p>
            <h3>Current Form Values</h3>
          </div>

          <span>useState</span>
        </div>

        <div className="state-grid">
          <div>
            <small>Name</small>
            <strong>{formData.name || "—"}</strong>
          </div>

          <div>
            <small>Email</small>
            <strong>{formData.email || "—"}</strong>
          </div>

          <div>
            <small>Phone</small>
            <strong>{formData.phone || "—"}</strong>
          </div>

          <div>
            <small>Age</small>
            <strong>{formData.age || "—"}</strong>
          </div>

          <div>
            <small>Gender</small>
            <strong>{formData.gender || "—"}</strong>
          </div>

          <div>
            <small>City</small>
            <strong>{formData.city || "—"}</strong>
          </div>
        </div>
      </div>

      {/* Submitted Data */}
      {submittedData && (
        <div className="submitted-card">
          <div className="submitted-header">
            <div className="success-icon">
              <CheckCircle size={20} />
            </div>

            <div>
              <p>FORM SUBMITTED</p>
              <h3>Submitted User Data</h3>
            </div>
          </div>

          <div className="submitted-grid">
            <div>
              <small>Name</small>
              <strong>{submittedData.name}</strong>
            </div>

            <div>
              <small>Email</small>
              <strong>{submittedData.email}</strong>
            </div>

            <div>
              <small>Phone</small>
              <strong>{submittedData.phone}</strong>
            </div>

            <div>
              <small>Age</small>
              <strong>{submittedData.age}</strong>
            </div>

            <div>
              <small>Gender</small>
              <strong>{submittedData.gender}</strong>
            </div>

            <div>
              <small>City</small>
              <strong>{submittedData.city}</strong>
            </div>

            <div className="submitted-full">
              <small>Address</small>
              <strong>{submittedData.address}</strong>
            </div>

            <div className="submitted-full">
              <small>Password</small>
              <strong>{"•".repeat(submittedData.password.length)}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task5;

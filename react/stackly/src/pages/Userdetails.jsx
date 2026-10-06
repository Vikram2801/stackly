import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Usercard from "../components/Usercard/Usercard";
import "../components/Usercard/Usercard.css";

export default function Userdetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");
        setUser(null);

        const users = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );

        if (!users.ok) {
          throw new Error("User not found");
        }

        const data = await users.json();

        if (!data || !data.id) {
          throw new Error("User not found");
        }
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="users-page">
        <div className="users-message">
          <div className="loader">
            <h3>Loading User...</h3>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-page">
        <div className="users-message error-message">
          <h3>something went wrong</h3>
          <p>{error}</p>
        </div>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return(
    <div>
        <Usercard users={[user]}/>
    </div>
  )

}

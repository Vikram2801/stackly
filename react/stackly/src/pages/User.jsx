import React, { useEffect, useState } from "react";
import Usercard from "../components/Usercard/Usercard";
import "../components/Usercard/Usercard.css";


export default function User() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const users = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!users.ok) {
          throw new Error("failed to fetch");
        }

        const data = await users.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  if (loading) {
    return(
        <div className="users-page">
            <div className="users-message">
                <div className="loader">
                    <h3>Loading...</h3>
                     <p>Please wait while we fetch the user data.</p>
                </div>
                </div>
        </div>
    )
  }

  if(error){
    return(
        <div className="users-page">
            <div className="users-message error-message">
                <h3>something went wrong</h3>
                <p>{error}</p>
            </div>
            <button onClick={()=>{window.location.reload()}}>Try Again</button>
        </div>
    )
  }


  return(
     <div>
            <Usercard users={user} />
        </div>
  )

  
}

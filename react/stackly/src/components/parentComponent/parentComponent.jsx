import Child from "../childComponent/child";
import "./parentComponent.css";

function ParentComponent() {
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      city: "Coimbatore",
      age: 24,
      email: "arun@gmail.com",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "Priya Sharma",
      city: "Chennai",
      age: 25,
      email: "priya@gmail.com",
      phone: "+91 98765 12345",
    },
    {
      id: 3,
      name: "Rahul Raj",
      city: "Bangalore",
      age: 26,
      email: "rahul@gmail.com",
      phone: "+91 98765 67890",
    },
    {
      id: 4,
      name: "Sneha Devi",
      city: "Madurai",
      age: 23,
      email: "sneha@gmail.com",
      phone: "+91 98765 24680",
    },
    {
      id: 5,
      name: "Karthik S",
      city: "Trichy",
      age: 27,
      email: "karthik@gmail.com",
      phone: "+91 98765 13579",
    },
  ];

  return (
    <div className="app">

      <header className="page-header">
        <p>REACT PROPS ASSIGNMENT</p>

        <h1>User Directory</h1>

        <span>
          Parent Component → Child Component
        </span>
      </header>

      <main className="user-container">

        {users.map((user) => (
          <Child
            key={user.id}
            user={user}
          />
        ))}

      </main>

    </div>
  );
}

export default ParentComponent;

import SelfIntroduction from "../selfIntroduction/SelfIntroduction";
import ParentComponent from "../parentComponent/parentComponent";
import UserList from "../userList/userList";
import Task4 from "../Task4/task4";
import Task5 from "../task5/task5";

import "./Home.css";

function Home({ selectedTask, setSelectedTask, onLogout }) {
  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="home-header">
        <div>
          <p className="home-label">REACT ASSIGNMENTS</p>

          <h1>
            Welcome, <span>Vikram!</span>
          </h1>

          <p className="home-description">
            Select a task below to view the implementation.
          </p>
        </div>

        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </header>

      {/* TASK BUTTON GROUP */}

      <div className="task-navigation">
        <button
          className={
            selectedTask === "task1" ? "task-button active" : "task-button"
          }
          onClick={() => setSelectedTask("task1")}
        >
          <span>01</span>
          Self Introduction
        </button>

        <button
          className={
            selectedTask === "task2" ? "task-button active" : "task-button"
          }
          onClick={() => setSelectedTask("task2")}
        >
          <span>02</span>
          Props
        </button>

        <button
          className={
            selectedTask === "task3" ? "task-button active" : "task-button"
          }
          onClick={() => setSelectedTask("task3")}
        >
          <span>03</span>
          User List
        </button>

        <button
          className={
            selectedTask === "task4" ? "task-button active" : "task-button"
          }
          onClick={() => setSelectedTask("task4")}
        >
          <span>04</span>
          useState
        </button>

        <button
          className={
            selectedTask === "task5" ? "task-button active" : "task-button"
          }
          onClick={() => setSelectedTask("task5")}
        >
          <span>05</span>
          Form
        </button>
      </div>

      {/* TASK TITLE */}

      <div className="current-task">
        {selectedTask === "task1" && (
          <>
            <span>01</span>
            <div>
              <small>TASK 1</small>
              <h2>Self Introduction</h2>
            </div>
          </>
        )}

        {selectedTask === "task2" && (
          <>
            <span>02</span>
            <div>
              <small>TASK 2</small>
              <h2>Parent & Child Props</h2>
            </div>
          </>
        )}

        {selectedTask === "task3" && (
          <>
            <span>03</span>
            <div>
              <small>TASK 3</small>
              <h2>List Rendering</h2>
            </div>
          </>
        )}
      </div>

      {/* TASK CONTENT */}

      <main className="task-content">
        {selectedTask === "task1" && <SelfIntroduction />}

        {selectedTask === "task2" && <ParentComponent />}

        {selectedTask === "task3" && <UserList />}

        {selectedTask === "task4" && <Task4 />}
        
        {selectedTask === "task5" && <Task5 />}
      </main>
    </div>
  );
}

export default Home;

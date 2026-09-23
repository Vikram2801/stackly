import ParentComponent from "./components/parentComponent/parentComponent";
import SelfIntroduction from "./components/selfIntroduction/SelfIntroduction"
import "./App.css";

function App() {
  return (
    <div className="app">
      <ParentComponent />
      <SelfIntroduction/>
    </div>
  );
}

export default App;

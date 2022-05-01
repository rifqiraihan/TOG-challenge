import "./App.css";
import CreateForm from "./components/CreateForm";

import Sidebar from "./components/Sidebar";

import Tbl from "./components/Tbl";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Tbl />
      <CreateForm />
    </div>
  );
}

export default App;

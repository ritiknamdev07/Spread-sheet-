import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TableComponent from "./components/Table/Table";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Toolbar />
        <TableComponent />
        
      </div>
    </>
  );
}

export default App;

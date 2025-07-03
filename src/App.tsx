import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TableComponent from "./components/Table/Table";
import TitleRow from "./components/TitleRow/TitleRow";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Toolbar />
        <TableComponent />
        <TitleRow />
      </div>
    </>
  );
}

export default App;

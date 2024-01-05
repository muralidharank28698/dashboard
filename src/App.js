import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import "font-awesome/css/font-awesome.min.css";
// import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container-fluid">
      <Sidebar />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
// import "./App.css";
import Teams from "./components/showteam";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Players from "./components/showplayer";
import TeamDetails from "./components/teamdetails";
import './components/style.css'

function App() {
  return (
    <>
     
      <Header />
     
      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teamDetails" element={<TeamDetails />} />
      </Routes>
    
     
    </>
  );
}

export default App;


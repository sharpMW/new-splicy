import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Karaoke from "./pages/Karaoke.jsx"
import Instruments from "./pages/Instruments";
import Remix from "./pages/Remix"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/karaoke" element={<Karaoke/>}/>
        <Route path="/instruments" element={<Instruments/>}/>
        <Route path="/remix" element={<Remix/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

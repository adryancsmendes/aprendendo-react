import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/empresa" element={<Empresa />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Lumin from './pages/Lumin';
import LuminPricing from "./pages/LuminPricing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/lumin" element={<Lumin/>}></Route>
        <Route path="/lumin/pricing" element={<LuminPricing/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

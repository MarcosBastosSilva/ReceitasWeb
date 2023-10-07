import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/FootBar/Footer";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import Nome from "./components/Nome/Nome";
import Ingrediente from "./components/Ingrediente/ingrediente";
import Receita from "./components/Receita/Receita";
import Letra from "./components/Letra/Letra";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Router basename="/ReceitasWeb">
          <Navbar />
          <Routes>
            <Route path="/" Component={RandomMeal} />
            <Route path="/Nome" Component={Nome} />
            <Route path="/Ingrediente" Component={Ingrediente} />
            <Route path="/Letra" Component={Letra} />
            <Route path="/Receita/:id" Component={Receita} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;

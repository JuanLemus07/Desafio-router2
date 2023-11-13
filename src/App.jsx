import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Pokemons from "./components/Pokemons";
import PokemonDetail from "./views/PokemonDetail"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/pokemons" element={< Pokemons />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

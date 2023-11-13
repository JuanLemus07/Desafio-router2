import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
  const setActive = ({ isActive }) => (isActive ? "active" : undefined)
  return(
    <div className="navbar">
      <Link to="/"><img src="/src/assets/img/Pokédex_logo.png" className="logo" /></Link>
        <section>
          <NavLink to="/" className={ setActive }>Home</NavLink>
          <NavLink to="/pokemons" className={ setActive }>Pokemons</NavLink>
        </section>
    </div>
  )
}
export default Navbar;


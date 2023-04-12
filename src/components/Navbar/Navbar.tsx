import './Navbar.scss'
import SearchBar from '../SearchBar/'

function Navbar() {

  return (
    <>
      <div className="navbar">
        <h3 className="navbar__title">Cleverpost</h3>
        <SearchBar />
      </div>
    </>

  )
}

export default Navbar
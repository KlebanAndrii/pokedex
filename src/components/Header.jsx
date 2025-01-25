import PropTypes from "prop-types"

function Header(props) {
  const { handleToggleMenu } = props;

  return (
    <header>
      <button onClick={handleToggleMenu} className="open-nav-button">
      <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">Pokedex</h1>
    </header>
  )
}

Header.propTypes = {
  handleToggleMenu: PropTypes.func,
}

export default Header
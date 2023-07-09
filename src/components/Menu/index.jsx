import MenuButton from "../MenuButton"
import './Menu.css'

function Menu() {
  return (
    <nav>
      <div className="menu-lista">
        <MenuButton icon="home" where="home">
          Início
        </MenuButton>
        <MenuButton icon="tag" where="explore">
          Explorar
        </MenuButton>
        <MenuButton icon="person" where="profile">
          Perfil
        </MenuButton>
      </div>

      <button className="menu-conta-button">
        <img src="" className="profile-image" />
          <div className="profile-info">
            <span className="nickname">ML</span>
            <span className="username">@m4rcusml</span>
          </div>
      </button>
    </nav>
  )
}

export default Menu
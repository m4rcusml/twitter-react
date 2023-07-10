import MenuButton from "../MenuButton"
import './Header.css'

function Header({ imgProfile, nick, user }) {
  return (
    <header>
      <nav className="menu">
        <MenuButton icon="home" where="home">
          Página inicial
        </MenuButton>
        <MenuButton icon="search" where="explore">
          Explorar
        </MenuButton>
        <MenuButton icon="person" where="profile">
          Perfil
        </MenuButton>
      </nav>

      <button type="button" className="profile-btn">
        <div className="info">
          <div className="img">
            {
              imgProfile &&
              <img src={imgProfile} className="img" />
            }
          </div>
          <span className="nickname">ML</span>
          <span className="username">@m4rcusml</span>
        </div>

        <span class="material-symbols-outlined">
          more_horiz
        </span>
      </button>
    </header>
  )
}

export default Header
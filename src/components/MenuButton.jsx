import styled from "styled-components"
import { Link } from "react-router-dom"

const Estilo = styled.div`
  cursor: pointer;
  width: 200px;
  min-height: 40px;
  border-radius: 4em;
  transition: 200ms;

  :hover {
    background-color: #ffffff25;
  }

  a {
    color: white;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: .8rem 1em;
  }
  .icon {
    font-size: 3.5rem;

    aspect-radio: 1 / 1;
  }
  .content {
    font-size: 2rem;
    padding: .8rem 0 .4rem 0;
    margin-left: .8rem;
  }
  
  @media screen and (max-width:768px) {
    width: fit-content;

    .content {
      display: none;
    }
  }
`

function MenuButton({ icon, where, children }) {
  return (
    <Estilo>
      <a href={where}>
        <div className="icon material-symbols-outlined">
          {icon}
        </div>
        <div className="content">
          {children}
        </div>
      </a>
    </Estilo>
  )
}

export default MenuButton
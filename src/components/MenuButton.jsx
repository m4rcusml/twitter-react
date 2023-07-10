import styled from "styled-components"
import { Link } from "react-router-dom"

const Estilo = styled.a`
  display: block;
  color: white;
  width: 250px;
  min-height: 40px;
  text-decoration: none;

  :hover > .container {
    background-color: var(--bg-hover);
  }

  .container {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: fit-content;
    padding: .8rem 1.5em 1rem 1em;
    border-radius: 4em;
    transition: 200ms;
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

    .container {
      padding: 1rem 1.2rem 1.2rem 1.2rem;
    aspect-radio: 1 / 1;
    }
    .content {
      display: none;
    }
  }
`

function MenuButton({ icon, where, children }) {
  return (
    <Estilo href={where}>
      <div className="container">
        <div className="icon material-symbols-outlined">
          {icon}
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </Estilo>
  )
}

export default MenuButton
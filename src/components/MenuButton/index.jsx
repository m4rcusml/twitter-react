import { Children } from "react";
import { Button } from "./estilo";

function MenuButton({ icon, children }) {
  return (
    <Button type="button">
      <span>
        {icon}
      </span>
      <span>
        {children}
      </span>
    </Button>
  )
}

export default MenuButton
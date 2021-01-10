/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { components } from "react-select";
const Menu = ({ children, ...props }) => {
  return (
    <components.Menu
      {...props}
      sx={{
        backgroundColor: "background",
        borderColor: "text",
        border: "1px solid",
        borderRadius: "5px",
        padding: "0 5px",
      }}>
      {children}
    </components.Menu>
  );
};

export default Menu;

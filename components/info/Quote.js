/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { CardText } from "reactstrap";

const Quote = ({ children, ...props }) => {
  const _SX = {
    start: {
      fontSize: "25px",
      fontWeight: "bold",
    },
    end: { fontSize: "20px", fontWeight: "bold" },
    username: { color: "highlight" },
    usernameItalic: { fontSize: "16px" },
  };
  const { words, counter } = props;
  return (
    <CardText>
      <span sx={_SX.start}>"</span>
      {children}
      <span className="mx-2" sx={_SX.end}>
        ..." <i sx={_SX.usernameItalic}>by</i>
      </span>
      <cite>
        <i>
          <b sx={_SX.username}>{words[counter].db.user}</b>{" "}
        </i>
      </cite>
    </CardText>
  );
};
export default Quote;

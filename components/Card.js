/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Card, Text } from "theme-ui";
import Image from "next/image";

export default function CustomCard({
  heading = "",
  text = "",
  img,
  styles = null,
}) {
  const _SX = {
    default: {
      cardBody: {
        width: "155px",
        height: "155px",
        padding: "0.5rem",
        border: `5px solid`,
        borderColor: "highlight",
        marginTop: "2rem",
      },
      cardHeader: {
        textAlign: "center",
      },
      cardText: {
        textAlign: "center",
      },
    },
  };
  const cardStyles = styles !== undefined ? _SX : styles;
  return (
    <Card sx={cardStyles.default.cardBody}>
      <Text sx={cardStyles.default.cardHeader}>{heading}</Text>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        sx={cardStyles.default.cardImg}
      />
      {text.length > 0 && <Text sx={cardStyles.default.cardText}>{text}</Text>}
    </Card>
  );
}

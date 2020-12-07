import { Box } from "theme-ui";
import CustomCard from "./Card";

const _SX = {
  box: {
    variant: "boxSides.base",
  },
};
export default function LeftSide() {
  return (
    <Box sx={_SX.box}>
      <CustomCard
        heading="Support codict"
        img={{ src: "/vercel.svg", width: 128, height: 128 }}
      />
      <CustomCard
        heading="Add Your Definition"
        img={{ src: "/vercel.svg", width: 128, height: 128 }}
      />
    </Box>
  );
}

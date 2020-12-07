import Image from "next/image";
import { Box, IconButton, Text } from "theme-ui";
const _SX = {
  box: {
    variant: "boxSides.base",
  },
  text: {
    display: "inline-block",
    fontWeight: "bold",
  },
};
export default function RightSide() {
  return (
    <Box sx={_SX.box}>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <IconButton aria-label="trending today">
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-graph-up"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </IconButton>
          <Text sx={_SX.text}>Word</Text>
        </li>

        <li>
          <IconButton aria-label="top-three-searched-words">
            <Image
              loading="eager"
              src="/ranking.svg"
              alt="top-three-searched-words"
              width={24}
              height={24}
            />
          </IconButton>
          <Text sx={_SX.text}>Word, Word and Word</Text>
        </li>
      </ul>
    </Box>
  );
}

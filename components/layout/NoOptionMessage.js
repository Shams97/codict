/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Button, Text } from "theme-ui";
import { useRouter } from "next/router";
import { components } from "react-select";

const NoOptionsMessage = (props) => {
  const router = useRouter();
  return (
    <components.NoOptionsMessage {...props}>
      <Text as="p">No option was found.</Text>
      <Text as="p">You can add it if you want!</Text>
      <Button
        className="mt-4 mb-2"
        onClick={(e) => {
          e.preventDefault();
          router.replace("/new");
        }}>
        ADD
      </Button>
    </components.NoOptionsMessage>
  );
};

export default NoOptionsMessage;

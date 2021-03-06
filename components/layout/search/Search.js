/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Label } from "theme-ui";
import CreatableSelect from "react-select";
import { useRouter } from "next/router";
import { Col } from "reactstrap";
import Menu from "./Menu";
import Option from "./Option";
import NoOptionsMessage from "./NoOptionMessage";
import useLabels from "../../../lib/pages/useLabels";
import OptimisticInput from "../../optimistic/OptimisticInput";
import InitialError from "../errors/InitialError";

export default function Search() {
  const router = useRouter();
  const { data, error } = useLabels();

  const handleChange = (inputValue) => {
    // on user selection
    // use next router here to navigate to selected word page
    inputValue !== null && router.push(`/${inputValue.value}`);
  };

  if (data) {
    return (
      <Col
        xs="12"
        md="8"
        className="mx-auto my-4"
        sx={{
          "@media(min-width: 768px)": {
            marginTop: "8rem !important",
          },
        }}
      >
        <Label htmlFor="1+id" sx={{ visibility: "hidden" }}>
          Search
        </Label>
        <CreatableSelect
          id="1+id"
          instanceId="1+instanceId"
          inputId="1+InputId"
          name="words"
          isClearable
          isSearchable
          components={{ Option, Menu, NoOptionsMessage }}
          onChange={handleChange}
          options={data.groupedOptions}
          placeholder="Search"
        />
      </Col>
    );
  } else if (error) {
    return <InitialError message="Fatal Error.. Please Refresh The Page" />;
  } else {
    return (
      <Col xs="12" md="8" className="mx-auto my-4">
        <OptimisticInput />
      </Col>
    );
  }
}

/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import CreatableSelect from "react-select";
import { useRouter } from "next/router";
import { Col } from "reactstrap";
import Menu from "./Menu";
import Option from "./Option";
import NoOptionsMessage from "./NoOptionMessage";
import useLabels from "../../../lib/pages/useLabels";
import OptimisticInput from "../../optimistic/OptimisticInput";
import InitialError from "../InitialError";

export default function Search() {
  const router = useRouter();
  var { data, error } = useLabels();
  const handleChange = (inputValue, { action }) => {
    // on user selection
    // use next router here to navigate to selected word page
    inputValue !== null && router.push(`/${inputValue.value}`);
  };
  if (data) {
    return (
      <Col xs="12" md="8" className="mx-auto my-4">
        <CreatableSelect
          id="1"
          instanceId="1"
          inputId="1"
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

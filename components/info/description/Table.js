/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { createRef, useEffect } from "react";
import { Table, Col, Row } from "reactstrap";
import { useColorMode } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tableStyles from "../../../styles/table.module.scss";

export default function InfoTable({ words, counter }) {
  const ref = createRef();
  const [colorMode] = useColorMode();
  const _Sx = {
    th: {
      position: "sticky",
      top: "0",
      left: "0",
      backgroundColor: "background",
    },
    root: {
      color: "text",
    },
  };

  /**
   * a React effect hook that gives two different styles (deep or dark) to the
   * scroll bar of the element that is wapping the info Table.
   *
   * 1- if colorMode used by theme-ui is dark then apply dark styles, otherwise...
   * 2- re-run the effect hook everytime [colorMode] has changed
   */

  useEffect(() => {
    if (ref.current) {
      let scrollbarStyles = "";
      if (colorMode === "dark") {
        //reset class attribute to initial value "table-responsive" so that
        // classnames are not overloaded (eg add light style then append dark style and finally only dark style is applied)
        ref.current.parentElement.setAttribute("class", "table-responsive");
        scrollbarStyles = tableStyles.scrollbarDeep;
      } else {
        ref.current.parentElement.setAttribute("class", "table-responsive");
        scrollbarStyles = tableStyles.scrollbarBase;
      }

      ref.current.parentElement.classList.add(scrollbarStyles);
    }
  }, [colorMode]);
  return (
    <Row>
      <Col
        md="8"
        className="mx-auto"
        lg="6"
        sx={{
          marginTop: "4rem",
        }}
      >
        <Table innerRef={ref} sx={_Sx.root} borderless responsive>
          <tbody>
            {words[counter].db.used.map((row, i1) => {
              return (
                <tr key={i1}>
                  {<th sx={_Sx.th}>{row.name}:</th>}
                  {row.in.map((list, i2) => {
                    return list.name ? (
                      <td key={i1 + i2}>
                        <FontAwesomeIcon
                          icon={[list.prefix, list.name]}
                          width={20}
                          height={20}
                        />
                      </td>
                    ) : (
                      <td key={i1 + i2}>{list}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

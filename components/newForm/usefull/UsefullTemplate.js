/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, Label, Input, Button } from "theme-ui";
import { Row, Col } from "reactstrap";
import { useState } from "react";

export default function UsefullTemplate() {
  const [more, setMore] = useState([1]);
  return (
    <div>
      {more.map((_, idx) => (
        <Row key={idx} className="border mt-3 py-3" data-={idx}>
          <Col xs="12" className="text-right">
            <Button
              data-order={idx}
              onClick={(e) => {
                e.preventDefault();

                /**
                 * TODO:
                 * 1- learn about dataSet attribute in DOM and how to use it with React
                 * 2- build remove link button
                 * 3- collect data
                 * 4- add data to form context
                 * 5- commit to repo
                 * 6- upgrade to latest react
                 * 7- check project again
                 * 8- read latest react blogs and new features
                 */
              }}
            >
              -
            </Button>
          </Col>
          <Col xs="12">
            <Label htmlFor="title">Add Title:</Label>
            <Input
              className="mt-2"
              name="title"
              type="text"
              placeholder="intro to something.."
            />
          </Col>
          <Col xs="12">
            <Label htmlFor="link" className="mt-2">
              Add Link URL:
            </Label>
            <Input
              className="mt-2"
              name="link"
              type="text"
              placeholder="https://www.something.com"
            />
          </Col>
        </Row>
      ))}
      <Button
        className="mt-4"
        onClick={(e) => {
          e.preventDefault();
          const tempArr = [...more];
          tempArr.push(more.length + 1);
          setMore(tempArr);
        }}
      >
        Add
      </Button>
    </div>
  );
}

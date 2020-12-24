/**@jsxRuntime classic */
/**@jsx jsx */

/**
 * Note: This Component uses the spread operator a lot!.
 * the idea behind the satte controlers more, links and alerts is like :
 * 1- there are indefinite number of links titles, link urls and link alerts to be added by the user
 * 2- in order to keep track of the state of all of them i used the idea of using tally objects.
 * 3- for example: let a = {}.. later a[some-name].. if some-name does not exist then it will be
 *    added. otherwise will be updated.
 * 4- in order to keep updating object a, Merging is used a = {...a, new: value}}
 * 5- useState in React hooks does not merge objects. this.setState does in class components
 *    hence, object mergin is used to keep old data and only update needed one.
 */
import { jsx, Label, Input, Button } from "theme-ui";
import { Row, Col } from "reactstrap";
import { useEffect, useState, useContext } from "react";
import { newFormCTX } from "../../../ctx/forms/new/newFormCTX";
import { linkSchema, titleSchema } from "../schema/schema";

export default function UsefullTemplate({ type }) {
  //state controls how many links to be rendered. (when deleting or adding)
  const [more, setMore] = useState([1]);
  // state controls how many links title and url were added. (when deleting and adding)
  const [links, setLinks] = useState({});
  // state controls alert messages realated to input elements
  const [alerts, setAlerts] = useState({});
  const [newFormCtxState, setNewFormCtxState] = useContext(newFormCTX);

  const handleTitle = (e, n) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // validate
    titleSchema
      .validateAsync(value)
      .then(() => {
        // if ok reset alerts messages
        setAlerts({
          ...alerts,
          [n]: {
            ...alerts[n],
            title: "",
          },
        });
        // then update links (context will be update on each update on link state object)
        setLinks(() => {
          return {
            ...links,
            [name]: { ...links[name], title: value },
          };
        });

        /************************************************************************/
        // this part of the form works this way(in theory):
        /**
         * 1- users at first can neglect or choose to fill the form inputs and add links
         * 2- however, if they choose to add a link, they have to provide both title and
         *    label. and both are implied by the Joi validation schemas imported at the top.
         * 3- now when the user inserts data, it will be collected inside the 'links' state object
         * 4- then, there is a 'useEffect' function that runs every time athe 'links' object updates
         *    and merges the new links state object value wth the form context (this is how data is
         *    collected)
         * 5- this part of code below, is checking if the user has only inserted data inside title
         *    field and left the link field empty. if so, 'next' button will be disabled. this is important
         *    to net let users insert title without link or vice verca
         * 6- same logic is applied with function 'handleTitle'
         */
        /************************************************************************/

        if (links[n] === undefined || links[n].link === undefined) {
          setNewFormCtxState({ ...newFormCtxState, next: false });
        } else {
          setNewFormCtxState({ ...newFormCtxState, next: true });
        }
      })
      .catch((e) => {
        // if not ok set alerts messages
        setAlerts({
          ...alerts,
          [n]: {
            ...alerts[n],
            title: e.message,
          },
        });
        // keep context state but disable next
        setNewFormCtxState({ ...newFormCtxState, next: false });
      });
  };

  const handleLink = (e, n) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // validate value with Joi
    linkSchema
      .validateAsync(value)
      .then(() => {
        // if ok reset alert messages to nothing
        setAlerts({
          ...alerts,
          [n]: {
            ...alerts[n],
            link: "",
          },
        });

        /************************************************************************/
        // this part of the form works this way(in theory):
        /**
         * 1- users at first can neglect or choose to fill the form inputs and add links
         * 2- however, if they choose to add a link, they have to provide both title and
         *    label. and both are implied by the Joi validation schemas imported at the top.
         * 3- now when the user inserts data, it will be collected inside the 'links' state object
         * 4- then, there is a 'useEffect' function that runs every time athe 'links' object updates
         *    and merges the new links state object value wth the form context (this is how data is
         *    collected)
         * 5- this part of code below, is checking if the user has only inserted data inside title
         *    field and left the link field empty. if so, 'next' button will be disabled. this is important
         *    to net let users insert title without link or vice verca
         * 6- same logic is applied with function 'handleTitle'
         */
        /************************************************************************/
        if (links[n] === undefined || links[n].title === undefined) {
          setNewFormCtxState({ ...newFormCtxState, next: false });
        } else {
          setNewFormCtxState({ ...newFormCtxState, next: true });
        }

        /************************************************************************/

        //update links state object with new data (this data will be added to the context below)
        setLinks({
          ...links,
          [name]: { ...links[name], link: value },
        });
      })
      .catch((e) => {
        // if not ok then update the alert message
        setAlerts({
          ...alerts,
          [n]: {
            ...alerts[n],
            link: e.message,
          },
        });
        // and then disallow the next button
        setNewFormCtxState({ ...newFormCtxState, next: false });
      });
  };

  const handleRemove = (e, n) => {
    e.preventDefault();

    // delete values related to this [link-title] input from links state object
    const temoObj = { ...links };
    delete temoObj[n];
    setLinks(temoObj);

    // delete (rebuild) the number of [link-title] input in the UI by changing the `more` state
    // UI update is controlled by react state.
    const tempArr = [...more];
    tempArr.splice(tempArr.indexOf(n), 1);
    tempArr.sort();
    setMore(tempArr);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const tempArr = [...more];
    // if nothing to render. at least render one link
    if (tempArr.length === 0) {
      tempArr.push(0);
    } else {
      // increase by: last element value + 1 to avoid duplication in order
      tempArr.push(more[more.length - 1] + 1);
    }
    setMore(tempArr);
  };

  //every time links state object changes, form context gets updated as well
  // this is where the context gets updated
  useEffect(() => {
    setNewFormCtxState(() => {
      return {
        ...newFormCtxState,
        formData: {
          ...newFormCtxState.formData,
          [type]: {
            ...links,
          },
        },
      };
    });
  }, [links]);

  return (
    <div>
      {more.map((n) => (
        <Row key={n} className="mt-3 py-3">
          <Col xs="12" className="text-right">
            <Button
              onClick={(e) => {
                handleRemove(e, n);
              }}
            >
              -
            </Button>
          </Col>

          <Col xs="12">
            <Label htmlFor={`title-${n}`}>Add Title:</Label>
            <Input
              id={`title-${n}`}
              name={n}
              className="mt-2"
              type="text"
              placeholder="intro to something.."
              onChange={(e) => {
                handleTitle(e, n);
              }}
            />
            {alerts[n] && alerts[n].title && alerts[n].title.length > 0 && (
              <span>{alerts[n].title}</span>
            )}
          </Col>

          <Col xs="12">
            <Label htmlFor={`link-${n}`} className="mt-2">
              Add Link URL:
            </Label>
            <Input
              onChange={(e) => {
                handleLink(e, n);
              }}
              id={`link-${n}`}
              name={n}
              className="mt-2"
              type="text"
              placeholder="https://www.something.com"
            />
            {alerts[n] && alerts[n].link && alerts[n].link.length > 0 && (
              <span>{alerts[n].link}</span>
            )}
          </Col>
        </Row>
      ))}
      <Button className="mt-4" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}

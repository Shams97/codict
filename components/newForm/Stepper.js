/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, useThemeUI, Spinner, Alert } from "theme-ui";
import { useState, useContext } from "react";
import axios from "axios";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NameAndSound from "../../components/newForm/NameAndSound";
import { newFormCTX } from "../../ctx/forms/new/newFormCTX";
import Description from "./Description";
import UsedIn from "./used-in/UsedIn";
import UsefullTemplate from "./usefull/UsefullTemplate";
import Synonyms from "../newForm/Synonyms";
import { useRouter } from "next/router";
import organizeFormData from "../../lib/pages/organizedFormData";

function getSteps() {
  return [
    "Name and Sound ",
    "Description",
    "where is it used?",
    "Point to usefull links (tutorials/articles)",
    "Usefull videos if any",
    "Books",
    "Synonyms",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <NameAndSound />;
    case 1:
      return <Description />;
    case 2:
      return <UsedIn />;
    case 3:
      return <UsefullTemplate type="links" />;
    case 4:
      return <UsefullTemplate type="videos" />;
    case 5:
      return <UsefullTemplate type="books" />;
    case 6:
      return <Synonyms />;
    case 7:
      return;
  }
}

export default function CustomStepper({ newWord = false, edit = false }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const context = useThemeUI();
  const { theme } = context;
  const [newFormState, _] = useContext(newFormCTX);
  const [reqSpinner, setReqSpinner] = useState(false);
  const [message, setMessage] = useState({
    msg: "",
    isOk: false,
  });
  const router = useRouter();

  const _SX = {
    back: {
      color: theme.colors.text,
      border: "1px solid",
      borderColor: theme.colors.text,
      backgroundColor: theme.colors.background,
      ":hover": {
        color: theme.colors.background,
      },
    },
    next: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.colors.text,
      border: "1px solid",
      borderColor: theme.colors.text,
      backgroundColor: theme.colors.background,
      ":hover": {
        color: theme.colors.background,
      },
    },
  };

  /**
   * Goto next form input. When form stepper has reached an end, it makes an Ajax request
   * to an API endpoint (/new or /edit) to add new word or edit an existing one.
   */
  const handleNext = () => {
    // final step
    if (activeStep === steps.length) {
      // loading spinner while building and waiting for request
      setReqSpinner(true);

      //either add new word or edit one
      let url = "/api/";
      if (newWord) {
        url += "new";
      } else if (edit) {
        url += "edit";
      }

      /**
       * perform API request
       */
      // reset messgae
      setMessage({
        msg: "",
        isOk: false,
      });
      //  sort form data
      const sortedFormData = organizeFormData(newFormState.formData);
      axios
        .post(url, {
          data: {
            ...sortedFormData,
          },
          responseType: "json",
        })
        .then((res) => {
          /**
           * if status code is in 200 range axios would run then(){}. otherwise catch(){} runs
           */
          // disable spinner
          setReqSpinner(false);
          // update message if any
          setMessage({ msg: res.data.message, isOk: res.data.isOk });
          // forward final step
          setTimeout(() => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }, 2500);

          //on success navigate to the new word page
          setTimeout(() => {
            router.replace("/");
          }, 3000);
        })
        .catch((error) => {
          if (error.response) {
            // on failure display error message and keep user at the same page either to fix errors or to try again
            setReqSpinner(false);
            // use custom error messages instead of default ones
            setMessage({
              msg: error.response.data.message,
              isOk: error.response.data.isOk,
            });
          } else if (error.request) {
            setReqSpinner(false);
            // use custom error messages instead of default ones
            setMessage({
              msg: "Trouble making the request. Try again shortly",
              isOk: false,
            });
          } else {
            setReqSpinner(false);
            // use custom error messages instead of default ones
            setMessage({
              msg: "Trouble setting up the request. Try again shortly",
              isOk: false,
            });
          }
        });
    } else {
      // step forward
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // reset message
    setMessage({ isOk: false, msg: "" });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <div>{getStepContent(index)}</div>
              <div>
                <div>
                  {activeStep > 0 && (
                    <Button
                      className="mt-4 mx-2"
                      sx={_SX.back}
                      variant="contained"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    className="mt-4"
                    css={_SX.next}
                    disabled={!newFormState.next}
                    variant="contained"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className="mb-4">
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            className="mt-4 mx-2"
            sx={_SX.back}
            variant="contained"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            className="mt-4 mx-2"
            sx={_SX.back}
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            className="mt-4"
            css={_SX.next}
            disabled={!newFormState.next}
            variant="contained"
            onClick={handleNext}
          >
            {reqSpinner && <Spinner title="request" size={10} />}
            Send
          </Button>
          <Alert
            color={`${message.isOk ? "green" : "red"}`}
            backgroundColor="background"
            className="mt-2 mb-4 text-center"
          >
            {message.msg}
          </Alert>
        </Paper>
      )}
    </div>
  );
}

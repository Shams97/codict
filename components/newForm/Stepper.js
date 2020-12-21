/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { useState, useContext } from "react";
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
    default:
      return "Unknown step";
  }
}

export default function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const context = useThemeUI();
  const { theme } = context;
  const [newFormState, _] = useContext(newFormCTX);
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
      color: theme.colors.text,
      border: "1px solid",
      borderColor: theme.colors.text,
      backgroundColor: theme.colors.background,
      ":hover": {
        color: theme.colors.background,
      },
    },
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(newFormState);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                      onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  <Button
                    className="mt-4"
                    css={_SX.next}
                    disabled={!newFormState.next}
                    variant="contained"
                    onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </Paper>
      )}
    </div>
  );
}

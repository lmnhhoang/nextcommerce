import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Banner_1 from '../assets/img/banner1.png';
import Banner_2 from '../assets/img/banner2.png';
import Banner_3 from '../assets/img/banner3.png';





const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:Banner_1.src
  },
  {
    
    imgPath:Banner_2.src
    },
  {
    
    imgPath:Banner_3.src
     
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
     
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "650px",
                  display: "block",
                  maxWidth: "100%",
                  width: "100%"
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          position: "absolute",
          background: "transparent",
          right: "50%"
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

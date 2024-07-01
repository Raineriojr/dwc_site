import { Fragment, useState } from "react";
import { useTheme } from '@mui/material/styles';
import { Box, Button, MobileStepper } from "@mui/material"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Title } from "../title";
import { carouselData } from "../../data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselProps {
  isSmallScreen?: boolean
}

export const Carousel = ({ isSmallScreen }: CarouselProps) => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      bgcolor='rgba(0, 0, 0, 0.5)'
      borderRadius={2}
      p={4}
      sx={{ flexGrow: 1 }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
      >
        {carouselData.map((step: { title: string, subtitle: string }, index: number) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Fragment>
                <Title isSmallScreen={isSmallScreen}>{step.title}</Title>
                <Title subtitle>{step.subtitle}</Title>
              </Fragment>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        square
        activeStep={activeStep}
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.1)',
          mt: 12,
          borderRadius: 2,
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'grey',
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: '#0494ac', // Cor do dot ativo
          },
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            color="primary"
            sx={{
              ':disabled': {
                color: 'InactiveCaptionText',
              },
              ":enabled": {
                color: '#0494ac'
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              ':disabled': {
                color: 'InactiveCaptionText',
              },
              ":enabled": {
                color: '#0494ac'
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        }
      />
    </Box>
  )
}
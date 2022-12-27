import { ReactElement, useState } from 'react';

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const back = () => {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const goto = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
    goto,
    next,
    back,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

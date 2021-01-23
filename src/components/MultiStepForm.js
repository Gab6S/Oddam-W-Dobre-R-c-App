import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { StepOne } from "./stepForm/StepOne";
import { StepTwo } from "./stepForm/StepTwo";
import { StepThree } from "./stepForm/StepThree";
import { StepFour } from "./stepForm/StepFour";
import { Summary } from "./stepForm/Summary";
import { Thanks } from "./stepForm/Thanks";

const defaultValues = {
  items: [],
  bagsNumber: null,
  location: "",
  needy: "",
  organizationName: "",
  street: "",
  city: "",
  zipCode: null,
  phoneNumber: null,
  pickUpDate: null,
  pickUpTime: null,
  comments: "",
};

const steps = [
  { id: "step1" },
  { id: "step2" },
  { id: "step3" },
  { id: "step4" },
  { id: "summary" },
  { id: "thanks" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultValues);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "step1":
      return <StepOne {...props} />;
    case "step2":
      return <StepTwo />;
    case "step3":
      return <StepThree />;
    case "step4":
      return <StepFour />;
    case "summary":
      return <Summary />;
    case "thanks":
      return <Thanks />;
  }

  return <div></div>;
};
import React from "react";
import { Important } from "./Important";
import { IntroGiveAway } from "./IntroGiveAway";
import { MultiStepForm } from "./MultiStepForm";

export const GiveItemsAway = () => {
  return (
    <div>
      <IntroGiveAway />
      <Important />
      <MultiStepForm />
    </div>
  );
};

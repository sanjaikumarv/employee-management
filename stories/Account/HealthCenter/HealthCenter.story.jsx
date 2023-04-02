import React from "react";
import HealthCenter from "./HealthCenter";

export default {
  title: "Account/HealthCenter",
  component: HealthCenter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <HealthCenter {...args} />;

export const Primary = Template.bind({});

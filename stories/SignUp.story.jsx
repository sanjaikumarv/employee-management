import React from "react";
import SignUp from "./Home/Auth/SignUp";

export default {
  title: "Example/SignUp",
  component: SignUp,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});


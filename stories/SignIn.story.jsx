import React from "react";
import SignIn from "./Home/Auth/SignIn";

export default {
  title: "Example/SignIn",
  component: SignIn,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SignIn {...args} />;

export const Primary = Template.bind({});

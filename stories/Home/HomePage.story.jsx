import React from "react";
import Home from "./Home";

export default {
  title: "Example/Home",
  component: Home,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
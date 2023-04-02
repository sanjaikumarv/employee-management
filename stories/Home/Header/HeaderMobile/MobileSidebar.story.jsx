import React from "react";
import MobileSidebar from "./MobileSidebar";

export default {
  title: "MobiileSidebar/MobileSidebar",
  component: MobileSidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MobileSidebar {...args} />;

export const Primary = Template.bind({});

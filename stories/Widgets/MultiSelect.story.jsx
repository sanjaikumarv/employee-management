import React from "react";
import MultiSelectInput from "./MultiSelectInput";

export default {
  title: "Widgets/MultiSelectInput",
  component: MultiSelectInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MultiSelectInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
};

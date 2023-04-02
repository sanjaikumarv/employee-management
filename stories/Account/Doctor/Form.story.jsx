import React from "react";
import DoctorForm from "./DoctorForm";

export default {
  title: "Account/DoctorForm",
  component: DoctorForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <DoctorForm {...args} />;

export const Primary = Template.bind({});

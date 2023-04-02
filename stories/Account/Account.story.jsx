import React from "react";
import AccountMain from "./AccountMain";

export default {
  title: "Account/AccountMain",
  component: AccountMain,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <AccountMain {...args} />;

export const Primary = Template.bind({});

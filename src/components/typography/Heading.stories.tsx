import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Heading from "./Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    level: {
      defaultValue: "h1",
    },
  },
};

export const Default = (args: any) => (
  <>
    <Heading {...args}>This is a big big heading.</Heading>
  </>
);

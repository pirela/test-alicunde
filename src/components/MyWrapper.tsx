import React from "react";

import { MyButton } from "./MyButton";

export const MyWrapper = () => {
  const numberOfRender: number = 10;
  const dataOfRender: number[] = Array.from(Array(numberOfRender).keys())

  return (
    dataOfRender.map((_value: number, index: number) => (
      <MyButton  key={index} />
    ))
  );
};

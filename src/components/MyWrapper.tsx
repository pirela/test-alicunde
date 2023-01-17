import React from "react";

import { MyButton } from "./MyButton";

export const MyWrapper: Function = () => {
  const numberOfRender: number = 10;

  return (
    Array.from(Array(numberOfRender).keys()).map( (_item: number, key: number) => ( <MyButton key={key} />))
  );
};

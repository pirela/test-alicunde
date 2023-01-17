import React from "react";
import { useState } from "react";

export const MyButton: Function = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={() => handleClick()}>{`Plus me ${count}`}</button>;
};

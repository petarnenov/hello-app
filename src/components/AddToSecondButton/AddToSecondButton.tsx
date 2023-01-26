import React from "react";
import { useDispatch } from "react-redux";
import { addToSecond } from "../../lib/redux/store";
import { Button } from "@mantine/core";

const AddToSecondButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToSecond());
  };

  return <Button onClick={handleClick}>Add To Second</Button>;
};

export default AddToSecondButton;

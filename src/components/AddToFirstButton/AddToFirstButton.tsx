import React from "react";
import { useDispatch } from "react-redux";
import { addToFirst } from "../../lib/redux/store";
import { Button } from "@mantine/core";

const AddToFirstButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToFirst());
  };

  return <Button onClick={handleClick}>Add To First</Button>;
};

export default AddToFirstButton;

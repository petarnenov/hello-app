import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "@mantine/core";
import { noChanges } from "../../lib/redux/store";

const NoChanges = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(noChanges());
  };

  return <Button onClick={handleClick}>NoChanges</Button>;
};

export default NoChanges;

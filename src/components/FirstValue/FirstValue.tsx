import React from "react";
import { useSelector } from "react-redux";
import { Text } from "@mantine/core";
import { RootState } from "../../lib/redux/store";

const FirstValue = () => {
  const firstNumber = useSelector((state: RootState) => state.firstNumber);
  return (
    <Text size="xl" p={5}>
      FirstValue: {firstNumber}
    </Text>
  );
};

export default FirstValue;

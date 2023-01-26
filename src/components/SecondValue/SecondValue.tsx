import React from "react";
import { useSelector } from "react-redux";
import { Text } from "@mantine/core";
import { RootState } from "../../lib/redux/store";

const SecondValue = () => {
  const { secondNumber } = useSelector((state: RootState) => state);
  return (
    <Text size="xl" p={5}>
      SecondValue: {secondNumber}
    </Text>
  );
};

export default SecondValue;

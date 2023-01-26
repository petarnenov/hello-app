import { Button, Stack, Text } from "@mantine/core";
import React from "react";

type Props = {
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal = ({ onClose, onConfirm }: Props) => {
  return (
    <Stack>
      <Text>ConfirmModal</Text>
      <Button onClick={onClose} variant="gradient">
        Close
      </Button>
      <Button onClick={onConfirm} variant="gradient">Confirm</Button>
    </Stack>
  );
};

export default ConfirmModal;

import { ActionIcon } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import { useRef } from "react";

export const useHighlightTime = () => {
  const refHighlightTime = useRef<HTMLInputElement>(null);
  const pickerControlHighlightTime = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => refHighlightTime.current?.showPicker()}
    >
      <IconClock style={{ width: 20, height: 20 }} stroke={1.5} />
    </ActionIcon>
  );

  return { refHighlightTime, pickerControlHighlightTime };
};
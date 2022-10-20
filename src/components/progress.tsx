import * as ProgressPrimitive from "@radix-ui/react-progress";
import React from "react";

type ProgressProps = {
  progress: number;
};

export function Progress({ progress }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      value={progress}
      className="h-3 w-full overflow-hidden rounded-full bg-neutral-700"
    >
      <ProgressPrimitive.Indicator
        style={{ width: `${progress}%` }}
        className="h-full duration-300 ease-in-out dark:bg-white"
      />
    </ProgressPrimitive.Root>
  );
}

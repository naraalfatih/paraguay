"use client";

import { Button } from "@/components/ui/Button";

function setAll(open: boolean) {
  document.querySelectorAll<HTMLDetailsElement>("details[data-era]").forEach((d) => {
    d.open = open;
  });
}

export function TimelineControls() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => setAll(true)}>Expand all</Button>
      <Button onClick={() => setAll(false)} variant="text">
        Collapse all
      </Button>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Button } from "./primitives";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button clickHandler={() => router.back()} className="text-sm">
      &#171; back <span className="sr-only xs:not-sr-only">to the gallery</span>
    </Button>
  );
};

BackButton.displayName = "BackButton";

export default BackButton;

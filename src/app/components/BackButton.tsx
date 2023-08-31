"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className="text-sm">
      &#171; back <span className="sr-only xs:not-sr-only">to the gallery</span>
    </button>
  );
};

BackButton.displayName = "BackButton";

export default BackButton;

"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className="text-sm">
      &#171; back to the gallery
    </button>
  );
};

BackButton.displayName = "BackButton";

export default BackButton;

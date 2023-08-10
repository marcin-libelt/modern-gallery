"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-sm float-right relative -mt-16 z-10"
    >
      &#171; back to the gallery
    </button>
  );
};

BackButton.displayName = "BackButton";

export default BackButton;

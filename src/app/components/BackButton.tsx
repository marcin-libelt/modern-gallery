"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-sm float-right mr-5 fixed right-0 md:mr-0 md:right-auto md:relative -mt-16 z-10"
    >
      &#171; back to the gallery
    </button>
  );
};

BackButton.displayName = "BackButton";

export default BackButton;

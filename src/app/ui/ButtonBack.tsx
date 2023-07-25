"use client";

import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const router = useRouter();
  const classes = {
    root: "my-5",
    button: "",
  };
  return (
    <div className={classes.root}>
      <a href="#" onClick={() => router.back()}>
        Back<span className="sr-only"> to character's list</span>
      </a>
    </div>
  );
}

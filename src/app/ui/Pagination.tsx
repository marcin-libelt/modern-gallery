"use client";

import { memo } from "react";
import Button from "@/app/ui/Button";
import {
  ChevronBarRight,
  ChevronBarLeft,
  ChevronLeft,
  ChevronRight,
} from "@/app/ui/svg/chevrons";

import { useRouter } from "next/navigation";

export default memo(function Pagination({
  pages,
  next,
  prev,
}: {
  pages?: number | null;
  next: number | null;
  prev: number | null;
}): JSX.Element {
  const router = useRouter();

  const current = prev ? prev + 1 : 1;

  return (
    <nav aria-label="pagination" className={classes.root}>
      <div className={classes.edge}>
        <Button
          label={"Go to first page"}
          value={"First"}
          onClick={() => router.push(`/?page=1`)}
          className={""}
          iconSvg={ChevronBarLeft()}
          iconPosition={"left"}
          disabled={prev === null}
        />
        <Button
          label={"Go to previous page"}
          value={"Prev"}
          onClick={() => router.push(`/?page=${prev}`)}
          className={""}
          iconSvg={ChevronLeft()}
          iconPosition={"left"}
          disabled={prev === null}
        />
      </div>

      <p aria-current="page" aria-label={`page ${current} from ${pages}`}>
        {current} / {pages}
      </p>

      <div className={classes.edge}>
        <Button
          label={"Click to go to next page"}
          value={"Next"}
          onClick={() => router.push(`/?page=${next}`)}
          className={""}
          iconSvg={ChevronRight()}
          iconPosition={"right"}
          disabled={next === null}
        />
        <Button
          label={"Go to last page"}
          value={"Last"}
          onClick={() => router.push(`/?page=${pages}`)}
          className={""}
          iconSvg={ChevronBarRight()}
          iconPosition={"right"}
          disabled={next === null}
        />
      </div>
    </nav>
  );
});

const classes = {
  root: "flex justify-between my-5 items-center",
  edge: "flex gap-1",
};

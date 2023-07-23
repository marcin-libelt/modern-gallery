import { PropsWithChildren } from "react";

interface ContainerProps {
  className?: string;
}

export default function LayoutContainer({
  className: additionalCls,
  children,
}: PropsWithChildren<ContainerProps>): JSX.Element {
  const baseCls = `mx-auto px-5 w-full lg:w-9/12 max-w-screen-xl`;

  const clsName = `${baseCls} ${additionalCls ? additionalCls : ""}`;
  return <div className={clsName}>{children}</div>;
}

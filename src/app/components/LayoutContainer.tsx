import { PropsWithChildren } from "react";

interface ContainerProps {
  className?: string;
}

const LayoutContainer = ({
  className: additionalCls,
  children,
}: PropsWithChildren<ContainerProps>) => {
  const baseCls = `mx-auto px-5 w-full lg:w-9/12 max-w-screen-xl`;

  const clsName = `${baseCls} ${additionalCls}`;
  return <div className={clsName}>{children}</div>;
};

LayoutContainer.displayName = "LayoutContainer";

export default LayoutContainer;

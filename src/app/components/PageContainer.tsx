import { PropsWithChildren, ReactNode } from "react";
import Header from "./Header";
import LayoutContainer from "./LayoutContainer";

interface ContainerProps {
  headerActions?: React.JSX.Element | ReactNode;
}

const PageContainer = ({
  headerActions,
  children,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <>
      <Header>{headerActions}</Header>
      <main>
        <LayoutContainer>{children}</LayoutContainer>
      </main>
    </>
  );
};

PageContainer.displayName = "PageContainer";

export default PageContainer;

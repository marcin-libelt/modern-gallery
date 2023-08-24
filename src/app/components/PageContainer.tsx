import { PropsWithChildren, ReactNode } from "react";
import Header from "./Header";
import LayoutContainer from "./LayoutContainer";

interface ContainerProps {
  headerActions?: JSX.Element | ReactNode;
}

const PageContainer = ({
  headerActions,
  children,
}: PropsWithChildren<ContainerProps>): JSX.Element => {
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

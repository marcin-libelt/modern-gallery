import { PropsWithChildren, ReactNode } from "react";
import { Header } from "@/app/components/";
import { LayoutContainer } from "@/app/styles/sharedstyles";

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

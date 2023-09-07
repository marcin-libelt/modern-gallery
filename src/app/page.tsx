import { VirtualizedGrid } from "./components";
import PageContainer from "./components/PageContainer";
import { getItems } from "./utils/get-data";

const LandingPage = async (): Promise<React.JSX.Element> => {
  const photos = await getItems();

  const Gradient = () => (
    <div className="pointer-events-none bg-gradient-to-b from-background w-full h-24 fixed z-10 scale-110 opacity-high"></div>
  );

  return (
    <PageContainer>
      <Gradient />
      <VirtualizedGrid items={photos} gap={20} />
    </PageContainer>
  );
};

LandingPage.displayName = "LandingPage";
export default LandingPage;

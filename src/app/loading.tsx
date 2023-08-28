import { Loading as LoadingIndicaor } from "@/app/components/utils";
import { PageContainer } from "./components";

const LandingLoading = () => {
  const fakeData = [...Array(20)];

  return (
    <PageContainer>
      <div className="gap-7 grid relative">
        <div
          className="grid gap-7
              sm:grid-cols-2
              md:grid-cols-3 
              lg:grid-cols-4
            "
        >
          {fakeData.map((n, i) => (
            <div key={i} className="aspect-square relative group bg-gray-800">
              <LoadingIndicaor />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

LandingLoading.displayName = "LandingLoading";

export default LandingLoading;

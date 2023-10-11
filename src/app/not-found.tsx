import { PageContainer } from "@/app/components";

const Page404 = () => {
  return (
    <PageContainer>
      <div aria-live="polite" aria-label="Loading" className="text-center">
        {"We're sorry but requested page is not available."}
      </div>
    </PageContainer>
  );
};

Page404.displayName = "Page404";

export default Page404;

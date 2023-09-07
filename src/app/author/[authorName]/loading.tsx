import PageContainer from "@/app/components/PageContainer";

const Loading = () => {
  return (
    <PageContainer>
      <div aria-live="polite" aria-label="Loading">
        <p>Loading user&apos;s gallery...</p>
      </div>
    </PageContainer>
  );
};

Loading.displayName = "Loading";

export default Loading;

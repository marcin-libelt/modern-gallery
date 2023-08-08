import LoadingIndicaor from "@/app/ui/Loading";

const Loading = () => {
  const fakeData = [...Array(20)];

  return (
    <div className="gap-7 grid relative">
      <div
        className="grid gap-7
              sm:grid-cols-2
              md:grid-cols-3 
              lg:grid-cols-4
            "
      >
        {fakeData.map((i) => (
          <div className="aspect-square relative group bg-gray-400">
            <LoadingIndicaor />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;

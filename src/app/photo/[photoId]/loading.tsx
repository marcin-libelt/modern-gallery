import { PageContainer } from "@/components";
import { Loading, ScrollToTop } from "@/components/utils";
import { StylesDictionary } from "@/types";

const PhotoSkeleton = () => {
  const styles: StylesDictionary = {
    avatar: {
      width: 50,
      height: 50,
    },
  };

  return (
    <PageContainer>
      <ScrollToTop />
      <button
        type="button"
        className="text-sm float-right relative -mt-16 z-10"
      >
        « back to the gallery
      </button>
      <div className="md:flex md:gap-8 items-start">
        <div className="md:w-8/12 md:p-2 md:border border-gray-400 aspect-square">
          <div className="w-full h-full bg-gray-800">
            <Loading />
          </div>
        </div>
        <div className="md:w-4/12 mt-2 md:mt-0">
          <span className="text-xs text-gray-500">
            <span className="block bg-gray-500 rounded-full w-1/2">&nbsp;</span>
          </span>
          <h1 className="flex mt-3 mb-10 md:mb-5 ">
            <span className="bg-gray-600 rounded-full w-3/4">&nbsp;</span>
          </h1>
          <div className="flex flex-col items-center text-center group border-0 border-t border-gray-500 pt-8 pb-14">
            <div
              className="rounded-full mb-4 bg-gray-500"
              style={styles.avatar}
            ></div>
            <h2 className="align-center w-3/4 mb-2">
              <span className="block bg-gray-600 rounded-full w-full">
                &nbsp;
              </span>
            </h2>
            <p className="text-xs rounded-full bg-gray-800 text-gray-800 my-5 w-1/2">
              &npsp;
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

PhotoSkeleton.displayName = "PhotoSkeleton";

export default PhotoSkeleton;

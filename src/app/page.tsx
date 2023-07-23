import Gallery from "./ui/Gallery";

export default function Page(): JSX.Element {
  return <Gallery />;
}

const classes = {
  label: "bg-white px-3 rounded-sm lg:rounded-lg xl:rounded-xl",
  list: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3",
  listNav: "flex justify-between",
};

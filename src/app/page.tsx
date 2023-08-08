import { Gallery } from "./components";
import { getItems } from "./utils/get-data";

export default async function Page(): Promise<JSX.Element> {
  const photos = await getItems();

  const Gradient = () => (
    <div className="pointer-events-none bg-gradient-to-b from-black w-full h-24 fixed z-10 scale-110 opacity-60"></div>
  );

  return (
    <>
      <Gradient />
      <Gallery data={photos} />
    </>
  );
}

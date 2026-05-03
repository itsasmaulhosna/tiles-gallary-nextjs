import TileClient from "./TileClient";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://tiles-gallary-nextjs.vercel.app/data.json");
  const tiles = await res.json();

  const tile = tiles.find((t) => t.id == id);

  return <TileClient tile={tile} />;
};

export default TilesDetailsPage;
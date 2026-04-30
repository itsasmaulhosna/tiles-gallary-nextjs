import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
  const { id } =await params;

  const res = await fetch("https://tiles-gallary-nextjs.vercel.app/data.json"
    
  );
  const tiles = await res.json();

  const tile = tiles.find((t) => t.id == id);

  if (!tile) {
    return <h2 className="text-center mt-10">Tile not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="grid md:grid-cols-2 gap-6 border rounded-xl shadow-lg p-5">

        
        <div>
          <Image
            src={`${tile.image}?w=800&auto=format&fit=crop`}
            alt={tile.title}
            width={200}
            height={100}
            className="rounded-lg object-cover w-full"
          />
        </div>

        
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-3">{tile.title}</h2>

            <p className="text-gray-600 mb-5">
              {tile.description}
            </p>


            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Category:</span> {tile.category}</p>
              <p><span className="font-semibold">Material:</span> {tile.material}</p>
              <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>
<p>
                <span className="font-semibold">Stock:</span>{" "}
                {tile.inStock ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
              
            </div>

            <div className="mt-6 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              ${tile.price}
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
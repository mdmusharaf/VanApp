import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VanDetail() {
  const params = useParams();

  const [van, setVan] = useState(false);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((req) => req.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return van ? (
    <div className="p-8">
      <img src={van.imageUrl} alt="" className="rounded-md w-full" />
      <div className="py-4">
        <button className="bg-gray-900 text-white capitalize rounded-lg px-12 py-2">
          {van.type}
        </button>
        <h1 className="text-4xl py-4">{van.name}</h1>
        <h1 className="text-4xl pb-4">
          ${van.price} <span className="text-gray-400">/day</span>
        </h1>
        <p className="text-gray-500">{van.description}</p>
      </div>
    </div>
  ) : (
    <h1 className="text-center text-6xl">Loading...</h1>
  );
}

export default VanDetail;

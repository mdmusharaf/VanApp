import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const [vans, setVans] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/vans");
      const data = await res.json();

      setVans(data.vans);
    };
    getData();
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => {
        return van.type === typeFilter;
      })
    : vans;

  const vansElems = displayVans.map((vanData) => (
    <div className=" h-auto rounded-lg " key={vanData.id}>
      <Link to={`/vans/${vanData.id}`}>
        <img src={vanData.imageUrl} alt="" className="pb-4 rounded-lg" />
        <div className="flex justify-between pb-4 items-center ">
          <h1 className="text-xl">{vanData.name}</h1>
          <p className="">
            $<span>{vanData.price}</span>
          </p>
        </div>
        <button
          className={` w-full text-white capitalize rounded-md py-1 ${
            vanData.type == "rugged" || vanData.type == "simple"
              ? "bg-green-800"
              : "bg-orange-400"
          } `}>
          {vanData.type}
        </button>
      </Link>
    </div>
  ));
  return (
    <>
      <div>
        <h1 className="text-4xl md:text-6xl p-6">Explore Our Vans</h1>
        <div className="">
          <button
            className="bg-orange-400 px-4 ml-6 py-1 text-sm text-white rounded-md "
            onClick={() => setSearchParams("?type=simple")}>
            Simple
          </button>
          <button
            className="bg-orange-400 px-4 ml-6 py-1 text-sm text-white rounded-md "
            onClick={() => setSearchParams("?type=rugged")}>
            Rugged
          </button>

          <button
            className="bg-orange-400 px-4 ml-6 py-1 text-sm text-white rounded-md "
            onClick={() => setSearchParams("?type=luxury")}>
            Luxury
          </button>
          <Link className="text-black underline py-1 px-4 " to={""}>
            clear
          </Link>
        </div>
        {vans.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {vansElems}
          </div>
        ) : (
          <h1 className="text-4xl text-center">Loading....</h1>
        )}
      </div>
    </>
  );
}

export default Vans;

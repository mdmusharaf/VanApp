import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

function HostVansDetails() {
  const params = useParams();
  const [van, setVans] = useState(false);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((req) => req.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);
  console.log(van);
  return (
    <>
      {van ? (
        <div className="m-6">
          <Link
            to="/host/hostvans"
            className="block my-4 text-2xl hover:underline hover:text-gray-500 ">
            Back To all Vans
          </Link>
          <div className="bg-white shadow-md rounded-md h-auto min-w-full p-5">
            <div className=" grid items-center md:grid-cols-none grid-cols-2 ">
              <img
                src={van.imageUrl}
                alt="efr"
                className="md:h-auto h-52 w-52 md:w-full rounded-md"
              />
              <div className="md:pl-0 md:pt-6 pl-6">
                <button
                  className={`mb-2 text-white px-4 capitalize py-1 rounded-md  ${
                    van.type == "rugged" ? "bg-green-500" : "bg-gray-900"
                  }`}>
                  {van.type}
                </button>
                <h1 className="md:text-4xl text-xl font-semibold">
                  {van.name}
                </h1>
                <p className="md:text-4xl text-xl">
                  ${van.price}
                  <span className="text-gray-400">/day</span>
                </p>
              </div>
            </div>

            <nav className="text-xl py-4">
              <NavLink
                className="pe-4 hover:underline hover:text-gray-500"
                to=".">
                Info
              </NavLink>
              <NavLink
                className="px-4 hover:underline hover:text-gray-500"
                to="pricing">
                Pricing
              </NavLink>
              <NavLink
                className="px-4 hover:underline hover:text-gray-500"
                to="photos">
                Photos
              </NavLink>
            </nav>

            <Outlet context={{ van }} />
          </div>
        </div>
      ) : (
        <h1 className="text-4xl text-center">Loading...</h1>
      )}
    </>
  );
}

export default HostVansDetails;

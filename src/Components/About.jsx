import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="">
        <img
          src="https://plus.unsplash.com/premium_photo-1676122797197-68b933464002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
          alt="efrgt"
          className="h-auto w-full"
        />
        <div className="p-4">
          <h1 className="text-slate-950 text-5xl pb-10">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-orange-300 p-10 m-10 rounded-lg">
          <p className="text-black text-3xl pb-4">
            Your destination is waiting. Your van is ready.
          </p>
          <Link to="/vans">
            <button className="bg-black px-10 py-2 text-white rounded-md">
              Explore Our Vans
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

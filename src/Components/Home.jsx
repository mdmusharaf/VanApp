import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative flex justify-center items-center ">
        <img
          src="https://plus.unsplash.com/premium_photo-1676122796020-19c6df3a78b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="djfjheriu"
          className="w-full h-screen bg-cover bg-no-repeat"
        />
        <div className="absolute pl-7 md:pl-0 md:text-center md:w-2/3">
          <h1 className=" font-bold pb-4 text-6xl text-white f">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="text-white text-2xl pb-8">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="/vans">
            <button className="bg-orange-600 px-40 rounded-lg py-2 text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

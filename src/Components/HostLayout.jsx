import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <nav className="py-4">
        <Link
          to="/host"
          className="text-gray-500 text-base md:px-12 px-6 hover:text-gray-800 hover:underline hover:font-bold">
          Dashboard
        </Link>
        <Link
          to="/host/income"
          className="text-gray-500 text-base md:px-12 px-6 hover:text-gray-800 hover:underline hover:font-bold">
          Income
        </Link>
        <Link
          to="/host/hostVans"
          className="text-gray-500 text-base md:px-12 px-6 hover:text-gray-800 hover:underline hover:font-bold">
          Vans
        </Link>
        <Link
          to="/host/reviews"
          className="text-gray-500 text-base md:px-12 px-6 hover:text-gray-800 hover:underline hover:font-bold">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;

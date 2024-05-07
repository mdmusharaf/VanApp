import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "black",
};
function Header() {
  return (
    <>
      <nav className=" h-20 flex justify-between px-6 w-full items-center">
        <div className="pe-4">
          <Link to="/">
            <h1 className="uppercase  text-4xl font-medium text-black">
              #vanlife
            </h1>{" "}
          </Link>
        </div>
        <div>
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="px-6  text-gray-900 text-xl hover:text-gray-600">
            Host
          </NavLink>

          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="px-6 text-gray-900 text-xl hover:text-gray-600">
            Vans
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="px-6 text-gray-900 hover:text-gray-600 text-xl">
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;

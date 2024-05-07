import { useOutletContext } from "react-router-dom";

function HostVansPricing() {
  const { van } = useOutletContext();
  return (
    <div>
      <h1 className="text-xl text-gray-600 font-bold">
        <span className="text-black">Price:</span>
        {van.price}$/day
      </h1>
    </div>
  );
}

export default HostVansPricing;

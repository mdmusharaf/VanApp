import { useOutletContext } from "react-router-dom";

function HostVansInfo() {
  const { van } = useOutletContext();
  // console.log(van.name)
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-600 py-4">
        <span className="text-black text-xl">Name:</span>
        {van.name}
      </h1>
      <h1 className="text-xl font-bold text-gray-600 py-4">
        <span className="text-black text-xl">Type:</span>
        {van.type}
      </h1>
      <p className="text-base text-gray-500">
        <span className="text-black text-xl">Description:</span>
        {van.description}
      </p>
    </div>
  );
}

export default HostVansInfo;

import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <div>
   <img src={van.imageUrl} alt="" className="w-40 h-40 rounded-sm" />
    </div>
  )
}

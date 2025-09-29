import me from "../../assets/me.jpg";
import { ReactComponent as StarIcon } from "../../assets/star.svg";

export default function StaffPicksCard() {
  return (
    <div className="w-full h-fit mb-6">
      <span className="flex justify-between items-center gap-2 w-fit h-fit mb-1">
        <img
          src={me}
          alt={me}
          className="block w-6 aspect-square object-cover border-none rounded-full"
        />
        <span className="block w-fit h-fit font-light text-xs">
          <span className="text-gray-500">In</span> The Meduim Handbook{" "}
          <span className="text-gray-500">by</span> Zulie @ Medium
        </span>
      </span>
      <p className="font-semibold text-md mb-1 line-clamp-3">
        How this brand strategist uses Medium to explore ideas, repurpos content
        and land clients
      </p>
      <span className="flex justify-between items-center gap-2 w-fit h-fit">
        <StarIcon className="w-4 h-4" />
        <span className="block w-fit h-fit font-light text-xs">2d ago</span>
      </span>
    </div>
  );
}

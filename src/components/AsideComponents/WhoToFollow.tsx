import me from "../../assets/me.jpg";

export default function WhoToFollowCard() {
  return (
    <div className="w-full h-fit mb-4 flex justify-between items-start">
      <div className="w-4/6 h-fit flex justify-between items-start gap-2">
        <img
          src={me}
          alt={me}
          className="block w-6 aspect-square object-cover border-none rounded-full"
        />
        <p className="flex flex-col justify-between items-start gap-2 w-fit h-fit mb-1">
          <span className="font-semibold text-sm mb-1">Dr. Derek Austin</span>
          <span className="block w-fit h-fit font-light text-xs line-clamp-3">
            How this brand strategist uses Medium to explore ideas, repurpos
            content and land clients
          </span>
        </p>
      </div>
      <span className="px-3 py-1.5 rounded-full text-xs text-black w-fit border border-black cursor-pointer hover:bg-black hover:text-white transition">
        Follow
      </span>
    </div>
  );
}

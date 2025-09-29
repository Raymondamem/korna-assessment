import me from "../assets/me.jpg";
import { ReactComponent as StarIcon } from "../assets/star.svg";
import { ReactComponent as ClapIcon } from "../assets/clap.svg";
import { ReactComponent as ResponseIcon } from "../assets/response.svg";
import { ReactComponent as MinusCircleIcon } from "../assets/minus-circle.svg";
import { ReactComponent as BookmarkIcon } from "../assets/bookmark.svg";
import { ReactComponent as MoreIcon } from "../assets/more.svg";

interface ArticleCardProps {
  authorName?: string;
  title?: string;
  subtitle?: string;
  timeAgo?: string;
  claps?: string;
  responses?: string;
}

export default function ArticleCard({
  authorName = "Zulie @ Medium",
  title = "How this brand strategist uses Medium to explore ideas, repurpos content and land clients",
  subtitle = "It's not just a publishing platform. It's a community.",
  timeAgo = "2d ago",
  claps = "1.2k",
  responses = "45",
}: ArticleCardProps) {
  return (
    <div className="w-full h-fit mb-4 border-b-1 border-gray-200 py-4">
      <div className="w-full h-fit flex justify-between items-stretch gap-4">
        <div className="w-5/6 h-fit">
          <span className="flex justify-between items-center gap-2 w-fit h-fit mb-4">
            <img
              src={me}
              alt={me}
              className="block w-6 aspect-square object-cover border-none rounded-full"
            />
            <span className="block w-fit h-fit font-light text-[0.85rem]">
              <span className="text-gray-500">In</span> The Meduim Handbook{" "}
              <span className="text-gray-500">by</span> {authorName}
            </span>
          </span>
          <p className="font-bold text-[1.5rem]  mb-4">{title}</p>
          <span className="block w-fit h-fit font-light text-md text-gray-700">
            {subtitle}
          </span>
        </div>
        <span className="block w-2/6 aspect-video border-1 border-gray-500">
          <img src={me} alt={me} className="block w-full h-full object-cover" />
        </span>
      </div>
      <div className="flex justify-between items-center gap-2 w-4/6 max-md:w-full h-fit mt-2">
        <div className="flex justify-between items-center gap-4 w-fit h-fit">
          <StarIcon className="w-4 h-4" />
          <span className="block w-fit h-fit font-light text-xs">
            {timeAgo}
          </span>
          <span className="inline-flex justify-center items-center gap-0 cursor-pointer select-none text-xs">
            <ClapIcon className="w-4 h-4" />
            <span>{claps}</span>
          </span>
          <span className="flex justify-between items-center gap-1 w-fit h-fit">
            <ResponseIcon className="w-4 h-4" />
            <span className="text-xs">{responses}</span>
          </span>
        </div>
        <div className="flex justify-between items-center gap-4 w-fit h-fit">
          <span className="block w-fit h-fit font-light text-xs">
            <MinusCircleIcon className="w-6 h-6" />
          </span>
          <span className="block w-fit h-fit font-light text-xs max-md:hidden">
            <BookmarkIcon className="w-6 h-6" />
          </span>
          <span className="block w-fit h-fit font-light text-xs">
            <MoreIcon className="w-6 h-6" />
          </span>
        </div>
      </div>
    </div>
  );
}

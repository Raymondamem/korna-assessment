import StaffPicksCard from "./StaffPicks";
import WhoToFollowCard from "./WhoToFollow";
import PillButtonCard from "./PillButton";

const StaffPicks = Array.from({ length: 3 }, (_, i) => i + 1);
const WhoToFollow = Array.from({ length: 3 }, (_, i) => i + 1);
const RecommendedTopics = [
  "Data Science",
  "React",
  "Coding",
  "Mental health",
  "UX",
  "Python",
  "Productivity",
];

export default function AsideComponent() {
  return (
    <>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-4 font-semibold text-sm">Staff Picks</h3>
        <div className="w-full h-fit">
          {StaffPicks.map((picks) => (
            <StaffPicksCard key={picks} />
          ))}
        </div>
        <span className="inline-block text-xs text-gray-600">
          See the full list
        </span>
      </div>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-4 font-semibold text-sm mt-8">Recommended topics</h3>
        <div className="flex flex-wrap justify-start items-center gap-2 w-full h-fit mb-4">
          {RecommendedTopics.map((topic) => (
            <PillButtonCard key={topic} text={topic} />
          ))}
        </div>
        <span className="inline-block text-xs text-gray-600">
          See more topics
        </span>
      </div>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-4 font-semibold text-xs mt-8">Who to follow</h3>
        <div className="w-full h-fit">
          {WhoToFollow.map((follow) => (
            <WhoToFollowCard key={follow} />
          ))}
        </div>
        <span className="inline-block text-xs text-gray-600">
          See more suggestions
        </span>
      </div>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-2 font-semibold text-xs mt-8">Reading list</h3>
        <div className="w-full h-fit">
          <p className="text-xs text-black w-fit inline-flex leading-4">
            Click the{" "}
            <span className="inline text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="cc"
              >
                <path
                  fill="#000"
                  d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"
                ></path>
              </svg>
            </span>{" "}
            on my story to easily add it to your reading list or a custom list
            that you can share.
          </p>
        </div>
      </div>
    </>
  );
}

import me from "../assets/me.jpg";

export default function AsideComponent() {
  return (
    <>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-4 font-semibold text-sm">Staff Picks</h3>
        <div className="w-full h-fit">
          <div className="w-full h-fit mb-4">
            <span className="flex justify-between items-center gap-2 w-fit h-fit mb-1">
              <img
                src={me}
                alt={me}
                className="block w-6 aspect-square object-cover border-none rounded-full"
              />
              <span className="block w-fit h-fit font-light text-xs">
                In The Meduim Handbook by Zulie @ Medium
              </span>
            </span>
            <p className="font-semibold text-sm  mb-1">
              How this brand strategist uses Medium to explore ideas, repurpos
              content and land clients
            </p>
            <span className="flex justify-between items-center gap-2 w-fit h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#FFC017"
                  d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                ></path>
              </svg>
              <span className="block w-fit h-fit font-light text-xs">
                2d ago
              </span>
            </span>
          </div>
          <div className="w-full h-fit mb-4">
            <span className="flex justify-between items-center gap-2 w-fit h-fit mb-1">
              <img
                src={me}
                alt={me}
                className="block w-6 aspect-square object-cover border-none rounded-full"
              />
              <span className="block w-fit h-fit font-light text-xs">
                In The Meduim Handbook by Zulie @ Medium
              </span>
            </span>
            <p className="font-semibold text-sm  mb-1">
              How this brand strategist uses Medium to explore ideas, repurpos
              content and land clients
            </p>
            <span className="flex justify-between items-center gap-2 w-fit h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#FFC017"
                  d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                ></path>
              </svg>
              <span className="block w-fit h-fit font-light text-xs">
                2d ago
              </span>
            </span>
          </div>
          <div className="w-full h-fit mb-4">
            <span className="flex justify-between items-center gap-2 w-fit h-fit mb-1">
              <img
                src={me}
                alt={me}
                className="block w-6 aspect-square object-cover border-none rounded-full"
              />
              <span className="block w-fit h-fit font-light text-xs">
                In The Meduim Handbook by Zulie @ Medium
              </span>
            </span>
            <p className="font-semibold text-sm  mb-1">
              How this brand strategist uses Medium to explore ideas, repurpos
              content and land clients
            </p>
            <span className="flex justify-between items-center gap-2 w-fit h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#FFC017"
                  d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                ></path>
              </svg>
              <span className="block w-fit h-fit font-light text-xs">
                2d ago
              </span>
            </span>
          </div>
        </div>
        <span className="inline-block text-xs text-gray-600">
          See the full list
        </span>
      </div>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-4 font-semibold text-sm mt-8">Recommended topics</h3>
        <div className="flex flex-wrap justify-start items-center gap-2 w-full h-fit mb-4">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            Data Science
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            React
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            Coding
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            Mental health
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            UX
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            Python
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
            Productivity
          </span>
        </div>
        <span className="inline-block text-xs text-gray-600">
          See more topics
        </span>
      </div>
      <div className="w-5/6 mx-auto">
        <h3 className="mb-4 font-semibold text-xs mt-8">Who to follow</h3>
        <div className="w-full h-fit">
          <div className="w-full h-fit mb-4 flex justify-between items-start">
            <div className="w-4/6 h-fit flex justify-between items-start gap-2">
              <img
                src={me}
                alt={me}
                className="block w-6 aspect-square object-cover border-none rounded-full"
              />
              <p className="flex flex-col justify-between items-start gap-2 w-fit h-fit mb-1">
                <span className="font-semibold text-sm  mb-1">
                  Dr.Derek Austin
                </span>
                <span className="block w-fit h-fit font-light text-xs">
                  How this brand strategist uses Medium to explore ideas,
                  repurpos content and land clients
                </span>
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs text-black w-fit border border-black">
              Follow
            </span>
          </div>
          <div className="w-full h-fit mb-4 flex justify-between items-start">
            <div className="w-4/6 h-fit flex justify-between items-start gap-2">
              <img
                src={me}
                alt={me}
                className="block w-6 aspect-square object-cover border-none rounded-full"
              />
              <p className="flex flex-col justify-between items-start gap-2 w-fit h-fit mb-1">
                <span className="font-semibold text-sm  mb-1">
                  Dr.Derek Austin
                </span>
                <span className="block w-fit h-fit font-light text-xs">
                  How this brand strategist uses Medium to explore ideas,
                  repurpos content and land clients
                </span>
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs text-black w-fit border border-black">
              Follow
            </span>
          </div>
          <div className="w-full h-fit mb-4 flex justify-between items-start">
            <div className="w-4/6 h-fit flex justify-between items-start gap-2">
              <img
                src={me}
                alt={me}
                className="block w-6 aspect-square object-cover border-none rounded-full"
              />
              <p className="flex flex-col justify-between items-start gap-2 w-fit h-fit mb-1">
                <span className="font-semibold text-sm  mb-1">
                  Dr.Derek Austin
                </span>
                <span className="block w-fit h-fit font-light text-xs">
                  How this brand strategist uses Medium to explore ideas,
                  repurpos content and land clients
                </span>
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs text-black w-fit border border-black">
              Follow
            </span>
          </div>
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

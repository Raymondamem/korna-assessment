export default function TabHeader({
  tab,
  setTab,
}: {
  tab: boolean;
  setTab: (tab: boolean) => void;
}) {
  return (
    <div className="tap inline-flex gap-6 border-b-1 border-b-gray-100 w-full">
      <button
        type="button"
        onClick={() => setTab(!tab)}
        className={`block w-fit h-fit text-[0.80rem] pb-3 text-gray-400 relative ${
          tab &&
          "!text-black before:block before:absolute before:top-full before:w-full before:h-fit before:border-b-1 before:border-b-gray-500"
        }`}
      >
        For you
      </button>
      <button
        type="button"
        onClick={() => setTab(!tab)}
        className={`block w-fit h-fit text-[0.80rem] pb-3 text-gray-400 relative ${
          !tab &&
          "!text-black before:block before:absolute before:top-full before:w-full before:h-fit before:border-b-1 before:border-b-gray-500"
        }`}
      >
        Featured
      </button>
    </div>
  );
}

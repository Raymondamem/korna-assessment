export default function PillButtonCard({text}: {text: string}) {
  return (
    <span className="bg-gray-100 px-4 py-2 rounded-full text-xs text-black w-fit">
      {text}
    </span>
  );
}

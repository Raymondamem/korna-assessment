import ArticleCard from "../ArticleCard";

const Articles = Array.from({ length: 16 }, (_, i) => i + 1);

export default function TabFirstScreen() {
  return (
    <div className="w-full h-fit py-8">
      {Articles.map((article) => (
        <ArticleCard key={article} />
      ))}
    </div>
  );
}

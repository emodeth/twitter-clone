import { topics } from "../utils/topics";
import TopicItem from "./TopicItem";
import ShowMore from "./ShowMore";

function Topics() {
  return (
    <div className="bg-[color:var(--background-secondary)] rounded-2xl mb-4 border border-[color:var(--background-secondary)] flex flex-col">
      <h5 className="flex items-center py-3 px-4 text-xl font-extrabold leading-6">
        İlgini çekebilecek gündemler
      </h5>
      {topics.map((topic, i) => (
        <TopicItem topic={topic} key={i} />
      ))}
      <ShowMore />
    </div>
  );
}

export default Topics;

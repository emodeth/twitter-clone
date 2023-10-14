import { topics } from "../utils/topics";
import TopicItem from "./TopicItem";
import ShowMore from "./ShowMore";

function Topics() {
  return (
    <div className="bg-[#16181c] rounded-2xl mb-4 border border-[#16181c] text-[#e7e9ea] flex flex-col">
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

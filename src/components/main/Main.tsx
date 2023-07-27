import { offers, categories } from "../../data/data";
import SliderCard from "./SliderCard";
import SliderSection from "./SliderSection";

const Main: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <main className="w-full my-4 mt-32 sm:mt-[130px] md:w-[552px] lg:w-[800px] bg-white flex justify-center flex-col items-center rounded-3xl overflow-visible md:overflow-hidden">
        <SliderSection showAllHref="#" sliderTitle="مذهبی">
          {offers[0].data.map((data) => (
            <SliderCard
              key={data.id}
              cardSrc={data.image}
              title={data.title}
              alt={data.alt}
            />
          ))}
        </SliderSection>
      </main>
    </div>
  );
};

export default Main;

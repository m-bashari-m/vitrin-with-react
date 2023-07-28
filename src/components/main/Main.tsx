import { offers, categories } from "../../data/data";
import BannerSlider from "./BannerSlider";
import BestSection from "./BestSection";
import Category from "./Category";
import SliderCard from "./SliderCard";
import SliderSection from "./SliderSection";
import SmallBanner from "./SmallBanner";

const Main: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <main className="w-full my-4 mt-32 sm:mt-[130px] md:w-[570px] lg:w-[800px] bg-white flex justify-center flex-col items-center rounded-3xl overflow-visible md:overflow-hidden">
        <BannerSlider />

        <BestSection />

        {/* Relegious Section */}
        <SliderSection
          showAllHref={offers[0].showAll}
          sliderTitle={offers[0].id}
        >
          {offers[0].data.map((data) => (
            <SliderCard
              key={data.id}
              cardSrc={data.image}
              title={data.title}
              alt={data.alt}
            />
          ))}
        </SliderSection>

        <SmallBanner
          image={offers[0].banner.image}
          alt={offers[0].banner.alt}
        />

        <section className="px-5 my-4 justify-start grid grid-cols-4 gap-2">
          {categories.map((category) => (
            <Category
              image={category.image}
              alt={category.alt}
              title={category.title}
            />
          ))}
        </section>

        {offers.slice(1, offers.length + 1).map((offer) => (
          <>
            <SliderSection
              showAllHref={offer.showAll}
              sliderTitle={offer.id}
              key={offer.id}
            >
              {offer.data.map((data) => (
                <SliderCard
                  key={data.id}
                  cardSrc={data.image}
                  title={data.title}
                  alt={data.alt}
                />
              ))}
            </SliderSection>

            <SmallBanner image={offer.banner.image} alt={offer.banner.alt} />
          </>
        ))}
      </main>
    </div>
  );
};

export default Main;

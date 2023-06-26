import { getScheduleItems } from "@/lib/cardRenderHelpers";
import { ScheduleData } from "@/types/ScheduleData";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function ScheduleContent() {
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);
  const isEmbedded = useMediaQuery({ query: "(max-height: 500px)" });
  const items = getScheduleItems(scheduleData, 5, isEmbedded);

  useEffect(() => {
    fetch("/api/schedule-data")
      .then((res) => res.json())
      .then((scheduleData) => {
        setScheduleData(scheduleData);
      });
  }, []);


  return (
    <div className={`${ isEmbedded ? "p-2" : "p-4"} flex flex-col items-center`}>
      <h1 className={`glow animate-pulse-slow ${ isEmbedded ? "text-xl" : "text-9xl"} text-tarot-50 font-semibold`}>Weekly Stream Schedule</h1>
      <a className={`${ isEmbedded ? "text-sm" : "text-2xl"} text-tarot-300 font-BlackMango font-normal`} href="https://twitch.tv/lewn_atic">
        Twitch.tv/lewn_atic
      </a>
      { isEmbedded ?
        (
          <CarouselProvider
            naturalSlideWidth={320}
            naturalSlideHeight={460}
            totalSlides={items.length}
            className="bg-[rgba(30,30,30,0.8)] rounded-2xl p-3 backdrop-blur-ty drop-shadow-sm w-full h-full"
            isPlaying
          >
            <Slider>
              {items.map((item, index) => (
                <Slide index={index} key={index} className="space-x-1">
                  {item}
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        ) :
        (
          <div className="flex flex-row items-center space-x-7 mt-5 bg-[rgba(30,30,30,0.8)] rounded-2xl p-6 m-6 backdrop-blur-ty drop-shadow-sm">
            {getScheduleItems(scheduleData, 5)}
          </div>
        )
      }

    </div>
  );
}

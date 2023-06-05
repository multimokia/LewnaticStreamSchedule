import { SparkingHandsGraphic } from "@/components/Graphics/SparklingHandsGraphic";
import { TarotCardsGraphic } from "@/components/Graphics/TarotCardsGraphic";

export function HandsHoldingTarotCards() {
  return (
    <div className="flex flex-col items-center justify-center m-4 h-full">
      <TarotCardsGraphic className="w-2/4"/>
      <SparkingHandsGraphic className="w-3/4"/>
    </div>
  );
}

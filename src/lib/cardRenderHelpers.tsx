import { ArchTarotFrame } from "@/components/TarotFrames/ArchTarotFrame";
import { BeadCurtainTarotFrame } from "@/components/TarotFrames/BeadCurtainTarotFrame";
import { CrescentTarotFrame } from "@/components/TarotFrames/CrescentTarotFrame";
import { FancyFrameTarotFrame } from "@/components/TarotFrames/FancyFrameTarotFrame";
import { SoundwaveTarotFrame } from "@/components/TarotFrames/SoundwaveTarotFrame";

// Image imports
import { ScheduleItem } from "@/components/ScheduleItem";
import { HandsHoldingTarotCards } from "@/components/PlaceholderCardContents/HandsHoldingTarotCards";
import { CrescentSwirlsAroundHand } from "@/components/PlaceholderCardContents/CrescentSwirlsAroundHands";
import { PlaceholderItem } from "@/components/PlaceholderItem";
import { TarotFrameComponentFunction } from "@/types/CardFrame";
import { getRandomInt } from "@/lib/random";
import { ScheduleData } from "@/types/ScheduleData";

const frames = [
  CrescentTarotFrame,
  ArchTarotFrame,
  SoundwaveTarotFrame,
  FancyFrameTarotFrame,
  BeadCurtainTarotFrame
];

const placeholders = [
  HandsHoldingTarotCards,
  CrescentSwirlsAroundHand
];

function getFrameForIndex(index: number): TarotFrameComponentFunction {
  return frames[index % frames.length];
}

function getPlaceholderForIndex(index: number): () => JSX.Element {
  return placeholders[index % placeholders.length];
}

export function getScheduleItems(
  scheduleData: ScheduleData[],
  numCards: number = 5,
  isMobile: boolean = false
) {
  let rv: JSX.Element[] = [];
  if (numCards % 2 == 0) {
    rv = handleEvenAmountOfCards(scheduleData, numCards, isMobile);
  }

  else {
    rv = handleOddAmountOfCards(scheduleData, numCards, isMobile);
  }

  return optimize(rv, maxmindist);
}

function handleEvenAmountOfCards(scheduleData: ScheduleData[], numCards: number, isMobile: boolean) {
  const rv: JSX.Element[] = [];
  const maxPlaceholders = isMobile ? 0 : Math.max(0, numCards - scheduleData.length);
  let placeholdersUsed = 0;
  let scheduleItemsUsed = 0;

  for (let index = 0; index < numCards; index++) {
    if ((index % 2 == 0 && placeholdersUsed < maxPlaceholders) || scheduleData.length <= scheduleItemsUsed) {
      rv.push(<PlaceholderItem key={index} frame={getFrameForIndex(index)} content={getPlaceholderForIndex(placeholdersUsed)}/>);
      placeholdersUsed++;
    }

    else {
      rv.push(<ScheduleItem key={index} {...scheduleData[scheduleItemsUsed]} frame={getFrameForIndex(index)}/>);
      scheduleItemsUsed++;
    }
  }

  return rv;
}


function handleOddAmountOfCards(scheduleData: ScheduleData[], numCards: number, isMobile: boolean) {
  const rv: JSX.Element[] = [];
  const maxPlaceholders = isMobile ? 0 : Math.max(0, numCards - scheduleData.length);
  let placeholdersUsed = 0;
  let scheduleItemsUsed = 0;

  const scheduleItemOffset = scheduleData.length % 2;

  for (let index = 0; index < numCards; index++) {
    if ((index % 2 == scheduleItemOffset && placeholdersUsed < maxPlaceholders) || scheduleData.length <= scheduleItemsUsed) {
      rv.push(<PlaceholderItem key={index} frame={getFrameForIndex(index)} content={getPlaceholderForIndex(placeholdersUsed)}/>);
      placeholdersUsed++;
    }

    else {
      rv.push(<ScheduleItem key={index} {...scheduleData[scheduleItemsUsed]} frame={getFrameForIndex(index)}/>);
      scheduleItemsUsed++;
    }
  }

  return rv;
}

// ========================================

function optimize(items: JSX.Element[], optimizer: (items: JSX.Element[]) => number, stop=1000) {
  let noImprovement = 0;
  let best = 0;

  while (noImprovement < stop) {
    const i = getRandomInt(0, items.length - 1);
    const j = getRandomInt(0, items.length - 1);

    const copy = [...items];

    copy[i], copy[j] = copy[j], copy[i];

    const score = optimizer(copy);

    if (score > best) {
      items = copy;
      best = score;
      noImprovement = 0;
    }

    else {
      noImprovement++;
    }
  }

  return items;
}

function maxmindist(items: JSX.Element[]) {
  let max = 0;

  for (const item of items) {
    const indcs = items.filter((_, index) => items[index] == item);

    if (indcs.length > 1) {
      for (let i = 0; i < indcs.length - 1; i++) {
        max += 1 / (indcs[i + 1].key as number - (indcs[i].key as number));
      }
    }
  }

  return max;
}

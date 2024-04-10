import clsx, { ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";
import { EventoEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Capatalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function Sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function fetchData(city: string) {
  // await Sleep(2000);
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await res.json();
  return events;
}

export async function getEvent(slug: string) {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await res.json();
  return event;
}

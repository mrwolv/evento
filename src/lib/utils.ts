import clsx, { ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

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

export async function fetchData(city: string, page = 1) {
  prisma.eventoEvent.findMany();

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : Capatalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: Capatalize(city),
      },
    });
  }

  return { events, totalCount };
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}

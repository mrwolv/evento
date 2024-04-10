import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import { fetchData } from "@/lib/utils";

type EventListProps = {
  city: string;
};

export default async function EventLists({ city }: EventListProps) {
  const events = await fetchData(city);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px] ">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
}

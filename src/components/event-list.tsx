import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { fetchData } from "@/lib/utils";
import PaginationControl from "./pagination-control";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventLists({ city, page=1 }: EventListProps) {

  const { events, totalCount } = await fetchData(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px] ">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
      <PaginationControl previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}

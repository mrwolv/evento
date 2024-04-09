import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import EventLists from "@/components/event-list";
import { Sleep } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsCity = async ({ params }: EventsPageProps) => {
  const city = params.city;
  await Sleep(2000);
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await res.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events "}

        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventLists events={events} />
    </main>
  );
};

export default EventsCity;

import H1 from "@/components/h1";

import EventLists from "@/components/event-list";

import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { title } from "process";
import { Capatalize } from "@/lib/utils";

type Props = {
  params: {
    city: string;
  };
};

// Generating Metadata for diffrent Pages

export function generateMetadata({ params }: Props):Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${Capatalize(city)}`,
  };
}

const EventsCity = ({ params }: Props) => {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events "}

        {city !== "all" && `Events in ${Capatalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventLists city={city} />
      </Suspense>
    </main>
  );
};

export default EventsCity;

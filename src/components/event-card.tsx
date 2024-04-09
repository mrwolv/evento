import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
    >
      <section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects ">
        <Image
          src={event.imageUrl}
          alt={event.name}
          height={280}
          width={500}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex flex-col  justify-between items-center left-3 top-3 h-[45px] w-[45px] bg-black/30">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-accent text-xs">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
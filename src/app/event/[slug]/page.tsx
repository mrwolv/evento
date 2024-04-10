import H1 from "@/components/h1";
import {  getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

const EventPage = async ({ params }: Props) => {
  const slug = params.slug;

  // await Sleep(2000);
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          alt="event background image"
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw,1280px "
          className=" object-cover blur-3xl z-0 "
          priority
        />
        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-16 relative ">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover "
          />
          <div className="flex flex-col ">
            <p className="text-white/75 ">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Oragnized by <span className="italic">{event.organizerName}</span>{" "}
            </p>
            <button
              className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto bg-blur
             border-white/10 border-2 rounded-md w-[95vw] sm:w-full py-2
             state-effects focus:scale-105
             "
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this events</SectionHeading>
          <SectionDescription>{event.description}</SectionDescription>
        </Section>
        <Section>
          <SectionHeading>Locations</SectionHeading>
          <SectionDescription>{event.location}</SectionDescription>
        </Section>
      </div>
    </main>
  );
};

export default EventPage;

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl ">{children}</h2>;
}
function SectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-12 max-w-4xl mx-auto text-lg leading-8 tracking text-white/75">
      {children}
    </p>
  );
}

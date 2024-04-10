import SearchForm from "@/components/search-form";
import Link from "next/link";
import H1 from "@/components/h1";

const Home = () => {
  return (
    <main className="flex flex-col px-3 items-center pt-36">
      <H1>Find events around you.</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-50">
        Browse more that
        <span className="italic font-bold underline text-accent"> 10,000 </span>
        events around you.
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p className="">Popular : </p>
        <div className="space-x-3 font-semibold">
          <Link href={"/events/seattle"}>Seattle</Link>
          <Link href={"/events/Austin"}>Austin</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

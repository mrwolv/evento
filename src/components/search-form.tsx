"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  }
  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        placeholder="Search event in any city...."
        spellCheck={false}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white bg-white/[7%] px-6 outline-none
      ring-accent/50 transition focus:ring-2 focus:bg-white/[10%]"
      />
    </form>
  );
}

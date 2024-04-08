import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <h1>Find events around you.</h1>
      <p>Browse more that 10,000 events around yout.</p>
      <form>
        <input
          type="text"
          placeholder="Search event in any city...."
          spellCheck={false}
        />
      </form>
      <section>
        <p>Popular</p>
        <div>
          <Link href={"/events/delhi"}>Delhi</Link>
          <Link href={"/events/mumbai"}>Mumbai</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

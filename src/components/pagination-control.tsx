import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationProps = {
  previousPath: string;
  nextPath: string;
};
const btnStyle =
  "text-white px-5 py-3 bg-white/5 gap-x-2 rounded-md opacity-75 flex items-center hover:opacity-100 text-sm";

export default function PaginationControl({
  previousPath,
  nextPath,
}: PaginationProps) {
  return (
    <section className="flex items-center justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : null}

      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="text-2xl">
      Visit the <span className="font-bold">
        <Link href='/events'>
        events
        </Link>        
      </span> page.
    </main>
  );
}

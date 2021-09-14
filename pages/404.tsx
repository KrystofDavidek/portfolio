import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="flex flex-col p-4 text-center">
      <h1 className="m-4 text-5xl">404 – Page Not Found</h1>
      <Link href="/">
        <a className="text-green">Go back home</a>
      </Link>
    </div>
  );
}

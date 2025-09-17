import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Header() {
  const client = createClient();
  const head = await client.getSingle("head");
  return (
    <Bounded full className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between relative p-3 font-black-slanted">
        <nav>
          <ul className="flex items-center ">
            {head.data.navigation_bar.map(({ link, lable }) => (
              <li key={lable}>
                <PrismicNextLink field={link} className="px-4 text-sm">
                  {lable}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </Link>

        <button className="px-6 py-3 bg-black text-white text-sm rounded-4xl mr-4 ">
          Book Now
        </button>
      </div>
    </Bounded>
  );
}

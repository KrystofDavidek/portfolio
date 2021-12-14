import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const NavItem: FC<{ activeItem: string; setActiveItem: Function; name: string; route: string }> = ({
  activeItem,
  name,
  route,
  setActiveItem,
}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("About");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
    if (pathname === "/wordpress") setActiveItem("Wordpress Blog");
    if (pathname === "/strapi") setActiveItem("Strapi Blog");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 dark:text-white md:text-2xl border-green">{activeItem}</span>
      <div className="flex space-x-5 text-lg ">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Wordpress Blog" route="/wordpress" />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Strapi Blog" route="/strapi" />
      </div>
    </div>
  );
};

export default Navbar;

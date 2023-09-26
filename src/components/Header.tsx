import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";
import { useState } from "preact/hooks";

export const hoveredNavItem = atom<string | null>(null);

interface HeaderItemProps {
  link: string;
  name: string;
  subpages: HeaderSubItemProps[];
}

interface HeaderSubItemProps {
  link: string;
  name: string;
  imagePath: string;
}

function HeaderItem({ link, name, subpages }: HeaderItemProps) {
  const $hoveredNavItem = useStore(hoveredNavItem);
  const isSubItemVisible = $hoveredNavItem === name;

  return (
    <>
      <div
        className="relative z-50 px-2 text-center"
        onMouseEnter={(_) => hoveredNavItem.set(name)}
        onMouseLeave={(_) => hoveredNavItem.set(null)}
      >
        <a href={link} className="">
          {name}
        </a>
        {subpages.length > 0 ? (
          <div className={`absolute z-50 ${isSubItemVisible ? "visible" : "invisible"} hover:visible`}>hoge</div>
        ) : (
          <></>
        )}
      </div>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full  ${
          isSubItemVisible && subpages.length > 0 ? "visible bg-zinc-500 bg-opacity-80 " : "invisible"
        }`}
      ></div>
    </>
  );
}

const navItems: HeaderItemProps[] = [
  {
    link: "/company",
    name: "Company",
    subpages: [],
  },
  {
    link: "/service",
    name: "Services",
    subpages: [
      {
        link: "/service/tech-advisor",
        name: "技術顧問",
        imagePath: "/assets/logo.svg",
      },
      {
        link: "/service/hiring-support",
        name: "エンジニア採用支援",
        imagePath: "/assets/logo.svg",
      },
    ],
  },
  {
    link: "/news",
    name: "News",
    subpages: [],
  },
  {
    link: "/blog",
    name: "Blog",
    subpages: [],
  },
  {
    link: "/contact",
    name: "Contact",
    subpages: [],
  },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="fixed z-50 flex w-full justify-between">
      <h1>
        <a href="/">
          <img src="/assets/logo.svg" className="m-3 h-8 md:h-12 lg:h-12" alt="K Squad" />
        </a>
      </h1>
      <div className="hidden w-fit pr-24 text-xl md:inline-block">
        <nav className="flex h-full items-center">
          {navItems.map((e, idx) => (
            <HeaderItem key={idx} link={e.link} name={e.name} subpages={e.subpages} />
          ))}
        </nav>
      </div>
      <button className={`f-full items-center p-4 md:hidden`}>hoge</button>
    </header>
  );
}

import { useEffect, useState } from "preact/hooks";

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

function HanburgerMenu() {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <button
        className="group z-20 flex h-12 w-12 flex-col items-center justify-center rounded"
        onClick={() => {
          setOpen(!open);
          setClicked(true);
        }}
      >
        <div
          className={`${genericHamburgerLine} ${
            open ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div className={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
          className={`${genericHamburgerLine} ${
            open ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      {clicked ? (
        <div
          className={`absolute left-0 top-0 -z-10 h-screen w-screen ${
            open && clicked ? "animate-appear bg-white bg-opacity-90" : `animate-disappear bg-white`
          }`}
        >
          <div className="py-40 text-center">
            {navItems.map((e) => (
              <div className="p-4 text-3xl font-bold">
                <a href={e.link}>{e.name}</a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function HeaderItem({ link, name, subpages }: HeaderItemProps) {
  const [subItemVisible, setSubItemVisible] = useState(false);
  const [afterRender, setAfterRender] = useState<boolean>(false);

  return (
    <>
      <div
        className="relative z-50 px-2 text-center"
        onMouseEnter={(_) => {
          setSubItemVisible(true);
          if (subpages.length > 0) setAfterRender(true);
        }}
        onMouseLeave={(_) => setSubItemVisible(false)}
      >
        <a href={link} className="">
          {name}
        </a>
        {subpages.length > 0 ? (
          <div
            className={`absolute z-50 w-screen ${
              subItemVisible ? "visible animate-appear" : "invisible animate-disappear"
            } hover:visible`}
          >
            <div className="flex w-fit -translate-x-2/3 divide-x rounded bg-white p-4 text-start">
              <div className="mb-8 mr-8 flex-initial p-4">
                <p className="text-3xl font-bold">{name}</p>
                <a href={link} className="flex text-sm">
                  <p class="self-center">View Details</p>
                  <div class="self-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15">
                      <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="container flex w-full">
                {subpages.map((e) => (
                  <div className="p-4">
                    <a href={e.link}>
                      <img
                        src={e.imagePath}
                        className={`linear m-3 h-48 ${subItemVisible ? "duration-150" : ""}  hover:scale-105`}
                        alt={e.name}
                      />
                    </a>
                    <a href={e.link}>
                      <p className="text-center text-sm font-bold">{e.name}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {subpages.length > 0 ? (
        <div
          className={`fixed left-0 top-0 h-full w-full ${
            subItemVisible
              ? "z-10 animate-appear bg-black bg-opacity-50"
              : `animate-disappear ${afterRender ? "bg-black bg-opacity-50" : ""}`
          }`}
        ></div>
      ) : (
        <></>
      )}
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
        imagePath: "/assets/services/advisor.svg",
      },
      {
        link: "/service/team-building",
        name: "エンジニア組織構築",
        imagePath: "/assets/services/team-building.svg",
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
    link: "/careers",
    name: "Careers",
    subpages: [],
  },
  {
    link: "/contact",
    name: "Contact",
    subpages: [],
  },
];

export default function Header() {
  const [navColor, setnavColor] = useState("bg-transparent");
  const listenScrollEvent = () =>
    window.scrollY > 10
      ? setnavColor("bg-white bg-opacity-90 transition duration-300")
      : setnavColor("transparent transition duration-300");
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={`fixed z-40 flex w-full justify-between ${navColor}`}>
      <a href="/" className="z-50">
        <h1>
          <img src="/assets/logo.svg" className="m-3 h-8 md:h-12 lg:h-12" alt="K Squad" />
        </h1>
      </a>

      <div className="hidden w-fit pr-24 text-xl md:inline-block">
        <nav className="flex h-full items-center">
          {navItems.map((e, idx) => (
            <HeaderItem key={idx} link={e.link} name={e.name} subpages={e.subpages} />
          ))}
        </nav>
      </div>
      <div className={`fix items-center p-4 md:hidden`}>
        <HanburgerMenu />
      </div>
    </header>
  );
}

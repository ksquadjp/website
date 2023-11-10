import { useEffect, useState } from "preact/hooks";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="200"
      style={{ "stroke-width": "20px", "stroke-linecap": "round" }}
    >
      <line className="stroke-neutral-300" x1="30" y1="30" x2="230" y2="30" />
      <line className="stroke-neutral-800" x1="100" y1="90" x2="350" y2="90" />
      <line className="stroke-neutral-400" x1="60" y1="150" x2="260" y2="150" />
    </svg>
  );
}

export default function Services() {
  const [visible, setVisible] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > window.screen.height * 1.2 ? setVisible(true) : null;
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  if (visible)
    return (
      <div className="m-6 animate-fadeInBottom lg:flex">
        <div class="">
          <Icon />
        </div>
        <div class="my-auto">
          <h2 class="py-4 text-4xl font-bold">Service</h2>
          <p>
            K
            Squadは、プロダクト開発、新規事業立ち上げ、組織支援、エンジニア採用など、クライアント企業の様々なビジネス課題をソフトウェアエンジニアリングで解決します。
          </p>
          <a href="/service">
            <div className="mx-auto my-4 w-32 border-2 border-black bg-slate-700 text-center leading-loose text-white transition-colors hover:bg-white hover:text-black">
              View Service
            </div>
          </a>
        </div>
      </div>
    );
  return <div className="h-96"></div>;
}

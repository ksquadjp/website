import { useEffect, useState } from "preact/hooks";

export default function AboutUs() {
  const [visible, setVisible] = useState(false);
  const listenScrollEvent = () => (window.scrollY > window.screen.height * 0.8 ? setVisible(true) : null);
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  if (visible)
    return (
      <div className="relative h-96 animate-fadeInBottom">
        <div className="rounded-lg bg-gray-200 bg-opacity-60 lg:absolute lg:h-5/6 lg:w-11/12">
          <div className="mx-8 h-fit lg:w-4/6">
            <div className="py-4 text-center text-2xl font-bold lg:text-4xl">K Squad is ...</div>
            <div className="text- m-2">
              <p className="my-2">
                K Squadのミッションはソフトウェアエンジニアリングをあらゆる人が活用できるようにすることです。
                新規事業の技術検証から技術顧問として開発支援、データ活用、エンジニア採用支援など、活動は非常に多岐に渡ります。
              </p>
              <p className="my-2">
                メンバーのほとんどが京大出身であり(中には首席も在籍)、"おもろいことをする"をテーマに業界トップクラスのIT人材としてクライアントの問題解決に取り組みます。
              </p>
            </div>
            <div className="py-2">
              <a href="/company">
                <div className="mx-auto my-4 w-32 border-2 border-black bg-slate-700 text-center leading-loose text-white transition-colors hover:bg-white hover:text-black">
                  Company Page
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="invisible absolute bottom-0 right-0 w-fit lg:visible">
          <img src="/assets/about_us.jpg" height={300} width={300} alt="About Us" className="rounded" />
        </div>
      </div>
    );
  return <div className="h-96"></div>;
}

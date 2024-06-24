import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 scroll-smooth font-bold flex flex-col gap-32 bg-about-background-color">
        <section className="flex flex-col">
          <div className="flex justify-center flex-col items-center gap-5">
            <p className="w-1/3 text-center text-2xl text-zinc-800">
              <span className="text-primary-red font-eckmann text-3xl">
                EDEL
              </span>{" "}
              is a DJ/producer born in{" "}
              <span className="text-primary-red">Bahia, Brazil.</span> His
              musical journey began at home, where his mother introduced him to{" "}
              <span className="text-primary-red">
                various Brazilian music styles,
              </span>{" "}
              and at the age of 10, his father gifted him his{" "}
              <span className="text-primary-red">first guitar.</span>
            </p>
            <div className="flex justify-center w-full bg-about-page-bg bg-no-repeat bg-center bg-contain">
              <img
                className="max-w-md"
                src="/images/img1-about.png"
                alt="EDEL playing a track with a view from the ocean at the background."
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex justify-center flex-col items-center gap-5">
            <p className="w-1/3 text-center text-2xl font-bold text-zinc-800">
              Started{" "}
              <span className="text-primary-red">producing music at 16</span>{" "}
              and over time has had several opportunities to perform at
              prominent{" "}
              <span className="text-primary-red">
                clubs and open-air events,
              </span>{" "}
              as well as release his{" "}
              <span className="text-primary-red">
                first independent single.
              </span>
            </p>
            <div className="flex gap-20">
              <img
                className="max-w-md"
                src="/images/img2-about.png"
                alt="EDEL playing a track with a view from the ocean at the background."
              />
              <img
                className="max-w-md"
                src="/images/img3-about.png"
                alt="EDEL playing a track with a view from the ocean at the background."
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex justify-center flex-col items-center">
            <p className="w-1/3 text-center text-2xl font-bold text-zinc-800">
              Today, continues to refine his skills as a DJ and producer,
              bringing innovative contributions to the{" "}
              <span className="text-primary-red">
                melodic house/afro scene,
              </span>{" "}
              heavily influenced by his hometown.
            </p>
          </div>
          <section className="h-dvh bg-edel-playing-about-bg bg-no-repeat bg-cover"></section>
        </section>
        <Footer />
      </section>
    </>
  );
}

import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="px-12 md:px-24">
        <div className="p-8 mt-16 md:mt-36">
          <h2 className="text-4xl md:text-8xl  text-center	font-sans">
            We decode complexity into creative solutions
          </h2>
        </div>

        <div className="w-full relative">
          {/* <img src={"/images/encoded-hero.png"} className="w-full mt-12" /> */}

          <div className="absolute p-8 bottom-0 right-4 md:right-16 bg-black w-1/3 hidden">
            <h1 className="text-white" style={{ fontSize: "4vw" }}>
              Encoded Studio
            </h1>
          </div>
        </div>

        <div className="py-8 mt-16 md:mt-36">
          <h3 className="text-2xl md:text-6xl text-right	font-sans">
            We design new visual formats
          </h3>
        </div>

        <div className="w-full relative mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative aspect-square"
            style={{
              backgroundImage: "url(/images/planes.png)",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="relative aspect-square pt-16"
            style={{
              backgroundImage: "url(/images/circle-grid-02.png)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="py-8 mt-16 md:mt-36">
          <h3 className="text-2xl md:text-6xl text-left	font-sans">
            We build immersive experiences
          </h3>
        </div>

        <div className="w-full relative mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative aspect-square"
            style={{
              backgroundImage: "url(/images/immersivity.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="relative aspect-square pt-16"
            style={{
              backgroundImage: "url(/images/medroom.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="py-8 mt-16 md:mt-36">
          <h3 className="text-2xl md:text-6xl text-right	font-sans">
            We transform spaces with technology
          </h3>
        </div>

        <div className="w-full relative mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="relative aspect-square"
            style={{
              backgroundImage: "url(/images/cluster.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="relative aspect-square pt-16"
            style={{
              backgroundImage: "url(/images/CLUSTER_24.jpg",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="w-full relative bg-neutral-800 mt-24 text-white p-8">
          <div className="flex text-3xl md:text-5xl justify-center py-8 font-sans">
            Say Hello!
          </div>
          <div className="flex justify-center flex-col md:flex-row  py-8">
            <div className="flex p-2 justify-center">
              <a
                className="text-2xl md:text-3xl"
                href="mailto:encoded.studio@gmail.com"
              >
                email
              </a>
            </div>
            <div className="flex p-2 justify-center"></div>
            <div className="flex p-2 justify-center">
              <a
                className="text-2xl md:text-3xl"
                href="https://www.instagram.com/encoded.studio/"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center my-8">
        <img
          className="block h-16 w-auto"
          src={"/images/logo.png"}
          alt="Encoded Logo"
        />
      </footer>
    </div>
  );
}

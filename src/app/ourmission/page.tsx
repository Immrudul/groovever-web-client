import Image from "next/image";

export default function OurMissionPage() {
  return (
    <div className="relative h-[50vh] lg:h-[75vh] overflow-hidden">
      <div className="h-full absolute inset-0">
        <Image
          src="/hearts.png"
          alt="hearts and darts image"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <div className="absolute inset-0 text-gwhite flex flex-col justify-end">
        <div className="max-w-6xl px-4 py-10 lg:py-20 lg:px-32 space-y-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl slogan">
            OUR MISSION:
          </h1>
          <div className="md:text-lg lg:text-2xl xl:text-3xl">
            <em>
              To <b>connect</b> dancers worldwide.
              <br />
              To <b>spread</b> the joy of street dance.
            </em>
          </div>
          <p className="text-xs md:text-lg lg:text-xl xl:text-2xl">
            Whether you&apos;re just starting out or you&apos;ve got some
            training under your belt, whether you&apos;re a hip-hop lover or
            fascinated with funk, whether you&apos;re studying in Waterloo or
            residing in Vancouver, - we got you covered.
          </p>
          <p className="text-xs md:text-lg lg:text-xl xl:text-2xl">
            Exciting features leveraging the most advanced technologies such as
            AR & AI coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function OurMissionPage() {
  return (
    <div className="relative h-[30vh] lg:h-[75vh]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Dreamville.jpg"
          alt="v image"
          layout="fill"
          objectFit="fill"
        ></Image>
      </div>
      <div className="absolute inset-0 text-white font-sans lg:w-3/5 flex flex-col justify-center px-3 lg:p-28">
        <div className="flex justify-between items-center">
          <div className="text-lg lg:text-5xl font-black">OUR MISSION:</div>
          <br />
          <div className="text-sm lg:hidden">
            <em>
              To <b>connect</b> dancers worldwide. <br />
              To <b>spread</b> the joy of street dance.
            </em>
          </div>
        </div>
        <br />
        <div className="hidden text-xl lg:block">
          <em>
            To <b>connect</b> dancers worldwide. <br />
            To <b>spread</b> the joy of street dance.
          </em>
        </div>
        <br />
        <div className="text-sm lg:text-xl">
          Whether you’re just starting out or you’ve got some training under
          your belt, whether you’re a hip-hop lover or fascinated with funk,
          whether you’re studying in Waterloo or residing in Vancouver, – we got
          you covered.
          <br />
          <br />
          Exciting features leveraging the most advanced technologies such as AR
          & AI coming soon.
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import img1 from "/public/Hearts and Darts.png";

export default function ExtendedLandingPage() {
  return (
    <div>
      <div className="flex">
        <div className="bg-slate-200 w-8/12 p-20 font-sans">
          <div className="text-3xl">
            Want to learn from world class instructors and get feedback?
          </div>
          <br />
          <div className="text-xl">
            Affordable tutorials in 3 formats — livestream, recorded and in
            person covering all street dance styles and levels.
            <br />
            <br />
            With our exclusive livestream classes, you can interact with
            instructors in real time and even get 1 on 1 feedback!
          </div>
          <div className="bg-slate-500">
            <a>hello</a>
          </div>
        </div>
        <div className="w-4/12 aspect-square">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/Hearts and Darts.png"
              alt="hearts and darts image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-4/12 aspect-square">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/Milky Way.png"
              alt="milky way image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-end text-right bg-slate-200 w-8/12 p-20 font-sans  ">
          <div className="text-3xl">
            Can’t find like-minded peers in your region?
          </div>
          <br />
          <div className="text-xl">
            Find dancers in your city locally or around the world globally!
            <br />
            <br />
            Dance with peers to gain motivation and learn from one another.{" "}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-slate-200 w-8/12 p-20 font-sans">
          <div className="text-3xl">
            No idea of where to find dance event information?{" "}
          </div>
          <br />
          <div className="text-xl">
            Battles, performances and other events. Street culture, street wear
            and every other thing that we care.  <br />
            <br />
            Never miss out opportunities in the future!{" "}
          </div>
        </div>

        <div className="w-4/12 aspect-square">
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image src="/V.png" alt="v image" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

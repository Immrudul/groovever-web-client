import Image from "next/image";
import img1 from "/public/Hearts and Darts.png";

export default function ExtendedLandingPage() {
  return (
    <div>
      <div className="flex">
        <div className="bg-slate-200 w-8/12 p-10 lg:p-20 font-helvetica">
          <div className="text-base lg:text-3xl">
            <em>
              Want to learn from <b>world class</b> instructors and get
              <b> feedback?</b>
            </em>
          </div>
          <br />
          <div className="text-sm lg:text-xl">
            Affordable tutorials in 3 formats — <b>livestream, recorded </b>and{" "}
            <b>in person</b> covering all street dance styles and levels.
            <br />
            <br />
            With our exclusive livestream classes, you can interact with
            instructors in real time and even get <b>1 on 1 feedback!</b>
          </div>
          <br />
          <br />
          <div className="bg-gyellow rounded-full h-8 lg:h-10 flex justify-center items-center font-helvetica font-black w-28 lg:w-40 text-xs lg:text-base">
            <a>LEARN ➜</a>
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

        <div className="flex flex-col items-end text-right bg-slate-200 w-8/12  p-10 lg:p-20 font-helvetica  ">
          <div className="text-base lg:text-3xl">
            <em>
              Can’t find like-minded <b>peers</b> in your region?
            </em>
          </div>
          <br />
          <div className="text-sm lg:text-xl">
            Find dancers in your city <b>locally</b> or around the world{" "}
            <b>globally</b>!
            <br />
            <br />
            Dance with peers to gain motivation and learn from one another.{" "}
          </div>
          <br />
          <br />
          <div className="bg-gyellow rounded-full h-8 lg:h-10 flex justify-center items-center font-helvetica font-black w-28 lg:w-40 text-xs lg:text-base">
            <a>RESOURCES ➜ </a>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-slate-200 w-8/12 p-10 lg:p-20 font-helvetica">
          <div className="text-base lg:text-3xl">
            <em>
              No idea of where to find dance <b>event</b> information?
            </em>
          </div>
          <br />
          <div className="text-sm lg:text-xl">
            Battles, performances and other <b>events</b>. Street culture,
            street wear and every other thing that we care.  <br />
            <br />
            Never miss out opportunities in the future!{" "}
          </div>
          <br />
          <br />
          <div className="bg-gyellow rounded-full h-8 lg:h-10 flex justify-center items-center font-helvetica font-black w-28 lg:w-40 text-xs lg:text-base">
            <a>CONNECT ➜</a>
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

import Image from "next/image";

export default function ConnectPage() {
  return (
    <div className="">
      <div className="relative h-[60vh] xl:h-[75vh] overflow-hidden">
        <div className="h-full absolute inset-0">
          <div className="relative h-full">
            <Image
              src="/Dreamville.jpg"
              alt="learn"
              style={{ objectFit: "cover", opacity: 0.5 }} // Adjust opacity as needed
              priority
              fill
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-gorange text-6xl xl:text-8xl font-black">
                CONNECT
              </div>
              <br />
              <br />
              <div className="text-center text-xl xl:text-xl">
                Find dancers in your city <b>locally</b> or around the world{" "}
                <b>globally</b>!
              </div>
              <br />
              <div className="text-center text-xl xl:text-xl">
                Dance with peers to gain motivation and learn from each other.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join flex xl:flex-row flex-col xl:border-8 border-4 mx-10 xl:rounded-3xl rounded-2xl border-orange-400 my-10">
        <div className="xl:w-1/3">
          <img
            src="V.png"
            alt="Album"
            className=" object-cover xl:rounded-2xl rounded-xl w-full aspect-video"
          />
        </div>
        {/* Dont remove the 0.1px padding it actually does make a difference in the mobile version believe it or not! */}
        <div className="bg-white xl:h-auto flex flex-col justify-between xl:p-6 xl:-ml-12 xl:mx-0 p-5 xl:my-0 mb-10 -mt-3 ml-[0.1px] xl:w-2/3 ">
          <div className="">
            <div className="text-4xl font-black pb-4">
              University of Waterloo Street Dance
            </div>
            <div className="xl:-mr-10 text-lg">
              This is the place holder for the content of UofW street dance
              introduction, and it's good to know that Elysia is my waifu! This
              is the place holder for the content of UofW street dance
              introduction, and it's good to know that Elysia is my waifu! This
              is the place holder for the content of UofW street dance
              introduction, and it's good to know that Elysia is my waifu!
            </div>
          </div>
          <div className="space-x-2 xl:mt-0 mt-4 xl:mb-0 -mb-10 text-lg">
            <span>FRIENDLY LINKS:</span>
            <span>Website Website Website Website</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <div className="h-[4.5rem] lg:h-20" />
        <div className="">
          <div className="relative h-[60vh] xl:h-[75vh] overflow-hidden">
            <div className="h-full absolute inset-0">
              <div className="relative h-full">
                <Image
                  src="/mission.jpg"
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
                    Dance with peers to gain motivation and learn from each
                    other.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="join flex xl:flex-row flex-col xl:border-8 border-4 mx-10 xl:rounded-3xl rounded-2xl border-orange-400 my-10">
            <div className="xl:w-1/3">
              <img
                src="logo2.png"
                alt="UWSD"
                className=" object-cover xl:rounded-2xl rounded-xl w-full aspect-video lg:pr-10"
              />
            </div>
            {/* Dont remove the 0.1px padding it actually does make a difference in the mobile version believe it or not! */}
            <div className="bg-white xl:h-auto flex flex-col justify-between xl:p-6 xl:-ml-12 xl:mx-0 p-5 xl:my-0 mb-10 -mt-3 ml-[0.1px] xl:w-2/3 ">
              <div className="">
                <div className="flex lg:flex-row flex-col lg:items-center items-start pb-4 lg:space-x-8">
                  <span className="text-4xl font-black">
                    GroovEver Test User Community
                  </span>
                  <button className="lg:mt-0 mt-4 btn btn-secondary btn-sm ">
                    OFFICIAL
                  </button>
                </div>
                <div className="xl:-mr-10 text-lg">
                  Join our discord server to be a part of GroovEver test user
                  community! Registering as a test user allows you to get early
                  access of upcoming features, to receive exclusive vouchers,
                  and most importantly, to influence the direction of GroovEver!
                </div>
              </div>
              <div className="space-x-8 xl:mt-0 mt-4 xl:mb-0 -mb-10 text-lg">
                <span className="font-black">FRIENDLY LINKS:</span>
                <Link
                  className="text-gorange font-black hover:underline hover:underline-offset-4 decoration-2"
                  href="https://discord.gg/a7y9htuqk3"
                >
                  Discord
                </Link>
                <Link
                  className="text-gorange font-black hover:underline hover:underline-offset-4 decoration-2"
                  href="https://www.instagram.com/groovever/"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="join flex xl:flex-row flex-col xl:border-8 border-4 mx-10 xl:rounded-3xl rounded-2xl border-orange-400 my-10">
            <div className="xl:w-1/3">
              <img
                src="uwsd.png"
                alt="UWSD"
                className=" object-cover xl:rounded-2xl rounded-xl w-full aspect-video xl:pr-10"
              />
            </div>
            {/* Dont remove the 0.1px padding it actually does make a difference in the mobile version believe it or not! */}
            <div className="bg-white xl:h-auto flex flex-col justify-between xl:p-6 xl:-ml-12 xl:mx-0 p-5 xl:my-0 mb-10 -mt-3 ml-[0.1px] xl:w-2/3 ">
              <div className="">
                <div className="flex lg:flex-row flex-col lg:items-center items-start pb-4 lg:space-x-8">
                  <span className="text-4xl font-black">
                    University of Waterloo Street Dance
                  </span>
                  <button className="lg:mt-0 mt-4 btn btn-secondary btn-sm ">
                    CLUB
                  </button>
                </div>
                <div className="xl:-mr-10 text-lg">
                  Local dance community at University of Waterloo. Offers weekly
                  street dance classes, freestyle sessions, workshops and more!
                </div>
              </div>
              <div className="space-x-8 xl:mt-0 mt-4 xl:mb-0 -mb-10 text-lg">
                <span className="font-black">FRIENDLY LINKS:</span>
                <Link
                  className="text-gorange font-black hover:underline hover:underline-offset-4 decoration-2"
                  href="https://discord.gg/asB4h4p3cE"
                >
                  Discord
                </Link>
                <Link
                  className="text-gorange font-black hover:underline hover:underline-offset-4 decoration-2"
                  href="https://www.instagram.com/uwstreetdance/"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;

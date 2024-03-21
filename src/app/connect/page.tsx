import Image from "next/image";

export default function ConnectPage() {
  return (
    <div className="">
      <div className="relative h-[60vh] lg:h-[75vh] overflow-hidden">
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
              <div className="text-gorange text-6xl lg:text-8xl font-black">
                CONNECT
              </div>
              <br />
              <br />
              <div className="text-center text-lg lg:text-xl">
                Find dancers in your city <b>locally</b> or around the world{" "}
                <b>globally</b>!
              </div>
              <br />
              <div className="text-center text-lg lg:text-xl">
                Dance with peers to gain motivation and learn from each other.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join flex lg:flex-row flex-col border-8 mx-10 rounded-3xl border-orange-400 my-10">
        <div className="lg:w-1/3">
          <img
            src="V.png"
            alt="Album"
            className="aspect-video object-cover rounded-2xl w-full"
          />
        </div>
        <div className="bg-white lg:-ml-12 ">hello lol</div>
      </div>
    </div>
  );
}

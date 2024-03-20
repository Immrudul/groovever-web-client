export default function LearnPageRegister() {
  return (
    <div>
      <button className="pl-12 pt-12 font-bold text-black lg:text-2xl text-base flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
          />
        </svg>{" "}
        Back
      </button>

      <div className="flex justify-center">
        <div className=" lg:w-3/4 w-full lg:h-[75vh] h-auto m-8 rounded-2xl p-2 flex ">
          <iframe
            src="https://drive.google.com/file/d/1GQ0e-AvGdjCYufvLw4ULpoPkhDPxeoK8/preview"
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay"
            className="rounded-3xl border-8 border-orange-400"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex  w-full h-fit mx-12 rounded-2xl justify-end">
          <button className="rounded-xl lg:px-12 px-6 lg:py-4 py-2 lg:text-2xl text-sm text-white bg-orange-400 font-black font-sans">
            Register
          </button>
        </div>
      </div>

      <div className="lg:flex hidden justify-center">
        <div className=" flex lg:flex-row flex-col w-full h-fit mx-12 justify-start lg:-mt-12 -mt-8 lg:items-center space-x-8 ">
          <div className="font-black lg:text-5xl text-xl  text-black">
            Pink Venom
          </div>
          <div className="font-black mt-3 lg:text-base text-xs flex justify-center w-80 bg-white rounded-full py-2 border-4 border-orange-300	">
            Jan 30, 2024 | 17:30 EST | 90 mins
          </div>
          <div className="mt-3 font-black lg:text-base text-xs flex justify-center w-40 bg-white rounded-full py-2 border-4 border-orange-300	">
            Livestream
          </div>

          <div className=" mt-3 lg:text-base text-xs flex justify-center w-40 bg-white rounded-full py-2 border-4 border-orange-300	">
            Style: <b>Hip-hop</b>
          </div>
          <div className=" mt-3 lg:text-base text-xs flex justify-center w-40 bg-white rounded-full py-2 border-4 border-orange-300	">
            Level: <b>Intro</b>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center">
        <div className=" flex lg:flex-row flex-col w-full h-fit mx-12 justify-start lg:-mt-12 -mt-8 lg:items-center space-x-8 ">
          <div className="font-black lg:text-4xl text-xl  text-black">
            Pink Venom
          </div>
        </div>
      </div>

      <div className=" lg:hidden flex flex-col w-full h-fit pt-6 items-center ">
        <div className="font-black mt-3 lg:text-base text-xs flex justify-center w-80 bg-white rounded-full py-2 border-4 border-orange-300	">
          Jan 30, 2024 | 17:30 EST | 90 mins
        </div>
        <div className="mt-3 font-black lg:text-base text-xs flex justify-center w-40 bg-white rounded-full py-2 border-4 border-orange-300	">
          Livestream
        </div>

        <div className=" mt-3 lg:text-base text-xs flex justify-center w-40 bg-white rounded-full py-2 border-4 border-orange-300	">
          Style: <b>Hip-hop</b>
        </div>
        <div className=" mt-3 lg:text-base text-xs flex justify-center w-40 bg-white rounded-full py-2 border-4 border-orange-300	">
          Level: <b>Intro</b>
        </div>
      </div>

      <div className="mx-12 my-10 lg:text-xl text-lg text-justify">
        <b>Course Introduction:</b> the following is just filler text. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum
        leo eget nibh tincidunt interdum. Vivamus lorem mi, dictum semper
        finibus at, congue sit amet lectus. Pellentesque tristique ante nec enim
        efficitur pharetra. Mauris aliquet ullamcorper aliquet. Nam sed ipsum et
        metus viverra posuere. Nunc non diam in turpis sodales fermentum ut eget
        orci. Proin iaculis leo tortor, vel pharetra ex blandit a. Maecenas nunc
        felis, lobortis nec pellentesque eu, scelerisque et magna. Nam eu felis
        molestie tellus commodo sagittis.
      </div>

      <div className="flex lg:mx-12 lg:justify-start justify-center mt-6 ">
        <div className="flex text-orange-400 items-center lg:justify-start justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            className="bi bi-person-circle lg:w-28 w-16"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <div className="pl-6 text-3xl font-black text-black">Jane Doe</div>
        </div>
      </div>
      <div className="mx-12 lg:text-lg text-base text-justify pt-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </div>
  );
}

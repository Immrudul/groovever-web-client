import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { MdOutlineTune } from "react-icons/md";
import VideoCard from "../videocard/page";

export default function LearnPage() {
  return (
    <div>
      <div className="relative h-[50vh] lg:h-[75vh] overflow-hidden font-sans">
        <div className="h-full absolute inset-0">
          <div className="relative h-full">
            <Image
              src="/Hearts and Darts.png"
              alt="hearts and darts image"
              style={{ objectFit: "cover", opacity: 0.5 }} // Adjust opacity as needed
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-orange-500 text-6xl lg:text-8xl font-black font-sans">
                LEARN
              </div>
              <br />
              <br />
              <div className="text-center text-lg lg:text-xl font-sans">
                Affordable tutorials in 3 formats - <b>livestream</b>,{" "}
                <b>recorded</b>, and <b>in person.</b> <br />
                covering all street dance styles and levels.
              </div>
              <br />
              <div className="text-center text-lg lg:text-xl">
                With our exclusive livestream classes, you interact with
                instructors <br />
                in real time and even get <b>1 on 1 feedback!</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-8 flex items-center space-x-6 justify-between lg:justify-end pl-6">
        <div>
          <form action="">
            <div className="flex  items-center rounded-full bg-gray-200 w-fit">
              <span className="pl-4  text-gray-400">
                <FaSearch></FaSearch>
              </span>
              <input
                type="search"
                placeholder="location, instructor, etc"
                className=" bg-gray-200 h-12 w-fit pl-4  rounded-full outline-none"
              ></input>
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-2 pr-6">
          <div className="font-black">DATE</div>
          <div className="text-2xl">
            <MdOutlineTune></MdOutlineTune>
          </div>
        </div>
      </div>

      <div className="space-y-8 pl-6 pb-32">
        <div className="flex items-center">
          <div className="h-12 w-44 rounded-full bg-red-200 flex justify-center items-center font-black">
            STYLE
          </div>
          <div className="pl-14 space-x-8">
            <span>ALL</span>
            <span>HIPHOP</span>
            <span>HOUSE</span>
            <span>POPPING</span>
            <span>LOCKING</span>
            <span>KRUMP</span>
            <span>WAACKING</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-12 w-44 rounded-full bg-red-200 flex justify-center items-center font-black">
            FORMAT
          </div>
          <div className="pl-14 space-x-8">
            <span>ALL</span>
            <span>LIVESTREAM</span>
            <span>RECORDED</span>
            <span>IN PERSON</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-12 w-44 rounded-full bg-red-200 flex justify-center items-center font-black">
            DIFFICULTY
          </div>
          <div className="pl-14 space-x-8">
            <span>ALL</span>
            <span>BEGINNER</span>
            <span>INTERMEDIATE</span>
            <span>ADVANCED</span>
            <span>OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

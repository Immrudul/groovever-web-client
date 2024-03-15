import Image from "next/image";
import VideoCard from "../videocard/page";

export default function LearnPage() {
  return (
    <div className="lg:pt-20 pt-[4.5rem]">
      <div className="relative h-[50vh] lg:h-[75vh] overflow-hidden">
        <div className="h-full absolute inset-0">
          <div className="relative h-full">
            <Image
              src="/Hearts and Darts.png"
              alt="hearts and darts image"
              style={{ objectFit: "cover", opacity: 0.5 }} // Adjust opacity as needed
              layout="fill"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-orange-500 text-6xl lg:text-8xl font-black">
                LEARN
              </div>
              <br />
              <br />
              <div className="text-center text-lg lg:text-xl">
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

      <div className="pt-8 pb-8 flex items-center space-x-6 justify-center lg:justify-end pl-6 pr-6">
        <div>
          <form action="">
            <div className="flex  items-center rounded-full bg-gray-200 w-fit">
              <span className="pl-4  text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="location, instructor, etc"
                className=" bg-gray-200 h-12 w-fit pl-4  rounded-full outline-none"
              ></input>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block space-y-8 pl-6 pb-32">
        <div className="flex items-center">
          <div className="h-12 w-44 rounded-full bg-gyellow flex justify-center items-center font-black">
            STYLE
          </div>
          <div className="pl-14 space-x-8 ">
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              ALL
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              HIPHOP
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              HOUSE
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              POPPING
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              LOCKING
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              KRUMP
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              WAACKING
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-12 w-44 rounded-full bg-gyellow flex justify-center items-center font-black">
            FORMAT
          </div>
          <div className="pl-14 space-x-8">
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              ALL
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              LIVESTREAM
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              RECORDED
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              IN PERSON
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-12 w-44 rounded-full bg-gyellow flex justify-center items-center font-black">
            DIFFICULTY
          </div>
          <div className="pl-14 space-x-8">
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              ALL
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              BEGINNER
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              INTERMEDIATE
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              ADVANCED
            </span>
            <span className="transition-all duration-300 border-b-2 border-transparent hover:font-black hover:border-gorange hover:text-gorange">
              OPEN
            </span>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-between px-2 pb-72">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-xs w-fit bg-gyellow"
          >
            STYLE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-30"
          >
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                ALL
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                HIPHOP
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                HOUSE
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                POPPING
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                LOCKING
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                KRUMP
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                WAACKING
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-xs w-fit bg-gyellow"
          >
            FORMAT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-30"
          >
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                ALL
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                LIVESTREAM
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                RECORDED
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                IN PERSON
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 w-fit bg-gyellow">
            DIFFICULTY
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-30"
          >
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                ALL
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                BEGINNER
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                INTERMEDIATE
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                ADVANCED
              </a>
            </li>
            <li>
              <a className="hover:bg-gorange hover:underline hover:underline-offset-2 hover:text-white hover:font-black">
                OPEN
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-end">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

import Image from "next/image";

const Signup = () => {
  return (
    <>
      <div className="h-[4.5rem] lg:h-20" />
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" height={125} width={125}></Image>
      </div>
      <div className="pt-4 flex flex-col items-center font-black text-3xl">
        <em>SIGN UP</em>
      </div>
      <div className="flex justify-center">
        <div className="pt-10 w-3/4 ">
          <div className="font-black w-full pb-2 pl-2">USERNAME</div>
          <form>
            <div className="">
              <input
                className="border-2 border-black rounded-2xl pl-5 h-12 w-full placeholder-gray-300"
                type=""
                placeholder="Username"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pt-4 w-3/4 ">
          <div className="font-black w-full pb-2 pl-2">EMAIL</div>
          <form>
            <div className="">
              <input
                className="border-2 border-black rounded-2xl pl-5 h-12 w-full placeholder-gray-300"
                type="email"
                placeholder="Email"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pt-4 w-3/4 ">
          <div className="font-black w-full pb-2 pl-2">PASSWORD</div>
          <form>
            <div className="">
              <input
                className="border-2 border-black rounded-2xl pl-5 pr-3 h-12 w-full placeholder-gray-300"
                type="password"
                placeholder="Password"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pt-4 w-3/4 ">
          <div className="font-black w-full pb-2 pl-2">CONFIRM PASSWORD</div>
          <form>
            <div className="">
              <input
                className="border-2 border-black rounded-2xl pl-5 pr-3 h-12 w-full placeholder-gray-300"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center pt-12 lg:pb-0 pb-12">
        <button className="rounded-2xl px-16 h-12 py-2 text-base text-white bg-gorange font-black">
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default Signup;

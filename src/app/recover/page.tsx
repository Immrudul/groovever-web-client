import Image from "next/image";

const Recover = () => {
  return (
    <div className="min-h-screen pt-4">
      <div className="flex flex-col h-[100vh] justify-center">
        <div className="h-[4.5rem] lg:h-20" />
        <div className="flex flex-col items-center lg:-mt-32">
          <div className="hidden lg:flex">
            <Image src="/logo.png" alt="logo" height={125} width={125}></Image>
          </div>
          <div className="lg:hidden">
            <Image src="/logo.png" alt="logo" height={100} width={100}></Image>
          </div>
          <h1 className="lg:text-5xl text-3xl font-bold font-redrose">
            <span className="text-gorange">Groov</span>
            <span className="text-ggray">Ever</span>
          </h1>
          <p className="text-xs lg:text-sm justify-self-center pb-8">
            Groove, wherever, however, forever.
          </p>
        </div>
        <div className="font-black text-2xl flex justify-center pb-4 lg:py-6">
          <em>FORGOT PASSWORD?</em>
        </div>
        <div className="flex justify-center text-center pb-8">
          Please enter your email address <br /> to receive a verification card.
        </div>
        <div className="flex justify-center">
          <div className="w-3/4 ">
            <div className="font-black w-full pl-2">EMAIL</div>
            <form>
              <div className="">
                <input
                  className="border-2 border-black rounded-2xl pl-5 h-12 w-full placeholder-gray-300"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex justify-end text-sm pt-2 text-red-500">
                Email does not exist. Please try again.
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center pt-12 lg:pb-0 pb-12">
          <button className="rounded-2xl px-16 h-12 py-2 text-base text-white bg-gorange font-black">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recover;

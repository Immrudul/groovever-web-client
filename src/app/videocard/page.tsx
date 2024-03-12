function App() {
  return (
    <>
      <div className="font-sans">
        <a
          className="relative block lg:w-1/3 w-full group"
          href="##"
          style={{ position: "relative", display: "block" }}
        >
          <img
            className="absolute inset-0 object-cover w-full h-full group-hover:opacity-20 rounded-3xl"
            src="/Milky Way.png"
          />
          <div className="relative p-5 rounded-3xl group-hover:border-4 group-hover:border-orange-500">
            <div className="mb-60">
              {/* Hidden content */}
              <div className="absolute inset-0 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ">
                <div className="py-6 px-6 h-full flex flex-col justify-between">
                  <div className="flex justify-between space-x-4">
                    <div className="lg:text-base text-xs flex justify-center w-1/3 bg-white rounded-full py-2 border-4 border-orange-300	">
                      Livestreaming
                    </div>
                    <div className="lg:text-base text-xs flex justify-center w-1/3 bg-white rounded-full py-2 border-4 border-orange-300	">
                      Hiphop
                    </div>
                    <div className="lg:text-base text-xs flex justify-center w-1/3 bg-white rounded-full py-2 border-4 border-orange-300	">
                      Intermediate
                    </div>
                  </div>
                  <div className="">
                    <p className="text-4xl text-black font-black font-sans">
                      Pink Venom
                    </p>
                    <em>
                      <p className="text-base text-black font-medium">
                        Blackpink
                      </p>
                    </em>
                    <div className="flex justify-between">
                      <div className="font-normal lg:text-sm text-xs">
                        Jan 30, 2024 | 17:30 EST | 90 mins
                      </div>
                      <button className="rounded-xl lg:px-12 px-6 py-2 lg:text-base text-sm text-white bg-orange-400 font-black font-sans">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of hidden content */}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;

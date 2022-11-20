export default function Home() {
    return (
      <div>
        <div className="bg-zinc-900 flex items-center justify-center h-screen">
        
          <div className="text-white absolute top-10 left-10 text-2xl">
            <p>
              <span className="text-orange-400">&gt;/</span> loop.
            </p>
          </div>
        
          <div className="grid grid-cols-6 container">
            <div className="col-span-3 flex flex-col space-y-10 ">
                <h1 className="w-full font-sans tracking-normal font-black text-8xl text-white ">
                get.set.code<span className="text-orange-400">.</span>
                </h1>
                <h4 className="font-sans tracking-normal font-regular text-xl text-white ml-2 ">
                    begin your journey to code with Loop.
                </h4>
                <button className="float-left w-fit px-10 py-4 border-4 border-orange-400 text-white">
                    Join Now
                </button>
            </div>
          </div>
        </div>
      </div>
    );
}

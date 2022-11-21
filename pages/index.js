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
                <h4 className="font-sans tracking-normal font-regular text-xl text-gray-400 ml-2 ">
                    begin your journey to code with Loop.
                </h4>
                <a className="float-left hover:cursor-pointer text-lg w-fit text-white transform transition duration-300 hover:translate-x-1.5 ease-in-out text-lg">
                    <span className="text-orange-400">-&gt; </span>
                     join now
                </a>
            </div>
          </div>
        </div>

          {/*<div className="bg-zinc-900 p-20">*/}
          {/*    <h2 className="font-sans tracking-normal font-black text-3xl text-white ">what is  Loop?</h2>*/}
          {/*</div>*/}
      </div>
    );
}

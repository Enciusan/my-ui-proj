import "../App.css";


export default function MintCard() {
  return (
    <div className="md:container md:mx-auto w-10/12 ml-64 grid grid-cols-1 " id="mint">
      <div class="w-full py-4 px-8 shadow-lg rounded-md ml-68">
        <div className="bg-stone-900 mx-auto shadow-lg shadow-amber-500/20 mt-4 rounded-md">
          {/* <div class="w-16 overflow-hidden inline-block mb-6 ">
          <div class=" h-11 w-11 bg-zinc-800 rotate-45 transform origin-bottom-left absolute right-0 "></div>
        </div> */}
          <h2 class="text-yellow-600 text-7xl font-pirata text-center -mt-6">
            MINT
          </h2>
          <div className="flex flex-row">
            <img
              class="w-96 h-96 ml-20 top-20 md:my-28 my-60 shadow-lg shadow-amber-500/10 object-cover rounded-lg "
              src="../img/nnfox.jpeg"
              alt="fox"
            />
            <div className="relative ml-40 w-full h-full top-28">
              <div className="text-yellow-600 text-4xl ml-10 font-pirata text-start flex flex-row">
                Date:
                <div className="relative w-full mx-10 h-full text-center -mt-8 text-2xl font-germania">
                  ed tortor viverra convallis. Mauris blandit sed nibh at
                  viverra. Integer eros felis, ultricies nec ex ac, ultricies
                  mollis neque. Nunc eu ex nec lacus mattis sagittis eu at ex.
                  Suspendisse a arcu vitae
                </div>
              </div>
              <div className="text-yellow-600 text-4xl ml-10 mt-20 font-pirata text-start flex flex-row">
                Price:
                <div className="w-full mx-10 h-full text-center -mt-8 text-2xl font-germania">
                  ed tortor viverra convallis. Mauris blandit sed nibh at
                  viverra. Integer eros felis, ultricies nec ex ac, ultricies
                  mollis neque. Nunc eu ex nec lacus mattis sagittis eu at ex.
                  Suspendisse a arcu vitae
                </div>
              </div>
              <div className="text-yellow-600 text-4xl ml-10 mt-20 font-pirata text-start flex flex-row">
                Where:
                <div className="w-full mx-10 h-full text-center -mt-8 text-2xl font-germania">
                  ed tortor viverra convallis. Mauris blandit sed nibh at
                  viverra. Integer eros felis, ultricies nec ex ac, ultricies
                  mollis neque. Nunc eu ex nec lacus mattis sagittis eu at ex.
                  Suspendisse a arcu vitae
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

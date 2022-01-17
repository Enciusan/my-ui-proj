import "../App.css";

export default function Card() {
  return (
    <div className="md:container md:mx-auto w-10/12 ml-64 grid grid-cols-1 ">
      <div class="w-full py-4 px-8 shadow-lg rounded-md ml-68">
        <div class="flex justify-center md:justify-end mt-16 ">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-amber-400"
            src="../img/nnfox.jpeg"
            alt="foxy"
          />
        </div>
        <div class="w-16 overflow-hidden inline-block mb-6 ">
          <div class=" h-10 w-10 bg-stone-900 rotate-45 transform origin-bottom-left absolute -mt-3 top-90 -right-48 "></div>
        </div>
        <div className="bg-stone-900 mx-auto shadow-lg shadow-amber-500/20 mt-4 rounded-md">
          {/* <div class="w-16 overflow-hidden inline-block mb-6 ">
          <div class=" h-11 w-11 bg-zinc-800 rotate-45 transform origin-bottom-left absolute right-0 "></div>
        </div> */}
          <h2 class="text-yellow-600 text-7xl font-pirata text-center -mt-6">
            ABOUT
          </h2>
          <p class="mt-2 text-yellow-600 text-center font-germania text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            dolor sed tortor viverra convallis. Mauris blandit sed nibh at
            viverra. Integer eros felis, ultricies nec ex ac, ultricies mollis
            neque. Nunc eu ex nec lacus mattis sagittis eu at ex. Suspendisse a
            arcu vitae arcu cursus placerat non vel justo. Praesent ut mauris
            sit amet neque aliquet ultricies. Maecenas rutrum diam sit amet
            augue mattis rutrum. Integer lobortis venenatis est nec pulvinar.
            Nam gravida magna pharetra risus lacinia dapibus. Praesent nec
            turpis euismod, gravida mi ut, consequat enim.
          </p>
        </div>
      </div>
    </div>
  );
}

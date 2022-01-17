import "../App.css";

export default function BackTopButton() {
  return (
      <a href="#nav">
    <div className="flex relative ">
      <div class="fixed right-10 bottom-64">
        <div className="absolute w-10 h-60 rounded bg-neutral-900 border-2 border-neutral-900 shadow-md shadow-amber-500/30 ">
          <div class="flex-1 overflow-y-scroll">
            <div className="absolute right-0 text-center mr-4 ">
              <div className=" text-yellow-600 text-sm font-germania">
                <p>B</p>
                <p>a</p>
                <p>c</p>
                <p>k</p>
              </div>
              <p className="text-neutral-900"> - </p>
              <div className="text-yellow-600 text-sm font-germania">
                <p>t</p>
                <p>o</p>
              </div>
              <p className="text-neutral-900"> - </p>
              <div className="text-yellow-600 text-sm font-germania">
                <p>t</p>
                <p>o</p>
                <p>p</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
}

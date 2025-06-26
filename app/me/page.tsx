export default function MePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed space-y-6">
            <p>
              <span className="text-gray-400">Hi, I'm </span>
              <span className="text-white">Andrew Chan</span>
              <span className="text-gray-400">. I was born in </span>
              <span className="text-white">New York City</span>
              <span className="text-gray-400">
                , where my earliest fascination wasn't with toys or cartoons, but with watching garbage trucks.
              </span>
            </p>

            <p>
              <span className="text-gray-400">I moved to </span>
              <span className="text-white">Pennsylvania</span>
              <span className="text-gray-400"> where I attended the </span>
              <span className="text-white">STEM Academy</span>
              <span className="text-gray-400"> and am now pursuing </span>
              <span className="text-white">bioengineering at Pitt</span>
              <span className="text-gray-400">
                . As I am working on completing my degree, I am also working on passion projects. I want to use
                engineering as a tool to help people architect a more sustainable and equitable world.
              </span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

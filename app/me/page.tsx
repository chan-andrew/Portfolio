import Image from "next/image"

export default function MePage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Bio text */}
          <div className="space-y-6 text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed">
            <p>
              <span className="text-gray-400">Hi, I&apos;m </span>
              <span className="text-white">Andrew&nbsp;Chan</span>
              <span className="text-gray-400">. I was born in&nbsp;</span>
              <span className="text-white">New&nbsp;York&nbsp;City</span>
              <span className="text-gray-400">
                , where my earliest fascination wasn&apos;t with toys or cartoons, but with watching garbage trucks.
              </span>
            </p>

            <p>
              <span className="text-gray-400">I moved to&nbsp;</span>
              <span className="text-white">Pennsylvania</span>
              <span className="text-gray-400">&nbsp;where I attended the&nbsp;</span>
              <span className="text-white">STEM&nbsp;Academy</span>
              <span className="text-gray-400">&nbsp;and am now pursuing&nbsp;</span>
              <span className="text-white">bioengineering at Pitt</span>
              <span className="text-gray-400">
                . While completing my degree I work on passion projects, using engineering as a tool to help architect a
                more sustainable and equitable world.
              </span>
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden">
              <Image
                src="/images/andrew-chan-photo.jpg"
                alt="Andrew Chan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

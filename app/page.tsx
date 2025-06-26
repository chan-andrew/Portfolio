import Image from "next/image"

export default function WorkPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      {/* Body text with same container structure as header */}
      <div className="container mr-auto px-4 sm:px-6 max-w-7xl mb-12 sm:mb-16 lg:mb-20 ml-0 lg:px-[0]">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-6 sm:mb-8 leading-relaxed">
          <span className="text-white">Andrew Chan</span>
          <span className="text-gray-400"> is a student at the </span>
          <span className="text-white">University of Pittsburgh</span>
          <span className="text-gray-400">.</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400 leading-relaxed">
          He builds at the intersection of <span className="text-white">engineering</span> and{" "}
          <span className="text-white">medicine</span> 💊.
        </p>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Parkinson's Research */}
          <div className="group cursor-pointer">
            <div className="aspect-square relative overflow-hidden bg-gray-900 px-0">
              <Image
                src="/images/parkinsons-research.jpg"
                alt="Parkinson's Disease Research"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>

          {/* HAI/Microfluidic Chip */}
          <div className="group cursor-pointer">
            <div className="aspect-square relative overflow-hidden bg-gray-900">
              <Image
                src="/images/microfluidic-chip.png"
                alt="Microfluidic Chip Design"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>

          {/* Sleep Research */}
          <div className="group cursor-pointer">
            <div className="aspect-square relative overflow-hidden bg-gray-900">
              <Image
                src="/images/sleep-research.jpg"
                alt="Sleep Research"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

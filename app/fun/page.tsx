import Image from "next/image"

export default function FunPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed">
            <span className="text-gray-400">Some things I've done for </span>
            <span className="text-white">fun</span>
            <span className="text-gray-400"> :)</span>
          </h1>
        </div>

        {/* Expanded Photo Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6">
          {/* Row 1: Hero airplane view spanning 3 columns */}
          <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2">
            <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/airplane-view.jpg"
                alt="View from airplane window showing clouds and sky"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* McLaren - feature car */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/mclaren-turquoise.jpg"
                alt="Stunning turquoise McLaren supercar"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Coastal bench portrait */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/coastal-bench.jpg"
                alt="Person relaxing on bench overlooking coastal scenery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Cathedral of Learning */}
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/cathedral-learning.jpg"
                alt="Cathedral of Learning at University of Pittsburgh"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2: Beach paradise spanning 2 columns */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/beach-paradise.jpg"
                alt="Beautiful coastal beach with turquoise water"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* F1 Racing */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/f1-racing.jpg"
                alt="Formula 1 Red Bull Racing car on track"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 3: Robotics project spanning 2 columns */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/robotics-project.jpg"
                alt="Complex robotics competition robot"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desert rocks 1 */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/desert-rocks-1.jpg"
                alt="Beautiful desert rock formations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Photography moment */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/photography-moment.jpg"
                alt="Taking photos at coastal viewpoint"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Ferrari detail */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/ferrari-detail.jpg"
                alt="Ferrari prancing horse logo detail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Porsche race car */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/porsche-race-car.jpg"
                alt="Gulf-livery Porsche race car detail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 4: Boston street spanning 2 columns */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/boston-street.jpg"
                alt="Classic Boston red brick architecture street scene"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desert rocks 2 */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/desert-rocks-2.jpg"
                alt="Layered sandstone rock formations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Board game */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/board-game.jpg"
                alt="Rummikub board game in progress"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Race wheel detail */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/fun/race-wheel.jpg"
                alt="Professional race car wheel detail"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 5: Boston architecture and subway spanning remaining space */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/boston-architecture.jpg"
                alt="Classic Boston red brick buildings"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/boston-subway.jpg"
                alt="Boston Airport Station subway platform"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Night driving spanning 2 columns */}
          <div className="sm:col-span-2 lg:col-span-6">
            <div className="relative aspect-[8/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fun/night-driving.jpg"
                alt="Night driving with GPS navigation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 100vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Updated caption */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-lg sm:text-xl font-light text-gray-400 leading-relaxed">
            Adventures in <span className="text-white">travel</span>, <span className="text-white">motorsports</span>,{" "}
            <span className="text-white">robotics</span>, and <span className="text-white">exploration</span>
          </p>
        </div>
      </div>
    </div>
  )
}

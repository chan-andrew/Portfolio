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

        {/* Expanded Masonry-style Photo Collage */}
        <div className="masonry-grid">
          {/* Airplane view - Hero image spanning 2 columns */}
          <div className="masonry-item masonry-wide masonry-tall">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230712_012232914_iOS.jpg-PZjQxWf4OF2pdvgF7MuSBkMbWgp5DN.jpeg"
                alt="View from airplane window showing clouds and sky"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Cathedral of Learning - Portrait */}
          <div className="masonry-item masonry-tall">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240218_222959739_iOS.jpg-KSVqqnKV2NnT5Y9kMVPNd2vQYlTym5.jpeg"
                alt="Cathedral of Learning at University of Pittsburgh"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* McLaren turquoise - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/mclaren-turquoise-new.jpg"
                alt="Stunning turquoise McLaren sports car"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Beach paradise - Wide */}
          <div className="masonry-item masonry-wide">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/beach-paradise-new.jpg"
                alt="Beautiful coastal scene with turquoise water and rocky coastline"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desert rocks 1 - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240613_155115118_iOS.jpg-e7Sn0Bu6Dp70OGGrYm1rbxPJ0W3LB4.jpeg"
                alt="Beautiful desert rock formations with red and white layers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Coastal bench - Portrait */}
          <div className="masonry-item masonry-tall">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/coastal-bench-new.jpg"
                alt="Person sitting on wooden bench overlooking coastal landscape"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Robotics project - Wide */}
          <div className="masonry-item masonry-wide">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230301_224457506_iOS.jpg-PAu6MliXabfQxtLcogBIAkIryFFukh.jpeg"
                alt="Complex VEX robotics competition robot"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Ferrari detail - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/ferrari-detail-new.jpg"
                alt="Close-up of blue Ferrari with prancing horse logo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Board game - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/board-game-new.jpg"
                alt="Rummikub board game tiles on wooden table with dramatic lighting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desert rocks 2 - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240613_175023536_iOS.jpg-DDGLRmyBh6kPcFlZua08bbYKPksY7n.jpeg"
                alt="Layered sandstone rock formations with beautiful textures"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* F1 racing - Wide */}
          <div className="masonry-item masonry-wide">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/f1-racing-new.jpg"
                alt="Red Bull Formula 1 car on race track with American Express branding"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Boston architecture - Wide */}
          <div className="masonry-item masonry-wide">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250524_234750620_iOS.heic-hWg0FuRyNvS1JytbqNGALvNqYi4awh.jpeg"
                alt="Classic Boston red brick buildings with bay windows"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Boston street evening - Portrait */}
          <div className="masonry-item masonry-tall">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/boston-street-evening.jpg"
                alt="Tree-lined Boston street with classic red brick architecture at dusk"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Photography moment - Wide */}
          <div className="masonry-item masonry-wide">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/photography-moment-new.jpg"
                alt="Person taking photos with DSLR camera on coastal overlook"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Porsche race car - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/porsche-race-car-new.jpg"
                alt="Gulf-livery Porsche race car with yellow and blue colors"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Boston subway - Portrait */}
          <div className="masonry-item masonry-tall">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250524_135607170_iOS.heic-pdjoLPY95u8MlbrNuz0GFgqMEP8fxq.jpeg"
                alt="Boston Airport Station subway platform view"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Race wheel - Square */}
          <div className="masonry-item">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/images/fun/race-wheel-new.jpg"
                alt="Close-up of race car wheel with Yokohama tire branding"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Night driving - Extra wide spanning bottom */}
          <div className="masonry-item masonry-extra-wide">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250524_181934780_iOS.heic-jHxBGqTKQfkdZlF4TZ9XtaW4ukFpnt.jpeg"
                alt="Night driving with GPS navigation and city lights"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-lg sm:text-xl font-light text-gray-400 leading-relaxed">More to come :)</p>
        </div>
      </div>
    </div>
  )
}

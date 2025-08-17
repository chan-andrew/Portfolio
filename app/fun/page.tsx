"use client"

import Image from "next/image"

export default function FunPage() {
  // Array of actual photos with strategic size assignments for masonry layout
  const images = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230712_012232914_iOS.jpg-v2Uc03ZAzsRNGZIRyJYyyvEvSlSHUZ.jpeg",
      alt: "Airplane wing view with beautiful sky",
      size: "wide",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230301_224457506_iOS.jpg-ioROoN9UlerxsTfy652JSO7GUE20BY.jpeg",
      alt: "Robotics engineering project",
      size: "square",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240613_155115118_iOS.jpg-UjTvONnZ1DK1B4TGmqZqxoXjLp7po8.jpeg",
      alt: "Desert rock formations",
      size: "tall",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240218_222959739_iOS.jpg-DDxPJ3qoFZSbE3OlAIEawS4zP54SPQ.jpeg",
      alt: "Cathedral tower architecture",
      size: "tall",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250524_181934780_iOS.heic-HWhR29JfakmTunXKGgUuYDsm8Vu5AK.jpeg",
      alt: "Car navigation to airport at night",
      size: "wide",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250524_135607170_iOS.heic-IcJTFnMu2FEx8U8JsBmKjOFdwNiy37.jpeg",
      alt: "Airport station subway entrance",
      size: "square",
    },
    {
      id: 7,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250524_234750620_iOS.heic-5dLW7W9JHsbt6llkpjLX2bedWDtNf4.jpeg",
      alt: "Boston red brick architecture",
      size: "extra-wide",
    },
    {
      id: 8,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250525_000239960_iOS.heic-nmlHiof4JZFQTbg7aOTH7qnUK6g3Wg.jpeg",
      alt: "Boston street scene at golden hour",
      size: "extra-wide",
    },
    {
      id: 9,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250525_174254010_iOS.heic-Cch6W3yT0m1RCzPi97nJVt1DvjNXlh.jpeg",
      alt: "Contemplative moment on bench in nature",
      size: "wide",
    },
    {
      id: 10,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250526_190055190_iOS.heic-nbXnuXh2Peo2MzcRPFz50cjE7bBMsC.jpeg",
      alt: "Stunning coastal beach with turquoise water",
      size: "extra-wide",
    },
    {
      id: 11,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250526_211946830_iOS.jpg-Io7brS2DSNKnjV276YsJTrJ84VjF7a.jpeg",
      alt: "Taking photos at coastal viewpoint",
      size: "square",
    },
    {
      id: 12,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250526_042500290_iOS.jpg-Kh3OhwcQgLrMd6GtnKi0LWz9OlQ8ZX.jpeg",
      alt: "Board game night with numbered tiles",
      size: "wide",
    },
    {
      id: 13,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250613_175636340_iOS.heic-l2pv12nKeKeiJJbaemOb2jrkeRUAEf.jpeg",
      alt: "Porsche race car with Gulf livery detail",
      size: "wide",
    },
    {
      id: 14,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250613_175752100_iOS.heic-UdczQbw52O20SWciXd4RnOY4DEBCBd.jpeg",
      alt: "Race car wheel and tire detail",
      size: "square",
    },
    {
      id: 15,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250613_213115430_iOS.jpg-MciIx8A64zlvdMgiWJJBnM3VT5tIxn.jpeg",
      alt: "Formula 1 Red Bull car on track",
      size: "tall",
    },
    {
      id: 16,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250614_140937621_iOS.jpg-NnaM9hVt5qFfAVSIlFsaRASVaVAFJA.jpeg",
      alt: "Ferrari prancing horse badge detail",
      size: "square",
    },
    {
      id: 17,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250614_141053181_iOS.jpg-KJGKP3cYvDbvBht4ElSsSpYXd7RTSC.jpeg",
      alt: "Turquoise McLaren supercar",
      size: "tall",
    },
    {
      id: 18,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250614_143830544_iOS.jpg-Bh0bx7bg8YMjR4N9UVyHMGAi9Kilr4.jpeg",
      alt: "Red Bull F1 car displayed in modern shopping mall",
      size: "medium",
    },
    {
      id: 19,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250614_141852313_iOS.jpg-Te7wlzv4PjN8L5lxOG8gAmnP0qEslb.jpeg",
      alt: "Lamborghini supercar lineup at outdoor show",
      size: "tall",
    },
    {
      id: 20,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250614_150122555_iOS.jpg-jwdppvWd60QPCaFB3PYzn5crmYQT6b.jpeg",
      alt: "Porsche collection with classic Ferrari race car",
      size: "medium",
    },
  ]

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed">
            <span className="text-gray-400">Some things I've done for </span>
            <span className="text-white">fun</span>
            <span className="text-gray-400"> :)</span>
          </h1>
        </div>

        {/* Masonry Photo Collage */}
        <div className="masonry-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`masonry-item ${
                image.size === "wide"
                  ? "masonry-wide"
                  : image.size === "tall"
                    ? "masonry-tall"
                    : image.size === "extra-wide"
                      ? "masonry-extra-wide"
                      : image.size === "medium"
                        ? "masonry-medium"
                        : "masonry-square"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={image.id <= 6 ? "eager" : "lazy"}
                  priority={image.id <= 2}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-lg sm:text-xl font-light text-gray-400 leading-relaxed">More to come :)</p>
        </div>
      </div>
    </div>
  )
}

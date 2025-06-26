export default function WorkPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl">
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
    </div>
  )
}

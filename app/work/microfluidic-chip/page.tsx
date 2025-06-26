import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MicrofluidicChipPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="ml-8 max-w-4xl">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Microfluidic Chip Design</h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-light">Trauma and Transfusion Center @ UPMC</p>
        </div>

        {/* Project Description */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-light text-white mb-4">Project Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Working as a Laboratory Assistant at the Trauma and Transfusion Medicine Research Center (Shea Lab), I
              develop and optimize microfluidic chip models to simulate vascularized environments. This research enables
              in-depth study of endothelial cell behavior and dysfunction under traumatic injury and inflammation
              conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-4">Key Contributions</h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>
                  Design and fabrication of microfluidic devices that replicate physiological vascular environments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>
                  Optimization of chip parameters to study endothelial cell responses to trauma and inflammation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>Development of protocols for cell culture and analysis within microfluidic systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span>Investigation of cellular dysfunction mechanisms in traumatic injury scenarios</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-4">Research Impact</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This work contributes to understanding how traumatic injuries affect vascular function at the cellular
              level, potentially leading to improved treatment strategies for trauma patients. The microfluidic models
              provide a controlled environment to study complex biological processes that are difficult to observe in
              traditional cell culture systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

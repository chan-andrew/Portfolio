import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function KyronMedicalPage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Kyron Medical</h1>
          <h2 className="text-xl sm:text-2xl font-light text-gray-400">AI-Powered Insurance Claims & Revenue Cycle Management</h2>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl">
          <div className="prose prose-lg prose-invert">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Kyron Medical automates insurance claim appeals and revenue cycle management for healthcare providers using AI. The company's core products include an AI system that drafts evidence-based appeals for denied claims in 34 seconds and a voice AI agent that handles phone calls with insurance companies directly, resolving appeals in under 10 minutes instead of the typical 30-minute process.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The technology addresses a $16.3 billion annual problem: insurance companies deny roughly 20% of medical claims, but over 70% of denials are eventually overturned. Most practices never appeal due to time constraints, leaving money on the table.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-light text-white mb-4">Major Partnership Pipeline</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Kyron has secured significant partnerships with industry leaders:
              </p>
              
              <ul className="text-gray-300 space-y-4">
                <li>
                  <strong className="text-white">CVS Health MinuteClinic:</strong> Signed pilot agreement for Q4 2025 national deployment across their clinic network
                </li>
                <li>
                  <strong className="text-white">Tang & Company:</strong> Partnership discussions with this occupational health services company that has over $100M in annual recurring revenue
                </li>
                <li>
                  <strong className="text-white">Infinx:</strong> Potential collaboration with this major RCM vendor that serves hundreds of clients and generates hundreds of millions in ARR
                </li>
              </ul>

              <p className="text-lg text-gray-300 leading-relaxed mt-6">
                These partnerships position Kyron to scale rapidly across thousands of healthcare practices, transforming how the industry handles insurance denials and freeing up billions of dollars currently lost to administrative inefficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Andrew Chan</h1>
          <div className="text-lg sm:text-xl text-gray-400 space-y-1">
            <p>Pittsburgh, PA 15213 | Chester Springs, PA 19425</p>
            <p>anc445@pitt.edu | andrewchan2305@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/in/andrewchan2305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors underline"
              >
                www.linkedin.com/in/andrewchan2305
              </a>
            </p>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">Education</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  University of Pittsburgh, Swanson School of Engineering
                </h3>
                <p className="text-lg text-gray-300">
                  David C. Frederick Honors College | Bachelor of Science in Engineering
                </p>
                <p className="text-gray-400">
                  Major: Bioengineering | Minor: Chemistry | Conceptual Foundations of Medicine Certificate
                </p>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Pittsburgh, PA</p>
                <p>Expected Graduation: May 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Research */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">
            Experience & Research
          </h2>
          <div className="space-y-8">
            {/* voya. */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">voya.</h3>
                <p className="text-lg text-gray-300 mb-2">Co-Founder and COO</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Coming soon.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>July 2025 – Present</p>
              </div>
            </div>
            
            {/* Kyron Medical */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">Kyron Medical</h3>
                <p className="text-lg text-gray-300 mb-2">Growth & Partnerships Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Driving clinic outreach, cultivating client relationships, and supporting early-stage scaling in a
                    health tech startup.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Providence, RI</p>
                <p>June 2025 – Present</p>
              </div>
            </div>

            {/* UPenn Hammer Lab */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  University of Pennsylvania, Hammer Neuromodulation Laboratory
                </h3>
                <p className="text-lg text-gray-300 mb-2">Research Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Analyzed local field potential (LFP) recordings from DBS-implanted Parkinson's patients to
                    identify stimulation-entrained gamma oscillations as candidate biomarkers for adaptive deep brain
                    stimulation
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>May 2025 – Present</p>
              </div>
            </div>

            {/* Shea Lab */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  Trauma and Transfusion Medicine Research Center (Shea Lab)
                </h3>
                <p className="text-lg text-gray-300 mb-2">Laboratory Assistant</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Develop and optimize microfluidic chip models to simulate vascularized environments, enabling
                    in-depth study of endothelial cell behavior and dysfunction under traumatic injury and inflammation
                    conditions.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Pittsburgh, PA</p>
                <p>September 2024 – Present</p>
              </div>
            </div>

            {/* HUP */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">Hospital of the University of Pennsylvania</h3>
                <p className="text-lg text-gray-300 mb-2">Clinical Researcher</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Collaborated with Dr. Colin Ellis and a team of researchers to investigate the effects of hospital
                    conditions on patient sleep quality and identify strategies to improve sleep, recognizing its vital
                    role in recovery.
                  </li>
                  <li>
                    • Presented preliminary findings to stakeholders, showcasing the correlation between hospital
                    environmental factors and patient recovery.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>May – August 2024</p>
              </div>
            </div>

            {/* UPenn CNT */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  University of Pennsylvania, Center for Neuroengineering and Therapeutics
                </h3>
                <p className="text-lg text-gray-300 mb-2">Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Built software tools to compile and analyze patient data from intracranial epilepsy surgeries and
                    Apple Watch metrics for seizure prediction.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>June – August 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Extracurriculars */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">
            Leadership & Extracurriculars
          </h2>
          <div className="space-y-8">
            {/* VEX Robotics */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">VEX Robotics | 81Y and 91F</h3>
                <p className="text-lg text-gray-300 mb-2">Design and Build Lead</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Led design and construction of competitive robots, earning multiple state and national-level
                    awards, including the World Championship Design Award.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Chester Springs, PA</p>
                <p>September 2018 – May 2023</p>
              </div>
            </div>

            {/* Music */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">Piano and Violin</h3>
                <p className="text-lg text-gray-300 mb-2">Member</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Associate of the Royal Schools of Music (ARSM) for Piano; performed in regional and national
                    competitions.
                  </li>
                  <li>
                    • Awards include Second Place in the 21st Century Talents Ensemble Competition and Fourth Place in
                    the International Mozart Competition Vienna.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Chester Springs, PA</p>
                <p>May 2009 – Present</p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Experience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">
            Volunteer Experience
          </h2>
          <div className="space-y-8">
            {/* VEX Mentor */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">VEX Robotics Student Mentor</h3>
                <p className="text-lg text-gray-300 mb-2">Volunteer</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Fostered a collaborative and inclusive team environment, encouraging creativity, problem-solving,
                    and critical thinking among new team members.
                  </li>
                  <li>
                    • Conducted workshops for new team members on programming, design, and problem-solving strategies.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Chester Springs, PA</p>
                <p>September 2019 – May 2023</p>
              </div>
            </div>

            {/* Music Assistant */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">Assistant in Private Music Studio</h3>
                <p className="text-lg text-gray-300 mb-2">Volunteer</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Scheduled lessons and helped teach piano and violin students, designing practice routines for
                    technique development.
                  </li>
                  <li>• Provided students with routines and exercises to develop their musical skills.</li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Chester Springs, PA</p>
                <p>January 2022 – August 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Languages</h3>
              <p className="text-gray-400">English, Mandarin, Cantonese</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Software</h3>
              <p className="text-gray-400">
                Python, MATLAB, LaTeX, SolidWorks, Autodesk Inventor, Fusion 360, MS Office
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Laboratory Skills</h3>
              <p className="text-gray-400">
                Microfluidic Fabrication, Cell Culture, CT Imaging Analysis, Data Visualization
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Interpersonal</h3>
              <p className="text-gray-400">Tutoring, Teamwork, Verbal and Written Communication</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Andrew Chan</h1>
          <div className="text-sm space-y-1">
            <p>Pittsburgh, PA 15213 | Chester Springs, PA 19425</p>
            <p>(484)-354-7107 | anc445@pitt.edu | andrewchan2305@gmail.com | www.linkedin.com/in/andrewchan2305</p>
          </div>
        </div>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-black mb-3">EDUCATION</h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-semibold">University of Pittsburgh, Swanson School of Engineering</p>
              <p>David C. Frederick Honors College | Bachelor of Science in Engineering</p>
              <p>Major: Bioengineering | Minor: Chemistry | Conceptual Foundations of Medicine Certificate</p>
            </div>
            <div className="text-right">
              <p>Pittsburgh, PA</p>
              <p>Expected Graduation: May 2027</p>
            </div>
          </div>
        </section>

        {/* Experience & Research */}
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-black mb-3">EXPERIENCE & RESEARCH</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">Kyron Medical</p>
              <p>Providence, RI</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Growth & Partnerships Intern</p>
              <p>June 2025 – Present</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Driving clinic outreach, cultivating client relationships, and supporting early-stage scaling in a
                health tech startup.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">University of Pennsylvania, Hammer Neuromodulation Laboratory</p>
              <p>Philadelphia, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Research Intern</p>
              <p>May 2025 – Present</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Analyzed local field potential (LFP) recordings from DBS-implanted Parkinson's patients to identify
                stimulation-entrained gamma oscillations as candidate biomarkers for adaptive deep brain stimulation
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">Trauma and Transfusion Medicine Research Center (Shea Lab)</p>
              <p>Pittsburgh, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Laboratory Assistant</p>
              <p>September 2024 – Present</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Develop and optimize microfluidic chip models to simulate vascularized environments, enabling in-depth
                study of endothelial cell behavior and dysfunction under traumatic injury and inflammation conditions.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">Hospital of the University of Pennsylvania</p>
              <p>Philadelphia, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Clinical Researcher</p>
              <p>May – August 2024</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Collaborated with Dr. Colin Ellis and a team of researchers to investigate the effects of hospital
                conditions on patient sleep quality and identify strategies to improve sleep, recognizing its vital role
                in recovery.
              </li>
              <li>
                Presented preliminary findings to stakeholders, showcasing the correlation between hospital
                environmental factors and patient recovery.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">University of Pennsylvania, Center for Neuroengineering and Therapeutics</p>
              <p>Philadelphia, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Intern</p>
              <p>June – August 2023</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Built software tools to compile and analyze patient data from intracranial epilepsy surgeries and Apple
                Watch metrics for seizure prediction.
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership & Extracurriculars */}
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-black mb-3">LEADERSHIP & EXTRACURRICULARS</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">VEX Robotics | 81Y and 91F</p>
              <p>Chester Springs, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Design and Build Lead</p>
              <p>September 2018 – May 2023</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Led design and construction of competitive robots, earning multiple state and national-level awards,
                including the World Championship Design Award.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">Piano and Violin</p>
              <p>Chester Springs, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Member</p>
              <p>May 2009 – Present</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Associate of the Royal Schools of Music (ARSM) for Piano; performed in regional and national
                competitions.
              </li>
              <li>
                Awards include Second Place in the 21st Century Talents Ensemble Competition and Fourth Place in the
                International Mozart Competition Vienna.
              </li>
            </ul>
          </div>
        </section>

        {/* Volunteer Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-black mb-3">VOLUNTEER EXPERIENCE</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">VEX Robotics Student Mentor</p>
              <p>Chester Springs, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Volunteer</p>
              <p>September 2019 – May 2023</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Fostered a collaborative and inclusive team environment, encouraging creativity, problem-solving, and
                critical thinking among new team members.
              </li>
              <li>Conducted workshops for new team members on programming, design, and problem-solving strategies.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold">Assistant in Private Music Studio</p>
              <p>Chester Springs, PA</p>
            </div>
            <div className="flex justify-between items-start mb-2">
              <p className="italic">Volunteer</p>
              <p>January 2022 – August 2023</p>
            </div>
            <ul className="list-disc list-inside ml-4 mb-3">
              <li>
                Scheduled lessons and helped teach piano and violin students, designing practice routines for technique
                development.
              </li>
              <li>Provided students with routines and exercises to develop their musical skills.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold border-b border-black mb-3">SKILLS</h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Languages:</span> English, Mandarin, Cantonese
            </p>
            <p>
              <span className="font-semibold">Software:</span> Python, MATLAB, LaTeX, SolidWorks, Autodesk Inventor,
              Fusion 360, MS Office
            </p>
            <p>
              <span className="font-semibold">Laboratory Skills:</span> Microfluidic Fabrication, Cell Culture, CT
              Imaging Analysis, Data Visualization
            </p>
            <p>
              <span className="font-semibold">Interpersonal:</span> Tutoring, Teamwork, Verbal and Written Communication
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

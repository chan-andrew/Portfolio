export default function ResumePage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">Andrew Chan</h1>
          <div className="text-lg sm:text-xl text-gray-400 space-y-1">
            <p>Pittsburgh, PA 15213 | Chester Springs, PA 19425</p>
            <p>(484)-354-7107 | anc445@pitt.edu | andrewchan2305@gmail.com</p>
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
                  Major: Bioengineering | Minor: Chemistry
                </p>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Pittsburgh, PA</p>
                <p>Graduation: May 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Kyron Medical */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">Kyron Medical</h3>
                <p className="text-lg text-gray-300 mb-2">VP of Customer Success</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Driving clinic outreach, managing client relationships, and supporting go-to-market execution at a healthcare voice AI company automating administrative workflows for medical practices.
                  </li>
                  <li>
                    • Partnering with CVS, Tang & Company, and other clinics with hundreds of thousands of dollars in contract pipeline across 35+ states.
                  </li>
                  <li>
                    • Leading content strategy across conference presentations, sales materials, LinkedIn, and hiring campaigns to support revenue growth.
                  </li>
                  <li>
                    • Producing client-facing materials including pricing one-pagers, progress reports, and partnership proposals for prospects in orthopedics, oncology, and primary care.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Providence, RI</p>
                <p>June 2025 – Present</p>
              </div>
            </div>

            {/* voya. */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">voya.</h3>
                <p className="text-lg text-gray-300 mb-2">Co-Founder and CEO</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Built an all-in-one AI travel planner that instantly turned your trip ideas into a personalized, bookable itinerary.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>July 2025 – November 2025</p>
              </div>
            </div>

            {/* UPenn Hammer Lab */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  University of Pennsylvania, Hammer Neuromodulation Laboratory
                </h3>
                <p className="text-lg text-gray-300 mb-2">Undergraduate Researcher</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Developed comprehensive MATLAB analysis pipeline for Deep Brain Stimulation (DBS) data processing, created specialized scripts to process Medtronic BrainSense JSON files, synchronized neural signals with stimulation parameters, and handled large clinical datasets.
                  </li>
                  <li>
                    • Investigated gamma entrainment detection in DBS patients using standard-of-care sensing and spectral analysis tools to determine if gamma band neural oscillations can be reliably detected and correlated with stimulation parameters across multiple patients.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>May 2025 – August 2025</p>
              </div>
            </div>

            {/* Shea Lab */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  Trauma and Transfusion Medicine Research Center (Shea Lab)
                </h3>
                <p className="text-lg text-gray-300 mb-2">Undergraduate Researcher</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Developing and optimizing microfluidic chip models to simulate vascularized environments, enabling in-depth study of endothelial cell behavior and dysfunction under traumatic injury and inflammation conditions.
                  </li>
                  <li>
                    • Utilizing fluorescent dyes and advanced imaging techniques to label and track endothelial cell migration in real time, providing precise quantification of cell movement and dynamic cellular interactions.
                  </li>
                  <li>
                    • Collaborating closely with postdoctoral researchers and graduate students to refine protocols and troubleshoot lab equipment.
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
                    • Collaborated with Dr. Colin Ellis and a team of researchers to investigate the effects of hospital conditions on patient sleep quality and identify strategies to improve sleep, recognizing its vital role in recovery.
                  </li>
                  <li>
                    • Led data collection and quantitative analyses, interacting with over 40 patients across the hospital, focusing on environmental factors such as noise, lighting, and patient comfort, and their impact on sleep patterns.
                  </li>
                  <li>
                    • Analyzed 500+ quantitative data entries and presented findings from the post-intervention phase during a research meeting, detailing data and results on patient sleep quality and the impact of environmental factors.
                  </li>
                  <li>
                    • Contributed to the post-study phase, co-authoring sections of the manuscript for publication. Published in{" "}
                    <a
                      href="https://doi.org/10.1002/jhm.70223"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors underline"
                    >
                      Journal of Hospital Medicine (2025)
                    </a>
                    .
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>May 2024 – August 2024</p>
              </div>
            </div>

            {/* UPenn CNT */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  University of Pennsylvania, Center for Neuroengineering and Therapeutics (CNT)
                </h3>
                <p className="text-lg text-gray-300 mb-2">Research Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Collaborated with Dr. Brian Litt and his team of researchers to advance the diagnosis and treatment of epilepsy, leveraging innovative methods and cutting-edge technology.
                  </li>
                  <li>
                    • Designed and developed custom software tools to compile data from EEGs and Apple Watch metrics, enabling accurate patient diagnosis and therapeutic interventions.
                  </li>
                  <li>
                    • Contributed to the development of visualization tools for identifying neurological abnormalities and predicting seizure occurrences using data-driven insights.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>June 2023 – August 2023</p>
              </div>
            </div>

            {/* UPenn CT Lab */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  University of Pennsylvania, Laboratory for Advanced Computed Tomography Imaging
                </h3>
                <p className="text-lg text-gray-300 mb-2">Intern</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Designed and developed a GUI to process and analyze CT scan data, featuring intuitive visualizations of key parameters such as mean, mode, maximum, and minimum values, along with automated abnormality detection.
                  </li>
                  <li>
                    • Created a user-friendly interface commissioned by Penn Medicine enabling efficient data interpretation and enhancing healthcare data analysis workflows.
                  </li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Philadelphia, PA</p>
                <p>June 2022 – August 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Papers & Conference Abstracts */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 border-b border-gray-700 pb-2">
            Papers & Conference Abstracts
          </h2>
          <ul className="text-gray-400 space-y-4">
            <li>
              • Shaik NF, Denison L, Venezia GMA, Ljungberg L, Lebrón-Cruz A, Resnick D, Peachey C, Chan A, et al. Improving sleep on the inpatient general, non-stroke neurology service: A quasi-experimental interventional trial. <em>Journal of Hospital Medicine</em>. February 2026.{" "}
              <a
                href="https://doi.org/10.1002/jhm.70223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors underline"
              >
                https://doi.org/10.1002/jhm.70223
              </a>
            </li>
            <li>
              • A Liang, A Chan, J Chen, S Hu, Z Huang. &ldquo;A STEM Outreach Project for High School Students: Optimization of the Design Parameters for the Antibiotic Manufacturing Process Using R.&rdquo; ASEE Mid-Atlantic Conference, Penn State Harrisburg, PA, 2022.
            </li>
          </ul>
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
                <h3 className="text-xl font-medium text-white">VEX Robotics</h3>
                <p className="text-lg text-gray-300 mb-2">Design and Build Lead</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Led the design and construction of robots for competitive seasonal games as part of teams 81Y and 91F.
                  </li>
                  <li>
                    • Won the CREATE U.S. Open National Championship and earned the Design Award at the World Championship, the second highest honor in the competition.
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
                <p className="text-lg text-gray-300 mb-2">Performer/Accompanist</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Associate of the Royal Schools of Music (ARSM) certification for Piano, reflecting advanced proficiency and dedication.
                  </li>
                  <li>
                    • Competed and performed in numerous regional and national competitions, delivering high-quality musical performances and earning recognition.
                  </li>
                  <li>
                    • Accompanied 10+ students, achieving distinction grading on ABRSM Violin Exams.
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
            {/* Shea Lab Volunteer */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">
                  Trauma and Transfusion Medicine Research Center (Shea Lab)
                </h3>
                <p className="text-lg text-gray-300 mb-2">Laboratory Assistant</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• See Research Experience section for detailed contributions.</li>
                </ul>
              </div>
              <div className="text-gray-400 sm:text-right mt-2 sm:mt-0">
                <p>Pittsburgh, PA</p>
                <p>September 2024 – Present</p>
              </div>
            </div>

            {/* VEX Mentor */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white">VEX Robotics Student Mentor</h3>
                <p className="text-lg text-gray-300 mb-2">Volunteer</p>
                <ul className="text-gray-400 space-y-1">
                  <li>
                    • Fostered a collaborative and inclusive team environment, encouraging creativity, problem-solving, and critical thinking among new team members.
                  </li>
                  <li>
                    • Organized and conducted workshops on robotics fundamentals, including programming, designing, and building.
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
                    • Scheduled lessons and assisted in teaching alongside a private music teacher, optimizing operation of the studio.
                  </li>
                  <li>
                    • Provided students with tailored routines and exercises to enhance their technical skills and musical expression.
                  </li>
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
              <p className="text-gray-400">Tutoring, Teamwork, Verbal and Written</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

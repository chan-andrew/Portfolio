const ResumePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Resume</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          {/* Replace py-12 sm:py-16 lg:py-24 with py-6 sm:py-8 lg:py-12 */}
          <p>This is the resume content.</p>
        </div>
      </main>
    </div>
  )
}

export default ResumePage

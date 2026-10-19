const NotFound = () => (
  <div className="min-h-screen flex items-center bg-ocean text-white px-4 sm:px-6">
    <div className="max-w-xl mx-auto">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-xl text-white/80">This page doesn't exist anymore. The latest is on the home page.</p>
      <a href="/" className="inline-block mt-8 bg-sun text-ink font-semibold px-6 py-3 rounded-full">
        Go to the home page
      </a>
    </div>
  </div>
);

export default NotFound;

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-surface-light/90 dark:bg-surface-dark/80 border-b border-gray-200 dark:border-secondary-dark backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 dark:bg-primary-dark/10 p-2 rounded-lg">
            <span className="material-icons-round text-primary dark:text-primary-dark text-3xl">eco</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">EcoSphere AI</h1>
            <p className="text-xs text-slate-500 dark:text-gray-400 font-medium tracking-wide uppercase mt-1">Industrial Impact Intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-secondary-dark/50 rounded-full border border-gray-200 dark:border-secondary-dark">
            <div className="h-2 w-2 rounded-full bg-primary dark:bg-primary-dark animate-pulse"></div>
            <span className="text-xs font-medium text-slate-600 dark:text-gray-300">System Active</span>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-secondary-dark transition-colors">
            <span className="material-icons-round text-slate-600 dark:text-gray-300">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent-mint dark:from-primary-dark dark:to-primary flex items-center justify-center text-slate-900 font-bold text-xs shadow-lg shadow-primary/20">
            JD
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
import { useState } from 'react';
import { industries } from '../constants/mockData';

const Header = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  return (
    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Impact Overview</h2>
        <p className="text-slate-600 dark:text-gray-400 text-lg max-w-3xl">
          Making industrial environmental impact visible, understandable, and actionable.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-icons-round text-slate-400 dark:text-gray-500 text-[20px]">domain</span>
          </div>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="appearance-none pl-10 pr-10 py-2.5 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-secondary-dark rounded-xl text-sm font-medium text-slate-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary-dark/50 hover:border-primary/50 dark:hover:border-primary-dark/50 transition-all cursor-pointer min-w-[240px] shadow-sm"
          >
            <option disabled value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="material-icons-round text-slate-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">expand_more</span>
          </div>
        </div>
        <button aria-label="Filter settings" className="p-2.5 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-secondary-dark rounded-xl text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark hover:border-primary/50 dark:hover:border-primary-dark/50 transition-all shadow-sm">
          <span className="material-icons-round">tune</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
const RiskTimeline = ({ timelineData }) => {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-secondary-dark">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Risk Timeline Projection</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs font-medium rounded-md bg-primary dark:bg-primary-dark dark:text-surface-dark text-white">All</button>
          <button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-secondary-dark/50">Air</button>
          <button className="px-3 py-1 text-xs font-medium rounded-md text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-secondary-dark/50">Water</button>
        </div>
      </div>
      <div className="relative pl-4 border-l-2 border-gray-200 dark:border-secondary-dark space-y-10">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <div className={`absolute -left-[23px] top-1 h-4 w-4 rounded-full border-2 border-white dark:border-surface-dark bg-${item.color}-400`}></div>
            <div className={`mb-1 text-sm font-bold text-${item.color}-500 dark:text-${item.color}-400 uppercase tracking-wider`}>{item.period}</div>
            <div className={`bg-gray-50 dark:bg-secondary-dark/30 rounded-lg p-4 border border-gray-100 dark:border-secondary-dark`}>
              <h4 className="text-slate-900 dark:text-white font-medium mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiskTimeline;
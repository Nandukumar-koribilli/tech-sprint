const RecommendedActions = ({ actions, complianceScore }) => {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-secondary-dark h-full">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recommended Actions</h3>
      <div className="space-y-4">
        {actions.map((action, index) => (
          <div key={action.id} className="p-4 rounded-xl border border-gray-200 dark:border-secondary-dark hover:border-primary dark:hover:border-primary-dark hover:shadow-md transition-all cursor-pointer group bg-white dark:bg-secondary-dark/20">
            <div className="flex justify-between items-start mb-2">
              <span className={`bg-${action.priorityColor}-100 dark:bg-${action.priorityColor}-900/30 text-${action.priorityColor}-700 dark:text-${action.priorityColor}-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide`}>{action.priority}</span>
              <span className="material-icons-round text-gray-400 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors text-lg">arrow_forward</span>
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-gray-100 mb-1">{action.title}</h4>
            <p className="text-xs text-slate-500 dark:text-gray-400">{action.description}</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-3 rounded-lg border border-gray-200 dark:border-secondary-dark text-slate-600 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-secondary-dark/50 transition-colors">
        View Full Action Plan
      </button>
      <div className="bg-accent-mint/20 dark:bg-primary-dark/10 rounded-2xl p-6 border border-accent-mint/30 dark:border-primary-dark/20 flex items-center justify-between mt-6">
        <div>
          <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase mb-1">Compliance Score</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">{complianceScore}<span className="text-lg text-slate-400 dark:text-gray-500 font-normal">/100</span></p>
        </div>
        <div className="h-12 w-12 rounded-full border-4 border-primary dark:border-primary-dark flex items-center justify-center">
          <span className="material-icons-round text-primary dark:text-primary-dark text-xl">check</span>
        </div>
      </div>
    </section>
  );
};

export default RecommendedActions;
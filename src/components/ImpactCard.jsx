const ImpactCard = ({ card, index }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-secondary-dark hover:border-primary/50 dark:hover:border-primary-dark/30 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 bg-${card.riskColor}-50 dark:bg-${card.riskColor}-900/10 rounded-xl group-hover:scale-110 transition-transform`}>
          <span className={`material-icons-round text-${card.riskColor}-500 dark:text-${card.riskColor}-400 text-2xl`}>{card.icon}</span>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-${card.riskColor}-100 dark:bg-${card.riskColor}-900/20 text-${card.riskColor}-700 dark:text-${card.riskColor}-300 border border-${card.riskColor}-200 dark:border-${card.riskColor}-800/30`}>{card.risk}</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{card.title}</h3>
      <p className="text-sm text-slate-500 dark:text-gray-400 mb-4">{card.description}</p>
      <div className="w-full bg-gray-100 dark:bg-secondary-dark/50 rounded-full h-1.5">
        <div className={`bg-${card.riskColor}-500 h-1.5 rounded-full`} style={{ width: `${card.score}%` }}></div>
      </div>
      <div className={`mt-2 text-right text-xs font-medium text-${card.riskColor}-500 dark:text-${card.riskColor}-400`}>{card.score}% Impact Score</div>
    </div>
  );
};

export default ImpactCard;
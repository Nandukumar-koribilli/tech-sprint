const AIImpactAnalysis = ({ analysis }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black dark:from-[#2a2a2a] dark:to-[#1a1a1a] rounded-2xl p-8 shadow-lg overflow-hidden text-white border dark:border-secondary-dark">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 dark:bg-primary-dark/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-1.5 bg-white/10 rounded-md backdrop-blur-sm">
            <span className="material-icons-round text-primary-dark">auto_awesome</span>
          </div>
          <h3 className="text-lg font-semibold text-white">{analysis.title}</h3>
          <span className="ml-auto text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">Powered by Google Gemini</span>
        </div>
        <div className="prose prose-invert max-w-none">
          {analysis.content.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIImpactAnalysis;
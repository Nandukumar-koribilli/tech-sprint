const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-200 dark:border-secondary-dark mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 dark:text-gray-500">
        <p>© 2024 EcoSphere AI. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          <span className="material-icons-round text-[10px] align-middle mr-1">info</span>
          AI insights are for decision support only. Always verify with onsite engineering teams.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
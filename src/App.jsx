import Nav from './components/Nav';
import Header from './components/Header';
import ImpactCard from './components/ImpactCard';
import RiskTimeline from './components/RiskTimeline';
import AIImpactAnalysis from './components/AIImpactAnalysis';
import RecommendedActions from './components/RecommendedActions';
import Footer from './components/Footer';
import { impactCards, timelineData, aiAnalysis, recommendedActions, complianceScore } from './constants/mockData';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactCards.map((card, index) => (
            <ImpactCard key={card.id} card={card} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <RiskTimeline timelineData={timelineData} />
            <AIImpactAnalysis analysis={aiAnalysis} />
          </div>
          <div className="space-y-8">
            <RecommendedActions actions={recommendedActions} complianceScore={complianceScore} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
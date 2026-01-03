export const impactCards = [
  {
    id: 'human-health',
    title: 'Human Health',
    description: 'Elevated particulate matter detected near residential zones.',
    risk: 'High Risk',
    riskColor: 'red',
    score: 78,
    icon: 'health_and_safety',
  },
  {
    id: 'ecosystems',
    title: 'Ecosystems',
    description: 'Local biodiversity index shows slight deviation from baseline.',
    risk: 'Medium Risk',
    riskColor: 'amber',
    score: 45,
    icon: 'pets',
  },
  {
    id: 'environment',
    title: 'Environment',
    description: 'Water and soil quality metrics are within optimal ranges.',
    risk: 'Low Risk',
    riskColor: 'emerald',
    score: 12,
    icon: 'water_drop',
  },
  {
    id: 'socio-economic',
    title: 'Socio-Economic',
    description: 'Community engagement positive; employment steady.',
    risk: 'Stable',
    riskColor: 'blue',
    score: 28,
    icon: 'groups',
  },
];

export const timelineData = [
  {
    period: 'Short-Term (0-6 Months)',
    color: 'orange',
    title: 'Immediate Particulate Exposure',
    description: 'Current filtration systems operating at 85% efficiency. Risk of exceeding daily limits in Sector 4.',
  },
  {
    period: 'Long-Term (5+ Years)',
    color: 'purple',
    title: 'Groundwater Contamination Risk',
    description: 'Predictive models suggest slow seepage of persistent chemicals could affect water table by 2030 if containment isn\'t upgraded.',
  },
];

export const aiAnalysis = {
  title: 'AI Impact Analysis',
  content: [
    'Based on the correlation between recent production spikes and air quality sensors in Sector 4, the system has identified a pattern. While current emissions are legally compliant, the trajectory suggests a potential breach within 48 hours if wind patterns shift as forecast.',
    'Optimizing the scrubbers during the night shift could mitigate this short-term risk without impacting overall output targets.',
  ],
};

export const recommendedActions = [
  {
    id: 1,
    priority: 'High Impact',
    priorityColor: 'green',
    title: 'Schedule Scrubber Maintenance',
    description: 'Preventative check for Sector 4 units.',
  },
  {
    id: 2,
    priority: 'Optimization',
    priorityColor: 'blue',
    title: 'Adjust Night Shift Load',
    description: 'Reduce output by 5% during low wind.',
  },
  {
    id: 3,
    priority: 'Investigation',
    priorityColor: 'purple',
    title: 'Review Soil Samples',
    description: 'Verify long-term containment integrity.',
  },
];

export const complianceScore = 94;

export const industries = [
  { value: 'all', label: 'All Industries' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'energy', label: 'Energy & Utilities' },
  { value: 'mining', label: 'Mining & Resources' },
  { value: 'chemical', label: 'Chemical Processing' },
];
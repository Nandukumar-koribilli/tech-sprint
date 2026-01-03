# EcoSphere AI Dashboard

A production-ready React application for EcoSphere AI's Industrial Impact Intelligence Platform, built for hackathons and real-world environmental monitoring.

## 🚀 Features

- **Interactive Dashboard**: Real-time environmental impact visualization
- **Industry Intelligence**: AI-powered chemical risk assessment
- **Responsive Design**: Mobile-first approach with dark mode support
- **Smooth Animations**: Framer Motion powered entrance animations
- **Modern UI**: Glassmorphism effects and micro-interactions

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + Material Icons
- **State Management**: React Hooks (useState)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Nav.jsx         # Navigation bar
│   ├── Header.jsx      # Page header with filters
│   ├── ImpactCard.jsx  # Risk assessment cards
│   ├── RiskTimeline.jsx # Timeline visualization
│   ├── AIImpactAnalysis.jsx # AI insights section
│   ├── RecommendedActions.jsx # Action recommendations
│   └── Footer.jsx      # Footer component
├── constants/          # Mock data and constants
│   └── mockData.js     # Sample data for UI
├── hooks/             # Custom React hooks (future use)
├── assets/            # Static assets (future use)
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 UI Enhancements

1. **Glassmorphism**: Backdrop blur effects on cards and panels
2. **Animated Gradients**: Dynamic background effects in AI analysis section
3. **Micro-interactions**: Hover animations, scaling, and color transitions

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: 2-column grid for impact cards
- **Desktop**: 4-column grid with full sidebar layout

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecosphere-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Key Components

### Impact Cards
Display environmental risk metrics with color-coded risk levels:
- Human Health
- Ecosystems
- Environment
- Socio-Economic

### Risk Timeline
Interactive timeline showing short-term and long-term risk projections with filterable views.

### AI Impact Analysis
Powered by Google Gemini integration, providing intelligent environmental insights.

### Recommended Actions
Prioritized action items with compliance scoring and mitigation strategies.

## 🎨 Customization

### Color Scheme
Custom Tailwind colors defined in `tailwind.config.js`:
- Primary: Emerald Green (#2DC98A)
- Dark Mode Accents: Active Green (#00FF94)
- Backgrounds: Light (#F3F5F7) / Dark (#000000)

### Animations
Framer Motion variants for consistent entrance animations across components.

## 📊 Mock Data

All UI data is populated from `src/constants/mockData.js` for demonstration purposes. Replace with real API calls for production use.

## 🌟 Hackathon Ready

This application is optimized for hackathon presentations:
- Fast loading with Vite
- Professional UI/UX
- Comprehensive feature set
- Easy to extend and customize

## 📝 License

© 2024 EcoSphere AI. All rights reserved.

*AI insights are for decision support only. Always verify with onsite engineering teams.*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support, please contact the development team.
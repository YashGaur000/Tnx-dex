// src/App.tsx
import { HashRouter as Router } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';

import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;

import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wellcome } from './components/Wellcome';
import { WhySection } from './components/WhySection';
import { MedinaMethod } from './components/MedinaMethod';
import { Focus } from './components/Focus';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LopdPage } from './components/LopdPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="content">
        <Routes>
          <Route path="/lopd" element={<LopdPage />} />
          <Route
            path="*"
            element={
              <>
                <Wellcome />
                <WhySection />
                <MedinaMethod />
                <Focus />
                <ContactForm />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

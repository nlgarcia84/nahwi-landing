import GlobalStyle from './styles/GlobalStyle';
import { Wellcome } from './components/Wellcome';
import { WhySection } from './components/WhySection';
import { MedinaMethod } from './components/MedinaMethod';
import { Focus } from './components/Focus';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wellcome />
      <WhySection />
      <MedinaMethod />
      <Focus />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

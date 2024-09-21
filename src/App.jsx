import GlobalStyle from './styles/GlobalStyle';
import { Wellcome } from './components/Wellcome';
import { WhySection } from './components/WhySection';
import { MedinaMethod } from './components/MedinaMethod';
import { Focus } from './components/Focus';
import { ContactForm } from './components/ContactForm';
function App() {
  return (
    <>
      <GlobalStyle />
      <Wellcome />
      <WhySection />
      <MedinaMethod />
      <Focus />
      <ContactForm />
    </>
  );
}

export default App;

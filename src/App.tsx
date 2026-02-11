import ScrollStory from './sections/ScrollStory';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-dark text-warm-white overflow-x-hidden">
      <ScrollStory />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

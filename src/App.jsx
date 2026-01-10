import { ReactLenis } from '@studio-freight/react-lenis'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ZoomSection from './components/ui/ZoomSection'; // Import ZoomSection
import Qualification from './components/Qualification'; // Qualification follows ZoomSection
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <div className="font-sans antialiased bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200">
        <Navbar />
        <main className="flex flex-col">
            <Hero />
            <About />
            <ZoomSection /> {/* Add ZoomSection here */}
            <Qualification />
            <Skills />
            <Certifications />
            <Projects />
            <Experience />
            <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App;

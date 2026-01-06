import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CursorParticles from '@/components/CursorParticles';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Likhith Reddy Chilakala | Java Backend Developer</title>
        <meta
          name="description"
          content="Java Backend Developer focused on value creation. Building unique solutions with discipline and precision. View my portfolio and projects."
        />
        <meta name="keywords" content="Java Developer, Backend Developer, Software Engineer, Likhith Reddy, Portfolio" />
        <meta property="og:title" content="Likhith Reddy Chilakala | Java Backend Developer" />
        <meta property="og:description" content="Java Backend Developer focused on value creation and building unique solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://likhithreddy.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <CursorParticles />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Index;

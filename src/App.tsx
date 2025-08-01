import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-corporate-50 to-executive-100 relative transition-colors duration-300 overflow-x-hidden">
      {/* Corporate Pattern Background */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 100, 200, 0.1) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

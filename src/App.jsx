import Card from './components/common/Card.jsx';
import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header.jsx';
import Button from './components/ui/Button.jsx';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <section className="hero" aria-labelledby="project-title">
          <p className="eyebrow">Internship Assignment</p>
          <h1 id="project-title">ReactJS Internship Project</h1>
          <p className="subtitle">Week 1 - Project Setup and Planning</p>
        </section>
        <Card title="Project Ready">
          <p>
            This simple starter app uses Vite and reusable React components.
          </p>
          <Button
            onClick={() => alert('Welcome to your ReactJS internship project!')}
          >
            Get Started
          </Button>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default App;

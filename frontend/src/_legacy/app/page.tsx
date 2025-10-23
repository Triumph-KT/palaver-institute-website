import { ContactForm } from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Where African Minds Convene to Solve Global Challenges</h1>
            <p className="hero-subtitle">The Palaver Institute is an act of epistemic independence. We center indigenous African knowledge systems as sophisticated scientific frameworks for understanding human intelligence and building ethical AI for Africa.</p>
            <div className="hero-buttons">
              <a href="#research" className="btn btn-primary">Explore Research</a>
              <a href="#contact" className="btn btn-secondary">Join the Palaver</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <i className="fas fa-brain"></i>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Palaver Institute</h2>
            <p>Building the intellectual infrastructure for African independence through indigenous-centered research and pan-African collaboration.</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>The Palaver Institute exists to decolonize the study of human intelligence by centering indigenous African epistemologies as sophisticated scientific frameworks. We conduct foundational research that bridges traditional wisdom with modern inquiry, creating knowledge that serves Africa first and the world second.</p>
              
              <h3>Our Philosophy</h3>
              <p><strong>Indigenous Knowledge is Foundational Science:</strong> African epistemologies are not cultural artifacts—they are rigorous, field-tested frameworks for understanding complex systems. <strong>Sovereignty Precedes Prosperity:</strong> Intellectual sovereignty must come before economic sovereignty. We build institutions that are financially, technologically, and intellectually independent.</p>
              
              <h3>Proven Success</h3>
              <p>Our 2025 Cameroon pilot validated the model: 10 fellows across 8 fields produced 250+ pages of world-class research for under $1,000 USD, proving that African researchers can produce exceptional interdisciplinary scholarship when given intellectual freedom.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10</div>
                <div className="stat-label">Founding Fellows</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">250</div>
                <div className="stat-label">Pages Research</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Continental Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="research">
        <div className="container">
          <div className="section-header">
            <h2>Our Research Schools</h2>
            <p>Three Schools of research, each containing specialized Labs, addressing humanity's greatest challenges through indigenous African frameworks.</p>
          </div>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>School of Human Systems</h3>
              <h4>Indigenous Intelligence Lab (Flagship)</h4>
              <p>Our flagship lab decolonizes the study of human cognition by building the world's most comprehensive research on non-Western models of intelligence. This ethical foundation guides all our future AI work—we cannot build just AI without first understanding African cognition.</p>
              <div className="research-tags">
                <span className="tag">Flagship Lab</span>
                <span className="tag">Cameroon Pilot</span>
                <span className="tag">Pan-African</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>School of Sovereign Systems</h3>
              <h4>Sovereign Hardware Lab</h4>
              <p>Achieving technological independence by designing and fabricating African-built computational infrastructure. Our goal: custom servers, specialized AI chips, and data center hardware owned by Africa, for Africa.</p>
              <div className="research-tags">
                <span className="tag">Tech Sovereignty</span>
                <span className="tag">Rwanda 2026</span>
                <span className="tag">Hardware</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <h3>School of Social Dynamics</h3>
              <h4>Gamification Lab</h4>
              <p>Transform wicked problems into complex interactive models. We gamify difficult disciplines—from astrophysics to understanding colonialism—to uncover novel solutions and create revolutionary educational tools.</p>
              <div className="research-tags">
                <span className="tag">Innovation</span>
                <span className="tag">Education</span>
                <span className="tag">Problem-Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Fellowship & Network</h2>
            <p>Building a continental network of exceptional African researchers and scholars.</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Founding Fellows</h3>
              <p>Our 2025 Cameroon cohort: 10 exceptional researchers across Philosophy, Linguistics, Economics, Education, Anthropology, Sociology, and Medicine who validated our model with world-class scholarship.</p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-users"></i>
              </div>
              <h3>Fellowship Network</h3>
              <p>Highly selective 6-month fellowship program for Master's and PhD-level African researchers. Two cohorts annually across five continental hubs create a prestigious pan-African research network.</p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Strategic Partnerships</h3>
              <p>Collaborations with leading African universities: University of Buea (Cameroon), University of Ghana, University of Rwanda, University of Cape Town, and Mohammed VI Polytechnic (Morocco).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Interested in collaborating or learning more about our research? We'd love to hear from you.</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@palaverinstitute.org</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-globe"></i>
                <div>
                  <h4>Website</h4>
                  <p>palaverinstitute.org</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Headquarters</h4>
                  <p>Kigali, Rwanda</p>
                  <p><small>Continental Hubs: Cameroon, Ghana, Rwanda, South Africa, Morocco</small></p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Palaver Institute</h3>
              <p>Where African Minds Convene to Solve Global Challenges. Building intellectual sovereignty through indigenous-centered research and pan-African collaboration.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="/story">Story</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@palaverinstitute.org</p>
              <p>Website: palaverinstitute.org</p>
              <p>LinkedIn: <a href="https://rw.linkedin.com/company/palaver-institute" target="_blank" rel="noopener noreferrer">@palaver-institute</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Palaver Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { ContactForm } from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';

export default function Team() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* Team Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1>Our Team</h1>
            <p className="team-subtitle">Meet the visionary leaders and dedicated researchers building the intellectual infrastructure for African independence.</p>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="founding-team">
        <div className="container">
          <div className="section-header">
            <h2>Founding Team</h2>
            <p>The core team that transformed a vision into a validated model for African intellectual sovereignty.</p>
          </div>
          
          {/* Founder */}
          <div className="founder-profile">
            <div className="founder-content">
              <div className="founder-image">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="founder-info">
                <h3>Triumph Kia Teh</h3>
                <h4>Founder & Principal Investigator</h4>
                <div className="founder-credentials">
                  <span className="credential">Computer Science & Mathematics, Dartmouth College</span>
                  <span className="credential">Cameroonian</span>
                </div>
                <p>Triumph is the visionary founder who conceived and personally funded the Palaver Institute. As a senior Computer Science and Mathematics major at Dartmouth College, he identified the critical gap between Western AI paradigms and African epistemologies. Using savings from his AI research internship, he invested under $1,000 to launch the groundbreaking Cameroon pilot study.</p>
                
                <p>His conviction that "truly effective, ethical, and explainable AI for Africa could not be built without first understanding indigenous models of human intelligence" drove him to create what has become a validated model for decolonized research. Triumph provides intellectual leadership, strategic vision, and detailed mentorship to all Institute fellows.</p>
                
                <div className="founder-achievements">
                  <div className="achievement">
                    <i className="fas fa-lightbulb"></i>
                    <span>Conceived the Indigenous Intelligence Lab framework</span>
                  </div>
                  <div className="achievement">
                    <i className="fas fa-dollar-sign"></i>
                    <span>Self-funded the proof-of-concept with &lt;$1,000</span>
                  </div>
                  <div className="achievement">
                    <i className="fas fa-users"></i>
                    <span>Mentored 10 fellows to produce 250+ pages of research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Directors */}
          <div className="research-directors">
            <h3>Research Directors</h3>
            <p className="directors-intro">Two exceptional Mastercard Scholars and Computer Science graduates from Ashesi University who served as operational coordinators for the Cameroon pilot.</p>
            
            <div className="directors-grid">
              <div className="director-card">
                <div className="director-image">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="director-info">
                  <h4>Priscile Nkenmeza Nzonbi</h4>
                  <h5>Research Director</h5>
                  <div className="director-credentials">
                    <span className="credential">Computer Science, Ashesi University</span>
                    <span className="credential">Mastercard Scholar</span>
                    <span className="credential">Bilingual (French/English)</span>
                  </div>
                  <p>Priscile played a crucial role in bridging linguistic divides and coordinating the pilot study. As a native French speaker proficient in English, she facilitated communication across Cameroon's linguistic regions and provided supplementary mentorship to fellows. She synthesized the mothers' reports from French-speaking regions, contributing vital community perspectives to the research.</p>
                  
                  <div className="director-contributions">
                    <span className="contribution">Participant recruitment coordination</span>
                    <span className="contribution">French-English linguistic bridge</span>
                    <span className="contribution">Community research synthesis</span>
                  </div>
                </div>
              </div>

              <div className="director-card">
                <div className="director-image">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="director-info">
                  <h4>Patience Sombang</h4>
                  <h5>Research Director</h5>
                  <div className="director-credentials">
                    <span className="credential">Computer Science, Ashesi University</span>
                    <span className="credential">Mastercard Scholar</span>
                    <span className="credential">Operational Excellence</span>
                  </div>
                  <p>Patience provided essential operational leadership for the pilot study, managing logistical coordination and communication systems. Her technical background in Computer Science and experience as a Mastercard Scholar brought valuable organizational skills to the project. She conducted community interviews in English-speaking regions and provided crucial mentorship support to fellows.</p>
                  
                  <div className="director-contributions">
                    <span className="contribution">Logistical coordination</span>
                    <span className="contribution">Communication management</span>
                    <span className="contribution">Fellow mentorship support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Fellows */}
      <section className="founding-fellows">
        <div className="container">
          <div className="section-header">
            <h2>Founding Fellows (2025 Cameroon Cohort)</h2>
            <p>Ten exceptional researchers who validated our model with world-class interdisciplinary scholarship.</p>
          </div>
          
          <div className="fellows-grid">
            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>Stephen Fabrice Fanwong</h4>
              <h5>Philosophy Fellow</h5>
              <p>Produced exemplary philosophical analysis exploring indigenous African epistemologies and their applications to understanding human intelligence within cultural contexts.</p>
              <span className="fellow-status">Distinction-Level Work</span>
            </div>

            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-language"></i>
              </div>
              <h4>Fouedjio Aaron Lagloire</h4>
              <h5>Linguistics Fellow</h5>
              <p>Conducted foundational linguistic research examining how language structures reflect and shape indigenous models of intelligence and cognition.</p>
              <span className="fellow-status">Foundational Research</span>
            </div>

            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Bryan Kai</h4>
              <h5>Economics Fellow</h5>
              <p>Delivered outstanding economic analysis exploring the intersection of traditional economic systems and indigenous approaches to problem-solving and resource allocation.</p>
              <span className="fellow-status">Exemplary Work</span>
            </div>

            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4>Nestor D. Nji</h4>
              <h5>Education Fellow</h5>
              <p>Produced particularly exemplary research on indigenous educational methodologies and their implications for understanding culturally-grounded intelligence development.</p>
              <span className="fellow-status">Exemplary Work</span>
            </div>

            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Ndikaka Basil Ngala</h4>
              <h5>Anthropology Fellow</h5>
              <p>Contributed valuable anthropological insights into cultural practices and social structures that embody indigenous intelligence frameworks.</p>
              <span className="fellow-status">Valuable Contributions</span>
            </div>

            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-people-group"></i>
              </div>
              <h4>Daudu Ananias & Kumo Walters Nshom</h4>
              <h5>Sociology Fellows (Co-authored)</h5>
              <p>Delivered outstanding sociological analysis of community-based intelligence and collective problem-solving approaches within African societies.</p>
              <span className="fellow-status">Outstanding Content</span>
            </div>

            <div className="fellow-card">
              <div className="fellow-icon">
                <i className="fas fa-stethoscope"></i>
              </div>
              <h4>Medicine Fellow</h4>
              <h5>Currently Recruiting</h5>
              <p>We are actively recruiting a medical researcher to join our founding cohort and contribute expertise on indigenous approaches to health, healing, and the intersection of physical and cognitive well-being.</p>
              <span className="fellow-status">Open Position</span>
            </div>
          </div>

          <div className="fellows-note">
            <p><strong>Additional Research:</strong> A Psychology MS student is currently completing a 25-page French-language paper on indigenous human intelligence, ensuring the Palaver vision of cross-Africa reach is built from the pilot's foundation.</p>
          </div>
        </div>
      </section>

      {/* Advisory & Partnerships */}
      <section className="advisory-partnerships">
        <div className="container">
          <div className="section-header">
            <h2>Strategic Partnerships (In Development)</h2>
            <p>Building a continental network through planned collaborations with leading African institutions by Summer 2026.</p>
          </div>
          
          <div className="partnerships-grid">
            <div className="partnership-card">
              <div className="partnership-icon">
                <i className="fas fa-university"></i>
              </div>
              <h4>University of Buea</h4>
              <h5>Planned Cameroon Hub Partner</h5>
              <p>Building on our successful 2025 pilot study foundation. Planned to serve as the Central Africa Hub for Francophone research and cross-cultural epistemology.</p>
            </div>

            <div className="partnership-card">
              <div className="partnership-icon">
                <i className="fas fa-university"></i>
              </div>
              <h4>University of Ghana</h4>
              <h5>Planned West Africa Hub</h5>
              <p>Target partnership for Anglophone West African research, focusing on oral traditions and indigenous knowledge systems.</p>
            </div>

            <div className="partnership-card">
              <div className="partnership-icon">
                <i className="fas fa-university"></i>
              </div>
              <h4>University of Rwanda</h4>
              <h5>Planned East Africa Hub</h5>
              <p>Target partnership co-located with our Kigali headquarters, focusing on technology applications and applied mathematics research.</p>
            </div>

            <div className="partnership-card">
              <div className="partnership-icon">
                <i className="fas fa-university"></i>
              </div>
              <h4>University of Cape Town</h4>
              <h5>Planned Southern Africa Hub</h5>
              <p>Target partnership focusing on social dynamics, historical epistemology, and Ubuntu philosophy applications.</p>
            </div>

            <div className="partnership-card">
              <div className="partnership-icon">
                <i className="fas fa-university"></i>
              </div>
              <h4>Mohammed VI Polytechnic University</h4>
              <h5>Planned North Africa Hub</h5>
              <p>Target partnership in Morocco for Islamic-African philosophical integration and Mediterranean connections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="join-team">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Mission</h2>
            <p>We're building the intellectual infrastructure for African independence. If you're an African researcher seeking intellectual home, a diaspora professional looking for transformative impact, or an institution interested in partnership—this is your invitation to join us.</p>
            <div className="join-buttons">
              <a href="/#contact" className="btn btn-primary">Get Involved</a>
              <a href="/story" className="btn btn-secondary">Read Our Story</a>
            </div>
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
                <li><a href="/#about">About</a></li>
                <li><a href="/#research">Research</a></li>
                <li><a href="/story">Story</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@palaverinstitute.org</p>
              <p>Website: palaverinstitute.org</p>
              <p>LinkedIn: <a href="https://rw.linkedin.com/company/palaver-institute" target="_blank" rel="noopener noreferrer">@palaver-institute</a></p>
              <p>Headquarters: Kigali, Rwanda</p>
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

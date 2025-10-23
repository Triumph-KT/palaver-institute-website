import { ContactForm } from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';

export default function Story() {
  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* Story Hero Section */}
      <section className="story-hero">
        <div className="container">
          <div className="story-hero-content">
            <h1>The Founding Story</h1>
            <p className="story-subtitle">From Vision to Proof of Concept: How a Cameroonian undergraduate student's conviction became a validated model for African intellectual sovereignty.</p>
          </div>
        </div>
      </section>

      {/* Founding Story Content */}
      <section className="story-content">
        <div className="container">
          <div className="story-timeline">
            
            {/* The Genesis */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="timeline-content">
                <h2>The Genesis: A Critical Gap Identified</h2>
                <div className="story-meta">
                  <span className="story-date">Early 2025</span>
                  <span className="story-location">Dartmouth College, New Hampshire</span>
                </div>
                <p>The Palaver Institute began not as an institution, but as a conviction held by <strong>Triumph Kia Teh</strong>, a Cameroonian senior majoring in Computer Science and Mathematics at Dartmouth College. As an aspiring AI researcher with dreams of building beneficial artificial intelligence for Africa, Triumph recognized a profound limitation in dominant AI paradigms.</p>
                
                <p>These Western-developed models relied on massive, decontextualized datasets and optimization metrics that systematically failed to capture the nuances of human intelligence as understood and practiced in diverse cultural settings—particularly in African contexts.</p>
                
                <blockquote>
                  "I realized that truly effective, ethical, and explainable AI for Africa could not be built without first undertaking a foundational epistemological inquiry into indigenous models of human intelligence."
                  <cite>— Triumph Kia Teh, Founder</cite>
                </blockquote>
              </div>
            </div>

            {/* The Conviction */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-brain"></i>
              </div>
              <div className="timeline-content">
                <h2>The Conviction: Decolonizing Intelligence</h2>
                <div className="story-meta">
                  <span className="story-date">Spring 2025</span>
                  <span className="story-location">Dartmouth College</span>
                </div>
                <p>Triumph's core motivation emerged from the intersection of his technical studies and cultural background. He envisioned that the study of intelligence needed to move beyond standardized psychometrics to explore how intelligence manifests in:</p>
                
                <ul className="story-list">
                  <li><strong>Social Harmony:</strong> Community-centered problem-solving approaches</li>
                  <li><strong>Practical Problem-Solving:</strong> Real-world application of knowledge</li>
                  <li><strong>Linguistic Agility:</strong> Multilingual cognitive flexibility</li>
                  <li><strong>Ethical Reasoning:</strong> Value-based decision making</li>
                  <li><strong>Resilience:</strong> Adaptive thinking in challenging contexts</li>
                </ul>
                
                <p>This deep understanding would provide the necessary blueprint for designing culturally-grounded AI systems and form the intellectual bedrock for future graduate research at the intersection of human and artificial intelligence.</p>
              </div>
            </div>

            {/* The Investment */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="timeline-content">
                <h2>The Investment: Proof of Concept</h2>
                <div className="story-meta">
                  <span className="story-date">Summer 2025</span>
                  <span className="story-location">Cameroon (Remote Coordination)</span>
                </div>
                <p>Rather than wait for institutional support, Triumph made a bold decision. Using savings from his junior summer AI research internship—under $1,000 USD—he launched a three-month pilot fellowship in Cameroon to test his conviction.</p>
                
                <div className="pilot-stats">
                  <div className="pilot-stat">
                    <div className="stat-number">$1,000</div>
                    <div className="stat-label">Total Investment</div>
                  </div>
                  <div className="pilot-stat">
                    <div className="stat-number">10</div>
                    <div className="stat-label">Fellows</div>
                  </div>
                  <div className="pilot-stat">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Fields</div>
                  </div>
                  <div className="pilot-stat">
                    <div className="stat-number">250+</div>
                    <div className="stat-label">Pages Research</div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Team Assembly */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-users"></i>
              </div>
              <div className="timeline-content">
                <h2>Assembling the Team</h2>
                <div className="story-meta">
                  <span className="story-date">Summer 2025</span>
                  <span className="story-location">Cameroon</span>
                </div>
                <p>Recognizing the complexity of the task, Triumph structured the project around a carefully assembled team:</p>
                
                <div className="team-roles">
                  <div className="role-card">
                    <h4>Principal Investigator</h4>
                    <p><strong>Triumph Kia Teh</strong> provided intellectual vision, funding, project design, and overall management, including detailed mentorship and feedback on all fellows' work.</p>
                  </div>
                  
                  <div className="role-card">
                    <h4>Research Directors</h4>
                    <p><strong>Priscile Nkenmeza Nzonbi</strong> and <strong>Patience Sombang</strong> (both Mastercard Scholars and Computer Science graduates from Ashesi University) assisted with crucial operational aspects: participant recruitment, communication, logistical coordination, and supplementary mentorship.</p>
                  </div>
                  
                  <div className="role-card">
                    <h4>Expert Fellows</h4>
                    <p>Seven highly qualified Cameroonian researchers, each holding at least a Master's degree: Philosophy (Stephen Fabrice Fanwong), Linguistics (Fouedjio Aaron Lagloire), Economics (Bryan Kai), Education (Nestor D. Nji), Anthropology (Ndikaka Basil Ngala), Sociology (Daudu Ananias & Kumo Walters Nshom), and Medicine (position currently being filled by a new recruit).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Methodology */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-microscope"></i>
              </div>
              <div className="timeline-content">
                <h2>The Rigorous Methodology</h2>
                <div className="story-meta">
                  <span className="story-date">Summer-Fall 2025</span>
                  <span className="story-location">Pan-Cameroon</span>
                </div>
                <p>The pilot program ran intensively over 3-4 months with a methodology designed to elicit deep, discipline-specific, yet culturally-grounded insights:</p>
                
                <div className="methodology-steps">
                  <div className="method-step">
                    <h5>1. Customized Guidance</h5>
                    <p>Each fellow received tailored documents: Comprehensive Guiding Questions (60-110 questions) and detailed Writing Guides, framing the task as producing narrative-driven, 25+ page scholarly expositions.</p>
                  </div>
                  
                  <div className="method-step">
                    <h5>2. Multi-Stage Process</h5>
                    <p>Fellows followed structured phases: initial reflection/data gathering ("Memory Mining," "Case Files," "Field Notes"), thematic analysis, and final synthesis.</p>
                  </div>
                  
                  <div className="method-step">
                    <h5>3. Mentorship & Feedback</h5>
                    <p>Triumph provided multiple rounds of detailed, structured feedback on drafts, guiding fellows to refine arguments and meet high academic standards.</p>
                  </div>
                  
                  <div className="method-step">
                    <h5>4. Community Integration</h5>
                    <p>The study included interviews with mothers and primary caregivers, conducted by research directors in both French and English-speaking regions, synthesized into comprehensive reports.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Validation */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="timeline-content">
                <h2>Exceptional Results: Validation Achieved</h2>
                <div className="story-meta">
                  <span className="story-date">Fall 2025</span>
                  <span className="story-location">Results Analysis</span>
                </div>
                <p>The pilot project yielded results that exceeded all initial expectations:</p>
                
                <div className="results-grid">
                  <div className="result-item">
                    <h5>High-Quality Research</h5>
                    <p>Seven comprehensive, distinction-level academic papers plus outstanding synthesized community reports. Particularly exemplary work from the Educator, Philosopher, Economist, Medical Doctor, and community synthesis.</p>
                  </div>
                  
                  <div className="result-item">
                    <h5>Unique Dataset</h5>
                    <p>Over 200 pages of collected writings and transcripts exploring Cameroonian epistemology from multiple disciplinary angles—the first of its kind.</p>
                  </div>
                  
                  <div className="result-item">
                    <h5>Participant Satisfaction</h5>
                    <p>Formal feedback survey revealed exceptional satisfaction (average 9.14/10) and likelihood to recommend (average 9.29/10). Fellows praised intellectual stimulation and quality mentorship.</p>
                  </div>
                </div>
                
                <p className="validation-statement white-text">The pilot validated three critical hypotheses: African MS-level researchers can produce world-class interdisciplinary scholarship when given intellectual freedom and minimal resources; Indigenous-centered research frameworks generate novel insights that Western paradigms systematically miss; The model is financially sustainable at a scale that traditional Western institutions cannot match.</p>
              </div>
            </div>

            {/* The Vision Realized */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-flag"></i>
              </div>
              <div className="timeline-content">
                <h2>From Proof to Institution</h2>
                <div className="story-meta">
                  <span className="story-date">Late 2025 - Present</span>
                  <span className="story-location">Kigali, Rwanda (HQ)</span>
                </div>
                <p>What began as an experiment became proof that a new model for African research excellence was not only possible—it was already working. The successful Cameroon pilot now serves as the foundation for the formal establishment of The Palaver Institute.</p>
                
                <p>Today, the Institute operates as a hybrid model: a non-profit research institute focused on foundational scholarship, and a for-profit ventures arm to commercialize derived technologies. With headquarters in Kigali, Rwanda, and hubs across five African regions, we're building the intellectual infrastructure for African independence.</p>
                
                <div className="vision-quote">
                  <blockquote>
                    "Development begins in the mind—in the frameworks by which a people interpret their reality. The Palaver Institute houses and cultivates Africa's own frameworks of reality—not as heritage, but as science."
                    <cite>— Founding Vision Statement, 2025</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="story-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Story</h2>
            <p>The Palaver Institute is not fully built yet. It exists in the liminal space between proof of concept and institutional permanence. But it is real—validated by research outputs, tested by a successful pilot, and ready for its next phase.</p>
            <div className="cta-buttons">
              <a href="/#contact" className="btn btn-primary">Get Involved</a>
              <a href="/team" className="btn btn-secondary">Meet Our Team</a>
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
                <li><a href="/team">Team</a></li>
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

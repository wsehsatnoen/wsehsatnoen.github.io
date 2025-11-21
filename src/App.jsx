import { useState } from 'react'
import Resume from './Resume.jsx'
import Posts from './Posts.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page) => {
    if (page === currentPage) return; // Don't transition if same page
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150); // Half of the CSS transition duration
  };

  return (
    <div>
      <nav>
        <button 
          className={currentPage === 'home' ? 'active' : ''} 
          onClick={() => navigateTo('home')}
        >
          Home
        </button>
        <button 
          className={currentPage === 'resume' ? 'active' : ''} 
          onClick={() => navigateTo('resume')}
        >
          Resume
        </button>
        <button 
          className={currentPage === 'posts' ? 'active' : ''}
          onClick={() => navigateTo('posts')}
          >
            Posts
          </button>
        <button onClick={visitGitHub}>GitHub</button>
        <button 
          className={currentPage === 'contact' ? 'active' : ''} 
          onClick={() => navigateTo('contact')}
        >
          Contact
        </button>
      </nav>
      
      <div className={`page-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'resume' && <Resume />}
        {currentPage === 'posts' && <Posts />}
        {currentPage === 'contact' && <ContactPage />}
      </div>
    </div>
  )
}

// Page Components
function HomePage() {
  return (
    <div>
      <h2>Shane Darilek</h2>
      <p>Please note: this is still a work in progress... Thank you for your patience!</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Feel free to reach out to me!</p>
      {/* Add your contact details here */}
    </div>
  );
}

function visitGitHub() {
  window.open("https://www.github.com/wsehsatnoen", "_blank");
}

export default App

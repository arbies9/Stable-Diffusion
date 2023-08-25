import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="menu">
          <a href="#about">About Us</a> |
          <a href="#contact">Contact</a> |
          <button className="subscribe-button">Subscribe</button>
      </div>

      <div className="content-section">
        <div>
          <h2>Welcome to UniqueArt Generator</h2>
          <div className="description">
            <h4>
              Unveil the Enchantment of Stable Diffusion Artistry. Dive into the UniqueArt Generator — the nexus of creativity and state-of-the-art technology.
              Ever dreamt of a method that reshapes your cherished artistic elements into spellbinding, singular masterpieces? Behold the allure of stable diffusion art!
            </h4>
          </div>
        </div>
        <div className="art-display"></div>
      </div>

      <form action="/submit" method="post" className="text-form">
        <label htmlFor="text">Enter your text:</label>
        <textarea id="text" name="text" required></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

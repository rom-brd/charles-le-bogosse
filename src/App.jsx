import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <div className="charles-image-container">
          <img 
            src="https://i.ibb.co/jvXYyqjK/1558338841597.jpg" 
            alt="Charles Blot - Le Bogosse" 
            className="charles-image"
          />
        </div>
        <h1>👑 Charles le Bogosse</h1>
        <p className="subtitle">Le boss absolu qui gère tout avec style 😎</p>
        
        <div className="counter-section">
          <p className="counter-label">Niveau de bogosse :</p>
          <div className="counter">{count}</div>
          <button onClick={() => setCount(count + 1)} className="btn btn-primary">
            + Bogosse
          </button>
          <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className="btn btn-secondary">
            - Bogosse
          </button>
          <button onClick={() => setCount(0)} className="btn btn-danger">
            Reset
          </button>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span className="stat-emoji">🔥</span>
            <p>Swag : Maximal</p>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">💪</span>
            <p>Puissance : Illimitée</p>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">🎯</span>
            <p>Précision : Légendaire</p>
          </div>
        </div>

        <footer>
          <p>Créé par John Le DevOps 🔧</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

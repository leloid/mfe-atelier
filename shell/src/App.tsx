import React, { Suspense, useState, useEffect } from "react";

// Import dynamique du micro frontend
const Header = React.lazy(() => import("header/Header"));

const App: React.FC = () => {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 1000); // Simule un délai d'affichage
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🏠 Bienvenue dans l'application Shell</h1>

      <p>Voici une application utilisant Module Federation avec Vite et React.</p>

      <div style={{ margin: "20px 0", padding: "10px", border: "1px solid black" }}>
        <h3>🔗 Composant distant (Header)</h3>
        <Suspense fallback={<p style={{ color: "gray" }}>⏳ Chargement du Header...</p>}>
          {isHeaderLoaded ? <Header /> : <p>Le Header va apparaître sous peu...</p>}
        </Suspense>
      </div>

      <footer style={{ marginTop: "30px", padding: "10px", background: "#f5f5f5" }}>
        <p>📌 Ce projet démontre le fonctionnement des Micro Frontends.</p>
      </footer>
    </div>
  );
};

export default App;
